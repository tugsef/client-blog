import React from "react";
import { otherItem } from "@/public/data/ItemsList";
export default function SocialMediaContact() {
  return (
    <article className="flex  w-full  flex-row-reverse items-center">

      <div className="flex flex-col ">
        <span className="font-bold">Sefa Demirtaş</span>
        <span>Software Developer</span>
        <span>
          <a
            className="text-blue-400 hover:text-blue-700"
            href={`mailto:${otherItem.email}`}
          >
            Send an email
          </a>
        </span>
      </div>
      <img src={otherItem.animationRandomUrl} alt="FocusShark" />

    </article>
  );
}
