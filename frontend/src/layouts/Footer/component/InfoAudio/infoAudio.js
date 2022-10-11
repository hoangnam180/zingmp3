import images from '~/assets/imgs';
import Image from '~/components/Image';
import { useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import style from './Info.module.scss';

const cx = classNames.bind(style);

function InfoAudio() {
    const data = useSelector((state) => state.audio.data);
    const currentIndex = useSelector((state) => state.audio.currentIndex);
    const isPlay = useSelector((state) => state.audio.isPlaying);

    return (
        <div className={cx('footer-left')}>
            <div className={cx('footer-img')}>
                <Image src={data[currentIndex]?.thumbnailM} alt="info" />
                <div className={cx('footer-img-play', { active: isPlay })}></div>
            </div>
            <div className={cx('footer-info')}>
                <h3 className={cx('footer-info-title')}>{data[currentIndex]?.title}</h3>
                <span className={cx('footer-info-singer')}>{data[currentIndex]?.artistsNames}</span>
            </div>
            <div className={cx('footer-like')}>
                <input name="check-heart" type="checkbox" hidden />
                <span className={cx('btn-like')}>
                    <i className="ti-heart"></i>
                </span>
                <span className={cx('btn-like')}>
                    <i className="fa-solid fa-heart"></i>
                </span>
                <div className={cx('footer-more')}>
                    <i className="ti-more"></i>
                </div>
            </div>
        </div>
    );
}

export default InfoAudio;
