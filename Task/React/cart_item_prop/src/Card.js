import React from 'react';

const Card = (props) => {

  return (
    <>
      <div className='card'>
        <img src={props.img} alt="" />
        <h3>Shoes {props.title} Image</h3>
      </div>
    </>
  );
}

export default Card;
