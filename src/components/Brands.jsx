import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const brands = [
  { name: "armani", image: "./brands/armani-removebg-preview.png" },
  { name: "lv", image: "./brands/lv-removebg-preview.png" },
  { name: "d&g", image: "./brands/dg-removebg-preview.png" },
  { name: "fendi", image: "./brands/fendi-removebg-preview.png" },
  { name: "gucci", image: "./brands/brands-removebg-preview.png" },
];

export default function BrandCarousel() {
  return (
    <section id="brands" aria-label="Our Partner Brands" className=" my-30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl md:text-center">
          <h2
            className="font-display text-3xl text-center uppercase font-extrabold text-slate-900 sm:text-4xl"
            style={{ fontFamily: "unBounded" }}
          >
            Our Trusted Brands
          </h2>
        </div>
        <Swiper
          pagination={{
            dynamicBullets: true, // Dynamic bullets (to show a smaller version of the slide)
            clickable: true, // Make bullets clickable
          }}
          autoplay={{
            delay: 2500, // Set autoplay delay to 2.5 seconds
            disableOnInteraction: false, // Continue autoplay after interaction
          }}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 5,
            },
          }}
          className="mySwiper my-8"
        >
          {brands.map((brand, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center">
                <figure className="relative flex justify-center items-center p-8">
                  <img
                    alt={brand.name}
                    className="object-contain w-30 h-30 md:w-48 md:h-30"
                    src={brand.image}
                    style={{
                      width: "auto",
                      height: "100%", // Ensures the image fills the container's height
                      maxWidth: "100%", // Ensures images don’t overflow their container
                    }}
                  />
                </figure>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
