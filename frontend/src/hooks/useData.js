import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import * as songSevices from '~/services/song.sevices';

function useData(value = '') {
    const dispatch = useDispatch();
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            if (!value) return;
            const [infoSong, song] = await Promise.all([songSevices.infoSong(value), songSevices.song(value)]);
            if (infoSong && song?.hasOwnProperty(128)) {
                const newResult = { ...infoSong, url: song[128] };
                setData(newResult);
            } else {
                alert('Bài hát này hiện không khả dụng');
            }
        };
        fetchData();
    }, [value, dispatch]);

    return data;
}

export default useData;
