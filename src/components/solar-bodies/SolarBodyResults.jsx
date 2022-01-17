import { useContext } from 'react';
import Spinner from '../layout/Spinner';
import SolarBodyItem from '../solar-bodies/SolarBodyItem';
import SolarContext from '../../context/solar/SolarContext';

function SolarBodyResults() {
  const { users, loading } = useContext(SolarContext);

  if (!loading) {
    return (
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {users.map((user) => (
          <SolarBodyItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default SolarBodyResults;
