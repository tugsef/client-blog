import React from "react";
import { socialMediaList } from "@/public/data/ItemsList";
import { otherItem } from "@/public/data/ItemsList";
import Image from "next/image";
export default function SocialMediaContact() {
  return (
    <article>
      <div>
        <img src={otherItem.animationRandomUrl} alt="FocusShark" />
 
        <b>SEFA DEMİRTAŞ</b> <span className="block">Software Developer</span>{" "}
        <a
          className="text-blue-400 hover:text-blue-700"
          href={`mailto:${otherItem.email}`}
        >
          Send an email
        </a>
      </div>
      <figure>
        <div className="flex flex-row-reverse gap-2">
          {socialMediaList.map((item, index) => (
            <a key={index} href={item.url}>
              <img src={item.imgUrl} alt={item.tag} />
            </a>
          ))}
        </div>
      </figure>
     
    </article>
  );
}
