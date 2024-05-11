"use server"

import { getServerSession } from 'next-auth'
import React from 'react'





export default async function ProfilePage() {

  console.log("=== (ProfilePage rendered) ===");
  

  const session = await getServerSession()


  return (

    <main className="my-6">

      <h2> Profile Page </h2>

      <h3> Olá: {session?.user?.name} </h3>

    </main>

  )

}
