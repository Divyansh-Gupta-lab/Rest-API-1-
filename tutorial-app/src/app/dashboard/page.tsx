"use client";

import { getServerSession } from "next-auth";
import React from "react";
import { authOption } from "../api/auth/[...nextauth]/route";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { LoginButton, LogoutButton } from "@/utils/auth";

export default function Dashboard() {
  // const session = await getServerSession(authOption);
  const clientSession = useSession();
  //   console.log(session);
  return (
    <div>
      <pre>{JSON.stringify(clientSession.data)}</pre>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <Link href="/">Home</Link>
      </button>
      <LoginButton />
      <LogoutButton />
    </div>
  );
}
