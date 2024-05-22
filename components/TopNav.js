'use client';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

export default function TopNav() {
    const {data, status, loading} = useSession();
    console.table({data, status, loading});
    return (
        <nav className="nav shadow p-2 justify-content-between mb-3">
            <Link href="/" className="nav-link">
                NOUVELLIE
            </Link>
            <div className="d-flex">
                <Link href="/signin" className="nav-link">
                    SignIn
                </Link>
                <Link href="/signup" className="nav-link">
                    SignUp
                </Link>
            </div>
        </nav>
    );
}