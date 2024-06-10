import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
      <img src="images (2).png" alt="logo" />
        <p>SHOPPER</p>
        <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li> 
        </ul>
        <div className="footer-social-icons">
          <div className="footer-icons-container">
            <img src="images (5).jpeg" alt="instagram" />
          </div>
          <div className="footer-social-icons">
          <img src="download (3).jpeg" alt="whatsapp" /></div>
        </div>
        <div className="footer-social-icons">
        <img src="images (3).png" alt="pintrest" />
        </div>
      
      </div>
      <div classsName="footer-copywright">
        <hr />
        <p>Copywright @ 2023 - All Right Reserved.</p>
      </div>
    </div>
  )
}
export default Footer;