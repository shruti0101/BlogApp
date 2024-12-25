import React from 'react'

const Cards = ({post}) => {
  return (
    <div className="max-w-3xl mx-auto w-11/12">
        <p className="font-bold text-lg cursor-pointer hover:underline">{post.title}</p>
        <p className="text-sm my-1">
            By <span  className="italic">{post.author}</span> on <span className="font-semibold underline cursor-pointer">{post.category}</span>
            </p>

            <p className="text-sm"> Posted on <span >{post.date}</span></p>
            <p className="mt-4 mb-2">{post.content}</p>
            <br></br>

            <div  className="flex flex-wrap gap-x-2 items-center">
                {

                post.tags.map((tag,index) => {
                    return <span className="text-blue-700 font-semibold text-xs underline cursor-pointer"key={index}> {`#${tag}`}</span>
                })
                }

                
            </div>
        </div>
  )
}

export default Cards