import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Calculix Logo"
            width={42}
            height={42}
            priority
          />
          <span className="text-2xl font-bold text-blue-600">
            Calculix
          </span>
        </Link>

        <div className="flex gap-6">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>

          <Link href="/" className="hover:text-blue-600">
            Calculators
          </Link>
        </div>
      </div>
    </nav>
  );
}