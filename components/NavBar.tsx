import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react-router";

const pages = [
  { name: "Home", path: "/" },
  { name: "Terms of Service", path: "/terms" },
  { name: "Purchase Policy", path: "/purchase-policy" },
  { name: "Privacy Policy", path: "/privacy-policy" },
];

export default function NavBar() {
  const { data: session } = useSession();
  const [selectedPage, setSelectedPage] = useState("/");

  const handlePageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPage(e.target.value);
  };

  return (
    <nav className="bg-gray-950 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:text-green-500 transition">
          Eyo Bots
        </Link>
        <div className="flex items-center space-x-4">
          <select
            value={ selectedPage}
            onChange={ handlePageChange}
            className="bg-gray-800 border border-green-600 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            {pages.map((page, index) => (
              <option key={ page.name} value={page.path}>
                { page.name}
              </option>
            ))}
          </select>
          {session ? (
            <button
              onClick={() => signOut()}
              className="px-4 py-2 bg-red-600 text-black rounded-lg hover:bg-red-500 transition-transform transform hover:scale-105"
            >
              Sign Out
            </button>
          ) : (
            <Link
              href="/api/auth/signin"
              className="px-4 py-2 bg-green-600 text-black rounded-lg hover:bg-green-500 transition-transform transform hover:scale-105"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
