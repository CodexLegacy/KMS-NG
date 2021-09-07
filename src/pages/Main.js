import React from 'react'
import Header from '../components/Header';
import MainBody from '../components/MainBody';
import MainHeader from '../components/MainHeader';

const Main = () => {
  return (
    <>
      <Header />

      <div className="row">
        <div className="left-sidebar">
          <ul className="left-sidebar-contents">
            
            <li className="leftside-content">
              <a  className="active" href="/">
              <i style={{ color: '#B11F24'}} class="fas fa-laptop-house"></i>
              <p style={{ color: '#B11F24'}}>Distributors</p>
              </a>
            </li>
            
            <li className="leftside-content">
              <a href="/">
              <i class="fas fa-bell"></i>
              <p>Notifications</p>
              </a>
            </li>
            
            
            <li className="leftside-content">
              <a href="/">
              <i class="fas fa-chart-bar"></i>
              <p>Reports</p>
              </a>
            </li>
            
            <li className="leftside-content">
              <a href="/">

             <i class="fas fa-dollar-sign"></i>
         
              <p>Pricing</p>
              </a>
            </li>
            
            <li className="leftside-content">
              <a href="/">
              <i class="fas fa-percent"></i>
              <p>Promotions</p>
              </a>
            </li>
            
            <li className="leftside-content">
              <a href="/">
             <i class="fas fa-user-friends"></i>
              <p>KPO Supervisors</p>
              </a>
            </li>

             <li className="leftside-content">
              <a href="/">
              <i class="fas fa-cog"></i>
              <p>Settings</p>
              </a>
            </li>
          </ul>
        </div>
        <div className="main">
          <MainHeader />
          <MainBody />
        </div>
      </div>
    </>
  )
}

export default Main
