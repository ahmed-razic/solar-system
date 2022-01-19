import { FaHome } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../components/layout/Spinner';
import SolarContext from '../context/solar/SolarContext';

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
        <div>
          <Link to='/' className='btn btn-ghost'>
            <FaHome className='mr-2' /> Back To Search
          </Link>
        </div>

        <div className='custom-card-image mb-3 md:mb-0'>
          <div className='card-body justify-end'>
            <h2 className='card-title mb-0 text-orange-400 text-5xl'>
              {body[0].englishName}
            </h2>
            <p className='italic text-2xl'>( {body[0].id} )</p>
          </div>
        </div>

        <div className='grid grid-cols-1 gap-3 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
          <div className='card-body justify-end'>
            <h2 className='card-title mb-0 text-orange-400'>Type</h2>
            <p>{body[0].bodyType}</p>
          </div>
          <div className='card-body justify-end'>
            <h2 className='card-title mb-0 text-orange-400'>Gravity</h2>
            <p>{body[0].gravity}</p>
          </div>
          <div className='card-body justify-end'>
            <h2 className='card-title mb-0 text-orange-400'>Mass</h2>
            <p>{body[0].mass.massValue}</p>
          </div>
          <div className='card-body justify-end'>
            <h2 className='card-title mb-0 text-orange-400'>
              Average Temperature
            </h2>
            <p>{body[0].avgTemp}</p>
          </div>
          <div className='card-body justify-end'>
            <h2 className='card-title mb-0 text-orange-400'>
              Equatorial Radius
            </h2>
            <p>{body[0].equaRadius}</p>
          </div>
          <div className='card-body justify-end'>
            <h2 className='card-title mb-0 text-orange-400'>Density</h2>
            <p>{body[0].density}</p>
          </div>

          <div className='card-body justify-end'>
            <h2 className='card-title mb-0 text-orange-400'>Eccentricity</h2>
            <p>{body[0].eccentricity}</p>
          </div>
          <div className='card-body justify-end'>
            <h2 className='card-title mb-0 text-orange-400'>Discovered By</h2>
            <p>{body[0].discoveredBy !== '' ? body[0].discoveredBy : 'N/A'}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SolarBody;
