import { useContext } from 'react';
import PhotoContext from '../context/photo/PhotoContext';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

function NasaPhoto() {
  const { photo } = useContext(PhotoContext);

  return (
    <div className='container max-w-screen-lg px-10'>
      <div className='max-w-md'>
        <h1 className='text-2xl mb-3 font-bold'>NASA photo of the day</h1>
      </div>
      <div className='mx-auto'>
        <a href={photo.hdurl} target='_blank' rel='noreferrer'>
          <img src={photo.url} alt='space' className='max-h-96 mb-5' />
        </a>

        <div>
          <h2>
            <strong>{photo.title}</strong>
          </h2>
          <h3>{photo.date}</h3>
          <p className='text-justify my-5'>{photo.explanation}</p>
          <Link className='btn bg-neutral text-neutral-content btn-sm' to='/'>
            <FaHome className='mr-5' /> Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NasaPhoto;
