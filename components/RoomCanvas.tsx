'use client';

import { useSync } from '@tldraw/sync';
import { ReactNode, useEffect, useState } from 'react';
import { Tldraw } from 'tldraw';
import 'tldraw/tldraw.css';
import { getBookmarkPreview } from '@/lib/getBookmarkPreview';
import { multiplayerAssetStore } from '@/lib/multiplayerAssetStore';

interface RoomCanvasProps {
  roomId: string;
}

export function RoomCanvas({ roomId }: RoomCanvasProps) {
  // Create a store connected to multiplayer.
  const store = useSync({
    // We need to know the websockets URI...
    uri: `${typeof window !== 'undefined' ? window.location.origin : ''}/api/connect/${roomId}`,
    // ...and how to handle static assets like images & videos
    assets: multiplayerAssetStore,
  });

  return (
    <RoomWrapper roomId={roomId}>
      <Tldraw
        // we can pass the connected store into the Tldraw component which will handle
        // loading states & enable multiplayer UX like cursors & a presence menu
        store={store}
        onMount={(editor) => {
          // when the editor is ready, we need to register our bookmark unfurling service
          editor.registerExternalAssetHandler('url', getBookmarkPreview);
        }}
      />
    </RoomWrapper>
  );
}

function RoomWrapper({ children, roomId }: { children: ReactNode; roomId: string }) {
  const [didCopy, setDidCopy] = useState(false);

  useEffect(() => {
    if (!didCopy) return;
    const timeout = setTimeout(() => setDidCopy(false), 3000);
    return () => clearTimeout(timeout);
  }, [didCopy]);

  return (
    <div className="RoomWrapper">
      <div className="RoomWrapper-header">
        <WifiIcon />
        <div>{roomId}</div>
        <button
          className="RoomWrapper-copy"
          onClick={() => {
            if (typeof window !== 'undefined') {
              navigator.clipboard.writeText(window.location.href);
              setDidCopy(true);
            }
          }}
          aria-label="copy room link"
        >
          Copy link
          {didCopy && <div className="RoomWrapper-copied">Copied!</div>}
        </button>
      </div>
      <div className="RoomWrapper-content">{children}</div>
    </div>
  );
}

function WifiIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      width={16}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z"
      />
    </svg>
  );
}
