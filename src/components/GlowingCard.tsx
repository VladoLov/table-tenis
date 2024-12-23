import { Clock, Landmark } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface GlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Starting gradient color.
   */
  fromColor?: string;
  /**
   * Middle gradient color.
   */
  viaColor?: string;
  /**
   * Ending gradient color.
   */
  toColor?: string;
  image?: string;
  title?: string;
  summary?: string;
  startingAt?: string;
  location?: string;
  cardId?: number;
}

export default function GlowingCard({
  fromColor = "rgb(147, 197, 253)",
  viaColor = "#rgb(59, 130, 246)",
  toColor = "rgb(29, 78, 216)",
  image,
  title,
  summary,
  startingAt,
  location,
  cardId: id,
}: GlowCardProps) {
  return (
    <div
      className="rounded-3xl bg-gradient-to-r p-0.5 hover:shadow-glow hover:brightness-150"
      style={{
        transition: " box-shadow 0.5s ease",
        backgroundImage: `linear-gradient(to right, ${fromColor}, ${viaColor}, ${toColor})`,
      }}
    >
      {/*  <div
        className="blur-20 inset-0 h-full w-full rounded-3xl bg-gradient-to-r from-[#4158D0] via-[#C850C0] to-[#FFCC70]"
        style={{ transition: "filter 0.5s ease" }}
      /> */}
      <div className="flex h-full w-full flex-col gap-2 rounded-3xl bg-blue-950 p-4">
        <Link
          href={`/blogs/${id}`}
          className="flex h-full w-full flex-col gap-2"
        >
          <div className="mb-2 text-2xl font-bold text-gray-50">{title}</div>
          <div className="flex items-center justify-center rounded-md">
            {image && title ? (
              <Image
                src={image}
                alt={title}
                width={250}
                height={250}
                className="rounded-md"
              />
            ) : (
              ""
            )}
          </div>

          <div className="flex-1 text-base mx-8  flex justify-start items-start font-medium text-gray-100 text-opacity-90">
            {summary}
          </div>

          <div className="text-sm flex items-center text-gray-100/80">
            <Landmark className="h-5 w-5 ml-2 mr-4" /> {location}
          </div>
          {startingAt && (
            <div className="text-sm flex items-center text-gray-100/80">
              <Clock className="h-5 w-5 ml-2 mr-4" /> {startingAt}
            </div>
          )}
        </Link>
      </div>
    </div>
  );
}
