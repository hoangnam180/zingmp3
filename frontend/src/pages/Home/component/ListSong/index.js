import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setCurrentIndex, setData } from '~/redux/actions/audio';
import style from './ListSong.module.scss';
import ItemInFo from '~/components/ItemInFo';
const cx = classNames.bind(style);

function ListSong({ title, data }) {
    let navigate = useNavigate();
    const [tab, setTab] = useState('song');
    const dispatch = useDispatch();

    const handlePlaylist = (id) => {
        if (tab === 'song') {
            const index = data[tab]?.findIndex((item) => item?.encodeId === id);
            dispatch(setData(data[tab]));
            dispatch(setCurrentIndex(index));
        } else {
            dispatch(setCurrentIndex(0));
            navigate(`/album/${id}`);
        }
    };

    return (
        <div className="grid wide">
            <h2 className={cx('page-title')}>{title}</h2>
            <div className={cx('genre-select')}>
                <div>
                    <button className={cx('button', { active: tab === 'song' })} onClick={() => setTab('song')}>
                        Bài hát
                    </button>
                    <button className={cx('button', { active: tab === 'album' })} onClick={() => setTab('album')}>
                        Album
                    </button>
                </div>
                <p className={cx('discovery-btn')}>
                    Tất cả <i className="ti-angle-right"></i>
                </p>
            </div>
            <div className="row">
                {data[tab].map((item, index) => {
                    if (index < 12)
                        return (
                            <div
                                onClick={() => {
                                    handlePlaylist(item?.encodeId);
                                }}
                                key={item.encodeId}
                                className="col c-6 l-4 l-2-4"
                            >
                                <ItemInFo key={item?.encodeId} data={item} index={index} />
                            </div>
                        );
                })}
            </div>
        </div>
    );
}

export default ListSong;
