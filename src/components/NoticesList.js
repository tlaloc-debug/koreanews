import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import NoticesItem from './NoticesItem';
import axios from "axios";

const NoticesListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
`;

const sampleArticle = {
    title: 'title',
    url: 'https://google.com',
};

const NoticesList = () => {

    const site="https://web.kangnam.ac.kr/";
    
    const [data, setData] = useState(null);
    useEffect(() => {
        const getData = async() => {
            const datas = await axios.get("https://all-in-one-proxy.herokuapp.com/https://connectto.herokuapp.com/koreanews");
            setData(datas.data);
        };
        getData();
    }, []);
    
    useEffect(() => {
        console.log(data);
    }, [data]);
    
    if(data === null){
        return <div>Load....</div>;
    }else{
        console.log(data);
        return (
            <div>
                {data.map((ele) => (
                    <>
                        <div>
                            <a href={site+decodeURIComponent(ele.url.slice(17))}>{ele.title}</a>
                        </div>
                    <br/>
                    </>
                ))}
            </div>  
        );
    };

    
    
};

export default NoticesList;