import React from 'react'

const MainHeader = () => {
  return (
    <div className="main-layout">

  
    <div className="main-header">
      <div className="main-left-row">
        <i class="fas fa-arrow-alt-circle-left"></i>
        <h3 className="header-title">KMS Nigeria Limited</h3>
      </div>

      <div className="right-row">
        <div className="dashboard">
       <i class="fas fa-sign-in-alt"></i>
        <p>Dashboard</p>
        </div>
        
        <div className="row-right">
          <div className="row-right-icons">
         <i class="fas fa-arrow-alt-circle-left"></i>
          <i class="fas fa-arrow-alt-circle-right"></i>
          <p>1/88</p>
          </div>
        </div>
      </div>
      
     
      </div>

       <div className="dist-desc">
        <p><span>Distributors</span> / <strong style={{fontWeight: 'bold', color: '2D2F39'}}>KMS Nigeria Limited</strong></p>
      </div>

      <div className="distribution-list">
        <ul className="desc-lists">
          <li className="desc-list">
            <a href="/">Overview</a>
          </li>
          <li className="desc-list">
            <a href="/">Customers</a>
          </li>
          <li className="desc-list">
            <a href="/">Users</a>
          </li>
          <li className="desc-list">
            <a href="/">Reports</a>
          </li>
          <li className="desc-list">
            <a href="/">Orders</a>
          </li>
          <li className="desc-list">
            <a href="/">Drop Points</a>
          </li>
        </ul>
      </div>
      </div>
  )
}

export default MainHeader
