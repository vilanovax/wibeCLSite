import { APP_URL } from "@/data/landing";
import { ArrowLeftIcon, DownloadIcon } from "./icons";

export default function FinalCTA() {
  return (
    <section className="container-wibe py-14 sm:py-20">
      <div className="relative overflow-hidden rounded-[1.6rem] bg-navy-900 px-6 py-12 text-center text-white shadow-lift sm:px-12 sm:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(50% 80% at 80% 0%, rgba(255,122,69,0.30) 0%, rgba(15,23,41,0) 60%)",
          }}
        />
        <div className="relative">
          <h2 className="text-2xl font-black tracking-tight sm:text-4xl">
            اولین لیست خوبت را همین حالا پیدا کن
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-navy-200 sm:text-base">
            از یک فیلم برای امشب تا یک کافه برای آخر هفته؛ وایب کمک می‌کند انتخاب
            بهتری داشته باشی.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <a
              href={APP_URL}
              className="btn-primary px-7 py-3.5 text-base"
              data-analytics="hero_start_discovery_click"
            >
              ورود به وایب
              <ArrowLeftIcon className="h-5 w-5" />
            </a>
            <a
              href={APP_URL}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-base font-bold text-white transition hover:bg-white/10"
              data-analytics="download_app_click"
            >
              <DownloadIcon className="h-5 w-5" />
              دانلود اپلیکیشن
            </a>
            <a
              href={APP_URL}
              className="btn-ghost text-white/80 hover:bg-white/10"
              data-analytics="create_list_click"
            >
              ساخت اولین لیست
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
