// my-clinic-app/src/components/Header.jsx
import PropTypes from 'prop-types';
import { Menu, X } from 'lucide-react';
import facebook from '../assets/fb.jpg';
import logo from '../assets/logo.jpg';
import line from '../assets/line.jpg';

const Header = ({ showMenu, setShowMenu }) => (
  <div className="bg-white p-4 border-b">
    <div className="flex justify-between items-center">
      <div className="flex gap-2">
        <a
          href="https://www.facebook.com/suttilakclinic"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <img src={facebook} alt="Facebook" className="w-6 h-6" />
        </a>
        <a
          href="https://line.me/R/ti/p/@175ppdyn"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <img src={line} alt="Line" className="w-6 h-6" />
        </a>
      </div>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="p-2 hover:bg-gray-100 rounded-full"
      >
        {showMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
      <div className="flex items-center gap-2 w-20 h-20">
        <img
          src={logo}
          alt="Clinic Logo"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
    </div>
  </div>
);

Header.propTypes = {
  showMenu: PropTypes.bool.isRequired,
  setShowMenu: PropTypes.func.isRequired,
};

export default Header;
