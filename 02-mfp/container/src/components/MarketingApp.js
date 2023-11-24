import React, { useRef, useEffect } from 'react';
import { mount } from 'marketing/MarketingApp';

export default () => {
  const ref = useRef(null);
  useEffect(() => {
    mount(ref.current, {
      onNavigate: () => {
        console.log('Navigation detected in marketing app');
      },
    });
  });
  return <div ref={ref} />;
};
