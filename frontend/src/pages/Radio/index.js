import './Radio.scss';
import img from '~/assets/imgs';
import CardItem from '~/components/CardItem';
import { useEffect } from 'react';
import * as radioSevices from '~/services/radio.sevices';
import { useState } from 'react';
import Playlist from '~/components/Playlist';
import Loading from '~/components/Loading';

const Radio = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const result = await radioSevices.radio();
            setData(result.items);
            setLoading(false);
        };
        fetchData();
    }, []);
    const dataPodcast = data.filter((item) => item.sectionType === 'podcast');
    return (
        <>
            {!loading ? (
                <div className="radio home">
                    <div className="row-radio">
                        {data &&
                            data.length > 0 &&
                            data[0].items.map((list) => (
                                <div className="col-radio" key={list.encodeId}>
                                    <div className="radio-box">
                                        <div className="radio-top">
                                            <img className="radio-top-img" src={img.radio1} alt="radio" />
                                            <img
                                                className="radio-top-live-icon"
                                                src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/live-tag.svg"
                                                alt="live"
                                            />
                                            <CardItem data={list} card={false} />
                                        </div>
                                        <div className="radio-bottom">{list.title}</div>
                                    </div>
                                </div>
                            ))}
                    </div>
                    {dataPodcast &&
                        dataPodcast.length > 0 &&
                        dataPodcast.map((item, index) => {
                            return <Playlist key={index} title={item.title} data={item.items} />;
                        })}
                </div>
            ) : (
                <Loading />
            )}
        </>
    );
};

export default Radio;
