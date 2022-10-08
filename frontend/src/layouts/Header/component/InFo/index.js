import classNames from "classnames/bind";
import style from "./InFo.module.scss";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { Theme } from '~/components/Icons';
import Image from '~/components/Image';

const cx = classNames.bind(style)

function Info() {
    return ( 
        <div className={cx("header-right")}>
                  <Tippy delay={[0, 50]} content="Chủ đề" placement="bottom">
                    <div className={cx("circle")}><Theme/></div>                               
                 </Tippy>
                 <Tippy delay={[0, 50]} content="Nâng cấp VIP" placement="bottom">
                    <div className={cx("circle")}><span><i className="fa-regular fa-gem"></i></span></div>
                 </Tippy>
                 <Tippy delay={[0, 50]} content="Tải lên" placement="bottom">
                    <div className={cx("circle")}><span><i className="fa-solid fa-upload"></i></span></div>
                 </Tippy>
                 <Tippy delay={[0, 50]} content="Cài đặt" placement="bottom">
                    <div className={cx("circle")}><span><i className="fa-solid fa-gear"></i></span></div>
                 </Tippy>
                <div className={cx("circle")}><Image className={cx("check-btn-img")} src="https://s120-ava-talk-zmp3.zmdcdn.me/8/b/9/3/10/120/34dc3b79fce0b96839a43e2cf66ddfde.jpg" alt=""/></div>
            </div>
     );
}

export default Info;