import type { Curator } from "@/data/landing";
import { APP_URL } from "@/data/landing";

interface CuratorCardProps {
  curator: Curator;
}

export default function CuratorCard({ curator }: CuratorCardProps) {
  return (
    <a
      href={APP_URL}
      data-analytics="curator_section_click"
      data-curator-id={curator.id}
      className="group flex items-center gap-3 rounded-card border border-navy-100 bg-white p-4 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azure-500"
    >
      <span
        aria-hidden="true"
        className={`grid h-14 w-14 shrink-0 place-items-center rounded-full text-2xl text-white tone-${curator.tone}`}
      >
        {curator.emoji}
      </span>
      <div className="min-w-0 flex-1">
        <h3 className="truncate text-sm font-extrabold text-navy-900">
          {curator.name}
        </h3>
        <p className="mt-0.5 truncate text-xs text-navy-500">
          {curator.specialty}
        </p>
        <div className="mt-2 flex items-center gap-3 text-[11px] font-medium text-navy-400">
          <span>{curator.lists}</span>
          <span className="h-1 w-1 rounded-full bg-navy-200" />
          <span>{curator.followers}</span>
        </div>
      </div>
    </a>
  );
}
