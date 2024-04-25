import StudioHeader from "@/components/UI/StudioHeader";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const UnRegisteredUsers = () => {
  return (
    <div className="flex gap-1 w-full justify-center items-center">
      <div className="centered-container flex px-6 flex-col pt-[10px] relative w-full">
        <StudioHeader />
        <Link href={"/stage/1"} className="mt-4 flex gap-6 overflow-scroll">
          {[1, 2, 3, 4, 5].map((_, index) => {
            return (
              <div
                className="relative size-[262px] rounded-[17px] overflow-hidden shrink-0"
                key={index}
              >
                <Image
                  src={
                    "https://static01.nyt.com/images/2023/12/18/multimedia/00xp-absurd-ai-03/00xp-absurd-ai-03-facebookJumbo-v5.jpg"
                  }
                  alt={""}
                  fill
                  className="object-cover"
                />
              </div>
            );
          })}
        </Link>
      </div>
    </div>
  );
};

export default UnRegisteredUsers;
