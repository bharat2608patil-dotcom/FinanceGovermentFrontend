import React from 'react';
import './RecordsTable.css';

const RecordsTable = ({
  columns = [],
  data = [],
  className = '',
}) => {

  // Helper: get nested value like "user.name"
  const getNestedValue = (obj, path) => {
    return path
      ? path.split('.').reduce((acc, key) => (acc ? acc[key] : undefined), obj)
      : undefined;
  };

  // Render table header
  const headerLabel = (column) => (
    <th key={column.key || column.label}>
      {column.label}
    </th>
  );

  // Render each cell
  const renderCell = (column, row, rowIndex) => {
    const cellValue = column.key
      ? getNestedValue(row, column.key)
      : undefined;

    const content =
      typeof column.render === 'function'
        ? column.render(cellValue, row)
        : cellValue;

    return (
      <td className={column.className || ''} key={column.key || rowIndex}>
        {content}
      </td>
    );
  };

  return (
    <div className={`records-table table-responsive ${className}`}>
      <table className="table table-striped text-center">
        
        {/* Header */}
        <thead>
          <tr>
            {columns.map((col) => headerLabel(col))}
          </tr>
        </thead>

        {/* Body */}
        <tbody>
          {data.map((row, idx) => (
            <tr key={row.id || row.auditId || row.complianceId || idx}>
              {columns.map((col) => renderCell(col, row, idx))}
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default RecordsTable;