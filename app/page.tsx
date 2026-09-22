import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white font-sans">
      {/* Header / Navbar */}
      <nav className="flex justify-between items-center px-8 py-5 border-b border-slate-800 bg-slate-900/50 backdrop-blur">
  <h1 className="text-2xl font-extrabold tracking-tight text-emerald-400">
    DIGITAL HEROES
  </h1>
  <div className="space-x-4 flex items-center">
    <Link href="/dashboard" className="px-3 py-2 text-sm font-semibold hover:text-emerald-400 transition">
      Dashboard
    </Link>
    <Link href="/prizes" className="px-3 py-2 text-sm font-semibold hover:text-emerald-400 transition">
      Prize Draws
    </Link>
    <Link href="/charity" className="px-3 py-2 text-sm font-semibold hover:text-emerald-400 transition">
      Charity
    </Link>
    <Link href="/prizes" className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold rounded-lg transition shadow-lg shadow-emerald-500/20">
      Join Membership
    </Link>
  </div>
</nav>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto text-center px-6 py-20">
        <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
          Golf Scores • Prize Draws • Charity Integration
        </span>
        <h2 className="text-5xl md:text-6xl font-black mt-6 leading-tight">
          Play Golf. Win Prizes. <br />
          <span className="text-emerald-400">Support Great Charities.</span>
        </h2>
        <p className="mt-6 text-slate-400 text-lg max-w-2xl mx-auto">
          Submit your rolling 5 Stableford scores, participate in automated weekly draws, and give back to causes that matter.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link href="/dashboard" className="px-8 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-lg rounded-xl transition shadow-xl shadow-emerald-500/25">
            Submit Your Scores
          </Link>
          <a href="#features" className="px-8 py-3.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 font-bold text-lg rounded-xl transition">
            Learn More
          </a>
        </div>
      </section>

      {/* Core Features Grid */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-slate-900/80 border border-slate-800 rounded-2xl hover:border-emerald-500/50 transition">
          <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 text-xl font-bold mb-4">
            ⛳
          </div>
          <h3 className="text-xl font-bold mb-2">Rolling 5 Golf Scores</h3>
          <p className="text-slate-400 text-sm">
            Enter Stableford scores (1-45). Our algorithm dynamically maintains your latest 5 active entries.
          </p>
        </div>

        <div className="p-6 bg-slate-900/80 border border-slate-800 rounded-2xl hover:border-emerald-500/50 transition">
          <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 text-xl font-bold mb-4">
            🏆
          </div>
          <h3 className="text-xl font-bold mb-2">Automated Prize Engine</h3>
          <p className="text-slate-400 text-sm">
            Active subscribers automatically enter dynamic tier draws for exclusive prizes and rewards.
          </p>
        </div>

        <div className="p-6 bg-slate-900/80 border border-slate-800 rounded-2xl hover:border-emerald-500/50 transition">
          <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 text-xl font-bold mb-4">
            ❤️
          </div>
          <h3 className="text-xl font-bold mb-2">Charity Support</h3>
          <p className="text-slate-400 text-sm">
            A percentage of subscription profits directly support vetted partner charities.
          </p>
        </div>
      </section>
    </main>
  );
}