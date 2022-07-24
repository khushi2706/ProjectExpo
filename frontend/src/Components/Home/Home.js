import React from 'react'
import Header from '../Common/Header'
import Search from './Search/Search'
export default function Home() {
  return (
    <>
    <Header/>
    <div className="container-search-box-title">Find, learn and grow</div>
    <Search title="Search Project..."/>
    </>
  )
}
