
import { Splide, SplideSlide } from '@splidejs/react-splide'
import styles from './index.module.css'
import React from 'react'
import CategoryBox from './components/category-box'
import { useSelector } from 'react-redux'

function MainPage() {
  const categoryState = useSelector(state => state.categoryState)

  return (
    <div>
      {/* Carousel Starts */}
      <Splide
        options={{
          rewind: true,
          gap: '1rem',
        }}
      >
        <SplideSlide>
          <img className='w-100' src="https://themewagon.github.io/GrowMark/img/carousel-2.jpg" alt="Image 1" />
        </SplideSlide>
        <SplideSlide>
          <img className='w-100' src="https://themewagon.github.io/GrowMark/img/carousel-2.jpg" alt="Image 2" />
        </SplideSlide>
        <SplideSlide>
          <img className='w-100' src="https://themewagon.github.io/GrowMark/img/carousel-2.jpg" alt="Image 3" />
        </SplideSlide>
      </Splide>
      {/* Carousel End */}

      {/* Features Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-0 feature-row">
            <div className="col-md-6 col-lg-3 wow fadeIn" >
              <div className="feature-item border h-100 p-5">
                <div className={`btn-square bg-light rounded-circle mb-4 + ${styles.button}`}>
                  <img className="img-fluid" src="/assets/icon-1.png" alt="Icon" />
                </div>
                <h5 className="mb-3">Award Winning</h5>
                <p className="mb-0">Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" >
              <div className="feature-item border h-100 p-5">
                <div className={`btn-square bg-light rounded-circle mb-4 + ${styles.button}`}>
                  <img className="img-fluid" src="/assets/icon-2.png" alt="Icon" />
                </div>
                <h5 className="mb-3">Professional Staff</h5>
                <p className="mb-0">Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" >
              <div className="feature-item border h-100 p-5">
                <div className={`btn-square bg-light rounded-circle mb-4 + ${styles.button}`}>
                  <img className="img-fluid" src="/assets/icon-3.png" alt="Icon" />
                </div>
                <h5 className="mb-3">Fair Prices</h5>
                <p className="mb-0">Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" >
              <div className="feature-item border h-100 p-5">
                <div className={`btn-square bg-light rounded-circle mb-4 + ${styles.button}`}>
                  <img className="img-fluid" src="/assets/icon-4.png" alt="Icon" />
                </div>
                <h5 className="mb-3">24/7 Support</h5>
                <p className="mb-0">Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam</p>
              </div>
            </div>
          </div >
        </div >
      </div >
      {/* Features End */}

      {/* Services Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className={`text-center mx-auto wow fadeInUp ${styles.max500}`} >
            <p className="fs-1 fw-medium text-primary">Categories</p>
            <h1 className="display-5 mb-5">Find The Service From The Categories</h1>
          </div>
          <div className="row g-4">

            {
              categoryState.categories.map((item, index) => {
                return (
                  <div key={index} className="col-lg-4 col-md-6 wow fadeInUp" >
                    <CategoryBox category={item} />
                  </div>
                )

              })
            }

          </div>
        </div>
      </div>
      {/* Services End */}

    </div >
  )
}

export default MainPage