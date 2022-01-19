import { useContext } from 'react';
import AlertContext from '../context/alert/AlertContext';
import PhotoContext from '../context/photo/PhotoContext';
import { getPhoto } from '../context/photo/PhotoActions';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

function NotFound() {
  const { photo, loading, dispatch } = useContext(PhotoContext);
  const { setAlert } = useContext(AlertContext);

  photo = getPhoto();
  dispatch({ type: 'SET_LOADING' });
  dispatch({ type: 'GET_PHOTO', payload: photo });

  console.log(photo);

  return (
    <div className='hero'>
      <div className='max-w-lg'>
        <h1 className='text-1xl mb-8 font-bold'>NASA photo of the day</h1>
        <img src='' alt='' />
        <Link className='btn bg-neutral text-neutral-content btn-sm' to='/'>
          <FaHome className='mr-2' /> Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
