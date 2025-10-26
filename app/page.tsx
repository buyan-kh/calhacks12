'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

function generateRoomId() {
  return 'room-' + Math.random().toString(36).substring(2, 15);
}

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Get or create room ID from localStorage
    let roomId = '';
    if (typeof window !== 'undefined') {
      roomId = localStorage.getItem('my-local-room-id') || generateRoomId();
      localStorage.setItem('my-local-room-id', roomId);
      router.push(`/${roomId}`);
    }
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Loading...</h1>
        <p className="text-gray-400">Redirecting to your brainstorming canvas</p>
      </div>
    </div>
  );
}
