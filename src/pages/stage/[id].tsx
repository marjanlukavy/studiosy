import StudioHeader from "@/components/UI/StudioHeader";
import Image from "next/image";
import React from "react";

const StageDetails = () => {
  return (
    <div className="flex gap-1 w-full justify-center items-center">
      <div className="centered-container flex px-6 pb-5 flex-col pt-[10px] relative w-full">
        <StudioHeader />
        <div className="mt-4 flex gap-6 overflow-scroll">
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
        </div>
        <div className="mt-10 flex flex-col items-center gap-5">
          <div className="flex gap-[10px]">
            {[1, 2, 3].map((_, index) => (
              <button
                key={index}
                className={`font-extrabold text-[20px] leading-[23.44px] text-white ${
                  true ? "bg-blue" : "bg-transparent border-4 border-blue"
                } rounded-lg overflow-hidden py-[11px] px-[40.5px]`}
              >
                Stage {index + 1}
              </button>
            ))}
          </div>
          <div className="flex flex-col items-center mt-[30px] gap-5">
            <span className="text-black font-roboto font-semibold leading-[47.21px] text-[40.29px]">
              1000 uah/h
            </span>
            <p className="text-gray font-normal font-roboto text-[24px] leading-[28.13px] text-center">
              Lorem ipsum dolor sit amet consectetur. Odio viverra interdum at
              elementum dui sed semper at fusce. Faucibus ac commodo tristique
              mi blandit purus. Porttitor suspendisse vitae posuere mus posuere
              turpis elementum lectus. Nunc tempus id enim sagittis diam
              dignissim mauris. Platea in enim ac semper libero enim donec
              interdum. Eu et sollicitudin orci varius odio velit sagittis mi.
              Pellentesque dis purus adipiscing egestas vitae.
            </p>
          </div>
          <div className="bg-gray h-[1px] w-full" />
          <div className="flex items-center justify-center gap-5 max-w-[715px] flex-wrap m-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, index) => (
              <div className="px-2 py-1" key={index}>
                <span className="font-roboto text-[16px] leading-[18.75px] text-gray">
                  #cyclorama {index}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StageDetails;
