import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
function LayOut() {
  return (
    <>
      <div className="bg-zinc-200">
        <main className="w-[1200px] max-w-full m-auto p-5">
          <NavBar />
          <Outlet />
        </main>
        <ShoppingCart />
      </div>
    </>
  );
}

export default LayOut;
