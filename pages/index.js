import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavigationBar } from '../components/NavBar';
import { Maps } from '../components/map';
import { Search } from '../components/SearchBar';
import Cards from '../components/Cards';


export default function index() {
  return (
    <>
    
    <NavigationBar/>
    <Search/>
    <Maps/>
    <Cards/>
    </>
  )
}

