import styles from './SideBar.module.scss';
import classNames from 'classnames/bind';

import Logo from './components/Logo/Logo';
import {default as config} from "~/config/routes"
import ListMain from './components/ListMain';
import images from '~/assets/imgs';

const cx = classNames.bind(styles)


const menuMain = [
    {title : "Cá Nhân",path : config.my_music,icon:"fa-solid fa-book"},
    {title : "Khám Phá",path : config.home,icon:"fa-solid fa-compact-disc"},
    {title : "#zingchart",path : config.zing_chart,icon:"fa-solid fa-chart-simple"},
    {title : "Radio",path : config.radio,icon:"fa-solid fa-radio"},
    {title : "Theo dõi",path : config.follow,icon:"fa-solid fa-book"}
]
const menuScroll = [
    {title : "Nhạc Mới",path : config.newmusic,icon:"fa-solid fa-music"},
    {title : "Thể Loại",path : config.category,icon : "fa-solid fa-icons"},
    {title : "Top 100",path : config.top100,icon:"fa-solid fa-star"},
    {title : "MV",path : config.mv,icon:"fa-solid fa-record-vinyl"},
]
const menuLibrary = [
    {title : "Thư Viện"},
    {title : "Bài Hát",img : images.musics },
    {title : "Playlist",img : images.playlist },
    {title : "Gần Đây",img : images.history },
]


function SideBar() {
    return (
        <aside className={cx("sidebar")}>
            <Logo />
            <div>
                <div className={cx("nav-main")}>
                    <ListMain data={menuMain}/>
                </div>
                <div className={cx("nav-divide")}>
                </div>
                <div className={cx("nav-scroll")}>
                    <ListMain data={menuScroll}/>
                    <div className={cx("nav-adv")}>
                        <span className={cx("nav__adv-title")}>Nghe nhạc không quảng cáo cùng kho nhạc VIP</span>
                        <button>NÂNG CẤP VIP</button>
                    </div>
                    <div className={cx("nav-library ")}>
                        <ListMain link={true} data={menuLibrary}/>
                    </div>
                </div>
                <div className={cx("nav-new-playlist")}>
                    <i className='ti-plus'></i>
                    <span className={cx("nav-title")}>Tạo playlist mới</span>
                </div>
            </div>
        </aside>
    );
}

export default SideBar;