import React from 'react'
import Header from '../Common/Header'
import Search from '../Home/Search/Search'
import ProjectDiv from './ProjectDiv'
export default function ProjectMain() {
  return (
    <>
    <Header/>
    <Search/>
    <div className="d-flex row mt-5 justify-content-center w-100">
      <ProjectDiv/>
      <ProjectDiv/>
    </div>
    </>
  )
}
