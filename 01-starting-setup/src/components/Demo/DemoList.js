// DemoList.js
import React, { useMemo } from 'react';
import classes from './DemoList.module.css';

const DemoList = (props) => {
  const { items, ascending } = props;

  const sortedList = useMemo(() => {
    console.log('Items sorted');
    return items.slice().sort((a, b) => (ascending ? a - b : b - a));
  }, [items, ascending]);

  console.log('DemoList RUNNING');

  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);