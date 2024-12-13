import { useState } from 'react';

function Checklist() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, { text: inputValue, completed: false }]);
      setInputValue(''); // Reset input
    }
  };

  const toggleComplete = (index) => {
    const updatedItems = items.map((item, i) =>
      i === index ? { ...item, completed: !item.completed } : item
    );
    setItems(updatedItems);
  };

  return (
    <div className='p-4 max-w-md mx-auto'>
      <h1 className='text-2xl font-bold mb-4'>Packing Checklist</h1>
      <ol className='list-decimal ml-5 space-y-3'>
        {items.map((item, index) => (
          <li key={index} className='flex items-center justify-between'>
            <span
              className={
                item.completed ? 'line-through text-gray-500' : 'text-gray-800'
              }
            >
              {item.text}
            </span>
            <button
              onClick={() => toggleComplete(index)}
              className={`ml-4 w-6 h-6 flex items-center justify-center rounded-full border ${
                item.completed
                  ? 'bg-green-500 text-white'
                  : 'bg-white text-green-500'
              }`}
            >
              ✓
            </button>
          </li>
        ))}
      </ol>

      <div className='mt-4'>
        <input
          type='text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleAddItem();
          }}
          placeholder='Add item...'
          className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
        <button
          onClick={handleAddItem}
          className='mt-2 w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-400'
        >
          Add Item
        </button>
      </div>
    </div>
  );
}

export default Checklist;
