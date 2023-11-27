import React, { useState, useEffect } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import '../styles/Elements.css';

function Element({ listName, onListChange }) {
  const [items, setItems] = useState([{ id: 1, value: '', confirmed: false }]);

  useEffect(() => {
    // 리스트가 변경될 때마다 콘솔에 출력
    const elementList = items
      .filter((item) => item.confirmed && item.value)
      .map((item) => item.value);
    //console.log(`${listName}:`, elementList);

    // 부모 컴포넌트로 리스트 전달
    onListChange(elementList);
  }, [items, listName, onListChange]);

  const addItemHandler = () => {
    setItems((prevItems) => {
      const newItem = { id: Date.now(), value: '', confirmed: false };
      return [...prevItems, newItem];
    });
  };

  const removeItemHandler = (id) => {
    setItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== id);
      return updatedItems;
    });
  };

  const confirmItemHandler = (id) => {
    setItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.id === id ? { ...item, confirmed: true } : item
      );
      return updatedItems;
    });
  };

  const handleInputChange = (e, id) => {
    setItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.id === id ? { ...item, value: e.target.value } : item
      );
      return updatedItems;
    });
  };

  const listItems = items.map((item) => (
    <CSSTransition key={item.id} timeout={10} classNames="item">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '10px' }}>
        <input
          name={`ElementList${item.id}`}
          placeholder="(a black cat among a crosswalk in New York City)"
          value={item.value}
          onChange={(e) => handleInputChange(e, item.id)}
          style={{
            padding: '1rem',
            width: '300px',
            height: '10%',
            textAlign: 'center',
            transition: 'transform 300ms',
          }}
        />
        <button
          style={{ width: '30px', backgroundColor: '#C7FCEB', color: 'black' }}
          className='remove-button'
          onClick={addItemHandler}
        >
          +
        </button>
        <button
          className='remove-button'
          style={{ width: '30px', color: 'black' }}
          onClick={() => removeItemHandler(item.id)}
        >
          -
        </button>
        <button
          className='remove-button'
          style={{ backgroundColor: 'pink', color: 'black' }}
          onClick={() => confirmItemHandler(item.id)}
        >
          Confirm
        </button>
      </div>
    </CSSTransition>
  ));

  return (
    <div className='element-container'>
      <TransitionGroup component="div" className="List">
        {listItems}
      </TransitionGroup>
    </div>
  );
}

export default Element;
