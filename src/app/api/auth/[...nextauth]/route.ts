"use serve"

import nextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';





const handler = nextAuth({

  providers: [

    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" }
      },

      async authorize(credentials, req) {

        const resp = await fetch("http://localhost:3000/auth/login", {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password
          })
        })

        const user  = await resp.json()

        console.log("==> (auth handler) user:", user)

        if (user && resp.ok) return user
        else return null
      },
    })
  ],

  pages: {
    signIn: "/login"
  }

})

export { handler as GET, handler as POST }



