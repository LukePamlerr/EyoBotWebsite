import { getServerSession } from "next-auth/next";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession();

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center">
        <h1 className="text-5xl font-bold mb-4 animate-pulse">
          Welcome to Eyo Bots
        </h1>
        <p className="text-xl mb-8">
          Your one-stop solution for custom Discord bots, server setup, and
          middleman services.
        </p>
        {session ? (
          <p className="text-lg">Welcome back, {session.user?.name}!</p>
        ) : (
          <Link
            href="/api/auth/signin"
            className="bg-green-600 text-black px-6 py-3 rounded-lg hover:bg-green-500 transition-transform transform hover:scale-105"
          >
            Login with Discord
          </Link>
        )}
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div className="p-6 bg-gray-900 rounded-lg hover:shadow-lg hover:shadow-green-500/50 transition-all">
          <h2 className="text-2xl font-semibold mb-4">Custom Discord Bots</h2>
          <p>
            Tailored bots to enhance your server with unique features and
            automation.
          </p>
        </div>
        <div className="p-6 bg-gray-900 rounded-lg hover:shadow-lg hover:shadow-green-500/50 transition-all">
          <h2 className="text-2xl font-semibold mb-4">Server Setup</h2>
          <p>
            Professional server configuration for optimal performance and user
            experience.
          </p>
        </div>
        <div className="p-6 bg-gray-900 rounded-lg hover:shadow-lg hover:shadow-green-500/50 transition-all">
          <h2 className="text-2xl font-semibold mb-4">Middleman Services</h2>
          <p>Secure and reliable transaction facilitation for your peace of mind.</p>
        </div>
      </section>
    </div>
  );
}
