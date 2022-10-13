import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { setCurrentIndex } from '~/redux/actions/audio';
import style from './Playlist.module.scss';

const cx = classNames.bind(style);
function PlayItem({ data }) {
    const dispatch = useDispatch();
    const navigator = useNavigate();
    return (
        <div
            className={cx('card')}
            onClick={() => {
                navigator(`/album/${data?.encodeId}`);
                dispatch(setCurrentIndex(0));
            }}
        >
            <div className={cx('images')}>
                <img src={data?.thumbnailM} alt="playlist" />
                <div className={cx('media')}>
                    <span className={cx('btn-like', { btn: true })}>
                        <i className="ti-heart"></i>
                    </span>
                    <span className={cx('icon-play', { btn: true })}>
                        <i className="ti-control-play"></i>
                    </span>
                    <span className={cx('btn-more', { btn: true })}>
                        <i className="ti-more"></i>
                    </span>
                </div>
            </div>
            <h3 className={cx('card-name')}>{data?.title}</h3>
            <h5 className={cx('card-singer')}>{data?.sortDescription ? data?.sortDescription : data?.artistsNames}</h5>
        </div>
    );
}
PlayItem.propTypes = {
    data: PropTypes.object,
};
export default PlayItem;
