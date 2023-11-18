import { Blog } from "@/.contentlayer/generated";
import { slug } from "github-slugger";

export interface ITag {
  name: string;
  count: number;
}

export const tagMapList = (blogs: Blog[]) => {
  const tagList: ITag[] = [];

  const wordMap = new Map();
  const words = blogs.map((blog) => blog.tags?.map((tag) => slug(tag)));
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
  Array.from(wordMap).map(([key, value]) =>
    tagList.push({ name: key, count: value })
  );

  return tagList;
};
