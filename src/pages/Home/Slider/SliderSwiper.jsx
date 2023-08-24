import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";

export default function SliderSwiper() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 4,
          depth: 50,
          modifier: 5,
          slideShadows: true,
        }}
        
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper m-5"
      >
                
                <SwiperSlide>
                    <img
                        style={{ width: "90px", height: "140px" ,paddingTop:"35px"}}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Apple_logo_white.svg/1010px-Apple_logo_white.svg.png?20220821122232"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                       style={{ width: "222px", height: "160px" ,paddingTop:"35px"}}
                        src="https://logos-world.net/wp-content/uploads/2021/08/Android-Logo.png"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        style={{ width: "214px", height: "136px" ,paddingTop:"60px"}}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        style={{ width: "160px", height: "132px",paddingTop:"45px" }}
                        src="https://logos-world.net/wp-content/uploads/2020/11/HP-Logo-700x394.png"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        style={{ width: "220px", height: "155px",paddingTop:"15px" }}
                        src="https://logos-world.net/wp-content/uploads/2020/07/Asus-Logo.png"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        style={{ width: "130px", height: "174px" ,paddingTop:"50px"}}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/2048px-Dell_Logo.svg.png"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        style={{ width: "225px", height: "115px",paddingTop:"65px" }}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Lenovo_logo_2015.svg/2560px-Lenovo_logo_2015.svg.png"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        style={{ width: "225px", height: "119px" ,paddingTop:"70px"}}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        style={{ width: "115px", height: "155px",paddingTop:"45px" }}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xiaomi_logo_%282021-%29.svg/1200px-Xiaomi_logo_%282021-%29.svg.png"
                        alt=""
                    />
                </SwiperSlide>
            </Swiper>
        </>
  
  )
}