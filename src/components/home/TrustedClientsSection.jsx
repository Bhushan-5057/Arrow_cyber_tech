"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
const clientLogos = [
    "/assets/american_airlines.svg",
    "/assets/capegemini.svg",
    "/assets/humana.svg",
    "/assets/ebay.svg",
    "/assets/kpmg.svg",
    "/assets/microsoft.svg",
    "/assets/nasdaq.svg",
];
export default function TrustedClientsSection() {
    return (<section className="overflow-hidden border-y border-slate-200 bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.3em] text-slate-900" data-aos="fade-up" data-aos-delay="100">
          Trusted by Security Teams At
        </p>

        <Swiper modules={[Autoplay]} loop={true} speed={3000} autoplay={{
            // delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        }} allowTouchMove={true} grabCursor={true} spaceBetween={40} breakpoints={{
            320: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 50,
            },
            1280: {
                slidesPerView: 6,
                spaceBetween: 60,
            },
        }} className="w-full overflow-hidden py-4">
          {clientLogos.map((logo, index) => (<SwiperSlide key={index}>
              <div className="flex h-14 items-center justify-center sm:h-16 md:h-20" data-aos="fade-up" data-aos-delay={index * 60}>
                <img src={logo} alt="Client Logo" className="h-10 w-auto max-w-full object-contain transition-all duration-300 hover:scale-110 hover:opacity-100 sm:h-12 md:h-16" draggable={false}/>
              </div>
            </SwiperSlide>))}
        </Swiper>
      </div>
    </section>);
}
