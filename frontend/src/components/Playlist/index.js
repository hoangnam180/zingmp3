import classNames from "classnames/bind";
import PropTypes from 'prop-types';
import SliderWrap from "../SliderWrap";

 import style from "./Playlist.module.scss";

const cx = classNames.bind(style)

 function Playlist({title,data}) {
    return (  
        <div className={cx("playlist",{grid:true,wide:true})}>
        <h2 className={cx("page-title")}>{title}</h2>
        <div className="row no-wrap ">
         <SliderWrap data={data}/>
        </div>
    </div>
    );
 }
 
 Playlist.propTypes = {
    title : PropTypes.string,
    data: PropTypes.array,
 }
 export default Playlist;