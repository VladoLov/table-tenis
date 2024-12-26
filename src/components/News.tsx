import { getNews } from "@/lib/queries/getTopics";
import React from "react";
import GlowingCard from "./GlowingCard";

export default async function News() {
  const novosti = await getNews();
  return (
    <div className="w-full bg-gradient-to-br from-blue-950 via-gray-900 to-black py-16 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Novosti</h2>
        <p className="text-gray-300 text-center mb-12 px-6">
          Ostanite u toku s najnovijim vijestima, događajima i uspjesima našeg
          kluba.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {novosti.slice(-3).map((novost) => (
            <GlowingCard
              title={novost.title}
              image={novost.coverImageUrl ?? undefined}
              summary={novost.summary ?? undefined}
              location={novost.location ?? undefined}
              startingAt={novost.startAt ?? undefined}
              key={novost.id}
              cardId={novost.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
