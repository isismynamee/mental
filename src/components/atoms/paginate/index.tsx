import React, { ReactHTMLElement, useState } from 'react'
import { Card } from '../card';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import { GrCaretNext, GrCaretPrevious } from 'react-icons/gr'

export const Paginate = () => {
    interface RootState {
      News: any;
    }
    const {News} = useSelector((state: RootState) => state)
    const [itemOffset, setItemOffset] = useState(0);
  
    const endOffset = itemOffset + 3;
    const pageCount = Math.ceil(News.news.length / 3);
    const currentItems = News.news?.slice(itemOffset, endOffset);
  
    const handlePageClick = (e: React.FormEvent<HTMLInputElement>) => {
      setItemOffset(e.selected);
    };
  return (
    <>
        <Card item={currentItems} />
        <div className='grid w-full'>
            <ReactPaginate
                className="flex bg-blue-400 border-2 border-black my-4 py-1 px-4 rounded-lg justify-between mx-auto w-6/12 items-center"
                breakLabel="..."
                nextLabel={<GrCaretNext />}
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                activeLinkClassName="text-white"
                previousLabel={<GrCaretPrevious/>}
                renderOnZeroPageCount={null}
            />
        </div>      
    </>
  )
}
