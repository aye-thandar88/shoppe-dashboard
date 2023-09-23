import React from 'react'
import Table from '../../../component/table';

const tableHeader = ["Shop", "User", "Rating"];

const rowsData = [
  ["Shop1", 3000, "*****"],
  ["Shop2", 444, "***"],
  ["Shop3", 356, "**"],
];

const Lists = () => {
  return (
    <div className="my-3 px-10 py-3">
        <Table
          // tableCaption="able 3.1: Professional wrestlers and their signature moves."
          tableHeader={tableHeader}
          rows={rowsData}
        />
      </div>
  )
}

export default Lists
