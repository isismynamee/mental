import moment from 'moment'
import React from 'react'

export const Card = ({
    item
}: CardInterface) => {
  return (
    <div className='flex gap-3'>
    {item.map((data, index) => (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img src={data.urlToImage} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {data.title}
                </h2>
                <p>{data.description ?? "-"}</p>
                <div className="card-actions justify-end">
                <span className="badge badge-outline">{moment(data.publishedAt).format("DD-MM-YYY")}</span>
                </div>
            </div>
        </div>
    ))}
    </div>
    )
}
