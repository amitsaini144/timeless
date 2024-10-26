import Link from "next/link";

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 right-0 flex items-center justify-between p-5 max-w-8xl mx-auto bg-black">
            <Link href="/" className="hover:blur-[0.8px]">
                <p className="text-[12px]">FF Timeless</p>
            </Link>
            <div className="flex gap-4 text-[12px]">
                <p className="hover:blur-[0.8px]">Light</p>
                <p className="hover:blur-[0.8px]">Dark</p>
            </div>
            <button className="hover:blur-[0.8px]">
                <p className="text-[12px]">Menu</p>
            </button>
        </header>
    )
}