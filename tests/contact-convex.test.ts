import { expect, it, vi } from 'vitest'
import { ConvexError } from 'convex/values'

// Run the registered handler against an in-memory context, never a deployment.
vi.mock('../convex/_generated/server',()=>{
 const register=(definition:unknown)=>definition
 return {mutation:register,query:register,action:register,internalMutation:register,internalQuery:register,internalAction:register}
})
import { submitContactForm } from '../convex/contacts'
type Input = {name:string;email:string;subject:string;message:string}
function setup(recent: unknown[] = []) {
 const eq=vi.fn(), insert=vi.fn().mockResolvedValue('local-contact-id'), runAfter=vi.fn()
 const ctx={db:{query:vi.fn(()=>({filter:(predicate:(q:unknown)=>unknown)=>{
  predicate({and:vi.fn(),eq,field:(name:string)=>name,gte:vi.fn()})
  return {collect:async()=>recent}
 }})),insert},scheduler:{runAfter}}
 const definition=submitContactForm as unknown as {args:Record<string,unknown>;handler:(context:typeof ctx,args:Input)=>Promise<unknown>}
 return {ctx,definition,eq,insert,runAfter}
}
const input={name:'Test',email:'Test@Example.com',subject:'Test',message:'Simulace'}
it('normalizes the email for both the limit query and stored contact',async()=>{
 const {ctx,definition,eq,insert,runAfter}=setup()
 await definition.handler(ctx,input)
 expect(eq).toHaveBeenCalledWith('email','test@example.com')
 expect(insert).toHaveBeenCalledWith('contacts',expect.objectContaining({email:'test@example.com'}))
 expect(runAfter).toHaveBeenCalledOnce()
 // This is the existing validator the API adapter must respect.
 expect(Object.keys(definition.args)).not.toContain('requestId')
})
it('returns the typed rate-limit signal expected by the API without inserting or notifying',async()=>{
 const {ctx,definition,insert,runAfter}=setup(Array(5).fill({}))
 const error=await definition.handler(ctx,input).catch(error=>error)
 expect(error).toBeInstanceOf(ConvexError)
 if (!(error instanceof ConvexError)) throw new Error('Expected a ConvexError rate-limit response')
 expect(error.data).toBe('RATE_LIMIT')
 expect(insert).not.toHaveBeenCalled();expect(runAfter).not.toHaveBeenCalled()
})
