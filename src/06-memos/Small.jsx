import React from 'react';

export const Small = React.memo(({ value }) => {

    console.log(' Me volví a dibujar :C ')

  return (
    <small>{ value }</small>
  )
})
