'use client';

export default function AnalyticsChart() {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      <svg
        viewBox="0 0 500 400"
        className="w-full h-auto rounded-2xl shadow-2xl bg-white"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background */}
        <rect width="500" height="400" fill="white" rx="16" />
        
        {/* Grid lines */}
        <defs>
          <pattern id="grid" width="50" height="40" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 40" fill="none" stroke="#f3f4f6" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="500" height="400" fill="url(#grid)" />
        
        {/* Y-axis labels */}
        <text x="30" y="80" fill="#6b7280" fontSize="12" textAnchor="middle">100%</text>
        <text x="30" y="140" fill="#6b7280" fontSize="12" textAnchor="middle">75%</text>
        <text x="30" y="200" fill="#6b7280" fontSize="12" textAnchor="middle">50%</text>
        <text x="30" y="260" fill="#6b7280" fontSize="12" textAnchor="middle">25%</text>
        <text x="30" y="320" fill="#6b7280" fontSize="12" textAnchor="middle">0%</text>
        
        {/* X-axis labels */}
        <text x="80" y="350" fill="#6b7280" fontSize="12" textAnchor="middle">Led</text>
        <text x="150" y="350" fill="#6b7280" fontSize="12" textAnchor="middle">Úno</text>
        <text x="220" y="350" fill="#6b7280" fontSize="12" textAnchor="middle">Bře</text>
        <text x="290" y="350" fill="#6b7280" fontSize="12" textAnchor="middle">Dub</text>
        <text x="360" y="350" fill="#6b7280" fontSize="12" textAnchor="middle">Kvě</text>
        <text x="430" y="350" fill="#6b7280" fontSize="12" textAnchor="middle">Čer</text>
        
        {/* Bar chart - SEO výsledky */}
        <rect x="65" y="280" width="30" height="40" fill="#663399" rx="4">
          <animate attributeName="height" from="0" to="40" dur="1.5s" begin="0.5s" fill="freeze"/>
          <animate attributeName="y" from="320" to="280" dur="1.5s" begin="0.5s" fill="freeze"/>
        </rect>
        <rect x="135" y="240" width="30" height="80" fill="#663399" rx="4">
          <animate attributeName="height" from="0" to="80" dur="1.5s" begin="0.7s" fill="freeze"/>
          <animate attributeName="y" from="320" to="240" dur="1.5s" begin="0.7s" fill="freeze"/>
        </rect>
        <rect x="205" y="200" width="30" height="120" fill="#663399" rx="4">
          <animate attributeName="height" from="0" to="120" dur="1.5s" begin="0.9s" fill="freeze"/>
          <animate attributeName="y" from="320" to="200" dur="1.5s" begin="0.9s" fill="freeze"/>
        </rect>
        <rect x="275" y="160" width="30" height="160" fill="#663399" rx="4">
          <animate attributeName="height" from="0" to="160" dur="1.5s" begin="1.1s" fill="freeze"/>
          <animate attributeName="y" from="320" to="160" dur="1.5s" begin="1.1s" fill="freeze"/>
        </rect>
        <rect x="345" y="120" width="30" height="200" fill="#663399" rx="4">
          <animate attributeName="height" from="0" to="200" dur="1.5s" begin="1.3s" fill="freeze"/>
          <animate attributeName="y" from="320" to="120" dur="1.5s" begin="1.3s" fill="freeze"/>
        </rect>
        <rect x="415" y="90" width="30" height="230" fill="#663399" rx="4">
          <animate attributeName="height" from="0" to="230" dur="1.5s" begin="1.5s" fill="freeze"/>
          <animate attributeName="y" from="320" to="90" dur="1.5s" begin="1.5s" fill="freeze"/>
        </rect>
        
        {/* Line chart - Konverze */}
        <polyline
          points="80,300 150,280 220,240 290,200 360,160 430,110"
          fill="none"
          stroke="#FFC107"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="1000"
          strokeDashoffset="1000"
        >
          <animate attributeName="stroke-dashoffset" from="1000" to="0" dur="2s" begin="1s" fill="freeze"/>
        </polyline>
        
        {/* Data points */}
        <circle cx="80" cy="300" r="6" fill="#FFC107" opacity="0">
          <animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="1.2s" fill="freeze"/>
        </circle>
        <circle cx="150" cy="280" r="6" fill="#FFC107" opacity="0">
          <animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="1.4s" fill="freeze"/>
        </circle>
        <circle cx="220" cy="240" r="6" fill="#FFC107" opacity="0">
          <animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="1.6s" fill="freeze"/>
        </circle>
        <circle cx="290" cy="200" r="6" fill="#FFC107" opacity="0">
          <animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="1.8s" fill="freeze"/>
        </circle>
        <circle cx="360" cy="160" r="6" fill="#FFC107" opacity="0">
          <animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="2s" fill="freeze"/>
        </circle>
        <circle cx="430" cy="110" r="6" fill="#FFC107" opacity="0">
          <animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="2.2s" fill="freeze"/>
        </circle>
        
        {/* Legend */}
        <rect x="60" y="30" width="15" height="15" fill="#663399" rx="2"/>
        <text x="85" y="42" fill="#374151" fontSize="14" fontWeight="500">SEO Výsledky</text>
        
        <circle cx="67" cy="60" r="4" fill="#FFC107"/>
        <text x="85" y="66" fill="#374151" fontSize="14" fontWeight="500">Konverze</text>
        
        {/* Title */}
        <text x="250" y="25" fill="#1f2937" fontSize="18" fontWeight="bold" textAnchor="middle">
          Růst výkonnosti
        </text>
      </svg>
      
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/5 to-transparent rounded-2xl pointer-events-none"></div>
    </div>
  );
}