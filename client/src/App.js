import { BrowserRouter, Routes, Route } from "react-router-dom"
import Books from "./pages/Books"
import Add from "./pages/Add"
import Update from "./pages/Update"
import "./style.css"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Books/>}/>
            <Route path="/add" element={<Add/>}/>
            <Route path="/update/:id" element={<Update/>}/>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
