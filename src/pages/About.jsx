function About() {
  return (
    <>
      <p className='card text-9xl font-mono'>ttttt</p>
      <h1 className='text-6xl mb-4'>Solar System</h1>
      <p className='mb-4 text-2xl font-light'>
        A react app which provides detail information about planets, asteroids,
        comets and other bodies of our Solar system. This app is made by{' '}
        <strong>
          <a href='https://github.com/ahmed-razic'> Ahmed Razic</a>
        </strong>
        .
      </p>
      <p className='text-lg text-gray-400'>
        Version <span className='text-white'>1.0.0</span>
      </p>
      <p className='text-lg text-gray-400'>
        APIs provided by{' '}
        <strong>
          <a href='https://api.le-systeme-solaire.net/en/'>
            {' '}
            The Solar System OpenData
          </a>
        </strong>{' '}
        and{' '}
        <strong>
          <a href='https://api.nasa.gov/'> NASA Open APIs</a>
        </strong>
        .
      </p>
    </>
  );
}

export default About;
