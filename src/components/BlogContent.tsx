"use client";
import { useEffect, useState } from "react";

export default function BlogContent({ content }: { content: string }) {
  const [sanitizedContent, setSanitizedContent] = useState<string>("");

  useEffect(() => {
    // Dynamically import DOMPurify to ensure it's only used in the client
    async function sanitizeContent() {
      const DOMPurify = (await import("dompurify")).default;
      setSanitizedContent(DOMPurify.sanitize(content));
    }
    sanitizeContent();
  }, [content]);

  return (
    <div
      className="mt-6"
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
    />
  );
}
