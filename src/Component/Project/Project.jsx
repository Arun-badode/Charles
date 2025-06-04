import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Project.css";
import { Modal, Button, Form } from "react-bootstrap";

const projects = [
  {
    name: "McLane Pacific Mall - 500 Workstations",
    type: "Infrastructure",
    typeIcon: "bi-hdd-network",
    status: "Active",
    statusClass: "badge-success",
    phase: "Not set",
    deadline: "Not set",
    created: "6/01/2025",
    progress: 0,
    progressClass: "progress-bar-gray",
  },
  {
    name: "McLane West",
    type: "Infrastructure",
    typeIcon: "bi-hdd-network",
    status: "Active",
    statusClass: "badge-success",
    phase: "Planning",
    deadline: "7/15/2025",
    created: "5/31/2025",
    progress: 15,
    progressClass: "progress-bar-purple",
  },
  {
    name: "Riverside Data Center Migration",
    type: "Data Center",
    typeIcon: "bi-database",
    status: "In Progress",
    statusClass: "badge-warning",
    phase: "Implementation",
    deadline: "8/30/2025",
    created: "4/15/2025",
    progress: 45,
    progressClass: "progress-bar-green",
  },
  {
    name: "Cloud Migration - Phase 1",
    type: "Cloud Services",
    typeIcon: "bi-cloud",
    status: "Delayed",
    statusClass: "badge-danger",
    phase: "Testing",
    deadline: "5/30/2025",
    created: "3/10/2025",
    progress: 65,
    progressClass: "progress-bar-red",
  },
  {
    name: "ERP System Implementation",
    type: "Software",
    typeIcon: "bi-cpu",
    status: "On Track",
    statusClass: "badge-primary",
    phase: "Development",
    deadline: "9/15/2025",
    created: "5/20/2025",
    progress: 30,
    progressClass: "progress-bar-blue",
  },
];

const projectTypes = [
  "Infrastructure",
  "Data Center",
  "Cloud Services",
  "Software",
];

const statusOptions = [
  "Active",
  "In Progress",
  "Delayed",
  "On Track",
];

const phaseOptions = [
  "Not set",
  "Planning",
  "Implementation",
  "Testing",
  "Development",
];

const Projectmanagement = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="project-mgmt-bg min-vh-100 ">
      <div className="container-flud py-4 p-5">
        <div className="d-flex flex-wrap justify-content-between align-items-center mb-3">
          <div>
            <h4 className="fw-bold mb-0">Project Management</h4>
            <div className="text-muted small">Manage all projects in one place</div>
          </div>
          <div className="d-flex flex-wrap gap-2">
            <button className="btn btn-light border"><i className="bi bi-calendar me-2"></i>Calendar</button>
            <button className="btn btn-light border"><i className="bi bi-bar-chart-line me-2"></i>Reports</button>
            <button className="btn btn-light border"><i className="bi bi-gear me-2"></i>Settings</button>
            <button
              className="btn btn-primary fw-semibold ms-2"
              onClick={() => setShowModal(true)}
            >
              <i className="bi bi-plus-lg me-2"></i>New Project
            </button>
          </div>
        </div>
        <div className="card border-0 shadow-sm">
          <div className="card-body p-0">
            <div className="d-flex flex-wrap align-items-center gap-2 p-3 border-bottom">
              <div className="flex-grow-1">
                <div className="input-group search-group">
                  <span className="input-group-text bg-white border-end-0"><i className="bi bi-search"></i></span>
                  <input type="text" className="form-control border-start-0" placeholder="Search projects..." />
                </div>
              </div>
              <button className="btn btn-light border ms-2"><i className="bi bi-funnel me-1"></i>Filter</button>
              <button className="btn btn-light border ms-2"><i className="bi bi-arrow-down-up me-1"></i>Sort</button>
            </div>
            <div className="table-responsive">
              <table className="table project-table align-middle mb-0">
                <thead>
                  <tr>
                    <th>Project Name</th>
                    <th>Phase</th>
                    <th>Deadline</th>
                    <th>Created</th>
                    <th className="text-end">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((proj, idx) => (
                    <tr key={proj.name} className="project-row">
                      <td>
                        <div className="d-flex align-items-center mb-1">
                          <span className={`project-icon me-2 ${proj.progressClass}`}>
                            <i className={`bi ${proj.typeIcon}`}></i>
                          </span>
                          <span className="fw-semibold">{proj.name}</span>
                        </div>
                        <div className="d-flex flex-wrap align-items-center gap-2 small text-muted">
                          <span>Type: {proj.type}</span>
                          <span className={`badge ${proj.statusClass}`}>{proj.status}</span>
                        </div>
                      </td>
                      <td>{proj.phase}</td>
                      <td className={proj.status === "Delayed" ? "text-danger" : ""}>{proj.deadline}</td>
                      <td>{proj.created}</td>
                      <td className="text-end">
                        <button className="btn btn-sm btn-link p-1" title="View">
                          <i className="bi bi-eye-fill text-primary fs-4"></i>
                        </button>
                        <button className="btn btn-sm btn-link p-1" title="Edit">
                          <i className="bi bi-pencil-square text-success fs-4"></i>
                        </button>
                        <button className="btn btn-sm btn-link p-1" title="Delete">
                          <i className="bi bi-trash-fill text-danger fs-4"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="d-flex justify-content-between align-items-center p-3 border-top">
              <span className="text-muted small">Showing 1-5 of 12 projects</span>
              <nav>
                <ul className="pagination mb-0">
                  <li className="page-item disabled"><span className="page-link">&lt;</span></li>
                  <li className="page-item active"><span className="page-link">1</span></li>
                  <li className="page-item"><span className="page-link">2</span></li>
                  <li className="page-item"><span className="page-link">3</span></li>
                  <li className="page-item"><span className="page-link">&gt;</span></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
   {showModal && (
        <>
          <div className="modal fade show d-block" tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header border-0">
                  <h5 className="modal-title fw-bold">Create New Project</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setShowModal(false)}
                    aria-label="Close"
                  ></button>
                </div>

                <div className="modal-body">
                  <form>
                    <div className="mb-3">
                      <label className="form-label fw-semibold">Project Name</label>
                      <input type="text" className="form-control" placeholder="Enter project name" />
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-semibold">Project Type</label>
                      <select className="form-select">
                        <option>Select type</option>
                        {projectTypes.map((type, i) => (
                          <option key={i}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-semibold">Status</label>
                      <select className="form-select">
                        <option>Select status</option>
                        {statusOptions.map((status, i) => (
                          <option key={i}>{status}</option>
                        ))}
                      </select>
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-semibold">Phase</label>
                      <select className="form-select">
                        <option>Select phase</option>
                        {phaseOptions.map((phase, i) => (
                          <option key={i}>{phase}</option>
                        ))}
                      </select>
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-semibold">Deadline</label>
                      <input type="date" className="form-control" placeholder="mm/dd/yyyy" />
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-semibold">Description</label>
                      <textarea className="form-control" rows="3" placeholder="Enter project description"></textarea>
                    </div>
                  </form>
                </div>

                <div className="modal-footer border-0">
                  <button type="button" className="btn btn-light" onClick={() => setShowModal(false)}>
                    Cancel
                  </button>
                  <button type="button" className="btn btn-primary">Create Project</button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show"></div>
        </>
      )}
    </div>
  );
};

export default Projectmanagement;