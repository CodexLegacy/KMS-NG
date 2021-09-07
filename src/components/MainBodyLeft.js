import React from 'react'

const MainBodyLeft = () => {
  return (
    <>
    <div className="main-body-left">

     
      <div className="main-body-left-header">
          <p>Distributors Overview</p>
          <div className="main-body-left-header-icon">

          <a href="">
              <i class="fas fa-pen"></i>
            </a>
            Edit
          </div>
          
        </div>
        
        <div className="header-desc">
          <div className="header-desc-text">
            <p className="fist-pa">KMS Nigeria Limited</p>
            <p>LAG/SOU/002</p>
            <p>Created Dec. 21, 2019</p>
          </div>
          
            <button className="green-btn">Active</button>
        </div>

        <div className="sales-reviews">
          <div className="total-sales">
            <p  className="total-sales-title">Total Sales</p>
            <p className="total-sales-price">#10,040,888.03</p>
          </div>

          <div className="total-sales">
            <p className="total-sales-title">Total Orders</p>
            <p className="total-sales-price">402</p>
          </div>

          <div className="total-sales">
            <p className="total-sales-title">Average Order Value</p>
            <p className="total-sales-price">#24,977.33</p>
          </div>

        </div>

        <footer className='main-body-left-footer'>
          <h1 className="footer-title">
            Contact Details
          </h1>

          <div className="footer-row">
            <div className="footer-leftside">
              <div className="info">
                <i class="fas fa-user"></i>
                <p>Account Owner: <span>Olutayo Olujide</span></p>
              </div>
              <div className="info">
                <i class="fas fa-envelope"></i>
                <p>kmslimitednigeria@gmail.com</p>
              </div>
              <div className="info">
                <i class="fas fa-user"></i>
                <p>08012345678</p>
              </div>
              
            </div>
            <div className="footer-rightside">
              <div className="info">
                <div className="info-icon">
               <i class="fas fa-map-marker-alt"></i>
                </div>
                <p className="large-span">46, Fatai Aremo Lane, Off Mr. Biggs, Ikeja Along,<br /> Lagos
                  <p>Lagos South</p>
                <p style={{ fontWeight: '700', fontSize: '16px' }}>Lagos Nigeria</p>
                </p>
               
              </div>
              
               
             
               <div className="info">
               <i class="fas fa-globe"></i>
                <p>6.5244* N, 3.3790* E</p>
              </div>
            </div>
          </div>
        </footer>
       </div>
      </>
  )
}

export default MainBodyLeft
