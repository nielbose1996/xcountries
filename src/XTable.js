import React, { useState } from 'react';

const initialData = [
  { date: "2023-09-01", views: 100, article: "Article 1" },
  { date: "2023-09-02", views: 150, article: "Article 2" },
  { date: "2023-09-02", views: 120, article: "Article 3" },
  { date: "2020-09-03", views: 200, article: "Article 4" }
];

const XTable = () => {
  const [data, setData] = useState(initialData);
  const [sortOption, setSortOption] = useState(null);

  const sortByDate = () => {
    const sortedData = [...data].sort((a, b) => {
      const dateComparison = new Date(b.date) - new Date(a.date);
      return dateComparison !== 0 ? dateComparison : b.views - a.views;
    });
    setData(sortedData);
    setSortOption('date');
  };

  const sortByViews = () => {
    const sortedData = [...data].sort((a, b) => {
      const viewsComparison = b.views - a.views;
      return viewsComparison !== 0 ? viewsComparison : new Date(b.date) - new Date(a.date);
    });
    setData(sortedData);
    setSortOption('views');
  };

  return (
    <div>
      <h1>Date and Views Table</h1>
      <div>
        <button style={{ width: '200px' }} onClick={sortByDate}>Sort by Date</button>
        <button style={{ width: '200px' }} onClick={sortByViews}>Sort by Views</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.date}</td>
              <td>{row.views}</td>
              <td>{row.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default XTable;
