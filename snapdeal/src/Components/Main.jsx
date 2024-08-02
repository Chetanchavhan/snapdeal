import React from 'react'

const Main = () => {
  return (
    <div>
      <div className='main pb-5'>
        <div className='container p-0 main1 mt-3'>
          <div className='row m-0 mainblock1 '>
            <div className='bg-white col-2 pt-3 pb-3 pe-0 position-relative'>
              <h6>TOP CATEGORIES</h6>
              <ul className="nav  asidenav">
                <li className="nav-item">
                  <a className="nav-link " href="#">
                    <div className=' position-absolute aside_box'>
                      <div className='row'>
                        <div className='col-3 tbdr'>A</div>
                        <div className='col-3 tbdr'>A</div>
                        <div className='col-3 tbdr'>A</div>
                        <div className='col-3 tbdr'>banner</div>
                      </div>
                    </div>
                    <img className='me-1' width={30} src='https://n1.sdlcdn.com/imgs/k/v/x/Men_sitenavigation-b972a.jpg' />Men's Fashion</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                  <div className=' position-absolute aside_box'>B</div>
                    <img className='me-1' width={30} src='	https://n1.sdlcdn.com/imgs/k/v/x/WoMen_sitenav-5a8ca.jpg' />Women's Fashion</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                  <div className=' position-absolute aside_box'>C</div>
                    <img className='me-1' width={30} src='	https://n1.sdlcdn.com/imgs/k/v/x/HOme_sitenavigation-d7a00.jpg' />Home &amp; Kitchen</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#" >
                  <div className=' position-absolute aside_box'>D</div>
                    <img className='me-1' width={30} src='	https://n4.sdlcdn.com/imgs/k/v/x/Toys_Sitenavigation-ef666.jpg' />Toys,Kid's Fashion</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#" >
                  <div className=' position-absolute aside_box'>E</div>
                    <img className='me-1' width={30} src='	https://n2.sdlcdn.com/imgs/k/v/x/Beauty_Site_navigation-5f3be.jpg' />Beauty,Health &amp; Daily  </a>
                </li>
              </ul>

              <h6>MORE CATEGORIES</h6>
              <ul className="nav flex-column asidenav asidenav2">
                <li className="nav-item">
                  <a className="nav-link " href="#">
                    <div className=' position-absolute aside_box'>A</div> Automotives</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                  <div className=' position-absolute aside_box'>B</div>Mobile &amp; Accesories</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                  <div className=' position-absolute aside_box'>C</div>Electronics</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#" >
                  <div className=' position-absolute aside_box'>D</div>Sport,Fitness &amp;Outdor</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#" >
                  <div className=' position-absolute aside_box'>E</div>Computer &amp; Gaming </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#" >
                  <div className=' position-absolute aside_box'>E</div>Books,Media &amp; Music </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#" >
                  <div className=' position-absolute aside_box'>E</div>Hobbies</a>
                </li>
              </ul>
            </div>
            <div className='col-10 '>
              <div className='snapslider d-flex'>
                <div className='col-10'>
                  <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="bg-white carousel-indicators m-0">
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active m-0" aria-current="true" aria-label="Slide 1">Home Utility</button>
                      <button className='m-0' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2">Bed Sheets</button>
                      <button className='m-0' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3">Cookware</button>
                      <button className='m-0' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4">Kurtis</button>
                      <button className='m-0' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5">Bobcard</button>


                    </div>
                    <div className=" carousel-inner">
                      <div className="carousel-item active ">
                        <img src="img/slider/2.jpg" className="d-block w-100" alt="..." />
                      </div>
                      <div className="carousel-item">
                        <img src="img/slider/3.jpg" className="d-block w-100" alt="..." />
                      </div>
                      <div className="carousel-item">
                        <img src="img/slider/4.jpg" className="d-block w-100" alt="..." />
                      </div>
                      <div className="carousel-item">
                        <img src="img/slider/5.jpg" className="d-block w-100" alt="..." />
                      </div>
                      <div className="carousel-item">
                        <img src="img/slider/6.jpg" className="d-block w-100" alt="..." />
                      </div>

                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
                <div className='col-2'>B</div>
              </div>
              <div className='trendingproducts'></div>
            </div>


          </div>
        </div>
        <div className='container-fluid main2 mt-4' >

        </div>

      </div>
    </div>
  )
}

export default Main
