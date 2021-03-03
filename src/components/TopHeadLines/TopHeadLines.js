import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CardUi from '../Card/Card';

const TopHeadLines = () => {
    const [articles,setArticles]= useState([]);
    // useEffect(()=>{
    //     const url = 'http://newsapi.org/v2/everything?q=tesla&from=2021-02-02&sortBy=publishedAt&apiKey=906441ec0021446bbe06fa9cc2636310';
    //     fetch(url)
    //     .then(res =>res.json())
    //     .then(data => setArticles(data.articles))
    // },[])
    useEffect(() => {
        const url = 'http://newsapi.org/v2/everything?q=tesla&from=2021-02-02&sortBy=publishedAt&apiKey=906441ec0021446bbe06fa9cc2636310';
        axios(url)
        .then(data => setArticles(data.data.articles))
    },[])
    return (
        <div>
            <h1>News : {articles.length}</h1>
            {
                articles.map(article => <CardUi article={article} />)
            }
        </div>
    );
};

export default TopHeadLines;