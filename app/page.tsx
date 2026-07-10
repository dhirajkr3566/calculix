import Link from "next/link";

const calculators = [
  {
    title: "BMI Calculator",
    description: "Calculate your Body Mass Index instantly.",
    href: "/calculators/bmi",
  },
  {
    title: "Age Calculator",
    description: "Find your exact age in years, months and days.",
    href: "/calculators/age",
  },
  {
    title: "Percentage Calculator",
    description: "Quickly calculate percentages.",
    href: "/calculators/percentage",
  },
  {
    title: "EMI Calculator",
    description: "Estimate your monthly EMI.",
    href: "/calculators/emi",
  },
  {
    title: "Loan Calculator",
    description: "Calculate total loan cost.",
    href: "/calculators/loan",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <h1 className="text-5xl md:text-6xl font-bold">
            Free Online Calculators
          </h1>

          <p className="mt-5 text-lg text-blue-100 max-w-2xl mx-auto">
            Fast, accurate and easy-to-use calculators for finance, health,
            loans and everyday calculations.
          </p>

          <div className="mt-10">
            <input
              type="text"
              placeholder="Search calculators (Coming Soon)"
              disabled
              className="w-full max-w-xl p-4 rounded-xl text-gray-700 bg-white"
            />
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="max-w-6xl mx-auto px-5 py-16">
        <h2 className="text-3xl font-bold mb-8">
          Popular Calculators
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {calculators.map((calc) => (
            <Link
              key={calc.title}
              href={calc.href}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 border"
            >
              <h3 className="text-xl font-bold">{calc.title}</h3>

              <p className="mt-3 text-gray-600">
                {calc.description}
              </p>

              <span className="inline-block mt-5 text-blue-600 font-semibold">
                Open Calculator →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}