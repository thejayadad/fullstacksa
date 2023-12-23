import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LoginWithGoogle from "@/components/buttons/LoginWithGoogle";
import LogoutButton from "@/components/buttons/LogoutButton";
import {getServerSession} from "next-auth";
import Link from "next/link";
import React from 'react'


const AuthLinks =  async (  ) => {
    const session = await getServerSession(authOptions)
  return (
    <div className="flex items-center gap-4">
        {!!session && (
            <>
              <Link href={'/post'}>Post</Link>
              <Link href={'/account'}>
                Hello, {session?.user?.name}
              </Link>
              <Link href={'/create'}>Create</Link>
              <LogoutButton />
            </>
          )}
          {!session && (
            <>
            <Link href={'/post'}>Post</Link>
            <LoginWithGoogle />
            </>
          )}
    </div>
  )
}

export default AuthLinks