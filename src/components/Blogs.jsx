import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Spinner from "./Spinner";
import Cards from "./Cards";


const Blogs = () => {
  const { loading, Posts } = useContext(AppContext); 


  return (
    <div>
      {loading ? (
        <Spinner />
      ) : Posts.length === 0 ? ( 
        <div>
          <p className="text-bold text-2xl flex justify-center mt-[75px] ">No posts found</p>
        </div>
      ) : (
        Posts.map((post)=>(
           <Cards key={post.id} post={post}></Cards>
           
        ))
      )}
    </div>
  );
};

export default Blogs;
