import "./Hero.css"
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-right">
        <h1>NEW ARRIVAL ONLY</h1>
        <div>
          <div className="hand-hand-icon">
          <p>New</p>
            <img src="./images (1).png" alt="hand-icon" />
          </div>
          <p>collection</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src="download (1).jpeg" alt="arrow-icon" />
        </div>
      </div>
      <div className="hero=left">
        <img src="photo-1483985988355-763728e1935b.jpeg" alt="hero" />
      </div>
    </div>
  )
}
export default Hero;