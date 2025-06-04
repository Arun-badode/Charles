// FileManager.jsx
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import {
  FaUpload,
  FaTrash,
  FaThList,
  FaSearch,
  FaDownload,
  FaClock,
  FaEllipsisV,
  FaFileWord,
  FaFilePdf,
  FaFileExcel,
  FaFileImage,
  FaFileAlt,
} from "react-icons/fa";

const files = [
  {
    name: "API Documentation",
    extension: "docx",
    project: "Website Redesign",
    task: "Backend Integration",
    size: "1.7 MB",
    modified: "6/3/2025",
    version: "v1",
  },
  {
    name: "Homepage Mockup",
    extension: "psd",
    project: "Website Redesign",
    task: "UI Development",
    size: "45.8 MB",
    modified: "6/3/2025",
    version: "v2",
  },
  {
    name: "Logo Design",
    extension: "ai",
    project: "Marketing Campaign",
    task: "Design Assets",
    size: "14.3 MB",
    modified: "6/2/2025",
    version: "v3",
  },
  {
    name: "Marketing Plan",
    extension: "xlsx",
    project: "Product Launch",
    task: "Press Release",
    size: "3.1 MB",
    modified: "6/4/2025",
    version: "v4",
  },
  {
    name: "Project Brief",
    extension: "pdf",
    project: "Marketing Campaign",
    task: "Design Assets",
    size: "2.4 MB",
    modified: "6/1/2025",
    version: "v1",
  },
];

/* --------------------------------------------------------------- */
/*  Icon helpers                                                   */
/* --------------------------------------------------------------- */
const getFileIconSm = (ext) => {
  switch (ext) {
    case "docx":
      return <FaFileWord className="text-secondary fs-4 me-2" />;
    case "pdf":
      return <FaFilePdf className="text-secondary fs-4 me-2" />;
    case "xlsx":
      return <FaFileExcel className="text-secondary fs-4 me-2" />;
    case "psd":
    case "ai":
      return <FaFileImage className="text-secondary fs-4 me-2" />;
    default:
      return <FaFileAlt className="text-secondary fs-4 me-2" />;
  }
};

const getFileIconLg = (ext) => {
  switch (ext) {
    case "docx":
      return <FaFileWord className="text-secondary fs-1" />;
    case "pdf":
      return <FaFilePdf className="text-secondary fs-1" />;
    case "xlsx":
      return <FaFileExcel className="text-secondary fs-1" />;
    case "psd":
    case "ai":
      return <FaFileImage className="text-secondary fs-1" />;
    default:
      return <FaFileAlt className="text-secondary fs-1" />;
  }
};

const FileManager = () => {
  const [gridView, setGridView] = useState(false); // start in grid mode

  return (
    <div className="container-fluid bg-light p-5 min-vh-100">
      {/* Heading + Breadcrumb */}
      <h3>File Management</h3>
      <nav aria-label="breadcrumb" className="mb-3">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item ">
            <a href="#home">Home</a>
          </li>
          <li className="breadcrumb-item">Projects</li>
          <li className="breadcrumb-item active" aria-current="page">
            Files
          </li>
        </ol>
      </nav>

      {/* Toolbar */}
      <div className="row g-3 align-items-center mb-3">
        {/* Left buttons */}
        <div className="col-12 col-md-auto">
          <div className="d-flex flex-column flex-md-row gap-2">
            <button className="btn btn-primary d-flex align-items-center gap-1">
              <FaUpload /> Upload
            </button>
            <button className="btn btn-outline-secondary d-flex align-items-center gap-1">
              <FaTrash /> Delete
            </button>
            {/* Switch to list view */}
            <button
              className={`btn btn-outline-secondary${
                gridView ? "" : " active"
              }`}
              onClick={() => setGridView(false)}
            >
              <FaThList />
            </button>
            {/* Switch to grid view */}
            <button
              className={`btn btn-outline-secondary${
                gridView ? " active" : ""
              }`}
              onClick={() => setGridView(true)}
            >
              <i className="bi bi-grid-fill"></i>
            </button>
          </div>
        </div>

        {/* Search + filters */}
        <div className="col-12 col-md">
          <div className="d-flex flex-column flex-md-row gap-2">
            <div className="input-group">
              <span className="input-group-text">
                <FaSearch />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Search files..."
              />
            </div>
            <select className="form-select">
              <option>All Projects</option>
            </select>
            <select className="form-select">
              <option>All Tasks</option>
            </select>
          </div>
        </div>
      </div>

      {/* ---------- VIEWS ---------- */}
      {gridView ? (
        /* ---------------- GRID ---------------- */
        <div className="row g-3">
          {files.map((f, idx) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={idx}>
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  {getFileIconLg(f.extension)}
                  <h6 className="mt-3">{f.name}.{f.extension}</h6>
                  <small className="text-muted d-block">
                    {f.size} • {f.version}
                  </small>
                  <small className="text-muted">{f.modified}</small>
                </div>
                <div className="card-footer d-flex justify-content-between align-items-center">
                  <span className="badge bg-light text-dark">{f.task}</span>
                  <div className="d-flex gap-2">
                    <FaDownload className="text-secondary" role="button" />
                    <FaClock className="text-secondary" role="button" />
                    <FaEllipsisV className="text-secondary" role="button" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* ---------------- LIST / TABLE ---------------- */
        <>
          <div className="table-responsive bg-white rounded shadow-sm">
            <table className="table align-middle table-hover mb-0">
              <thead className="table-light text-uppercase">
                <tr>
                  <th scope="col">
                    <input type="checkbox" />
                  </th>
                  <th scope="col">Name</th>
                  <th scope="col">Project</th>
                  <th scope="col">Task</th>
                  <th scope="col">Size</th>
                  <th scope="col">Modified</th>
                  <th scope="col">Version</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {files.map((f, idx) => (
                  <tr key={idx}>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        {getFileIconSm(f.extension)}
                        <div>
                          <div className="fw-semibold">
                            {f.name}.{f.extension}
                          </div>
                          <small className="text-muted">
                            .{f.extension}
                          </small>
                        </div>
                      </div>
                    </td>
                    <td>{f.project}</td>
                    <td>{f.task}</td>
                    <td>{f.size}</td>
                    <td>{f.modified}</td>
                    <td>{f.version}</td>
                    <td>
                      <div className="d-flex gap-2">
                        <FaDownload className="text-secondary" role="button" />
                        <FaClock className="text-secondary" role="button" />
                        <FaEllipsisV className="text-secondary" role="button" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination (dummy) */}
          <div className="d-flex justify-content-between align-items-center mt-3 flex-wrap">
            <span className="text-muted">Showing 1 to 5 of 5 results</span>
            <nav>
              <ul className="pagination pagination-sm mb-0">
                <li className="page-item disabled">
                  <button className="page-link">&laquo;</button>
                </li>
                <li className="page-item active">
                  <button className="page-link">1</button>
                </li>
                <li className="page-item disabled">
                  <button className="page-link">&raquo;</button>
                </li>
              </ul>
            </nav>
          </div>
        </>
      )}
    </div>
  );
};

export default FileManager;
