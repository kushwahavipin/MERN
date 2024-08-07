import React from 'react';
import { Link } from 'react-router-dom';
import iconCart from "../assets/images/iconCart.png";


const ProductCart = (props) => {
    
    const {id,name,price,image,slug}=props.data;
  return (
    <div className='bg-white p-5 rounded-xl shadow-sm'>
      <Link to={slug}>
        <img src={image} alt={name} className='w-full h-80 object-cover object-top drop-shadow-[0_80px_30px]_#0007'/>
      </Link>
      <h3 className='text-2xl py-3 text-center font-medium'>{name}</h3>
      <div className='flex justify-between items-center'>
        <p>
            $<samp className='text-2xl font-medium'>{price}</samp>

        </p>
        <button className='bg-red-500 text-white px-4 py-2 rounded-xl hover
        hover:bg-red-600 flex gap-2'> <img src={iconCart} alt="Cart" className='w-5' />Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCart;
