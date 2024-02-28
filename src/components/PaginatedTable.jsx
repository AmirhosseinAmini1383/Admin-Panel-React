import React, { useEffect, useState } from "react";
let numOfPage = 2;
const PaginatedTable = ({ data, dataInfo, additionField }) => {
  const [tableData, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  useEffect(() => {
    let pCount = Math.ceil(data.length / numOfPage);
    console.log(pCount);
    setPageCount(pCount);
    let pArr = [];
    for (let index = 1; index <= pCount; index++) pArr = [...pArr, index];
    setPages(pArr);
  }, []);
  useEffect(() => {
    let start = currentPage * numOfPage - numOfPage; //0
    let end = currentPage * numOfPage; //2
    setTableData(data.slice(start, end));
  }, [currentPage]);

  return (
    <>
      <table className="table table-responsive text-center table-hover table-bordered">
        <thead className="table-secondary">
          <tr>
            {dataInfo.map((i) => (
              <th key={i.field}>{i.title}</th>
            ))}
            {additionField ? <th>{additionField.title}</th> : null}
          </tr>
        </thead>
        <tbody>
          {tableData.map((d) => (
            <tr key={d.id}>
              {dataInfo.map((i) => (
                <td key={i.field + "_" + d.id}>{d[i.field]}</td>
              ))}
              {additionField ? (
                <td key={additionField.field + "_" + d.id}>
                  {additionField.elements(d.id)}
                </td>
              ) : null}
            </tr>
          ))}
        </tbody>
      </table>
      <nav
        aria-label="Page navigation example"
        className="d-flex justify-content-center"
      >
        <ul className="pagination dir_ltr">
          <li className="page-item">
            <span
              className={`page-link pointer ${
                currentPage == 1 ? "disabled" : ""
              }`}
              aria-label="Previous"
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              <span aria-hidden="true">&raquo;</span>
            </span>
          </li>
          {pages.map((page) => (
            <li className="page-item" key={page}>
              <span
                className={`page-link pointer ${
                  currentPage == page ? "pcounter-success" : ""
                }`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </span>
            </li>
          ))}
          <li className="page-item">
            <span
              className={`page-link pointer ${
                currentPage == pageCount ? "disabled" : ""
              }`}
              aria-label="Next"
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              <span aria-hidden="true">&laquo;</span>
            </span>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default PaginatedTable;
