import { footerLinks } from '../constants';

const Footer = () => {
  return (
    <footer>
      <div className="info">
        <p>
          More ways to shop: <a href="#">Find an Apple Store</a> or <a href="#">other retailer</a> near you. Or call
          0800 040 1966.
        </p>
        <img src="/logo.svg" alt="Apple Logo" />
      </div>

      <hr />

      <div className="links">
        <p>Copyright © 2024 Apple Inc. All rights reserved.</p>

        <ul>
          {footerLinks.map(({ link, label }) => (
            <li key={label}>
              <a href={link}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
