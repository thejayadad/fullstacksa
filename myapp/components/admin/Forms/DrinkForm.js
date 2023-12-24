'use client'
import React, { useState } from 'react';

const DrinksForm = ({ onAddDrink }) => {
  const [drinkName, setDrinkName] = useState('');
  const [drinkPrice, setDrinkPrice] = useState('');

  const handleAddDrink = () => {
    if (drinkName && drinkPrice) {
      onAddDrink({ name: drinkName, price: drinkPrice });
      setDrinkName('');
      setDrinkPrice('');
    }
  };

  return (
    <div className="mb-4">
      <label className="block mb-2">Drink Name:</label>
      <input
        type="text"
        value={drinkName}
        onChange={(e) => setDrinkName(e.target.value)}
        className="mb-2 p-2 border rounded-md"
      />

      <label className="block mb-2">Drink Price:</label>
      <input
        type="text"
        value={drinkPrice}
        onChange={(e) => setDrinkPrice(e.target.value)}
        className="mb-2 p-2 border rounded-md"
      />

      <button
        onClick={handleAddDrink}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Add Drink
      </button>
    </div>
  );
};

export default DrinksForm;
