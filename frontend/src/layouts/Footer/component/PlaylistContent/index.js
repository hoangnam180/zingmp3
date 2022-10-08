import classNames from "classnames/bind";
import PropTypes from 'prop-types';

import style from "./PlaylistContent.module.scss";
import ItemPlay from "./ItemPlay";


const cx = classNames.bind(style);

function PlaylistContent({active}) {
    return (  
        <div className={cx("footer-playlist-content",{active : active})}>
            <ItemPlay />
        </div>
    );
}
PlaylistContent.propTypes = {
    active : PropTypes.bool.isRequired
  };
export default PlaylistContent;