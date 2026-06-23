import Image from "next/image";
import type { FeaturedList } from "@/data/landing";
import { APP_URL } from "@/data/landing";
import { BookmarkIcon, ArrowLeftIcon } from "./icons";

interface ListCardProps {
  list: FeaturedList;
}

/** کارت لیست — مثل یک کارت محصول واقعی */
export default function ListCard({ list }: ListCardProps) {
  return (
    <a
      href={APP_URL}
      data-analytics="featured_list_click"
      data-list-id={list.id}
      className="group flex flex-col overflow-hidden rounded-card border border-navy-100 bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azure-500"
    >
      {/* ناحیه‌ی تصویر */}
      <div className={`relative h-36 overflow-hidden tone-${list.tone}`}>
        {list.thumbnail ? (
          <Image
            src={list.thumbnail}
            alt={list.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <span
            aria-hidden="true"
            className="absolute bottom-3 right-4 text-4xl drop-shadow"
          >
            {list.emoji}
          </span>
        )}
        {/* لایه‌ی تیره‌ی بالا تا بج و آیکن روی تصویر خوانا بمانند */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-transparent"
        />
        <span className="absolute right-3 top-3 badge">{list.category}</span>
        <span
          className="absolute left-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-black/30 text-white backdrop-blur"
          aria-hidden="true"
        >
          <BookmarkIcon className="h-4 w-4" />
        </span>
      </div>

      {/* متن */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-base font-extrabold leading-7 text-navy-900">
          {list.title}
        </h3>
        <p className="mt-1.5 line-clamp-2 flex-1 text-sm leading-6 text-navy-500">
          {list.description}
        </p>

        <div className="mt-3 flex items-center justify-between border-t border-navy-50 pt-3">
          <div className="flex items-center gap-3 text-xs font-medium text-navy-400">
            <span className="inline-flex items-center gap-1">
              <BookmarkIcon className="h-3.5 w-3.5" />
              {list.saveCount}
            </span>
            <span>{list.itemCount}</span>
          </div>
          <span className="inline-flex items-center gap-1 text-xs font-bold text-azure-600 transition group-hover:gap-2">
            مشاهده لیست
            <ArrowLeftIcon className="h-4 w-4" />
          </span>
        </div>
      </div>
    </a>
  );
}
