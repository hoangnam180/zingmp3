import { NavLink,Link } from "react-router-dom";
import classNames from 'classnames/bind';
import styles from './NavbarItem.module.scss';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles)
function NavbarItem({data,link}) {
    return (  
        <li className={cx("nav-item")}>
             {
                link ? (
                    <Link className={cx("nav-item-link")} to={data?.path ? data.path : "/404"}>
                        <div className={data.icon || data.img ? cx("flex itemcenter") :"" }>
                        {data.img ? <img src={data?.img} className={cx(`${data.img ? "img" : "not-img"}`)} alt="icon" /> : <span className={cx("nav-icon")}><i className={data?.icon}></i></span>}
                        <span className={cx("nav-title")}>{data?.title}</span>
                        </div>
                        <span className={cx("icon-hover")}><i className='ti-control-play'></i></span>
                    </Link>
                ) : (
                    <NavLink className={(nav) => cx('nav-item-link', { active: nav.isActive })} to={data?.path ? data.path : "/404"}>
                        <div className={data.icon || data.img ? cx("flex itemcenter") :"" }>
                        {data.img ? <img src={data?.img} className={cx(`${data.img ? "img" : "not-img"}`)} alt="icon" /> : <span className={cx("nav-icon")}><i className={data?.icon}></i></span>}
                        <span className={cx("nav-title")}>{data?.title}</span>
                        </div>
                        <span className={cx("icon-hover")}><i className='ti-control-play'></i></span>
                    </NavLink>
                )
             }
        </li>
    );
}
NavbarItem.propTypes ={
    data : PropTypes.object.isRequired,
    link : PropTypes.bool
}
export default NavbarItem;
