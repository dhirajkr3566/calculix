import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-6xl mx-auto px-5 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h2 className="text-xl font-bold text-white">Calculix</h2>
            <p className="text-sm mt-2">
              Free online calculators for everyday use.
            </p>
          </div>

          <div className="flex gap-6 text-sm">
            <Link href="/">Home</Link>
            <Link href="/calculators/bmi">BMI</Link>
            <Link href="/calculators/age">Age</Link>
            <Link href="/calculators/percentage">Percentage</Link>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          © 2026 Calculix. All rights reserved.
        </div>
      </div>
    </footer>
  );
}