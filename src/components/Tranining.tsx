import getTrening from "@/lib/queries/getTrening";

import React from "react";
import GlowingCard from "./GlowingCard";

export default async function Tranining() {
  const treinings = await getTrening();

  return (
    <div className="w-full bg-gradient-to-tl from-gray-900 via-gray-800 to-black py-16 text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-10">Treninzi</h2>
        <p className="text-gray-300 mb-12">
          Pridružite se našim treninzima i unaprijedite svoje vještine stonog
          tenisa! Nudimo programe za sve uzraste i nivoe iskustva.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {treinings.slice(-3).map((trening) => (
            <GlowingCard
              title={trening.title}
              image={trening.coverImageUrl ?? undefined}
              summary={trening.summary ?? undefined}
              location={trening.location ?? undefined}
              startingAt={trening.startAt ?? undefined}
              key={trening.id}
              cardId={trening.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
