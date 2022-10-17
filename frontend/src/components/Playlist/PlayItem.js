import classNames from 'classnames/bind';

import './PlayItem.css';
import { BsThreeDots, BsPlayCircle } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import PropTypes from 'prop-types';
import style from './Playlist.module.scss';
import Image from '../Image';

const cx = classNames.bind(style);

const PlayItem = ({ data, onClick = () => {} }) => {
    return (
        <div className="card-list" onClick={() => onClick(data?.encodeId, data?.id)}>
            <div className="card-list-image">
                <Image src={data?.thumbnailM} alt="thumbnail" />
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
