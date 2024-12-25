import {  useContext,useEffect } from "react";
import Blogs from "./components/Blogs";

import Header from "./components/Header";

import { AppContext } from "./Context/AppContext";
import Pagination from "./components/Pagination";


function App() {

  const {fetchData}= useContext(AppContext);
  
  useEffect(() => {
    
    fetchData(); 
  }, []);
  
  
  return (
  <div>
     
<Header></Header>

<Blogs></Blogs>

<Pagination></Pagination>

  </div>
  );
}

export default App;
