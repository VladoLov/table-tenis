import React from "react";

import { Button } from "@nextui-org/button";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

interface BlogCardProps {
  title?: string | null;
  summary?: string | null;
  coverImageUrl?: string | null;
  slug?: string | null;
  date?: string | null;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  summary,
  coverImageUrl,
  slug,

  date,
}) => {
  return (
    /*  <Card className="max-w-[340px]">
      <CardHeader className="p-0">
        {coverImageUrl && title ? (
          <Image
            src={coverImageUrl}
            alt={title}
            className="w-full h-[140px] object-cover"
            fill
          />
        ) : null}
      </CardHeader>
      <CardBody>
        <h4 className="font-bold text-large mb-1">{title}</h4>
        <p className="text-small text-default-500 mb-2">{date}</p>
        <p className="text-default-700">{summary}</p>
      </CardBody>
      <CardFooter>
        <Link href={`/blog/${slug}`} passHref>
          <Button as="a" color="primary">
            Read More
          </Button>
        </Link>
      </CardFooter>
    </Card> */
    <Card className="w-full max-w-[350px] overflow-hidden">
      <div className="relative w-full h-[200px]">
        {coverImageUrl && title ? (
          <Image
            src={coverImageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400">No Image</span>
          </div>
        )}
      </div>
      <CardHeader>
        <h3 className="text-lg font-semibold line-clamp-2">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-3">{summary}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <p className="text-xs text-muted-foreground">{date}</p>
        <Button size="sm">
          <Link href={`/blog/${slug}`}>Otvori</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
