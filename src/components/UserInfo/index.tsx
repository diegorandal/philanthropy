'use client';
import { useSession } from 'next-auth/react';

export const UserInfo = () => {
  const session = useSession();

  return (
    <div className="flex flex-row items-center justify-start gap-4 rounded-xl w-full border-2 border-gray-200 p-4">
      <div className="flex flex-row items-center justify-center">
        <span className="text-lg font-semibold capitalize">
          {session?.data?.user?.username}
        </span>
      </div>
    </div>
  );
};
