import { useState } from 'react';
import { Sortable } from '../components/Sortable';

export const MyComponent = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const list = ['ReactJS', 'JSX', 'JavaScript', 'jQuery', 'jQuery UI'];

  const handleOnChange = (e: any, ui: any) => {
    console.log('DOM changed!', e, ui);
  };

  return (
    <div>
      <button
        onClick={() => {
          setIsEnabled(!isEnabled);
        }}
      >
        toggle enable/disable
      </button>
      <Sortable opacity={0.8} data={list} enable={isEnabled} onChange={handleOnChange} />
    </div>
  );
};
