import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './PlayItem.css';
import { BsThreeDots, BsPlayCircle } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import PropTypes from 'prop-types';

import { setCurrentIndex } from '~/redux/actions/audio';
import style from './Playlist.module.scss';

const cx = classNames.bind(style);

const PlayItem = ({ data }) => {
    const dispatch = useDispatch();
    const navigator = useNavigate();

    return (
        <div
            className="card-list"
            onClick={() => {
                navigator(`/album/${data?.encodeId}`);
                dispatch(setCurrentIndex(0));
            }}
        >
            <div className="card-list-image">
                <img src={data?.thumbnailM} alt="thumbnail" />
                <div className="card-list-image-hover">
                    <AiOutlineHeart className="card-list-icon small" />
                    <BsPlayCircle className="card-list-icon big" />
                    <BsThreeDots className="card-list-icon small" />
                </div>
                <div className="card-list-duration">{data.duration}</div>
            </div>
            <h3 className={cx('card-name')}>{data?.title}</h3>
            <h5 className={cx('card-singer')}>{data?.sortDescription ? data?.sortDescription : data?.artistsNames}</h5>
        </div>
    );
};

PlayItem.propTypes = {
    data: PropTypes.object,
};
export default PlayItem;
