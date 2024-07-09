import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/NavBar";
import ProductCard from "./components/ProductCart";
import CartPage from "./components/cartPage";

import {
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,
  
} from 'mdb-react-ui-kit';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <MDBRow>
      <MDBCol sm='6'>
        <MDBCard>
          <MDBCardBody>
           <ProductCard/>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol sm='6'>
        <MDBCard>
          <MDBCardBody>
            <CartPage/>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>






     
        
        
          <Routes>
                  <Route path="/cart" element={<CartPage />} />
                  
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;