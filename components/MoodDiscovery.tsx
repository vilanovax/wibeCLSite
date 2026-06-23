import { moodCards } from "@/data/landing";
import MoodCard from "./MoodCard";

export default function MoodDiscovery() {
  return (
    <section id="mood" className="container-wibe py-14 sm:py-20">
      <div className="mb-8 text-center sm:text-right">
        <h2 className="section-title">بر اساس حال و موقعیتت کشف کن</h2>
        <p className="section-sub mx-auto sm:mx-0">
          گاهی دنبال ژانر نیستی؛ دنبال حالِ درست می‌گردی. از همین‌جا شروع کن.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
        {moodCards.map((mood) => (
          <MoodCard key={mood.id} mood={mood} />
        ))}
      </div>
    </section>
  );
}
