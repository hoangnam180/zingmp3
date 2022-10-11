import classNames from 'classnames/bind';
import style from './ListSong.module.scss';

import ItemInFo from '~/components/ItemInFo';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setData } from '~/redux/actions/audio';
import * as songSevices from '~/services/songSevices';
import useData from '~/hooks/useData';

const cx = classNames.bind(style);

function ListSong({ title, data }) {
    const [tab, setTab] = useState('song');
    const [id, setId] = useState('');

    const dispatch = useDispatch();

    const handleId = (id) => {
        setId(id);
    };

    const dataHook = useData(id);
    
    useEffect(() => {
        dispatch(setData(dataHook));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dataHook]);

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
                                onClick={() => handleId(item?.encodeId)}
                                key={item.encodeId}
                                className="col c-6 l-4 l-2-4"
                            >
                                <ItemInFo key={item?.encodeId} data={item} />
                            </div>
                        );
                })}
            </div>
        </div>
    );
}

export default ListSong;
