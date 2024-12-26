import { getLatestBlogImages } from "@/lib/queries/getBlogImages";
import Gallery from "./Gallery";

export default async function GalleryPage() {
  const images = await getLatestBlogImages();

  // Ensure the images array matches the ImageType structure
  const formattedImages = images.map((image) => ({
    id: image.id,
    src: image.src,
    alt: image.alt,
  }));

  return <Gallery images={formattedImages} />;
}
