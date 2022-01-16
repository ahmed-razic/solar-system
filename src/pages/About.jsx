function About() {
  return (
    <>
      <h1 className='text-6xl mb-4 text-white'>Our Solar System</h1>
      <p className='mb-4 text-2xl font-light text-justify'>
        A small web page which provides main information about planets,
        asteroids, comets and other bodies in our Solar system.
      </p>
      <p className='text-lg text-gray-400'>
        APIs provided by:{' '}
        <strong className='text-white'>
          <a
            href='https://api.le-systeme-solaire.net/en/'
            target='_blank'
            rel='noreferrer'
          >
            {' '}
            The Solar System OpenData
          </a>
        </strong>{' '}
        <span className='text-lg text-gray-400'>and</span>{' '}
        <strong className='text-white'>
          <a href='https://api.nasa.gov/' target='_blank' rel='noreferrer'>
            {' '}
            NASA Open APIs
          </a>
        </strong>
      </p>
      <p className='text-lg text-gray-400'>
        Version: <span className='text-white'>1.0.0</span>
      </p>
      <p className='text-lg text-gray-400'>
        Author:{' '}
        <span className='text-white'>
          <a
            href='https://github.com/ahmed-razic'
            target='_blank'
            rel='noreferrer'
          >
            {' '}
            Ahmed Razic
          </a>
        </span>
      </p>
    </>
  );
}

export default About;
