import classNames from 'classnames/bind';
import style from './Footer.module.scss';
import { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import InfoAudio from './component/InfoAudio/infoAudio';
import ControlAudio from './component/ControlAudio';
import ControlRight from './component/ControlRight';

const cx = classNames.bind(style);

function Footer() {
    const audioPlayer = useRef();
    return (
        <div className={cx('footer')}>
            <InfoAudio />
            <ControlAudio audioPlayer={audioPlayer} />
            <ControlRight audioPlayer={audioPlayer} />
        </div>
    );
}

export default Footer;
