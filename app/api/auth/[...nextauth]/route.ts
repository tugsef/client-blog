import { Backend_URL } from "@/lib/Constants";
import axios from "axios";
import { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from 'next-auth/providers/google'

async function refreshToken(token: JWT): Promise<JWT> {
  const res = await fetch(Backend_URL + `/auth/refresh`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${token.backendTokens.refreshToken.trim()} `,
      "Content-Type": "application/json",
    },
  });
  console.log("refreshed");

  const response = await res.json();

  return {
    ...token,
    backendTokens: response.backendTokens,
  };
}

export const authOptions: NextAuthOptions = {
  providers: [
    
    CredentialsProvider({
     
      name: "Credentials",
      
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "jsmith",
        },
        password: { label: "Password", type: "password" },
      },
    
      async authorize(credentials, req) {
        try {
          if (!credentials?.email || !credentials?.password) return null;
          const { email, password } = credentials;
          const { data } = await axios.post<any>(
            `${Backend_URL}/auth/local/signin`,
            {
              email,
              password,
            },
            {
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
            }
          );
          const user = await data;
          return user;
        } catch (error) {
          if (axios.isAxiosError(error)) {
            return error.message;
          } else {
            return "An unexpected error occurred";
          }
        }
      },
    }),
    GoogleProvider({
     clientId:`${process.env.GOOGLE_CLIENT_ID}`,
     clientSecret:`${process.env.GOOGLE_CLIENT_SECRET}`
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) return { ...token, ...user };

      if (new Date().getTime() < token.backendTokens.expiresIn) return token;

      return await refreshToken(token);
    },

    async session({ token, session }) {
      session.user = token.user;
      session.backendTokens = token.backendTokens;

      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
