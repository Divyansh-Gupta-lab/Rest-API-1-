import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient, Prisma } from "@prisma/client";
import { compare } from "bcrypt";

const prisma = new PrismaClient();

export const authOption: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  //   pages: {
  //     signIn: "/auth/login",
  //   },
  providers: [
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

        if (!user) {
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
