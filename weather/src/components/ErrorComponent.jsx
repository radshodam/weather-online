import React from 'react';

export const ErrorComponent = ({ error }) => {
  return (
    <div className='flex justify-center mx-auto py-5 text-red-500'>
      <p>Oops! Something went wrong:</p>
      <p>{error.message}</p>
    </div>
  );
};
