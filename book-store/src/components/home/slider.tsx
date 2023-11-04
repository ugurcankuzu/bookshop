"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../../../public/Desktop - 1.jpg";
import image2 from "../../../public/Desktop - 2.jpg";
import image3 from "../../../public/Desktop - 3.jpg";
import image4 from "../../../public/Desktop - 4.jpg";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

export default function CampaignSlider() {
  const campaignImages = [image1, image2, image3, image4];
  return (
    <section className={campaignSliderStyles.sectionFrame}>
      <Swiper
        modules={[Navigation]}
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
    </section>
  );
}

const campaignSliderStyles = {
  sectionFrame: "w-full h-fit max-h-[500px] flex justify-center items-center",
  swiperObject: "[--swiper-navigation-color:black] w-full h-full shadow-xl xl:w-4/5",
  campaignImages: "w-full max-h-[500px] object-center object-cover",
};
