import React, { useEffect, useState } from "react";
import {getNews} from "../Service/getNews";
import moment from 'moment';
import alanBtn from '@alan-ai/alan-sdk-web';

export default function NewData() {
    const [newsData, setNewsData] = useState([]);
    const alanKey=`278539753d360744d24afb645acf41512e956eca572e1d8b807a3e2338fdd0dc/stage`;
    const[selectOption, setSelectOption]=useState('');
    const getAllNews =async () => {
       let data=await getNews(selectOption);
       setNewsData(data.data.articles)
    }

    const selectCategory=(event)=>{
        setSelectOption(event.target.value)

    }

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: (commandData) => {
                setSelectOption(commandData.data)
            }
        });
      }, []);

    useEffect(()=>{
        getAllNews()

    },[selectOption])
    console.log(newsData)
    return (
        <div className="main"> 
            <h1>Voice News WebApp</h1>
            <div className="select">
               <label for="">Choose Category:</label>

                <select 
                    className="select-box" 
                    name="Category" id="Category" 
                    onChange={selectCategory}
                    value={selectOption}
                >
                     <option value="general">General</option>
                     <option value="health">Health</option>
                     <option value="business">Business</option>
                     <option value="sports">Sports</option>
               </select>
            </div>
            <div className="grid-main">
            {newsData?.map((news)=>{
                return(
                    <div className="grid-child">
                        <img className="news-image" src={news?.urlToImage} alt=""/>
                       <p className="news-title"> {news?.title}</p>
                       <p className="news-content">{news?.content}</p>
                       <div className="space-between">
                           <p className="news-author">Author: {news?.author? news.author:'Author name is not available'}</p>
                           <p className="news-date">Date: {moment(news?.publishedAt).format('LL')}</p> 
                        </div>                      
                       <a href={news?.url} target="blank">Read More...</a>                       
                     </div>
                )
            })}
            </div>
        </div>
    )

}