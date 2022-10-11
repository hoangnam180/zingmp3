import { useState, useEffect } from 'react';
import * as songSevices from '~/services/songSevices';

function useData(value) {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const [infoSong, song] = await Promise.all([songSevices.infoSong(value), songSevices.song(value)]);
            if (infoSong && song?.hasOwnProperty(128)) {
                const newResult = { ...infoSong, url: song[128] };
                const newArr = [newResult];
                setData(newArr);
            } else {
                alert('Bài hát này hiện không khả dụng');
            }
        };
        fetchData();
    }, [value]);

    return data;
}

export default useData;
