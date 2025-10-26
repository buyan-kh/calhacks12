'use client';

import { useParams } from 'next/navigation';
import { RoomCanvas } from '@/components/RoomCanvas';

export default function RoomPage() {
  const params = useParams();
  const roomId = params.roomId as string;

  return <RoomCanvas roomId={roomId} />;
}
