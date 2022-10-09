import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ItemInFo.module.scss'
import Image from '~/components/Image';

const cx = classNames.bind(styles);
function ItemInFo({data}) {
    return (  
        <li className={cx("info")}>
        <div className={cx("media-left")}>
        <Image src={data.thumbnail} alt="avatar" />
        </div>
        <div className={cx("media")}>
            <h4 className={cx("title")}>{data?.title}</h4>
            <div className={cx("sub-title")}>
                <span>{data?.artistsNames}</span>
                <span>{data.streamingStatus} Ngày trước</span>
            </div>
        </div>
     </li>
    );
}
ItemInFo.propTypes = {
    data : PropTypes.object
}
export default ItemInFo;