import classNames from 'classnames/bind';
import styles from './Logo.module.scss';
import images from '~/assets/imgs';
const cx = classNames.bind(styles)

function Logo() {
    return ( 
        <div className={cx("logo")}>
            <img  src={images.logo2} alt="logo" />
            <img className={cx("logo2")} src={images.logo1} alt="logo" style={{width : "30px"}}/>

        </div>
     );
}

export default Logo;