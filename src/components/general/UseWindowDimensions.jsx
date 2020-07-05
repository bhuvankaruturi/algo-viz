import React, { useState, useEffect, Fragment } from 'react';

export default function UseWindowDimensions(props) {

  const hasWindow = typeof window !== 'undefined';

  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth < window.innerHeight ? window.innerWidth * 0.8 : window.innerWidth * 0.48 : 400;
    const height = window.innerWidth < window.innerHeight ? window.innerHeight * 0.4 : width * 0.6;
    return {
      width,
      height,
    };
}

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {


    if (hasWindow) {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
    // eslint-disable-next-line
  }, [hasWindow]);

  return (
    <Fragment>
      {props.render(windowDimensions)}
    </Fragment>
  );
}