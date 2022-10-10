import classNames from 'classnames/bind';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import style from './Slider.module.scss';
import PlayItem from '../Playlist/PlayItem';
import CardHozon from '../CardHozon';

const cx = classNames.bind(style);

function SliderWrap({ children, data, control = false, type }) {
    const SwiperButtonNext = ({ children }) => {
        const swiper = useSwiper();
        return (
            <button className="btn-click" onClick={() => swiper.slideNext()}>
                {children}
            </button>
        );
    };
    const SwiperButtonPrev = ({ children }) => {
        const swiper = useSwiper();
        return (
            <button className="btn-click" onClick={() => swiper.slidePrev()}>
                {children}
            </button>
        );
    };

    return (
        <Swiper
            spaceBetween={1}
            modules={[Autoplay]}
            className="row"
            slidesPerView={type ? 3 : 5}
            loop={true}
            autoplay={{ delay: 10000 }}
            scrollbar={{ draggable: false }}
        >
            {data?.length > 0 &&
                data.map((item, index) => (
                    <SwiperSlide key={item?.encodeId} className={`${!type ? 'col c-6 m-3 l-2-4' : 'col c-6 m-4 l-4'}`}>
                        {!type ? <PlayItem data={item} /> : <CardHozon data={item} index={index} />}
                    </SwiperSlide>
                ))}
            {control ? (
                <div className={cx('control')}>
                    <SwiperButtonPrev>
                        {' '}
                        <span>
                            <i className="ti-angle-left"></i>
                        </span>
                    </SwiperButtonPrev>
                    <SwiperButtonNext>
                        {' '}
                        <span>
                            <i className="ti-angle-right"></i>
                        </span>
                    </SwiperButtonNext>
                </div>
            ) : (
                ''
            )}
        </Swiper>
    );
}

export default SliderWrap;