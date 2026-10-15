const googleProfileUrl = "https://www.google.com/search?q=LinkLady.cz&stick=H4sIAAAAAAAAAONgU1I1qDAxN7C0sExLNDS1sDQ3TEmxMqhIMTMwsDCwMDNKMjI2tjQ3WcTK7ZOZl-2TmFKpl1wFAJbsj8g3AAAA";

// Public Google profile checked on 2026-10-15. Quotes are short excerpts.
// Keep this visible snapshot separate from structured data: self-serving
// business reviews are not eligible for Google's review rich results.
const reviews = [
  { author: "Filip Martínek", quote: "… finální výsledek předčil má očekávání." },
  { author: "Viktorie Vodáková", quote: "… lidské jednání a férový přístup." },
  { author: "Petra Dicová", quote: "Výsledná stránka vypadá přesně podle mých představ." },
];

export default function GoogleReviews() {
  return (
    <section className="cf-wrap cf-section" aria-labelledby="google-reviews-heading">
      <p className="cf-eyebrow">ZKUŠENOSTI KLIENTŮ</p>
      <div className="cf-split">
        <h2 id="google-reviews-heading">Jak se nám spolupracuje?</h2>
        <a className="cf-text-link" href={googleProfileUrl}>Všechny recenze na Googlu ↗</a>
      </div>
      <p className="cf-lede">
        <span aria-hidden="true" className="text-[#3656F5]">★★★★★</span>{" "}
        <strong>5,0 z 5</strong> · 4 recenze na Googlu
      </p>
      <div className="grid gap-6 md:grid-cols-3">
        {reviews.map((review) => (
          <figure key={review.author} className="rounded-2xl border border-[#151D32]/15 bg-white p-6">
            <p aria-label="Hodnocení 5 z 5" className="mb-4 text-xl tracking-widest text-[#3656F5]">★★★★★</p>
            <blockquote className="mb-6 text-lg leading-relaxed">„{review.quote}“</blockquote>
            <figcaption className="font-semibold">{review.author}<span className="mt-1 block text-sm font-normal">Recenze na Googlu</span></figcaption>
          </figure>
        ))}
      </div>
      <p className="cf-art-note mt-5">Výběr z veřejných recenzí. Hodnocení a počet recenzí k 15. 10. 2026.</p>
    </section>
  );
}
