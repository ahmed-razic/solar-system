import { useContext } from 'react';
import PhotoContext from '../../context/photo/PhotoContext';
import { getPhoto } from '../../context/photo/PhotoActions';
import { Link } from 'react-router-dom';
import { GiSolarSystem } from 'react-icons/gi';

function Footer() {
  const footerYear = new Date().getFullYear();
  const { dispatch } = useContext(PhotoContext);

  const handleClick = async (e) => {
    const photo = await getPhoto();
    dispatch({ type: 'SET_LOADING' });
    dispatch({ type: 'GET_PHOTO', payload: photo });
  };

  return (
    <footer className='p-1 bg-neutral text-neutral-content'>
      <div className='container mx-auto flex flex-row justify-between items-center'>
        <GiSolarSystem className='text-6xl' />
        <p className='text-sm'>
          Copyright &copy; {footerYear} All rights reserved{' '}
        </p>
        <Link
          to='/nasa'
          className='btn btn-ghost btn-lg rounded-btn'
          onClick={handleClick}
        >
          NASA img
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
