import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router';
import { usePuterStore } from '~/lib/puter'

export const meta = () => ([{ title: 'Resumind | Auth' }, { name: 'description', content: 'Log into yout accout' }])

function auth() {
    const { isLoading, auth: { isAuthenticated, signIn, signOut } } = usePuterStore();
    const location = useLocation();
    const next = location.search.split('next=')[1];
    const navigate = useNavigate();

    useEffect(() => {
        console.log('location.search: ', location.search);
        console.log('ocation.search.split(next=)', location.search.split('next='));
        if (isAuthenticated) {
            navigate(next);

        }

    }, [isAuthenticated, next])

    return (
        <main className="bg-[url('/images/bg-auth.svg')] bg-cover min-h-screen flex items-center justify-center">
            <div className='gradient-border shadow-lg'>
                <section className='flex flex-col gap-8 bg-white rounded-2xl p-10'>
                    <div className='flex flex-col items-center gap-2 text-center'>
                        <h1>Welcome!</h1>
                        <h2>Log In to Continue You Job Journey</h2>
                    </div>
                    <div>
                        {isLoading ? <button className='auth-button animate-pulse'><p>Signing you in...</p></button> :
                            <>
                                {isAuthenticated ?
                                    <button className='auth-button' onClick={signOut}><p>Log Out</p></button>
                                    :
                                    <button className='auth-button' onClick={signIn}><p>Log In</p></button>
                                }

                            </>}
                    </div>

                </section>

            </div>
        </main>
    )
}

export default auth