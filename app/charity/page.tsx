import Link from 'next/link';

export default function CharityPage() {
  const charities = [
    { name: 'Junior Golf Foundation', desc: 'Supporting underprivileged youth with golf equipment and training.', raised: '£12,400' },
    { name: 'Veteran Sports Rehab', desc: 'Helping disabled veterans rebuild life through competitive golf.', raised: '£8,900' },
    { name: 'Green Eco-Golf Parks', desc: 'Funding eco-friendly course development and sustainability projects.', raised: '£15,200' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans p-6 md:p-12">
      <div className="max-w-5xl mx-auto flex justify-between items-center mb-10 pb-4 border-b border-slate-800">
        <div>
          <h1 className="text-3xl font-extrabold text-emerald-400">Charity Impact</h1>
          <p className="text-slate-400 text-sm mt-1">Every subscription directly fuels great causes</p>
        </div>
        <Link href="/dashboard" className="text-sm bg-slate-900 hover:bg-slate-800 border border-slate-700 px-4 py-2 rounded-lg transition">
          ← Back to Dashboard
        </Link>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {charities.map((item, idx) => (
          <div key={idx} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center text-emerald-400 font-bold mb-4">
                ❤️
              </div>
              <h2 className="text-xl font-bold">{item.name}</h2>
              <p className="text-slate-400 text-sm mt-2">{item.desc}</p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between items-center">
              <span className="text-xs text-slate-500 font-semibold">Total Raised</span>
              <span className="text-emerald-400 font-bold">{item.raised}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}