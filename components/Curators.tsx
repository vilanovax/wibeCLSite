import { curators, APP_URL } from "@/data/landing";
import CuratorCard from "./CuratorCard";

export default function Curators() {
  return (
    <section id="curators" className="container-wibe py-14 sm:py-20">
      <div className="mb-8 text-center sm:text-right">
        <h2 className="section-title">هر آدم خوش‌سلیقه می‌تواند یک کیوریتور باشد</h2>
        <p className="section-sub mx-auto sm:mx-0">
          در وایب می‌توانی لیست‌های خودت را بسازی، آیتم‌ها را مرتب کنی و اگر
          خواستی عمومی‌اش کنی تا دیگران هم دنبالش کنند.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {curators.map((curator) => (
          <CuratorCard key={curator.id} curator={curator} />
        ))}
      </div>

      <div className="mt-8 text-center sm:text-right">
        <a
          href={APP_URL}
          className="btn-primary"
          data-analytics="create_list_click"
        >
          ساخت اولین لیست من
        </a>
      </div>
    </section>
  );
}
