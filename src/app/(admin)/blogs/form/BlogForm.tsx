"use client";

import { Controller, useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

import {
  insertBlogSchema,
  type insertBlogSchemaType,
  type selectBlogSchemaType,
} from "@/zod-schemas/blog";
import { topicsArray } from "@/constants/TopicsArray";
import { InputWithLabel } from "@/components/Inputs/InputsWithLabel";
/* import { TextAreaWithLabel } from "@/components/Inputs/TextAreaWithLabel"; */
import { SelectWithLabel } from "@/components/Inputs/SelectWithLabel";
import { saveBlog } from "@/app/action";
import { useRouter } from "next/navigation";
import { uploadToFirebase } from "@/utils/uploadHelper";
import { useEffect, useState } from "react";
import { generateSlug } from "@/utils/generateSlug";
/* import RichTextEditor from "@/components/Inputs/RichTextEditor"; */
const DynamicRichTextEditor = dynamic(
  () => import("@/components/Inputs/RichTextEditor"),
  {
    ssr: false,
    loading: () => <p>Loading editor...</p>,
  }
);

/* import { blogDB } from "@/db/schema"; */

type Props = {
  blog?: selectBlogSchemaType;
};

export default function BlogForm({ blog }: Props) {
  const [imageUploading, setImageUploading] = useState(false);
  const defaultValues: insertBlogSchemaType = {
    id: blog?.id || 0,
    title: blog?.title || "",
    slug: blog?.slug || "",
    summary: blog?.summary || "",
    content: blog?.content || "",
    coverImageUrl: blog?.coverImageUrl || "",
    topic: blog?.topic || "",
    city: blog?.city || "",
    location: blog?.location || "",
    startAt: blog?.startAt || "",
  };

  const form = useForm<insertBlogSchemaType>({
    mode: "onBlur",
    resolver: zodResolver(insertBlogSchema),
    defaultValues,
  });
  const router = useRouter();

  // Watch the `title` field
  const title = useWatch({
    control: form.control,
    name: "title",
  });

  // Update the slug whenever the title changes
  useEffect(() => {
    const slug = generateSlug(title || ""); // Generate slug
    form.setValue("slug", slug, { shouldValidate: true }); // Update slug field
  }, [title, form]);

  const uploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;

    const file = e.target.files[0];
    setImageUploading(true);

    try {
      const imageUrl = await uploadToFirebase(file);
      form.setValue("coverImageUrl", imageUrl); // Update form value
      console.log("Uploaded image URL:", imageUrl);
    } catch (error) {
      console.error("Image upload failed:", error);
    } finally {
      setImageUploading(false);
    }
  };

  async function submitForm(data: insertBlogSchemaType) {
    /*  console.log(data); */
    try {
      const response = await saveBlog(data);
      if (response.success) {
        console.log(response.message);
        router.push("/");
      } else {
        console.error(response.message);
      }
    } catch (error) {
      console.error("Error submitting form", error);
    }
  }
  return (
    <div className=" flex flex-col gap-1 sm:px-8">
      <div>
        <h2 className="text-2xl font-bold">
          {blog?.id ? "Uredi" : "Dodaj Novu"} Obavijest
        </h2>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(submitForm)}
          className="flex flex-col md:flex-row gap-4 md:gap-8"
        >
          {/* <p>{JSON.stringify(form.getValues())}</p> */}
          <div className=" flex flex-col gap-4 w-full max-w-xs">
            <InputWithLabel<insertBlogSchemaType>
              fieldTitle="Naslov"
              nameInSchema="title"
            />
            <InputWithLabel<insertBlogSchemaType>
              fieldTitle="Slug"
              nameInSchema="slug"
              disabled // Disable slug input since it's auto-generated
            />
            <InputWithLabel<insertBlogSchemaType>
              fieldTitle="Podnaslov"
              nameInSchema="summary"
            />
            <SelectWithLabel<insertBlogSchemaType>
              fieldTitle="Tema"
              nameInSchema="topic"
              data={topicsArray}
            />

            <InputWithLabel<insertBlogSchemaType>
              fieldTitle="Grad"
              nameInSchema="city"
            />
            <InputWithLabel<insertBlogSchemaType>
              fieldTitle="Lokacija"
              nameInSchema="location"
            />
            <InputWithLabel<insertBlogSchemaType>
              fieldTitle="Početak u"
              nameInSchema="startAt"
              placeholder="19.09.2021 u 10:00h"
            />
            {/* Image Upload */}
            <div>
              <label htmlFor="coverImageUrl" className="text-base font-medium">
                Slika
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={uploadImage}
                disabled={imageUploading}
                className="mt-2"
              />
              {imageUploading && <p>Uploading image...</p>}
            </div>
          </div>
          {/*    <TextAreaWithLabel<insertBlogSchemaType>
            fieldTitle="Content"
            nameInSchema="content"
            className="h-40"
          /> */}
          <div className="flex-grow">
            <Controller
              name="content"
              control={form.control}
              render={({ field }) => (
                <div className="flex flex-col gap-2">
                  <label htmlFor="content" className="text-base font-medium">
                    Sadržaj
                  </label>
                  <DynamicRichTextEditor
                    value={field.value}
                    onChange={field.onChange}
                    placeholder="Enter blog content..."
                  />
                </div>
              )}
            />
          </div>

          <div className="flex gap-2 p-1">
            <Button
              type="submit"
              className="w-3/4"
              variant="default"
              title="Save"
            >
              Spasi
            </Button>
            <Button
              type="button"
              className="w-1/4"
              variant="destructive"
              title="Reset"
              onClick={() => form.reset(defaultValues)}
            >
              Poništi
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
