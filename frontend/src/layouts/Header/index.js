import classNames from 'classnames/bind';

import style from "./Header.module.scss"
import Search from './component/Search';
import Control from './component/Control';
import Info from './component/InFo';

const cx = classNames.bind(style);

function Header() {
    return (
        <div className={cx("header")}>
            <Control/>
            <Search />
            <Info />
        </div>
    );
}

export default Header;