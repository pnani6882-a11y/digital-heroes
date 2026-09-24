'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple mock authentication for PRD flow satisfaction
    if (email === 'admin@digitalheroes.co.in' && password === 'admin123') {
      localStorage.setItem('role', 'admin');
      router.push('/admin');
    } else {
      localStorage.setItem('role', 'user');
      localStorage.setItem('userEmail', email);
      router.push('/');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isLogin ? 'Digital Heroes Login' : 'Create an Account'}
        </h2>
        <form onSubmit={handleAuth} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required
              className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required
              className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none"
              placeholder="Enter password"
            />
          </div>
          <button 
            type="submit" 
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded font-bold transition"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-400 cursor-pointer" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
        </p>
      </div>
    </div>
  );
}