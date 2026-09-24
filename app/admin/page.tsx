'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role !== 'admin') {
      router.push('/login');
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <p className="text-gray-400 mb-6">Manage users, subscriptions, and platform draws here.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
          <h2 className="text-xl font-semibold mb-2">User Management</h2>
          <p className="text-sm text-gray-400">View and edit user profiles & golf scores.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
          <h2 className="text-xl font-semibold mb-2">Draw Management</h2>
          <p className="text-sm text-gray-400">Configure and run monthly draws.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
          <h2 className="text-xl font-semibold mb-2">Winner Verification</h2>
          <p className="text-sm text-gray-400">Approve or reject winner proofs.</p>
        </div>
      </div>
    </div>
  );
}