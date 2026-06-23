import { steps } from "@/data/landing";

export default function HowItWorks() {
  return (
    <section id="how" className="container-wibe py-14 sm:py-20">
      <div className="mb-8 text-center">
        <h2 className="section-title">وایب چطور کار می‌کند؟</h2>
        <p className="section-sub mx-auto">سه قدم ساده تا انتخاب بهتر.</p>
      </div>

      <ol className="grid gap-4 md:grid-cols-3">
        {steps.map((step, i) => (
          <li
            key={step.id}
            className="relative rounded-card border border-navy-100 bg-white p-6 text-center shadow-card"
          >
            <span className="absolute right-5 top-5 text-sm font-black text-navy-200">
              ۰{i + 1}
            </span>
            <span
              aria-hidden="true"
              className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-azure-50 text-3xl"
            >
              {step.emoji}
            </span>
            <h3 className="mt-4 text-lg font-extrabold text-navy-900">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-7 text-navy-500">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
