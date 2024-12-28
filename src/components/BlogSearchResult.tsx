import React from "react";
import BlogCard from "./BlogCard";

interface BlogPost {
  title?: string | null;
  summary?: string | null;
  coverImageUrl?: string | null;
  slug?: string | null;
  date?: string | null;
}

interface BlogSearchResultsProps {
  results: BlogPost[];
  searchText: string;
}

const BlogSearchResults: React.FC<BlogSearchResultsProps> = ({
  results,
  searchText,
}) => {
  if (results.length === 0) {
    return (
      <div className="text-center py-8">
        <h2 className="text-2xl font-bold mb-4">No results found</h2>
        <p>
          Sorry, we couldn&apos;t find any blog posts matching {searchText}.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">
        Search Results for {searchText}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
};

export default BlogSearchResults;
