import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import * as albumSevices from '~/services/album.sevices';
import { useParams } from 'react-router-dom';
import { formatTime } from '~/utils/formatTime';
import style from './Album.module.scss';
import useData from '~/hooks/useData';
import { useDispatch, useSelector } from 'react-redux';
import { setData } from '~/redux/actions/audio';

const cx = classNames.bind(style);

function Albums() {
    const [album, setAlbum] = useState();
    const dispatch = useDispatch();
    const handleAlbum = () => {
        dispatch(setData(album?.song?.items));
    };
    let params = useParams();
    const data = useSelector((state) => state.audio.data);
    const currentIndex = useSelector((state) => state.audio.currentIndex);

    const dataHook = useData(data[currentIndex]?.encodeId);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await albumSevices.albums(params?.id);
            console.log(result);
            setAlbum(result);
        };
        fetchApi();
    }, [params]);
    return (
        <div className={cx('album ')}>
            <div className={cx('album__detail-img')}>
                <img className={cx('album__img')} src={album?.thumbnailM} alt="album" />
                <h2 className={cx('albumTitle')}>{album?.title}</h2>
                <p className={cx('albumDetail')}>Cập nhật : {album?.releaseDate}</p>
                <p className={cx('albumDetail')}>{album?.artistsNames}</p>
                <p className={cx('albumDetail')}>{album?.like} người yêu thích</p>
            </div>
            <div className={cx('listAlbum')}>
                {/* <div className={cx('description-album')}>
                    <span>Lời Tựa:</span>
                    <span className={cx('description')}></span>
                </div> */}
                <div className={cx('list-album-header')}>
                    <span className={cx('list-album-song-name')}>
                        <i className={cx('icon list-album-header-icon ic-24-Sort')}></i>
                        BÀI HÁT
                    </span>
                    <span className={cx('list-albums-album')}>ALBUM</span>
                    <span className={cx('list-albums-time')}>THỜI GIAN</span>
                </div>
                {album &&
                    album?.song?.items?.map((item) => (
                        <div
                            key={item?.encodeId}
                            className={cx('list-album-item', { songActive: false })}
                            onClick={handleAlbum}
                        >
                            <div className={cx('list-album-song-name', { 'song-album-item': true })}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                                    <span className={cx('list-album-header-icon')}></span>
                                    <i className="ti-music-alt"></i>
                                    <img className={cx('song-album-item-img')} src={item?.thumbnailM} alt="thumbnail" />
                                </div>
                                <div className={cx('detail')}>
                                    <div className={cx('detail-title')}>
                                        <span className={cx('detail-title-name')}>{item?.title}</span>
                                    </div>
                                    <span className={cx('detail-artist')}>{item?.artistsNames}</span>
                                </div>
                            </div>
                            <div className={cx('list-albums-album')}>
                                <span>{item?.album?.title}</span>
                            </div>
                            <div className={cx('list-albums-time')}>
                                <span>{formatTime(item?.duration)}</span>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default Albums;
