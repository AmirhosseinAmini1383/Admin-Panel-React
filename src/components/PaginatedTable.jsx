import React, { useEffect, useState } from "react";

const PaginatedTable = ({
  data,
  dataInfo,
  additionField,
  children,
  searchParams,
  numOfPage,
}) => {
  const [initData, setInitData] = useState(data);
  const [tableData, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [searchChar, setSearchChar] = useState("");
  useEffect(() => {
    let pCount = Math.ceil(initData.length / numOfPage);
    console.log(pCount);
    setPageCount(pCount);
    let pArr = [];
    for (let index = 1; index <= pCount; index++) pArr = [...pArr, index];
    setPages(pArr);
  }, [initData]);
  useEffect(() => {
    let start = currentPage * numOfPage - numOfPage; //0
    let end = currentPage * numOfPage; //2
    setTableData(initData.slice(start, end));
  }, [currentPage, initData]);
  useEffect(() => {
    setInitData(
      data.filter((d) => d[searchParams.searchField].includes(searchChar))
    );
    setCurrentPage(1);
  }, [searchChar]);
  return (
    <>
      <div className="row justify-content-between">
        <div className="col-10 col-md-6 col-lg-4">
          <div className="input-group mb-3 dir_ltr">
            <input
              type="text"
              className="form-control"
              placeholder={searchParams.placeholder}
              onChange={(e) => setSearchChar(e.target.value)}
            />
            <span className="input-group-text">{searchParams.title}</span>
          </div>
        </div>
        <div className="col-2 col-md-6 col-lg-4 d-flex flex-column align-items-end">
          {children}
        </div>
      </div>
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
      {pages.length > 1 ? (
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
      ) : null}
    </>
  );
};

export default PaginatedTable;
