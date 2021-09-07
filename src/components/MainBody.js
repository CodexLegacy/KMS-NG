import React from 'react'
import MainBodyLeft from './MainBodyLeft';
import MainBodyRight from './MainBodyRight';
import MainBodyTable from './MainBodyTable';

const MainBody = () => {
  return (
    <>
    <div className="main-body">
      <MainBodyLeft />
      <MainBodyRight />
     
      </div>
      <div class='main-body-section'>

        <MainBodyTable /> 
      </div>
    </>
  )
}

export default MainBody;
