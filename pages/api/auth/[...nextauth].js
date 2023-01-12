import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from 'axios';
import { userApi } from '../../../public/const';

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            async authorize(credentials) {
                console.log('gogo');
                const result = await axios.post(userApi + '/user/sign-in', credentials, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                console.log(result);

                if (!result) {
                    throw new Error('No user Found with Email Please Sign Up...!');
                }
                return result.data.user;
            },
        }),
    ],
    pages: {
        signIn: '/',
    },
    secret: 'A9xFkQiQhlEn+LlQsBGmAXEh4DWAssxUYdVcREF/Khk=',
    session: {
        jwt: true,
        maxAge: 10 * 60,
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
