import { compareDesc, parseISO } from "date-fns";
import { Blog } from "@/.contentlayer/generated";

type ClassNames = string | number | boolean | undefined | null;

const cx = (...classNames: ClassNames[]): string => classNames.filter(Boolean).join(" ");

export default cx;
export const sortBlogs = (blogs:Blog[]):Blog[] => {
  return blogs
    .slice()
    .sort((a, b) =>
      compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
    );
};