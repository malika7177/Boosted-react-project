import "./footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="information">
        <div className="info1">
          <i class="bi bi-speedometer2"></i>
          <h2>Go Fast</h2>
          <p>
            Boosted is known for its premium performance boards offering a
            next-level experience.
          </p>
        </div>
        <div className="info2">
          <i class="bi bi-globe-americas"></i>
          <h2>Go Far</h2>
          <p>
            With optional extended battery life, you can get wherever you need
            to go reliably.
          </p>
        </div>
        <div className="info3">
          <i class="bi bi-lightbulb"></i>
          <h2>Go Safe</h2>
          <p>
            Safety is a #1 priority for Boosted, always wear a helmet when
            riding.
          </p>
        </div>
        <div className="info4">
          <i class="bi bi-check2-square"></i>
          <h2>Built to Last</h2>
          <p>
            Boosted products are engineered to last for years and are extremely
            reliable.
          </p>
        </div>
      </div>
      <div className="contact">
        <div className="footer-img">
            <img src="https://s3-alpha-sig.figma.com/img/e410/c5c8/2d9a9ed9d13100434f80de69d646757f?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pDZo7QPYzFAeWxqp-~bcuyAB-gq~FkZUnJRqAPsLR1PLh42XUsXWWIqHGnZDbaNmfdP4eGtuYUfaecqb52VoE79HlkuXYc-N5GCW-o8R3xRT2KTZ~dEvovfCapESnDiZCl5v9xFewkLP39SlXMZJ-ogGF3kVZhDi2DcIhNGRF2XOf42O13lMDXk3AO0--DxgsFMP8McM3977uSliJsLBcZij~btE3UetM5WYdiK1RpdfTYpJIlIjXMLIMbNmkLqLOLbpWHIHsS9T6PkVpzxkZKxS9QL82zvqXn-pBvN0vi~A-CF5h~P1Mf1pGQHZBLSQXFFBfGGYJ3sAH5c1S1KCdw__"></img>
        </div>
        <div className="explore">
            <h2>Explore</h2>
            <ul>
                
                <li><a href="#">Electric Skateboards</a></li>
                <li><a href="#">Electric Scooters</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Warranty</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Gift Card</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </div>
        <div className="about">
            <h2>About Boosted USA</h2>
            <p>Boosted empowers people everywhere to commute across their cities, campuses, and communities in ways that were never before possible. Boosted is solving one of the biggest problems people face each day: transportation.</p>
            <a href="#">CaliRides LLC - DBA Boosted USA</a>
            <a href="#">1281 Andersen Drive Ste. K</a>
            <a href="#">San Rafael, CA 94901</a>
        </div>

      </div>
      <div className="copyright">
        <a href="#">© 2021 <span>Boosted USA.</span> All rights reserved.Terms of Service.</a>
      </div>
    </footer>
  );
};

export default Footer;
