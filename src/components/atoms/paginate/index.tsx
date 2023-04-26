import React, { ReactHTMLElement, useState } from 'react'
import { Card } from '../card';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import { GrCaretNext, GrCaretPrevious } from 'react-icons/gr'

export const Paginate = () => {
    interface RootState {
      News: NewsState;
      // other properties
    }
    const {News} = useSelector((state: RootState) => state)
    console.log(News.news)
    const [itemOffset, setItemOffset] = useState(0);
  
    const endOffset = itemOffset + 5;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const pageCount = Math.ceil(News.news.length / 5);
    const currentItems = News.news?.slice(itemOffset, endOffset);
  
    // Invoke when user click to request another page.
    const handlePageClick = (e: React.FormEvent<HTMLInputElement>) => {
      const newOffset = (endOffset * pageCount) % News.news.length;
      setItemOffset(e.selected);
    };
  return (
    <>
        <Card item={currentItems} />
        <div className='grid w-full bg-slate-400'>
            <ReactPaginate
                breakLabel="..."
                nextLabel={<GrCaretNext />}
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel={<GrCaretPrevious/>}
                renderOnZeroPageCount={null}
            />
        </div>      
    </>
  )
}
