
  import React from 'react';
import BasketItem from './basketItem';


const Basket = ({ cart, onIncrease, onDecrease, onRemove }) => {
 

  return (
    <div className="p-4 bg-gray-100 rounded shadow">
      <h3 className="text-lg font-semibold">Basket ({cart.length} items)</h3>
      <table className="min-w-full bg-white border border-gray-300 rounded shadow-sm">
        <thead className="bg-orange-400">
          <tr className="text-gray-700 text-sm">
            <th className="py-2 px-4 border-b font-semibold">ID</th>
            <th className="py-2 px-4 border-b font-semibold">Title</th>
            <th className="py-2 px-4 border-b font-semibold">Price</th>
            <th className="py-2 px-4 border-b font-semibold">Category</th>
            <th className="py-2 px-4 border-b font-semibold">Count</th>
            <th className="py-2 px-4 border-b font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <BasketItem
              key={item.id}
              item={item}
              onIncrease={onIncrease}
              onDecrease={onDecrease}
              onRemove={onRemove}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Basket;