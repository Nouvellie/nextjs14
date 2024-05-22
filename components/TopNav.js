'use client';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

export default function TopNav() {
    const {data, status} = useSession();
    return (
        <nav className="nav shadow p-2 justify-content-between mb-3">
            <Link href="/" className="nav-link">
                NOUVELLIE
            </Link>

            {status === "authenticated" ? (
                <>
                    <Link href="/dashboard/user" className="nav-link">
                        {data?.user?.name}
                    </Link>
                    <a className="nav-link pointer" onClick={() => signOut({callbackUrl: "/signin"})}>SignOut</a>
                </>
            ) : status === "loading" ? (
                <></>//<a className="nav-link text-danger">LOADING</a>
            ) : (
                <div className="d-flex">
                    <Link href="/signin" className="nav-link">
                        SignIn
                    </Link>
                    <Link href="/signup" className="nav-link">
                        SignUp
                    </Link>
                </div>
            )}

            
        </nav>
    );
}