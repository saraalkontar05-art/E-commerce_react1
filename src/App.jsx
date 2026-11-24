import Home from "./Pages/Home";
import {CartProvider} from "./Context/CartContext";
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  

  return (
    <CartProvider>
       <Home/>
    </CartProvider>
    
  )
}

export default App
