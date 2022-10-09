import classNames from "classnames/bind";

 import style from "./Playlist.module.scss";

const cx = classNames.bind(style)
function PlayItem({data}) {
    return (  
                <div className={cx("card")}>
                    <div className={cx("images")}>
                        <img src={data?.thumbnail} alt="playlist"/>
                        <div className={cx("media")}>
                            <span className={cx("btn-like",{btn:true})}><i className="ti-heart"></i></span>
                            <span className={cx("icon-play",{btn:true})}><i className="ti-control-play"></i></span>
                            <span className={cx("btn-more",{btn:true})}><i className="ti-more"></i></span>
                        </div>
                    </div>
                    <h3 className={cx("card-name")}>{data?.title}</h3>
                    <h5 className={cx("card-singer")}>{data?.sortDescription}</h5>
                </div>
    );
}

export default PlayItem;