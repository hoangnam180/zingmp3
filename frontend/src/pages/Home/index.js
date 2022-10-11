import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import style from './Home.module.scss';
import * as searchServices from '~/services/home.sevices';
import Slider from './component/Slider';
import Playlist from '~/components/Playlist';
import ListSong from './component/ListSong';
import Loading from '~/components/Loading';

const cx = classNames.bind(style);

function Home() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const result = await searchServices.home();
            setData(result.items);
            setLoading(false);
        };
        fetchData();
    }, []);

    // dataFilter
    const dataFilter =
        data &&
        data.length > 0 &&
        data
            .filter(
                (x) =>
                    x.items?.length > 0 &&
                    !((x.sectionId === 'hSlider' && x.sectionType === 'banner') || x.sectionType === 'event'),
            )
            .map((item, index) => {
                const newId = index + 1;
                item['id'] = newId;
                return item;
            });
    // temp Page

    return (
        <div className={cx('wrapper')}>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <Slider data={data} />
                    {/* new-release */}
                    {dataFilter.length > 0 &&
                        dataFilter.map((item, index) => {
                            if (item?.title && item.sectionType !== 'new-release' && item.sectionId !== 'hNewrelease') {
                                return <Playlist key={item?.id} title={item.title} data={item.items} />;
                            } else if (item?.sectionId === 'hNewrelease') {
                                return <Playlist key={item.id} type={true} data={item.items} title={item.title} />;
                            } else if (item.sectionId === 'hAlbum') {
                                return <Playlist key={item.id} data={item.items} />;
                            } else if (item?.sectionType === 'new-release') {
                                return <ListSong key={item?.id} data={item.items[0]} title={item.title} />;
                            } else {
                            }
                        })}
                </>
            )}
        </div>
    );
}

export default Home;
