import classNames from 'classnames/bind';
import styles from './Logo.module.scss';
import images from '~/assets/imgs';
const cx = classNames.bind(styles)

function Logo() {
    return ( 
        <div className={cx("logo")}>
            <img src={images.logo2} alt="logo" />
        </div>
     );
}

export default Logo;