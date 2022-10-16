import './Radio.scss';
import img from '~/assets/imgs';
import CardItem from '~/components/CardItem';

const airRadio = [
    {
        id: 1,
        name: 'Nhạc mới mỗi ngày',
        image: 'https://mp3-react-vinhbuihd.vercel.app/images/radio-5.jpg',
    },
    {
        id: 2,
        name: "Artist's story",
        image: 'https://mp3-react-vinhbuihd.vercel.app/images/radio-5.jpg',
    },

    {
        id: 3,
        name: 'Wazzup',
        image: 'https://mp3-react-vinhbuihd.vercel.app/images/radio-5.jpg',
    },
    {
        id: 4,
        name: 'Chạm x sao',
        image: 'https://mp3-react-vinhbuihd.vercel.app/images/radio-5.jpg',
    },
];

const newRadio = [
    {
        id: 1,
        name: 'Khi em lớn',
        image: 'https://mp3-react-vinhbuihd.vercel.app/images/radio-5.jpg',
    },
    {
        id: 2,
        name: 'All about Women',
        image: 'https://mp3-react-vinhbuihd.vercel.app/images/radio-5.jpg',
    },

    {
        id: 3,
        name: 'Thủ thỉ thầm thì',
        image: 'https://mp3-react-vinhbuihd.vercel.app/images/radio-5.jpg',
    },
    {
        id: 4,
        name: 'Đàn ông học',
        image: 'https://mp3-react-vinhbuihd.vercel.app/images/radio-5.jpg',
    },
];
const radio = [
    {
        id: 1,
        title: 'XONE Radio',
        image: 'https://mp3-react-vinhbuihd.vercel.app/images/radio-5.jpg',
    },
    {
        id: 2,
        title: 'V-POP',
        image: 'https://mp3-react-vinhbuihd.vercel.app/images/radio-5.jpg',
    },

    {
        id: 3,
        title: 'On Air',
        image: 'https://mp3-react-vinhbuihd.vercel.app/images/radio-5.jpg',
    },
    {
        id: 4,
        title: 'Bolero',
        image: 'https://mp3-react-vinhbuihd.vercel.app/images/radio-5.jpg',
    },
    {
        id: 5,
        title: 'Chạm',
        image: 'https://mp3-react-vinhbuihd.vercel.app/images/radio-5.jpg',
    },
];

const Radio = () => {
    return (
        <div className="radio home">
            <div className="card-list-group">
                <div className="row">
                    {radio.map((list) => (
                        <div className="col c-6 m-4 l-2-4" key={list.id}>
                            <div className="radio-box" key={list.id}>
                                <div className="radio-top">
                                    <img className="radio-top-img" src={img.radio1} alt="radio" />
                                    <img
                                        className="radio-top-live-icon"
                                        src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/live-tag.svg"
                                        alt="live"
                                    />
                                    <CardItem data={list} />
                                </div>
                                <div className="radio-bottom">{list.title}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="card-list-group">
                <h3 className="h3-heading">On Air</h3>
                <div className="row">
                    {airRadio.map((list) => (
                        <div className="col c-6 m-4 l-3" key={list.id}>
                            <CardItem data={list} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="card-list-group">
                <h3 className="h3-heading">Chương Trình Mới</h3>
                <div className="row">
                    {newRadio.map((list) => (
                        <div className="col c-6 m-4 l-3" key={list.id}>
                            <CardItem data={list} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Radio;
