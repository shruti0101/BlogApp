import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const Pagination = () => {
    const {Page , totalPages, HandlePageChange}= useContext(AppContext);
    console.log({ Page, totalPages });
  return (
    <div className='  fixed bottom-0 bg-white py-2 border-t-2 border-t-gray-300 w-full inset-x-0'>
       <div className="flex gap-x-3 items-center w-11/12 max-w-2xl mx-auto">

        {
            Page > 1 &&
            (

            <button  className="rounded-md border-gray-300 border-2 px-4 py-1"
             onClick={()=> HandlePageChange (Page-1) }>
                previous
            </button>
            )
        }

        {
            Page < totalPages &&
            (

            <button className="rounded-md border-gray-300 border-2 px-4 py-1"
              onClick={() => HandlePageChange(Page + 1)}>
                Next
            </button>
            )
        }

<p className="text-sm font-semibold ml-auto">
          Page {Page} of {totalPages}
        </p>
       </div>
    </div>
  )
}

export default Pagination