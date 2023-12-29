import React from 'react';

const Test = () => {
  const generateListItems = () => {
    const items = [];
    for (let i = 1; i <= 100; i++) {
      items.push(<li key={i}>List Item {i}</li>);
    }
    return items;
  };

  return (
    <div style={{ height: '100vh', overflowY: 'auto' }}>
      <h1>Large List</h1>
      <ul>{generateListItems()}</ul>
    </div>
  );
};

export default Test;
