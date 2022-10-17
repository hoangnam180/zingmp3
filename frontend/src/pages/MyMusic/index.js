import { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './MyMusic.css';

const MyMusic = () => {
    const handleClickTitle = (e) => {
        const mymusicTitleBorder = document.querySelector('.mymusic-title-border');
        mymusicTitleBorder.style.width = e.target.offsetWidth + 'px';
        mymusicTitleBorder.style.left = e.target.offsetLeft + 'px';
    };
    useEffect(() => {
        document.title = 'Nhạc cá nhân | Xem bài hát, Album';
    }, []);
    return (
        <div className="mymusic home">
            <h2 className="">Thư Viện</h2>
            <div className="mymusic-title-group">
                <ul>
                    <li>
                        <Link onClick={handleClickTitle} to="/mymusic/song">
                            Bài hát yêu thích
                        </Link>
                    </li>
                    <li>
                        <Link onClick={handleClickTitle} to="/mymusic/podcast">
                            Podcast
                        </Link>
                    </li>
                    <li>
                        <Link onClick={handleClickTitle} to="/mymusic/album">
                            Album
                        </Link>
                    </li>
                    <li>
                        <Link onClick={handleClickTitle} to="/mymusic/mymusicmv">
                            Mv
                        </Link>
                    </li>
                </ul>
                <div className="mymusic-title-border"></div>
            </div>
            <Outlet />
        </div>
    );
};

export default MyMusic;
