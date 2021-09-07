import React from 'react'

const MainBodyRight = () => {
  return (
    <div className="main-body-right">
      <section className="section">
        <div className="section-header">
          <h6>Reports<span>(Today)</span></h6>
          <div className="section-header-right">
            <i class="fas fa-eye"></i>
            <p>View all</p>

          </div>
        </div>


        <div className="sales-reviews">
          <div className='review-rows'>
            <div className="total-sales">
              <p className="total-sales-title">Total Sales</p>
              <p className="total-sales-price">#100,404</p>
            </div>
            <div className="total-sales">
              <p className="total-sales-title">Open Orders</p>
              <p className="total-sales-price">#17,000</p>
            </div>


          </div>

          <div className='review-rows'>
            <div className="total-sales">
              <p className="total-sales-title">Total Sales</p>
              <p className="total-sales-price">27</p>
            </div>

            <div className="total-sales">
              <p className="total-sales-title">Comfirmed Invoice</p>
              <p className="total-sales-price">#83,040</p>
            </div>
          </div>




        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h6>Users</h6>
          <div className="section-header-right">
            <i class="fas fa-cog"></i>
            <p>Manage</p>

          </div>
        </div>

        <div className="main-right-info">
          <p>KPO: <span>Ahmeed Lawal</span></p>
          <p>KPO Supervisor: <span>Obasi Omasola</span></p>
          <p>Van Salesmen: <span>6</span></p>
          <p>Account Owner: <span>Olutayo Oludide</span></p>
        </div>








      </section>
    </div>
  )
}

export default MainBodyRight
