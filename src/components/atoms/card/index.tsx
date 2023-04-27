import { image } from '@/images'
import moment from 'moment'
import Image from 'next/image'
import React from 'react'
// styles/globals.css
import 'tailwindcss/tailwind.css'


export const Card = ({
    item
}: CardInterface) => {
  return (
    <div className='flex gap-3'>
    {item.map((data: any, index: number) => (
        <div key={index} onClick={() => window.open(data.url)} className="card grid w-96 h-90 bg-base-100 shadow-xl">
            <figure>
                <Image src={data?.urlToImage ?? image.logo} alt={data?.title} width={200} height={200} />
            </figure>
            <div className="card-body">
                <span className="text-md card-title">
                    {data?.title ?? ""}
                </span>
                <p>{data?.description ?? "-"}</p>
                <div className="card-actions justify-between">
                <span className="badge badge-outline">{data?.author ?? ""}</span>
                <span className="badge badge-outline">{moment(data?.publishedAt).format("DD-MM-YYY")}</span>
                </div>
            </div>
        </div>
    ))}
    </div>
    )
}
