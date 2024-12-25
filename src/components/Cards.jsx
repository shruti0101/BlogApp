import React from 'react'

const Cards = ({post}) => {
  return (
    <div>
        <p>{post.title}</p>
        <p>
            By <span>{post.author}</span> on <span>{post.category}</span>
            </p>

            <p> Posted on <span>{post.date}</span></p>
            <p>{post.content}</p>
            <br></br>

            <div>
                {

                post.tags.map((tag,index) => {
                    return <span key={index}> {`#${tag}`}</span>
                })
                }

                
            </div>
        </div>
  )
}

export default Cards