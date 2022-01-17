import { GiSolarSystem } from 'react-icons/gi';

function Footer() {
  const footerYear = new Date().getFullYear();

  return (
    <footer className='footer p-5 bg-neutral text-neutral-content footer-center'>
      <div className='container mx-auto'>
        <GiSolarSystem className='text-6xl' />
        <p> Copyright &copy; {footerYear} All rights reserved </p>
      </div>
    </footer>
  );
}

export default Footer;
