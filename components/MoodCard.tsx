import type { MoodCard as MoodCardType } from "@/data/landing";
import { APP_URL } from "@/data/landing";
import { ArrowLeftIcon } from "./icons";

interface MoodCardProps {
  mood: MoodCardType;
}

/** کارت حال‌وهوا — احساسی و دعوت‌کننده، نه یک دسته‌بندی خشک */
export default function MoodCard({ mood }: MoodCardProps) {
  return (
    <a
      href={APP_URL}
      data-analytics="mood_card_click"
      data-mood-id={mood.id}
      className={`group relative flex min-h-[120px] flex-col justify-between overflow-hidden rounded-card p-4 text-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azure-500 tone-${mood.tone}`}
    >
      <span aria-hidden="true" className="card-scrim" />
      <span aria-hidden="true" className="relative text-3xl">
        {mood.emoji}
      </span>
      <div className="relative pe-8">
        <h3 className="text-base font-extrabold leading-6">{mood.title}</h3>
        <p className="mt-0.5 text-xs leading-5 text-white/90">{mood.hint}</p>
      </div>
      <ArrowLeftIcon className="absolute bottom-4 left-4 h-4 w-4 text-white/80 transition group-hover:-translate-x-1 group-hover:text-white" />
    </a>
  );
}
