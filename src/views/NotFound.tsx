import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Metadata from '../components/Metadata';

const NotFound = () => {
  const navigate = useNavigate();
  return (

    <>
      <Metadata
        title='NotFound'
        content='NotFound page'
      />
      <div className='container mt-4 w-50'>
        <p className='text-white fs-3 font-weight-500 m-4'>
          Check that you typed the address correctly, go back to your previous page.
        </p>
        <a
          onClick={() => navigate(-1)}
          className='d-block mt-4 cursor-pointer'
        >
          Back
        </a>
        <Link
          to='/accounts'
          className='d-block mt-2'
        >
          Home
        </Link>
      </div>
    </>
  );
};

export default NotFound;