'use client';

import { useEffect, useState } from 'react';
import { getSession } from 'next-auth/react';

export const SessionInfo = () => {
  const [session, setSession] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      const session = await getSession();
      setSession(session);
      setUserId(session?.user?.id);
    };

    fetchSession();
  }, []);

  const obfuscatedUserId = userId?.substring(0, 8);

  if (!session) {
    return (
      <div className="absolute bottom-6 right-6 bg-destructive p-4 rounded-lg text-xs">
        No session found...
      </div>
    );
  }

  return (
    <>
      {process.env.NODE_ENV !== 'production' && (
        <div className="text-xs bg-alternate/50 backdrop-blur-md absolute bottom-6 right-6 p-4 rounded-lg text-black">
          <p className="font-mono font-bold ">For testing purposes</p>
          <pre>User ID: {obfuscatedUserId}</pre>
        </div>
      )}
    </>
  );
};
