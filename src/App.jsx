import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Link } from "react-router-dom"
import SearchParams from "./SearchParams"
import Details from "./Details"

function App() {
  return (
    <div>
      <BrowserRouter>
        <header> 
        <Link to="/">Adopt Me!</Link>
        </header>
        <Routes>
        { /* The :id means that this is a variable that is passed to the url. This id can be 
          acessed inside of the details page.*/}
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
    </BrowserRouter>
    </div>
  )
    
}

export default App
