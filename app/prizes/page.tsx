import Link from 'next/link';

export default function PrizesPage() {
  const tiers = [
    { name: 'Bronze Tier', fee: '£5/mo', prize: '£250 Weekly Prize Pool', status: 'Active' },
    { name: 'Silver Tier', fee: '£10/mo', prize: '£750 Weekly Prize Pool + VIP Gear', status: 'Featured' },
    { name: 'Gold Tier', fee: '£20/mo', prize: '£2,000 Monthly Jackpot + VIP Golf Day', status: 'Popular' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans p-6 md:p-12">
      <div className="max-w-5xl mx-auto flex justify-between items-center mb-10 pb-4 border-b border-slate-800">
        <div>
          <h1 className="text-3xl font-extrabold text-emerald-400">Prize Draw Engine</h1>
          <p className="text-slate-400 text-sm mt-1">Automated prize distributions & dynamic tiers</p>
        </div>
        <Link href="/dashboard" className="text-sm bg-slate-900 hover:bg-slate-800 border border-slate-700 px-4 py-2 rounded-lg transition">
          ← Back to Dashboard
        </Link>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {tiers.map((tier, idx) => (
          <div key={idx} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between hover:border-emerald-500/50 transition">
            <div>
              <span className="text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full font-semibold">
                {tier.status}
              </span>
              <h2 className="text-2xl font-black mt-4">{tier.name}</h2>
              <p className="text-3xl font-bold text-emerald-400 mt-2">{tier.fee}</p>
              <p className="text-slate-400 text-sm mt-4">{tier.prize}</p>
            </div>
            <button className="w-full mt-8 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold py-3 rounded-xl transition">
              Subscribe to Enter Draw
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}