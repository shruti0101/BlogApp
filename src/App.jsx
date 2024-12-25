import "./App.css";
import Blogs from "./components/Blogs";
// import Cards from "./components/Cards";
import Header from "./components/Header";
import Pagination from "./components/Pagination";

function App() {
  
  return (
  <div>
     
<Header></Header>
{/* <Cards></Cards> */}
<Blogs></Blogs>
<Pagination></Pagination>
  </div>
  );
}

export default App;
