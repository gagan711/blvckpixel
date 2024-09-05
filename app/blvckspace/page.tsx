'use client';

import React from 'react';
import Link from 'next/link';
import './page.css';

const categories = [
  {
    id: 1,
    title: 'BLVCKSPACE',
    imageUrl: '/pixel2.png',
    content: 'The standard chunk of Lorem Ipsum.',
  },
  {
    id: 2,
    title: 'BLVCKSPACE',
    imageUrl: '/pixel2.png',
    content: 'The standard chunk of Lorem Ipsum.',
  },
  {
    id: 3,
    title: 'BLVCKSPACE',
    imageUrl: '/pixel2.png',
    content: 'The standard chunk of Lorem Ipsum.',
  },
];

const Page: React.FC = () => {
  return (
    <div className="page-container">
      <div className="card-container">
        {categories.map((category) => (
          <Link key={category.id} href={`/blvckspace/articles/${category.id}`}>
          <div className="category card" style={{ backgroundImage: `url(${category.imageUrl})` }}>
            <div className="card-overlay">
              <h3 className="card-title">{category.title}</h3>
              <p className="card-content">{category.content}</p>
            </div>
          </div>
        </Link>        
        ))}
      </div>
    </div>
  );
};

export default Page;
