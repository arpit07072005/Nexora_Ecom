import CartPage from "./Components/Cart"
import Home from "./Components/Home"
import { BrowserRouter,Route, Routes} from "react-router-dom"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={ <CartPage/>}/>
    </Routes>
    <ToastContainer/>
      </BrowserRouter>
    </>
  )
}
export default App
