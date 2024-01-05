import React from 'react';
import { Link } from 'react-router-dom';

const MySales = () => {
  const discounts = [
    { id: 1, name: 'Скидка 1' },
    { id: 2, name: 'Скидка 2' },
  ];

  return (
    <div>
      <h3>Мои продажи</h3>
      <ul>
        {discounts.map((discount) => (
          <li key={discount.id}>
            <Link to={`/my-sales/discount/${discount.id}`}>{discount.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MySales;
