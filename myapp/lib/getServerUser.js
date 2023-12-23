'use server'
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

const getServerUser = async () => {
  const session = await getServerSession(authOptions);

  return session?.user;
} 

export default getServerUser;