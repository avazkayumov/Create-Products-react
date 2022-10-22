import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import AddProduct from "./pages/AddProduct";
import PrivateRoute from "./components/PrivateRoute";
import Signup from "./pages/Signup";
import ReadMoreProduct from "./components/ReadMoreProduct";
 
function App() {
  return (
    <>
      <ToastContainer/>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/" element={<Home />}/>
        <Route path="/add-product" element={<PrivateRoute> <AddProduct/> </PrivateRoute>}/>
        <Route path="/products/:id" element={<ReadMoreProduct />} />
      </Routes>
    </>
  );
}

export default App;
