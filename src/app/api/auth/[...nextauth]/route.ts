import NextAuth from "next-auth"
import { authOptions } from "@/lib/auth";

// const prisma = new PrismaClient() // Não usar agora
 
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST}