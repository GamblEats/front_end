import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from 'axios';
import { toast } from 'react-toastify';

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            async authorize(credentials) {
                const result = await axios.post('http://127.0.0.1:8001/user/sign-in', credentials, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!result) {
                    throw new Error('No user Found with Email Please Sign Up...!');
                }
                return result.data.userArray;
            },
        }),
    ],
    pages: {
        signIn: '/',
    },
    secret: 'A9xFkQiQhlEn+LlQsBGmAXEh4DWAssxUYdVcREF/Khk=',
    session: {
        jwt: true,
        maxAge: 30 * 24 * 60 * 60,
    },
    callbacks: {
        async session({ session, token }) {
            session.user = token.user;
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.user = user;
            }
            return token;
        },
    },
});
