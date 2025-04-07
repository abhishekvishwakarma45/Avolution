import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const reviews = [
  {
    name: "Aarav Sharma",
    review:
      "The fitness apparel I bought from this store is outstanding. The quality and comfort are perfect for my workouts.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/64.jpg",
  },
  {
    name: "Priya Gupta",
    review:
      "I am so happy with the yoga gear I ordered. It's durable and has greatly improved my practice. Highly recommend this site!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Ravi Kumar",
    review:
      "As an athlete, I need the best gear, and this store never disappoints. From dumbbells to shoes, everything is top-notch.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/31.jpg",
  },
  {
    name: "Sanya Patel",
    review:
      "Great variety of workout gear! The quality is superb, and the pricing is reasonable. I'm a loyal customer now.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/55.jpg",
  },
  {
    name: "Rohit Yadav",
    review:
      "Excellent customer service! The shipping was fast, and I received everything as expected. The gear is fantastic for my gym sessions.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/43.jpg",
  },
  {
    name: "Ananya Iyer",
    review:
      "I've been using the resistance bands and kettlebells from this store, and they are of great quality. I am completely satisfied.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
];

export default function Review() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-slate-50 py-20 text-amber-300 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl md:text-center">
          <h2
            className="font-display text-3xl uppercase font-extrabold text-slate-900 sm:text-4xl"
            style={{ fontFamily: "unBounded" }}
          >
            What Our Customers Are Saying
          </h2>
        </div>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper mt-16"
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="flex mb-10 flex-col gap-y-6 sm:gap-y-8">
                <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                  <blockquote className="relative">
                    <figcaption className="relative flex items-center justify-between p-2 border-slate-300 border-b my-4">
                      <div>
                        <div className="font-display font-extrabold text-base text-slate-900">
                          {review.name}
                        </div>
                      </div>
                      <div className="overflow-hidden rounded-full bg-slate-50">
                        <img
                          alt={review.name}
                          className="h-14 w-14 object-cover"
                          style={{ color: "transparent" }}
                          src={review.image}
                        />
                      </div>
                    </figcaption>
                    <p className="text-lg tracking-tight text-slate-900">
                      {review.review}
                    </p>
                  </blockquote>
                </figure>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
