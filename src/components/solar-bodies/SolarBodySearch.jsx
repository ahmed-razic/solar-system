import { useState, useContext } from 'react';
import SolarContext from '../../context/solar/SolarContext';
import AlertContext from '../../context/alert/AlertContext';
import { getBodies } from '../../context/solar/SolarActions';

function SolarBodySearch() {
  const [text, setText] = useState('');
  const { bodies, dispatch } = useContext(SolarContext);
  const { setAlert } = useContext(AlertContext);

  const handleChange = (e) => {
    setText(capitalizeFirstLetter(e.target.value));
  };

  function capitalizeFirstLetter(inputText) {
    return inputText.charAt(0).toUpperCase() + inputText.slice(1);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (text === '') {
      setAlert('Please enter something', 'error');
    } else if (text === 'All') {
      dispatch({ type: 'SET_LOADING' });
      console.log(text);
      const bodies = await getBodies();
      dispatch({ type: 'GET_BODIES', payload: bodies });
      setText('');
    } else {
      dispatch({ type: 'SET_LOADING' });
      const bodies = await getBodies();
      const selectedBody = bodies.filter((body) => body.englishName === text);

      dispatch({ type: 'GET_BODIES', payload: selectedBody });

      setText('');
    }
  };

  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
      <div>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <div className='relative'>
              <input
                type='text'
                className='w-full pr-40 bg-gray-200 input input-lg text-black'
                value={text}
                onChange={handleChange}
                placeholder={`E.g. 'Earth', or 'All'`}
              />
              <button
                type='submit'
                className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'
              >
                WARP
              </button>
            </div>
          </div>
        </form>
      </div>
      {bodies.length > 0 && (
        <div>
          <button
            onClick={() => dispatch({ type: 'CLEAR_BODIES' })}
            className='btn btn-ghost btn-lg'
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default SolarBodySearch;
