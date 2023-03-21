import { MyComponent } from './pages/MyComponent';
import { findDOMNode } from 'react-dom';
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui';
import { useEffect, useRef } from 'react';

function App({ context }: any) {
  const toggleRef = useRef(null);

  const handleToggle = () => {
    const el = findDOMNode(toggleRef.current);
    $(el!).slideToggle();
  };

  useEffect(() => {
    //const el = findDOMNode('#datePicker');
    //$(el!).slideToggle();
    $('#datePicker').datepicker();
  }, []);

  return (
    <div className='App'>
      <h4>Testing app</h4>
      <hr />
      <MyComponent />
      <hr />
      <div ref={toggleRef}>toggle div</div>
      <button onClick={handleToggle}>show/hide</button>
      {/* needed: install jquery y jquery-ui-dist */}
      <div>
        Date: <input type='text' id='datePicker' />
      </div>
    </div>
  );
}

export default App;
