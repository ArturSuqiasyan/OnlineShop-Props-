import React from 'react';

const BasketItem = ({ item, onIncrease, onDecrease, onRemove }) => {
  return (
    <tr>
      <td className="py-2 px-4 border-b">{item.id}</td>
      <td className="py-2 px-4 border-b">{item.title}</td>
      <td className="py-2 px-4 border-b">{item.price} USD</td>
      <td className="py-2 px-4 border-b">{item.category}</td>
      <td className="py-2 px-4 border-b">{item.count}</td>
      <td className="py-2 px-4 border-b">
        <button
          onClick={() => onIncrease(item.id)}
          className="bg-green-500 p-2 rounded text-white hover:bg-green-600"
        >
          +
        </button>
        <button
          onClick={() => onDecrease(item.id)}
          className="bg-red-500 p-2 rounded text-white hover:bg-red-600"
        >
          -
        </button>
        <button
          onClick={() => onRemove(item.id)}
          className="bg-orange-500 p-2 rounded text-white hover:bg-orange-600"
        >
          x
        </button>
      </td>
    </tr>
  );
};

export default BasketItem;