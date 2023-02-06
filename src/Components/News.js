import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import NewsItems from './Newsitems';

export const News = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState({});

    const fetchNews = async () => {
        try {
            setIsLoading(true);
            const url = "https://techcrunch.com/wp-json/wp/v2/posts?per_page=80&context=embed";
            const response = await fetch(url);
            const responseData = await (response.json());
            setIsLoading(false);
            setData(responseData);
            console.log(responseData);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchNews();
    }, [])

    return (
        <div>
            <h2 className="my-4 text-center" >Welcome to News Items</h2>
            {isLoading && <Spinner />}
            <div className="row">
                {!isLoading && data.map((article) => {
                    return (
                        <div className="col-md-4" key={article.link}>
                            <NewsItems date={article.date} link={article.link} title={article.title.rendered} 
                                description={article.excerpt.rendered} image = {article.jetpack_featured_media_url}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default News;