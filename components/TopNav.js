import Link from 'next/link';

export default function TopNav() {
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