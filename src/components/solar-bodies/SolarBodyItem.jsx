import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function SolarBodyItem({ body: { englishName, id } }) {
  return (
    <div className='card shadow-md compact side bg-base-100'>
      <div className='flex-row items-center space-x-4 card-body'>
        <div>
          <h2 className='card-title'>
            {englishName} ({id})
          </h2>
          <Link
            className='text-base-content text-opacity-40'
            to={`/solarbody/${id}`}
          >
            More info
          </Link>
        </div>
      </div>
    </div>
  );
}

SolarBodyItem.propTypes = {
  body: PropTypes.object.isRequired,
};

export default SolarBodyItem;
