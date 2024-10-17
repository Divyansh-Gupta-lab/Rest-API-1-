import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient, Prisma } from "@prisma/client";
import GoogleProvider from "next-auth/providers/google";
import { compare } from "bcrypt";

const prisma = new PrismaClient();

export const authOption: NextAuthOptions = {
  session: {
    strategy: "jwt",
    // maxAge: 30 * 24 * 60 * 60,
    // updateAge: 3600
    // ,
  },
  // jwt: {
  //   maxAge: 60 * 60 * 24 * 30,
  // },
  //   pages: {
  //     signIn: "/auth/login",
  //   },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
    }),
    CredentialsProvider({
      name: "Sign In",
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!(user && user.password)) {
          return null;
        }

        const isPasswordValid = await compare(
          credentials.password,
          user.password
        );

        if (!isPasswordValid) return null;

        return {
          id: user.id.toString(),
          email: user.email,
          name: user.name,
        };
      },
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (!profile?.email) throw new Error("Invalid profile");
      console.log("account",account?.provider)
      // console.log("profile", profile)
      await prisma.user.upsert({
        where: {
          email: profile?.email,
        },
        update: {
          name: profile.name,
        },
        create: {
          email: profile.email,
          name: profile.name,
          // thirdPartyProvider: account?.provider
        },
     
      });

      return true;
    },
    async redirect({ url, baseUrl }) {
      // Redirect to /dashboard after sign-in
      if (url === "/dashboard") {
        return url;
      }
      return "/dashboard"; // Default redirect to /dashboard
    },
  },
};

const handler = NextAuth(authOption);
export { handler as GET, handler as POST };
