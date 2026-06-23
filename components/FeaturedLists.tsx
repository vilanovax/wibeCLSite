import { featuredLists, APP_URL } from "@/data/landing";
import ListCard from "./ListCard";
import { ArrowLeftIcon } from "./icons";

export default function FeaturedLists() {
  return (
    <section id="featured" className="bg-sand/60 py-14 sm:py-20">
      <div className="container-wibe">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div className="text-center sm:text-right">
            <h2 className="section-title">لیست‌های منتخب وایب</h2>
            <p className="section-sub mx-auto sm:mx-0">
              چند نمونه از لیست‌هایی که می‌توانی در وایب کشف و ذخیره کنی.
            </p>
          </div>
          <a
            href={APP_URL}
            className="btn-secondary"
            data-analytics="hero_view_lists_click"
          >
            دیدن همه‌ی لیست‌ها
            <ArrowLeftIcon className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredLists.map((list) => (
            <ListCard key={list.id} list={list} />
          ))}
        </div>
      </div>
    </section>
  );
}
