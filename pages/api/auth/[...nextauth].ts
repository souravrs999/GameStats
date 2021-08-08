import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: <string>process.env.GOOGLE_ID,
      clientSecret: <string>process.env.GOOGLE_SECRET,
    }),
  ],
  database: <string>process.env.DATABASE_URI,
  secret: <string>process.env.SESSION_SECRET,
  session: {
    jwt: <boolean>true,
    maxAge: <number>60 * 60 * 24 * 5,
  },
  jwt: {
    secret: <string>process.env.JWT_SECRET,
    encryption: <boolean>true,
  },
  pages: {},
  callbacks: {},
  events: {},
  debug: <boolean>true,
});
