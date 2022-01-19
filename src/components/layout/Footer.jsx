import { Link } from 'react-router-dom';
import { GiSolarSystem } from 'react-icons/gi';

function Footer() {
  const footerYear = new Date().getFullYear();
  const handleClick = () => {};

  return (
    <footer className='p-1 bg-neutral text-neutral-content'>
      <div className='container mx-auto flex flex-row justify-between items-center'>
        <GiSolarSystem className='text-6xl' />
        <p className='text-sm'>
          Copyright &copy; {footerYear} All rights reserved{' '}
        </p>
        <Link to='/nasa' className='btn btn-ghost btn-sm rounded-btn'>
          NASA photo
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
