import React from 'react';
import { Link } from '@reach/router';
import './BreadCrumb.css'

export const Breadcrumb = () =>{
    return (
        <>
        
        <ul className="breadcrumb">
            <Link to={`/`}>Dash</Link>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li>Sold Produts</li>
      </ul> 
      </>
    )
}