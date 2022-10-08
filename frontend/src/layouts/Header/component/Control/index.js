import classNames from "classnames/bind";
import style from "./Control.module.scss";

const cx = classNames.bind(style)
function Control() {
    return (  
        <>
            <button small="true" className={cx("btn-header")}><i className='ti-arrow-left'></i></button>
            <button small="true" className={cx("btn-header")}><i className='ti-arrow-right'></i></button>
        </>
    );
}

export default Control;