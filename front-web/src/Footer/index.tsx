import './styles.css';
import { ReactComponent as YoutubeIcon } from '../Assets/Youtube.svg';
import { ReactComponent as LinkedinIcon } from '../Assets/Linkedin.svg';
import { ReactComponent as InstagramIcon } from '../Assets/Instagram.svg';

const Footer = () => {
  return (
    <footer className="main-footer">
      App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
      <div className="footer-icons">
        <a href="youtube.com" target="_blank">
          <YoutubeIcon />
        </a>
        <a href="linkedin.com" target="_blank">
          <LinkedinIcon />
        </a>
        <a href="instagram.com" target="_blank">
          <InstagramIcon />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
