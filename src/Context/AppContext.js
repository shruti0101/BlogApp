import { createContext, useEffect, useState } from "react";
import { baseUrl } from "../BlogUrl";
// creation of context
 export const AppContext = createContext();

 export default function AppContextProvider({children}){

  const [ totalPages , SetTotalPages] = useState(null);
  const [loading , SetLoading] = useState(false);
  const [Posts, SetPosts] = useState([]);
  const [Page , SetPage] = useState(1);

  // now filling the data before providing

  async function fetchData(page=1) {
    SetLoading(true);
    let url=`${baseUrl}?page=${page}`
    
    try{
        let response = await fetch(url);
      
        let data = await response.json();
       SetPosts(data.posts);
       SetPage(data.page);
       SetTotalPages(data.totalPosts);
     
 
    }

    catch (error) {
      console.log("Error in Fetching BlogPosts", error);
      SetPage(1);
      SetPosts([]);
      SetTotalPages(null);
    }
    SetLoading(false);
  }

  useEffect(() => {
    
    fetchData(); 
  }, []);
  

 
function HandlePageChange(newpage){
SetPage(newpage);
fetchData(newpage);
}






const value={
  Posts,
  SetPosts,
  totalPages ,
  SetTotalPages,
  loading,
  SetLoading,
  Page,
  SetPage,
  HandlePageChange,
  fetchData
};


// providing the context
return (
  <AppContext.Provider value={value}>
  {children}
  </AppContext.Provider>
)

 }





