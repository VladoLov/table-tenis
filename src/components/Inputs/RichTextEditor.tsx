"use client";

import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Bold from "@tiptap/extension-bold";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import BulletList from "@tiptap/extension-bullet-list";
import ListItem from "@tiptap/extension-list-item";
import Placeholder from "@tiptap/extension-placeholder";

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({
  value,
  onChange,
  placeholder,
}) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        document: false,
        paragraph: false,
        text: false,
        bold: false,
        bulletList: false,
      }),
      Document,
      Paragraph,
      Text,
      Bold,
      BulletList,
      ListItem,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: "text-blue-500 underline",
        },
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Placeholder.configure({
        placeholder: placeholder || "Write something...",
      }),
    ],
    content: value,
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none",
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  const addLink = () => {
    const url = window.prompt("URL");
    if (url) {
      editor?.chain().focus().setLink({ href: url }).run();
    }
  };

  return (
    <div className="border border-gray-300 rounded-md p-2">
      <div className="mb-2 flex flex-wrap gap-2">
        <button
          onClick={() => editor?.chain().focus().toggleBold().run()}
          className={`px-2 py-1 rounded ${
            editor?.isActive("bold") ? "bg-gray-200" : "bg-gray-100"
          }`}
        >
          Bold
        </button>
        <button
          onClick={() => editor?.chain().focus().toggleItalic().run()}
          className={`px-2 py-1 rounded ${
            editor?.isActive("italic") ? "bg-gray-200" : "bg-gray-100"
          }`}
        >
          Italic
        </button>
        <button
          onClick={addLink}
          className={`px-2 py-1 rounded ${
            editor?.isActive("link") ? "bg-gray-200" : "bg-gray-100"
          }`}
        >
          Link
        </button>
        <button
          onClick={() => editor?.chain().focus().toggleBulletList().run()}
          className={`px-2 py-1 rounded ${
            editor?.isActive("bulletList") ? "bg-gray-200" : "bg-gray-100"
          }`}
        >
          Bullet List
        </button>
        <button
          onClick={() => editor?.chain().focus().setTextAlign("left").run()}
          className={`px-2 py-1 rounded ${
            editor?.isActive({ textAlign: "left" })
              ? "bg-gray-200"
              : "bg-gray-100"
          }`}
        >
          Align Left
        </button>
        <button
          onClick={() => editor?.chain().focus().setTextAlign("center").run()}
          className={`px-2 py-1 rounded ${
            editor?.isActive({ textAlign: "center" })
              ? "bg-gray-200"
              : "bg-gray-100"
          }`}
        >
          Align Center
        </button>
        <button
          onClick={() => editor?.chain().focus().setTextAlign("right").run()}
          className={`px-2 py-1 rounded ${
            editor?.isActive({ textAlign: "right" })
              ? "bg-gray-200"
              : "bg-gray-100"
          }`}
        >
          Align Right
        </button>
      </div>
      <EditorContent editor={editor} />
    </div>
  );
};

export default RichTextEditor;
