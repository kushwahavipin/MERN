import React from 'react';
import Card from './Card';
import img from "./img/1.jpg"
import img1 from "./img/2.webp"
import img2 from "./img/3.jpg"
import img3 from "./img/4.jpg"
import img4 from "./img/1.jpg"
import img5 from "./img/logo.jpeg"
import img6 from "./img/reviews.png"
import img7 from "./img/shoes.png"

const MainPage = () => {
  return (
    <>
      <h1 className='heading'>All Cards are here</h1>
      <div className='cardComp'>
      <Card title="0" img={img}/>
      <Card title="1" img={img1}/>
      <Card title="2" img={img2}/>
      <Card title="3" img={img3}/>
      <Card title="4" img={img4}/>
      <Card title="5" img={img5}/>
      <Card title="6" img={img6}/>
      <Card title="7" img={img7}/>
      <Card title="8" img={img}/>
      <Card title="9" img={img}/>
      <Card title="10" img={img1}/>
      <Card title="11" img={img2}/>
      <Card title="12" img={img3}/>
      <Card title="13" img={img4}/>
      <Card title="14" img={img5}/>
      <Card title="15" img={img6}/>
      <Card title="16" img={img7}/>
      <Card title="17" img={img}/>
      </div>
    </>
  );
}

export default MainPage;
