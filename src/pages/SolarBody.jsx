import { FaCodepen, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../components/layout/Spinner';
import SolarContext from '../context/solar/SolarContext';
import space from '../components/layout/assets/space.jpg';

function SolarBody() {
  const { bodies, loading } = useContext(SolarContext);
  const params = useParams();
  const body = bodies.filter((item) => item.id === params.id);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className='w-full mx-auto lg:w-10/12'>
        <div className='mb-4'>
          <Link to='/' className='btn btn-ghost'>
            Back To Search
          </Link>
        </div>

        <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8'>
          <div className='custom-card-image mb-6 md:mb-0'>
            <div className='rounded-lg shadow-xl card image-full'>
              <figure>
                <img src={space} alt='' />
              </figure>
              <div className='card-body justify-end'>
                <h2 className='card-title mb-0'>{body[0].avgTemp}</h2>
                <p>{body[0].avgTemp}</p>
              </div>
            </div>
          </div>

          <div className='col-span-2'>
            <div className='mb-6'>
              <h1 className='text-3xl card-title'>
                {body[0].avgTemp}
                <div className='ml-2 mr-1 badge badge-success'>
                  {body[0].avgTemp}
                </div>
              </h1>
              <p>{body[0].avgTemp}</p>
              <div className='mt-4 card-actions'>{body[0].avgTemp}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SolarBody;
