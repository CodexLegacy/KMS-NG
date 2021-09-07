import React from 'react'

const MainBodyTable = () => {
  return (
    <div className='main-table'>
      <div className='main-table-header'>
          <div className="section-header">
          <h6>Recent Orders</h6>
          <div className="section-header-right">
            <i class="fas fa-eye"></i>
            <p>View all</p>

          </div>
          
        </div>

        <div className="header-botton-row">
            <div className="search-bar table-search-bar">
          <div className='search-bar-icon'>
          <i class="fas fa-search"></i>
          </div>
          <input  className="search-bar-input" type="text" placeholder="Order Number, Customer name, Route name, Driver" />
            </div>
            
            <div className="header-button-row-btns">
            <button className="options-btn">All Orders
              <i class="fas fa-sort-down "></i></button>
            <button className="options-btn">All delivers
          <i class="fas fa-sort-down "></i>
            
            </button>
              <button className="options-btn"><i class="fas fa-random"></i> Sort </button>
              <button className="options-btn"><i class="far fa-calendar-check"></i> Select range date</button>
            </div>
          </div>
      </div>
      <table>
        <tr>
          <th className="right-align">S/N</th>
          <th>Order Number</th>
          <th>Date</th>
          <th>Customer Name</th>
          <th>Route Name</th>
          <th>Delivery Driver</th>
          <th>Status</th>
          <th>Products</th>
          <th>Amount</th>
        </tr>
        <tr>
          <td className="right-align">1.</td>
          <td>103828</td>
          <td>21-01-2021</td>
          <td>Martins Septimus Bar</td>
          <td>Talesales</td>
          <td>Ruben Lipshutz</td>
          <td><span className="green">Completed</span></td>
          <td className='td-numbers'>6</td>
          <td>#10,040,888.03</td>
        </tr>
        <tr>
          <td className="right-align">2.</td>
          <td>103828</td>
          <td>21-01-2021</td>
          <td>Martins Septimus Bar</td>
          <td>Talesales</td>
          <td>Ruben Lipshutz</td>
          <td><span className="grey">Assigned</span></td>
          <td className='td-numbers'>6</td>
          <td>#10,040,888.03</td>
        </tr>
        <tr>
          <td className="right-align">3.</td>
          <td>103828</td>
          <td>21-01-2021</td>
          <td>Martins Septimus Bar</td>
          <td>Talesales</td>
          <td>Ruben Lipshutz</td>
          <td><span className="orange">Accepted</span></td>
          <td className='td-numbers'>6</td>
          <td>#10,040,888.03</td>
        </tr>
        <tr>
          <td className="right-align">4.</td>
          <td>103828</td>
          <td>21-01-2021</td>
          <td>Martins Septimus Bar</td>
          <td>Talesales</td>
          <td>Ruben Lipshutz</td>
          <td><span className="red">Rejected</span></td>
          <td className='td-numbers'>6</td>
          <td>#10,040,888.03</td>
        </tr>
        <tr>
          <td className="right-align">5.</td>
          <td>103828</td>
          <td>21-01-2021</td>
          <td>Martins Septimus Bar</td>
          <td>Talesales</td>
          <td>Ruben Lipshutz</td>
          <td><span className="grey">Open</span></td>
          <td className='td-numbers'>6</td>
          <td>#10,040,888.03</td>
        </tr>
      </table>
        <div className="long-btn-container">

        <button className='long-btn'>Show More</button>
        </div>
    </div>
  )
}

export default MainBodyTable
