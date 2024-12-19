export const generateSlug = (title: string): string => {
  return title
    .toLowerCase() // Convert to lowercase
    .replace(/[^a-z0-9\s]/g, "") // Remove special characters
    .trim() // Remove leading/trailing spaces
    .replace(/\s+/g, "-"); // Replace spaces with hyphens
};
