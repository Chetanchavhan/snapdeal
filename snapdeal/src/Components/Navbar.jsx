import './Style.css';

import React, { Component } from 'react'

export default class Navbar extends Component {
  state = {
    x: ''
  }

  handleScroll = () => {
    console.log('ok', + window.scrollY);
    if (window.scrollY >= 30) {
      //
      this.setState({ x: 'position-fixed top-0 start-0' })
    }
    else {
      this.setState({ x: ' ' })
    }
  }


  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }
  render() {
    return (
      <div>
        <header>
          <div className='header-top'>
            <div className='container p-0'>
              <span className='text-white'>Brand Waali Quality, Bazaar Waali Deal!</span>
              <ul className="nav float-end ">
                <li className="nav-item ">
                  <a className="nav-link p-1 ps-3 active text-white " aria-current="page" href="#"> Impact@Snapdeal </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link p-1 ps-3 text-white" href="#"> Help Center </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link p-1 ps-3 text-white" href="#"> Sell On Snapdeal </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link p-1 ps-3 text-white" href="#" > <i className="fa-solid fa-mobile-screen"> </i>Download App </a>
                </li>

              </ul>
            </div>
          </div>
          <div className={'header-bottom w-100 ' + this.state.x}>
            <div className='container'>
              <div className='row'>
                <div className='col-2'>
                  <a href="#">
                    <img className='logoimg' src="img/slider/logo.png" alt="" />
                  </a>
                </div>
                <div className='col-7'>
                  <form className='form-1  rounded-0'>
                    <div className='row m-0'>
                      <div className='col-md-10 p-0 position-relative'>
                        <input placeholder='Search products &amp; brands' className='h-100 ps-4 form-control  rounded-0' />
                        <div className='inputbox w-100 position-absolute bg-white'>
                          <h6 className=' ps-3 mt-3'><i class="fa-solid fa-chart-line"></i> Trending Searches</h6>
                          <ul className="list-unstyled">
                            <li className="nav-item">
                              <a className="nav-link " href="#">Kitchen products</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">Shoes for men</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">Kurti set</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link " href="#" >Sandal men</a>
                            </li>

                            <li className="nav-item">
                              <a className="nav-link " href="#">Sport shoes men</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">Saree</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">Tshirt</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link " href="#" >Wall sticker</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className='col-md-2 p-0'>
                        <div className="d-grid ">
                          <button className="btn searchbtn btn-dark rounded-0 " type="button"><i class="fa-solid fa-magnifying-glass fa-sm"></i>Search</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className='col-3'>
                  <ul className="nav rightnav float-end">
                    <li className="nav-item border-start border-end border-secondary">
                      <a className="nav-link text-white " aria-current="page" href="#">Cart <i class="fa-solid fa-cart-shopping fs-5"></i></a>
                    </li>
                    <li className="nav-item">
                      <a className=" pt-3 pb-3 text-white c_bl rounded-top" href="#">Sign in <i className="fa-solid fa-user fs-5"></i></a>
                      <ul className='nav border-rounded'>

                        <li class="nav-item">
                          <a class="nav-link active" aria-current="page" href="#">Active</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">Link</a>
                        </li>



                      </ul>
                    </li>

                  </ul>
                </div>

              </div>
            </div>
          </div>
        </header>
      </div>
    )
  }
}



