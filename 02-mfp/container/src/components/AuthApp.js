import React, { useRef, useEffect } from 'react';
import { mount } from 'auth/AuthApp';
import { useHistory } from 'react-router-dom';

export default () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: location => {
        console.log('Navigation detected in auth app');
        const { pathname: nextPathname } = location;
        const { pathname } = history.location;
        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
      onSignIn: () => {
        console.log('called onSignIn function');
      },
      initialPath: history.location.pathname,
    });

    history.listen(onParentNavigate);
  }, []);
  return <div ref={ref} />;
};
