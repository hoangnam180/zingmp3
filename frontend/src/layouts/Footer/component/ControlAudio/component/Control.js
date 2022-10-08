import classNames from "classnames/bind";
import style from "~/layouts/Footer/Footer.module.scss";
import PropTypes from 'prop-types';

const cx = classNames.bind(style);

function Control({
    isRandom
    ,handleNextSong
    ,handlePrevSong
    ,handleRandom
    ,handlePlay
    ,isRepeat
    ,handleRepeat
    ,isPlay}) 
    {
    return ( 
        <div className={cx("controls")}>
        <span className={cx("btn__control")} style={{opacity : isRandom ? 1 : .6}} onClick={handleRandom}>
             <i className="fa-solid fa-shuffle"></i>
        </span>
        <span className={cx("btn__control")} onClick={handlePrevSong}>
            <i className="fa-solid fa-backward"></i>
        </span>
        { isPlay ? 
            <span className={cx("btn__control")}onClick={handlePlay}>
                <i className="fa-solid fa-pause"></i>
            </span> :  
            <span className={cx("btn__control")} onClick={handlePlay}>
                <i className="fa-solid fa-play"></i>
            </span>
        }
        
        <span className={cx("btn__control")} onClick={handleNextSong}>
             <i className="fa-solid fa-forward"></i>
        </span>
        <span className={cx("btn__control")} style={{opacity : isRepeat ? 1 : .6}} onClick={handleRepeat}>
            <i className="fa-solid fa-repeat"></i>
        </span>
    </div>
     );
}
Control.propTypes = {
    isRandom : PropTypes.bool.isRequired,
    isPlay : PropTypes.bool.isRequired,
    isRepeat : PropTypes.bool.isRequired,
    handleNextSong : PropTypes.func.isRequired,
    handlePrevSong : PropTypes.func.isRequired,
    handleRandom : PropTypes.func.isRequired,
    handlePlay : PropTypes.func.isRequired,
    handleRepeat : PropTypes.func.isRequired,
}
export default Control;