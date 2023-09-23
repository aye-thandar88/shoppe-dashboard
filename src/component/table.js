import React from "react";
import Button from "./Button";

const Table = ({ tableCaption, tableHeader, rows }) => {
  return (
    <table className="min-w-max w-full table-auto">
      <caption className="caption-top">{tableCaption}</caption>
      <thead>
        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
          {tableHeader.map((header, index) => (
            <th className="p-3 text-left" key={index}>
              {header}
            </th>
          ))}
          <th className="p-3 text-left">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            {row.map((data, index) => (
              <>
                <td key={index} className="px-3 py-2 text-left">
                  {data}
                </td>
              </>
            ))}
            <td>
              <td>
                <div className="flex items-center gap-2">
                  <Button type="primary" size="sm">
                    Modify
                  </Button>
                  <Button type="delete" size="sm">
                    Delete
                  </Button>
                </div>
              </td>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
