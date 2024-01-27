import React, { useState, useEffect } from 'react';
import './Pagination.css'; // Import your CSS file

const API_ENDPOINT =
  'https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json';

const Pagination = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchData = async () => {
    try {
      const response = await fetch(API_ENDPOINT);
      const result = await response.json();
      setData(result);
      setTotalPages(Math.ceil(result.length / 10));
    } catch (error) {
      alert('Failed to fetch data');
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const startIndex = (currentPage - 1) * 10;
  const endIndex = Math.min(startIndex + 10, data.length);

  return (
    <div>
      <h1>Employee Data Table</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>E-mail</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {data.slice(startIndex, endIndex).map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination-container">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="pagination-button"
        >
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="pagination-button"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
