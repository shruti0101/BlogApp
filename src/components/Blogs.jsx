import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Spinner from "./Spinner";
import Cards from "./Cards";


const Blogs = () => {
  const { loading, Posts } = useContext(AppContext); 


  return (
    <div className="my-[100px]">
        <div  className="flex flex-col gap-y-10 my-4">

      {loading ? (
        <Spinner />
      ) : Posts.length === 0 ? ( 
        <div>
          <p className="font-bold text-3xl text-center my-[200px]">No posts found</p>
        </div>
      ) : (
        Posts.map((post)=>(
           <Cards key={post.id} post={post}></Cards>

        ))
      )}
        </div>
    </div>
  );
};

export default Blogs;
