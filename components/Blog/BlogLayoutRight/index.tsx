import { Blog } from "@/.contentlayer/generated";
import Tag from "@/components/Element/tag";
import { slug } from "github-slugger";
import React from "react";

export default function BlogLayoutRight({ blogs }: { blogs: Blog[] }) {
  const wordMap = new Map();
  const words = blogs.map((blog) => blog.tags?.map((tag) =>slug(tag)));
  words.forEach((word) =>
    word?.map((text) => {
      // Kelimenin karakter sayısı 4'ten büyükse kelimeyi ayrıştırır.
      // kelimenin sağındaki ve solundaki değerleri dikkate almaz
      const cleanedWord = text?.toLowerCase();
      if (wordMap.has(cleanedWord)) {
        wordMap.set(cleanedWord, wordMap.get(cleanedWord) + 1);
      } else {
        wordMap.set(cleanedWord, 1);
      }
    })
  );
  return (
    <div>
      <span className="block text-lg font-extrabold  p-0  mb-3 lg:mb-0 lg:p-6">
        Topics that might interest you
      </span>
      {Array.from(wordMap).map(([key, value]) => (
        <Tag link={`/categories/${key.replace(" ","-")}`} name={key} key={key} value={value} />
      ))}
    </div>
  );
}
