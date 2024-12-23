import { getTournament } from "@/lib/queries/getTopics";
import React from "react";
import GlowingCard from "./GlowingCard";

export default async function Events() {
  const takmicenja = await getTournament();
  return (
    <div className="w-full relative bg-gradient-to-br from-black via-gray-900 to-gray-800 py-16 text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-10">Događaji</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {takmicenja.slice(-3).map((takmicenje) => (
            <GlowingCard
              title={takmicenje.title}
              image={takmicenje.coverImageUrl ?? undefined}
              summary={takmicenje.summary ?? undefined}
              location={takmicenje.location ?? undefined}
              startingAt={takmicenje.startAt ?? undefined}
              key={takmicenje.id}
              cardId={takmicenje.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
