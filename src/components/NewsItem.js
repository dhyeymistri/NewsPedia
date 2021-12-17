import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description, imageUrl, newsUrl}= this.props;
        return (
            <div className='my-3'>
                <div className="card" style={{width: "18rem"}}>
                    <img src={imageUrl?imageUrl:"https://as2.ftcdn.net/v2/jpg/01/67/74/79/1000_F_167747932_NE1da5cf9FM30QExtlFjbmk9ypItoJl2.jpg"} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark btn-sm">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
