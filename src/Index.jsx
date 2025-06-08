import './Index.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import reviews from './reviewData'


function ReviewsSection() {
  return (
    <div className="reviews-section">
      <h2>Reseñas</h2>
      {reviews.map((review) => (
        <div key={review.id} className="review">
          <img src={review.avatar} alt={review.name} className="avatar" />
          <div className="review-content">
            <div className="review-name">{review.name}</div>
            <div className="review-comment">{review.comment}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

function Index() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }

  return (
    <div className="app">
      <header className="header">
  <div className="header-row">
    <div className="left-section">
      <img src="/logo.png" alt="Logo" className="logo" />
      <a
        href="/Coco.apk"
        download
        className="google-play-button"
      >
        Descargar
      </a>
    </div>
    <div className="right-section">
      <button className="donate-button">Donar</button>
    </div>
  </div>
</header>


      <main className="carousel-container">
        <Slider {...settings}>
          <div>
            <img src="/img1.jpg" alt="Imagen 1" className="carousel-image" />
          </div>
          <div>
            <img src="/img2.jpg" alt="Imagen 2" className="carousel-image" />
          </div>
          <div>
            <img src="/img3.png" alt="Imagen 3" className="carousel-image" />
          </div>
        </Slider>
      </main>

      <ReviewsSection />

    </div>
  )
}

export default Index