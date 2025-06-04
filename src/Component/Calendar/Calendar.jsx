import React, { useRef } from "react";

const Calendar = () => {
  // Ref for modal trigger
  const modalRef = useRef();

  // Open modal handler
  const openModal = () => {
    if (window.bootstrap && modalRef.current) {
      const modal = new window.bootstrap.Modal(modalRef.current);
      modal.show();
    }
  };

  return (
    <div className="container-fluid p-5">
      {/* Header */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-3 gap-2">
        <div>
          <h5 className="fw-bold mb-0">McLane pacific call - 500 Verkada - Calendar</h5>
          <small className="text-muted">Project / Calendar / Timeline</small>
        </div>
        <div className="d-flex align-items-center flex-wrap gap-2">
          <a href="#" className="text-decoration-none text-dark small d-flex align-items-center">
            <i className="bi bi-arrow-left me-1 text-secondary"></i>
            Back to Project
          </a>
          <span className="d-flex align-items-center gap-1 text-secondary small">
            <i className="bi bi-funnel"></i>
            <span className="d-none d-md-inline">Filters</span>
          </span>
          <span className="d-flex align-items-center gap-1 text-secondary small">
            <i className="bi bi-search"></i>
            <span className="d-none d-md-inline">Search</span>
          </span>
          <span className="d-flex align-items-center gap-1 text-secondary small">
            <i className="bi bi-graph-up"></i>
            <span className="d-none d-md-inline">Progress</span>
          </span>
        </div>
      </div>

      {/* View Buttons */}
      <div className="mb-3 d-flex flex-wrap gap-2">
        <button className="btn btn-dark btn-sm">Calendar View</button>
        <button className="btn btn-outline-secondary btn-sm">Timeline View</button>
        <button className="btn btn-primary btn-sm">Create</button>
      </div>

      <h6 className="fw-bold mb-3">Project Calendar</h6>

      {/* Stats */}
      <div className="row g-3 mb-4">
        {/* Time Events */}
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="rounded-4 p-3 d-flex align-items-center gap-2 bg-light">
            <span className="rounded-circle bg-primary-subtle text-primary fw-semibold d-flex justify-content-center align-items-center" style={{ width: "38px", height: "38px", fontSize: "18px" }}>
              0
            </span>
            <span className="fw-normal text-secondary">Time Events</span>
          </div>
        </div>
        {/* Active Projects */}
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="rounded-4 p-3 d-flex align-items-center gap-2 bg-light">
            <span className="rounded-circle bg-success-subtle text-success fw-semibold d-flex justify-content-center align-items-center" style={{ width: "38px", height: "38px", fontSize: "18px" }}>
              2
            </span>
            <span className="fw-normal text-secondary">Active Projects</span>
          </div>
        </div>
        {/* Tasks */}
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="rounded-4 p-3 d-flex align-items-center gap-2 bg-light">
            <span className="rounded-circle bg-danger-subtle text-danger fw-semibold d-flex justify-content-center align-items-center" style={{ width: "38px", height: "38px", fontSize: "18px" }}>
              1
            </span>
            <span className="fw-normal text-secondary">Tasks</span>
          </div>
        </div>
        {/* Milestones */}
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="rounded-4 p-3 d-flex align-items-center gap-2 bg-light">
            <span className="rounded-circle bg-purple-subtle text-purple fw-semibold d-flex justify-content-center align-items-center" style={{ width: "38px", height: "38px", fontSize: "18px" }}>
              0
            </span>
            <span className="fw-normal text-secondary">Milestones</span>
          </div>
        </div>
      </div>

      {/* Month Navigation + Add Task */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-3 gap-2">
        <div className="d-flex align-items-center gap-2 mb-2 mb-md-0">
          <h6 className="fw-bold mb-0">← June 2025 →</h6>
          <input type="text" placeholder="Search" className="form-control form-control-sm ms-2" style={{ maxWidth: "180px" }} />
        </div>
        <button
          className="btn btn-primary btn-sm"
          type="button"
          onClick={openModal}
        >
          + Add Task
        </button>
      </div>

      {/* Calendar Grid */}
      <div className="table-responsive border rounded">
        <table className="table table-bordered text-center align-middle m-0">
          <thead className="bg-light">
            <tr>
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <th key={day}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ["1", "", "3", "4", "5", "6", "7"],
              ["8", "9", "10", "11", "12", "13", "14"],
              ["15", "16", "17", "18", "19", "20", "21"],
              ["22", "23", "24", "25", "26", "27", "28"],
              ["29", "30", "1", "2", "3", "4", "5"],
            ].map((week, i) => (
              <tr key={i}>
                {week.map((date, j) => (
                  <td className="position-relative p-2" key={j}>
                    <div className="text-muted">{date}</div>
                    {date === "1" && <div className="bg-danger bg-opacity-25 rounded mt-1 small">Task</div>}
                    {date === "15" && <div className="bg-primary bg-opacity-25 rounded mt-1 small">Meeting</div>}
                    {date === "22" && <div className="bg-info bg-opacity-25 rounded mt-1 small">Deadline</div>}
                    {date === "28" && <div className="bg-info bg-opacity-25 rounded mt-1 small">Test</div>}
                    {date === "29" && <div className="bg-danger bg-opacity-25 rounded mt-1 small">Update</div>}
                    {date === "3" && (
                      <div className="rounded-circle bg-primary text-white small d-inline-block px-2">
                        {date}
                      </div>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Task Modal */}
      <div
        className="modal fade"
        tabIndex="-1"
        ref={modalRef}
        aria-labelledby="addTaskModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fw-bold" id="addTaskModalLabel">
                Add New Task
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Title</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Date</label>
                  <input type="date" className="form-control" defaultValue="2025-06-03" />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Type</label>
                  <select className="form-select">
                    <option>Task</option>
                    <option>Meeting</option>
                    <option>Deadline</option>
                    <option>Test</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Color</label>
                  <select className="form-select">
                    <option>Blue</option>
                    <option>Green</option>
                    <option>Red</option>
                    <option>Purple</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Description</label>
                  <textarea className="form-control" rows={3}></textarea>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Priority</label>
                  <select className="form-select">
                    <option>Medium</option>
                    <option>Low</option>
                    <option>High</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="button" className="btn btn-primary">
                Save Task
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
