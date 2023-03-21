import { useLayoutEffect, useMemo, useRef, useEffect } from 'react';
import { findDOMNode } from 'react-dom';
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui';

export const Sortable = ({ opacity, data, enable, onChange }: any) => {
  const sortableRef = useRef(null);

  console.log('Sortable');

  useEffect(() => {
    console.log('uselayouteffect');
    const sortableNode = sortableRef.current;
    const node = findDOMNode(sortableNode);
    $(node!).sortable({ opacity, change: (e, ui) => onChange!(e, ui) });
  }, []);

  const renderItems = () => {
    return data.map((item: any, i: number) => (
      <li key={i}>
        <span>{item}</span>
      </li>
    ));
  };

  return <ul ref={sortableRef}>{renderItems()}</ul>;
};
