import classNames from "classnames/bind";
import style from "./PlaylistContent.module.scss"

const cx = classNames.bind(style);

function ItemPlay() {
    return (  
         <div className={cx("list-album-item",{active : false})}>
        <div className={cx("list-album-song-name",{"song-album-item" : true})}>
        <div className="flex itemcenter">
            <span className={cx("list-album-header-icon")}>
                {/* <i className="ti-music-alt"></i> */}
            </span>
            <img className={cx("song-album-item-img")} src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/2/8/9/2/2892c3530e93895b6605cea040c749e0.jpg" alt="info"/>
        </div>
        <div className={cx("detail")}>
            <div className={cx("detail-title")}>
                <span className={cx("detail-title-name")}>
                    Có Chơi Có Chịu
                </span>
            </div>
            <span className={cx("detail-artist")}>Karik, Only C</span>
        </div>
        </div>
    </div>
    );
}

export default ItemPlay;
