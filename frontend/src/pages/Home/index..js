import classNames from "classnames/bind"
import {useEffect, useState} from "react"

import style from "./Home.module.scss"
import * as searchServices from "~/services/homeSevices"
import Slider from "./component/Slider"
import Playlist from "~/components/Playlist"
import ListSong from "./component/ListSong"
const cx = classNames.bind(style)
function Home() {
    const [data,setData] = useState([]);

    useEffect(() => {
        searchServices.home()
        .then(data=>setData(data.items))
    }, []);
    
    // dataFilter
    const dataFilter = 
    data && data.length > 0 && 
    data.filter((x)=>x.items?.length > 0  && 
    !(x.sectionId === "hSlider" &&  x.sectionType === "banner" || x.sectionType==="event"))
    .map((item,index) =>{
        const newId = index + 1;
        item["id"] = newId;
        return item;
    });
    // temp Page
    console.log(dataFilter);

    return (    
        <div className={cx("wrapper")}>
            <Slider data={data}/>

            {/* new-release */}
            {dataFilter.length > 0 && dataFilter.map((item,index)=>{
                    if(item?.title && item.sectionType !== "new-release" && item.sectionId !== "hNewrelease"){
                         return <Playlist key={item?.id} title={item.title} data={item.items}/>
                    }
                    else if (item?.sectionId === "hNewrelease") {
                        
                    }
                    else if (item?.sectionType === "new-release") {
                          return <ListSong key={item?.id} data={item.items[0]} title={item.title}/>
                    } 
                    else {
                        
                    }
            })}
        </div>
    );
}

export default Home;

  