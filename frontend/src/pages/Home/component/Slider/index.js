import classNames from "classnames/bind"
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from 'swiper/react';
import {  Autoplay, } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import style from "../../Home.module.scss"

const cx = classNames.bind(style)
function Slider({data}) {
    const SwiperButtonNext = ({ children }) => {
        const swiper = useSwiper();
        return <button className="btn-click" onClick={() => swiper.slideNext()}>
                    {children}
                </button>
      };
    const SwiperButtonPrev = ({ children }) => {
        const swiper = useSwiper();
        return  <button className="btn-click"  onClick={() => swiper.slidePrev()}>
                    {children}
                 </button>
      };
      const banner = data && data?.length > 0 && data.filter((x,index)=> 
      x.sectionType === "banner" && x.sectionId === "hSlider")
      .map((item)=>item?.items)[0];
    return (
        <div className={cx("banner",{grid:true,wide:true})}>
            <Swiper
                spaceBetween={1}
                modules={[Autoplay]}
                className="row sm-gutter"
                slidesPerView={3}
                loop={true}
                autoplay={{ delay: 3000 }}
                scrollbar={{ draggable: true }}
                >
                  {
                   banner.length > 0 && banner.map((item,index)=>(
                     <SwiperSlide key={item?.encodeId} className="col c-6 m-4 l-4">
                        <div className={cx("images")}>
                            <img src={item.banner} alt="banner"/>
                        </div>
                     </SwiperSlide>
                   ))
                  }
                <div className={cx("control")}>
                    <SwiperButtonPrev> <span><i className="ti-angle-left"></i></span></SwiperButtonPrev>
                    <SwiperButtonNext> <span><i className="ti-angle-right"></i></span></SwiperButtonNext>
                </div>
            </Swiper> 
    </div>
      );
}

export default Slider;
