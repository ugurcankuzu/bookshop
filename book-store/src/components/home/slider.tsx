"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../../../public/Desktop - 1.jpg";
import image2 from "../../../public/Desktop - 2.jpg";
import image3 from "../../../public/Desktop - 3.jpg";
import image4 from "../../../public/Desktop - 4.jpg";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";
import getLinkByLabel from "@/util/getLinkByLabel";

export default function CampaignSlider() {
  const campaignImages = [image1, image2, image3, image4];
  return (
    <section className={campaignSliderStyles.sectionFrame}>
      <div className={campaignSliderStyles.sectionWrapper}>
        <div className={campaignSliderStyles.swiperWrapper}>
          <Swiper
            pagination={{
              type: "progressbar",
            }}
            modules={[Navigation, Pagination]}
            navigation={true}
            className={campaignSliderStyles.swiperObject}
          >
            {campaignImages &&
              campaignImages.map((campaignImage, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={campaignImage}
                    alt="Campaign Images"
                    priority
                    className={campaignSliderStyles.campaignImages}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
        <div className={campaignSliderStyles.campaignTitleWrapper}>
          <p className={campaignSliderStyles.campaignTitle}>
            Easiest way to find your book!
          </p>
          <p className={campaignSliderStyles.campaignSubTitle}>
            Fastest way to find & buy books Online. Not cheapest but the best...
          </p>
          {
            getLinkByLabel(
              "Shop",
              campaignSliderStyles.shopButton
            ) as React.ReactNode
          }
        </div>
      </div>
    </section>
  );
}
const campaignSliderStyles = {
  sectionFrame: "w-full flex justify-center items-center p-2",
  sectionWrapper:
    "w-full flex flex-col sm:flex-row justify-start sm:justify-center items-center gap-8 lg:w-4/5 2xl:w-3/5",
  swiperWrapper: "w-full sm:w-3/5 sm:order-2 shadow-xl",
  swiperObject:
    "[--swiper-navigation-color:black] [--swiper-pagination-color:black]",
  campaignImages: "w-full max-h-[500px] object-center object-cover",
  campaignTitleWrapper: "w-full flex flex-col items-start justify-center gap-4",
  campaignTitle: "text-3xl lg:text-[36px] font-extrabold text-coal/90",
  campaignSubTitle: "text-lg text-coal/40",
  shopButton:
    "w-1/2 border-2 border-coal/90 px-2 py-1 text-coal/90 font-bold text-lg text-center transition-all duration-[.5s] relative hover:bg-coal/90 hover:text-pearl before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-1/4 before:w-0 hover:before:w-full hover:before:bg-pearl before:delay-[.1s] before:duration-[1s] before:ease-out before:bg-coal/90 before:transition-all",
};
