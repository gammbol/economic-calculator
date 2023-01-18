import Image from "next/image";
import React from "react";
import { SocialIcon } from "react-social-icons";

export default function PersonCard(props) {
  return (
    <div
      className="rounded-lg bg-[#BDBEBD] p-5 flex flex-col items-center
    gap-5 w-64"
    >
      <div className="h-32 w-32">
        <Image src={props.image} alt="Vladimir" className="rounded-full" />
      </div>
      <div className="flex flex-col items-center">
        <h3 className="text-2xl font">{props.name}</h3>
        <p>{props.field}</p>
      </div>
      <div>
        {props.socials.map((item, key) => (
          <SocialIcon
            key={key}
            url={item}
            fgColor="grey"
            bgColor="transparent"
          />
        ))}
      </div>
    </div>
  );
}
