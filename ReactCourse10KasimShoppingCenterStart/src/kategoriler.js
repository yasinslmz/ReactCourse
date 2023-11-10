
import './App.css';
import React, { useState } from 'react';

function Kategoriler({kategoriler}) {

   
  return (
    <div className='col-md-2 mt-5 ms-5'>
      <h3 className='mb-3'>Kategoriler</h3>
        <ul className='list-group '>
        {kategoriler.map((kategori,index)=>
       (
        <li key={index} className='mt-2 list-group-item' ><a  className="link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="#">{kategori["ad"]}</a></li>
       )
       )}
        </ul>
       


    </div>
  );
}

export default Kategoriler;
