'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Dashboard() {
  const [scores, setScores] = useState<number[]>([36, 38, 32, 40, 35]);
  const [newScore, setNewScore] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleAddScore = (e: React.FormEvent) => {
    e.preventDefault();
    const scoreNum = parseInt(newScore, 10);

    if (isNaN(scoreNum) || scoreNum < 1 || scoreNum > 45) {
      setError('Please enter a valid Stableford score between 1 and 45.');
      return;
    }

    setError('');
    // Rolling 5 logic: Add new score to start, keep max 5 items
    setScores((prevScores) => [scoreNum, ...prevScores.slice(0, 4)]);
    setNewScore('');
  };

  const calculateAverage = () => {
    if (scores.length === 0) return 0;
    const total = scores.reduce((acc, curr) => acc + curr, 0);
    return (total / scores.length).toFixed(1);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans p-6 md:p-12">
      {/* Header */}
      <div className="max-w-4xl mx-auto flex justify-between items-center mb-10 pb-4 border-b border-slate-800">
        <div>
          <h1 className="text-3xl font-extrabold text-emerald-400">Golf Member Dashboard</h1>
          <p className="text-slate-400 text-sm mt-1">Manage your rolling 5 Stableford scores</p>
        </div>
        <Link href="/" className="text-sm bg-slate-900 hover:bg-slate-800 border border-slate-700 px-4 py-2 rounded-lg transition">
          ← Back to Home
        </Link>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Score Entry Form */}
        <div className="md:col-span-1 bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h2 className="text-lg font-bold mb-4 text-emerald-400">Submit New Score</h2>
          <form onSubmit={handleAddScore} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase">
                Stableford Points (1-45)
              </label>
              <input
                type="number"
                min="1"
                max="45"
                value={newScore}
                onChange={(e) => setNewScore(e.target.value)}
                placeholder="e.g. 38"
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition"
              />
            </div>

            {error && <p className="text-rose-500 text-xs">{error}</p>}

            <button
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold py-3 rounded-xl transition shadow-lg shadow-emerald-500/20"
            >
              Add Score
            </button>
          </form>
        </div>

        {/* Rolling 5 Scores Display */}
        <div className="md:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-white">Active Rolling 5 Scores</h2>
            <div className="bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-semibold text-emerald-400">
              Avg Score: {calculateAverage()} pts
            </div>
          </div>

          <div className="space-y-3">
            {scores.map((score, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-slate-950 border border-slate-800 px-5 py-4 rounded-xl hover:border-emerald-500/30 transition"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-xs font-bold text-slate-500 bg-slate-900 px-2.5 py-1 rounded-md">
                    #{index + 1}
                  </span>
                  <span className="font-semibold text-slate-200">Stableford Score</span>
                </div>
                <span className="text-xl font-black text-emerald-400">{score} pts</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}