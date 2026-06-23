import { APP_URL } from "@/data/landing";
import { ArrowLeftIcon } from "./icons";
import Logo from "./Logo";

/** نوار شناور موبایل — مسیر همیشه‌در‌دسترس به اپ */
export default function MobileAppBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-navy-100 bg-cream/95 px-4 pb-[max(0.6rem,env(safe-area-inset-bottom))] pt-2.5 backdrop-blur-md md:hidden">
      <div className="flex items-center justify-between gap-3">
        <Logo className="scale-90" />
        <a
          href={APP_URL}
          className="btn-primary flex-1 justify-center"
          data-analytics="hero_start_discovery_click"
        >
          ورود به وایب
          <ArrowLeftIcon className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
