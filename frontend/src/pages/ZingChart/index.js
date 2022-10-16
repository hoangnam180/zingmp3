import { useState, useEffect } from 'react';
import { AiOutlineLine } from 'react-icons/ai';
import { BsFillPlayFill } from 'react-icons/bs';

import './Zingchart.scss';
import LineChart from '~/components/LineChart';
import * as chartSevices from '~/services/chart.sevices';
import ItemPlay from '~/components/ItemPlay';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentIndex, setData as setDataRedux } from '~/redux/actions/audio';
import Loading from '~/components/Loading';
// import ItemPlay from '~/layouts/Footer/component/PlaylistContent/ItemPlay';

function ZingChar() {
    const [data, setData] = useState([]);
    const dataSong = useSelector((state) => state.audio.data);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const result = await chartSevices.chartHome();
            setData(result);
            setLoading(false);
        };
        fetchData();
    }, []);

    const label = data?.RTChart?.chart?.times?.map((item) => {
        return `${item?.hour}`;
    });

    const dataCounter =
        data?.RTChart?.chart?.items &&
        Object.values(data?.RTChart?.chart?.items).map((item) =>
            item?.map((item) => {
                return item?.counter;
            }),
        );

    const dataChart =
        data?.RTChart?.items &&
        data?.RTChart?.items.map((item, index) => {
            if (index <= 2 && dataCounter) {
                return { label: item?.title, data: dataCounter[index] };
            }
        });

    const handleClickItem = (encodeId, index) => {
        const indexFilter = dataSong.findIndex((item) => item?.encodeId === encodeId);
        dispatch(setCurrentIndex(indexFilter));
        dispatch(setDataRedux(data?.RTChart?.items));
    };
    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <div className="zing-chart home">
                    <div className="align-items-center d-flex">
                        <h3 className="zing-chart-heading">#zingchart</h3>
                        <div className="zing-chart-play-icon">
                            <BsFillPlayFill />
                        </div>
                    </div>

                    <div className="chart" style={{ height: '400px' }}>
                        <LineChart label={label} dataChart={dataChart} />
                    </div>

                    <div className="zing-chart-playlist">
                        {data?.RTChart?.items &&
                            data?.RTChart?.items.map(
                                (item, index) =>
                                    index <= 9 && (
                                        <div className="playlist-item d-flex align-items-center" key={item.encodeId}>
                                            <div className={`playlist-position top-${index + 1}`}>{index + 1}</div>
                                            <div className="playlist-line">
                                                <AiOutlineLine />
                                            </div>
                                            <ItemPlay
                                                data={item}
                                                border={false}
                                                duration={true}
                                                handleOnClick={handleClickItem}
                                                index={index}
                                            />
                                        </div>
                                    ),
                            )}
                    </div>
                </div>
            )}
        </>
    );
}

export default ZingChar;
