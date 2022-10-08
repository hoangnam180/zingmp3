import classNames from "classnames/bind"
import style from "./Search.module.scss"

import {useState,useRef,useEffect} from "react"
import SuggestedAccounts from "~/components/SuggestedAccounts"
import useDebounce from "~/hooks/useDebounced"
import * as SearchServices from "~/services/searchSevices"
const cx = classNames.bind(style)

function Search() {
    const [keywords,setKeyWord] = useState("")
    const [active,setActive] = useState(false)
    const [valueResult,setValueResult] = useState([])
    const [title,setTitle] = useState("")
    const searchRef = useRef()

    const debouncedValue = useDebounce(keywords,300)

      useEffect(() => {
        if (!debouncedValue.trim()) {
            SearchServices.searchRecommend()
            .then(data=>{
                setTitle("Đề xuất cho bạn")
                setValueResult(data)
            })
            return;
        }
    
        const fetchApi = async () => {
            const result = await SearchServices.searchSuggestion(keywords)
            if(result){ 
                setTitle("Từ khóa liên quan")
                setValueResult(result)
            }
        }

        fetchApi()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedValue])

    useEffect(() => {
        function handleClickOutside(event) {
          if (searchRef.current && !searchRef.current.contains(event.target)) {
                setActive(false)
          }
        }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [searchRef]);
      
    return (  
        <div className={cx("search")} ref={searchRef}>
                <button className={cx("icon-search")}><i className='ti-search'></i></button>
                <input 
                    value={keywords}
                    onChange={(e)=>setKeyWord(e.target.value)}
                    className={cx("search-input",{active :  active})} 
                    type="text" 
                    placeholder="Nhập tên bài hát, nghệ sĩ hoặc MV..."
                    onFocus={ () => { setActive(true) } }
                />
                {keywords && <button className={cx("icon-close")} onClick={()=>setKeyWord("")}><i className='ti-close'></i></button>}
                <SuggestedAccounts active={active} data={valueResult} title={title}/>
        </div>
    )
}

export default Search
