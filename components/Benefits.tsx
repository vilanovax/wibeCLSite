import { benefits } from "@/data/landing";

export default function Benefits() {
  return (
    <section id="why" className="bg-navy-900 py-14 text-white sm:py-20">
      <div className="container-wibe">
        <div className="mb-8 text-center sm:text-right">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            چرا وایب با بقیه فرق دارد؟
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-navy-200 sm:text-base">
            وایب به‌جای اینکه فقط محتوا نشان بدهد، کمک می‌کند انتخاب‌های خوب را
            پیدا، ذخیره و مرتب کنی.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div
              key={b.id}
              className="flex items-center gap-3 rounded-card border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
            >
              <span
                aria-hidden="true"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-azure-500/25 text-xl"
              >
                {b.emoji}
              </span>
              <span className="text-sm font-medium leading-6 text-navy-50">
                {b.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
