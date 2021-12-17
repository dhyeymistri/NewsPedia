import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor() {
        super();
        // console.log("Hi! I am constructor.");
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }
    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=ab8325aae2e2436ab9aec6002f2e7172&page=1&pageSize=18";
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({articles: parseData.articles, totalResults: parseData.totalResults});
    }
    HandlePrevClick=async()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=ab8325aae2e2436ab9aec6002f2e7172&page=${this.state.page-1}&pageSize=18`;
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parseData.articles
        })
    }
    HandleNextClick=async()=>{
        if(this.state.page+1>(Math.ceil(this.state.totalResults/18))){

        }
        else{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=ab8325aae2e2436ab9aec6002f2e7172&page=${this.state.page+1}&pageSize=18`;
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
            page: this.state.page + 1,
            articles: parseData.articles
        })
        }
    }
    render() {
        return (
            <div className='container my-3'>
                <h1>NewsPedia - Top Headlines</h1>
                <div className="row my-4">
                {this.state.articles.map((element) => {
                    return <div className="col-md-4" key={element.url}>
                        <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                    </div>
                })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.HandlePrevClick}> &larr; Previous</button>
                    <button disabled={(this.state.page)===(Math.ceil(this.state.totalResults/18))}type="button" className="btn btn-dark" onClick={this.HandleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
