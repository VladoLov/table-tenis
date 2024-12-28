import Form from "next/form";

import { Input } from "@/components/ui/input";

export default function BlogSearch() {
  return (
    <Form action="/blogs/searchBlog" className="flex gap-2 items-center">
      <Input
        name="searchText"
        type="text"
        placeholder="Search Blogs"
        className="w-full"
      />
    </Form>
  );
}
