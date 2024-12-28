import React from "react";
import BlogSearch from "./BlogSearch";
import { getBlogSearchResults } from "@/lib/queries/getBlogSearchResults";
import BlogSearchResults from "@/components/BlogSearchResult";

export const metadata = {
  title: "Blog Search",
};

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { searchText } = await searchParams;

  if (!searchText) return <BlogSearch />;

  // query database
  const results = await getBlogSearchResults(searchText);

  console.log(results);
  return (
    <div className="min-h-screen bg-gray-100">
      {/* <BlogSearch /> */}
      <BlogSearchResults results={results} searchText={searchText} />
    </div>
  );

  //return results
}
