import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import React from 'react';
import styles from './ItemInFo.module.scss';
import Image from '~/components/Image';
import { useSelector } from 'react-redux';

function toDateTime(time) {
    const newTime = new Date(Number(time));
    return newTime.getDay();
}
const cx = classNames.bind(styles);

function ItemInFo({ data, index }) {
    const currentIndex = useSelector((state) => state.audio.currentIndex);
    return (
        <li className={cx('info', { active: index === currentIndex })}>
            <div className={cx('media-left')}>
                <Image src={data.thumbnailM} alt="avatar" />
            </div>
            <div className={cx('media')}>
                <h4 className={cx('title')}>{data?.title}</h4>
                <div className={cx('sub-title')}>
                    <span>{data?.artistsNames}</span>
                    <span>{toDateTime(data.releaseDate)} ngày trước</span>
                </div>
            </div>
        </li>
    );
}
ItemInFo.propTypes = {
    data: PropTypes.object,
    index: PropTypes.number,
};
export default React.memo(ItemInFo);
