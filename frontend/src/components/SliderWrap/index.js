import classNames from "classnames/bind"
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from 'swiper/react';
import {  Autoplay, } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import style from "./Slider.module.scss"
import PlayItem from "../Playlist/PlayItem";

const cx = classNames.bind(style)

function SliderWrap({children,data,control=false}) {
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

    return (
            <Swiper
                spaceBetween={1}
                modules={[Autoplay]}
                className="row"
                slidesPerView={5}
                loop={true}
                autoplay={{ delay: 10000 }}
                scrollbar={{ draggable: true }}
                >
                  {
                   data.length > 0 && data.map((item,index)=>(
                     <SwiperSlide key={item?.encodeId} className="col c-6 m-3 l-2-4">
                        <PlayItem data={item}/>
                     </SwiperSlide>
                   ))
                  }
                {control ? 
                <div className={cx("control")}>
                    <SwiperButtonPrev> <span><i className="ti-angle-left"></i></span></SwiperButtonPrev>
                    <SwiperButtonNext> <span><i className="ti-angle-right"></i></span></SwiperButtonNext>
                </div> :
                 ""
                 }
            </Swiper> 
      );
}

export default SliderWrap;
