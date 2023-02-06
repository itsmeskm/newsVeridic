import React from 'react'
import '../App.css'

export default function Newsitems(props) {
    const { link, title, description, image, date } = props;
    return (
        <div className='container my-4'>
            <div className="card m-3" style={{ width: "18rem" }}>
                <img className="card-img-top img-fluid" src={image} alt="Not found" />
                <div className="card-body">
                    <h5 className="card-title">{title ? title : "News Not Found"}</h5>
                    <p className="card-text"> {description ? description : "Description Not Found"}</p>
                </div>
                <div className="card-footer row">
                    <small className="text-muted col-md-9">{date}</small>
                    <a href={link} className="btn btn-sm btn-success col-md-3">Details</a>
                </div>
            </div>
        </div>
    )
}
