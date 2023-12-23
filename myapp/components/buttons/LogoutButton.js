'use client';
import {signOut} from "next-auth/react";

export default function LogoutButton({
  className = 'flex items-center gap-2 border p-2 px-4 shadow',

}) {
  return (
    <button
      className={className}
      onClick={() => signOut()}>
      <span>Logout</span>

    </button>
  );
}