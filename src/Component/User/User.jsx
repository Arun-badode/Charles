import React, { useState } from "react";

// Bootstrap Icons use karne ke liye npm install bootstrap-icons ya CDN se include karen

const usersData = [
  {
    name: "Charles King",
    email: "user_charles@domain.com",
    role: "Vice President",
    isAdmin: true,
    organization: "FinTech Test Organization",
    status: "Active",
  },
  {
    name: "Jessica White",
    email: "user_jessica@domain.com",
    role: "Vice President",
    isAdmin: false,
    organization: "FinTech Test Organization",
    status: "Active",
  },
  {
    name: "Andrew Miller",
    email: "user_andrew@domain.com",
    role: "Developer",
    isAdmin: false,
    organization: "FinTech Test Organization",
    status: "Suspended",
  },
  {
    name: "John Doe",
    email: "user_john@domain.com",
    role: "-",
    isAdmin: false,
    organization: "N/A",
    status: "Active",
  },
];

const statusOptions = ["Active", "Suspended"];

const UserManagement = () => {
  const [users, setUsers] = useState(usersData);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editUserIdx, setEditUserIdx] = useState(null);
  const [editForm, setEditForm] = useState({
    name: "",
    email: "",
    role: "",
    organization: "",
    status: "Active",
    isAdmin: false,
  });

  // Open edit modal and fill form
  const handleEdit = (idx) => {
    const user = users[idx];
    setEditForm({ ...user });
    setEditUserIdx(idx);
    setShowEditModal(true);
  };

  // Handle edit form change
  const handleEditChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Save changes (demo only, no backend)
  const handleEditSave = () => {
    const updatedUsers = [...users];
    updatedUsers[editUserIdx] = { ...editForm };
    setUsers(updatedUsers);
    setShowEditModal(false);
  };

  return (
    <div className="container py-4 p-5">
      <h5 className="fw-semibold mb-4">User Management</h5>

      {/* Stat Cards */}
      <div className="row mb-4 g-3">
        <div className="col-12 col-sm-6 col-lg-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body d-flex align-items-center gap-3">
              <span className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center" style={{ width: 40, height: 40 }}>
                <i className="bi bi-people-fill fs-4 text-primary"></i>
              </span>
              <div>
                <div className="text-muted small">Total Users</div>
                <span className="fw-bold">{users.length}</span> <span className="text-muted">/ 1000</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body d-flex align-items-center gap-3">
              <span className="bg-warning bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center" style={{ width: 40, height: 40 }}>
                <i className="bi bi-shield-lock-fill fs-4 text-warning"></i>
              </span>
              <div>
                <div className="text-muted small">Admin Accounts</div>
                <span className="fw-bold">{users.filter((u) => u.isAdmin).length}</span> <span className="text-muted">/ 10</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-lg-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body d-flex align-items-center gap-3">
              <span className="bg-info bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center" style={{ width: 40, height: 40 }}>
                <i className="bi bi-diagram-3-fill fs-4 text-info"></i>
              </span>
              <div>
                <div className="text-muted small">Organization Projects</div>
                <span className="fw-bold">2</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Create */}
      <div className="row align-items-center mb-3 g-2">
        <div className="col-12 col-md-6">
          <h6 className="mb-0 fw-semibold d-flex align-items-center">
            <i className="bi bi-people-fill me-2"></i>Organization Users
          </h6>
        </div>
        <div className="col-12 col-md-6">
          <div className="d-flex flex-column flex-md-row align-items-stretch align-items-md-center gap-2">
            <div className="input-group flex-grow-1">
              <span className="input-group-text bg-white border-end-0">
                <i className="bi bi-search"></i>
              </span>
              <input type="text" className="form-control border-start-0" placeholder="Search user..." />
            </div>
            <button
              className="btn btn-primary d-flex align-items-center gap-1 w-100 w-md-auto justify-content-center"
              onClick={() => setShowCreateModal(true)}
            >
              <i className="bi bi-plus-lg"></i> Create User
            </button>
          </div>
        </div>
      </div>

      {/* User Table */}
      <div className="table-responsive bg-white rounded shadow-sm">
        <table className="table table-hover align-middle mb-0">
          <thead className="table-light">
            <tr>
              <th className="fw-semibold">USER</th>
              <th className="fw-semibold">EMAIL</th>
              <th className="fw-semibold">ROLE</th>
              <th className="fw-semibold">ORGANIZATION</th>
              <th className="fw-semibold">STATUS</th>
              <th className="fw-semibold">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={idx}>
                <td className="fw-semibold">
                  <div className="d-flex align-items-center gap-2">
                    <span className="bg-secondary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center" style={{ width: 32, height: 32 }}>
                      <i className="bi bi-person-fill text-secondary fs-5"></i>
                    </span>
                    {user.name}
                  </div>
                </td>
                <td className="text-muted">{user.email}</td>
                <td>
                  {user.isAdmin && (
                    <span className="badge bg-warning text-dark me-1">Admin</span>
                  )}
                  {user.role}
                </td>
                <td>{user.organization}</td>
                <td>
                  <span
                    className={`badge px-3 py-1 fw-normal
                      ${
                        user.status === "Active"
                          ? "bg-success bg-opacity-10 text-success"
                          : user.status === "Suspended"
                          ? "bg-danger bg-opacity-10 text-danger"
                          : "bg-secondary bg-opacity-10 text-secondary"
                      }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td>
                  <div className="d-flex flex-column flex-md-row gap-2">
                    <button className="btn btn-link text-primary p-0 d-flex align-items-center gap-1 text-decoration-none">
                      <i className="bi bi-person-badge-fill"></i> Assign Role
                    </button>
                    <button
                      className="btn btn-link text-success p-0"
                      onClick={() => handleEdit(idx)}
                    >
                      <i className="bi bi-pencil-square"></i>
                    </button>
                    <button className="btn btn-link text-danger p-0">
                      <i className="bi bi-trash-fill"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* License Info */}
      <div className="row mt-4 g-3">
        <div className="col-12 col-md-8">
          <div className="p-3 bg-light border rounded h-100">
            <strong>License Information:</strong> <br />
            <span className="text-muted">
              <strong>Organization Database:</strong> Allocated 500 users for all projects in your
              organization instance. These users are accessible for searches, projects and tasks.
            </span>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="bg-white border rounded h-100 d-flex flex-column align-items-center justify-content-center py-3 shadow-sm">
            <h2 className="text-primary mb-0 fw-bold">996</h2>
            <div className="text-muted text-center">
              Project Assignments
              <br />
              <span>
                Limit reached for users who are assigned to projects. Add to your license count for
                more project assignments.
              </span>
            </div>
            <a href="#" className="mt-2 text-primary fw-semibold text-decoration-none">
              VIEW DETAILS
            </a>
          </div>
        </div>
      </div>

      {/* Create User Modal */}
      {showCreateModal && (
        <div className="modal fade show d-block" tabIndex="-1" style={{ background: "rgba(0,0,0,0.2)" }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header border-0 pb-0">
                <h5 className="modal-title fw-semibold">Create New User</h5>
                <button type="button" className="btn-close" onClick={() => setShowCreateModal(false)}></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Full Name</label>
                    <input type="text" className="form-control" placeholder="Enter user's full name" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Email Address</label>
                    <input type="email" className="form-control" placeholder="Enter user's email address" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Role</label>
                    <input type="text" className="form-control" placeholder="Enter user's role" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Organization</label>
                    <input type="text" className="form-control" defaultValue="FinTech Test Organization" />
                  </div>
                  <div className="form-check mb-3">
                    <input className="form-check-input" type="checkbox" id="adminCheckCreate" />
                    <label className="form-check-label" htmlFor="adminCheckCreate">
                      Admin privileges
                    </label>
                  </div>
                </form>
              </div>
              <div className="modal-footer border-0 pt-0">
                <button type="button" className="btn btn-light" onClick={() => setShowCreateModal(false)}>
                  Cancel
                </button>
                <button type="button" className="btn btn-primary">
                  Create User
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit User Modal */}
      {showEditModal && (
        <div className="modal fade show d-block" tabIndex="-1" style={{ background: "rgba(0,0,0,0.2)" }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header border-0 pb-0">
                <h5 className="modal-title fw-semibold">Edit User</h5>
                <button type="button" className="btn-close" onClick={() => setShowEditModal(false)}></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={editForm.name}
                      onChange={handleEditChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={editForm.email}
                      onChange={handleEditChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Role</label>
                    <input
                      type="text"
                      className="form-control"
                      name="role"
                      value={editForm.role}
                      onChange={handleEditChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Organization</label>
                    <input
                      type="text"
                      className="form-control"
                      name="organization"
                      value={editForm.organization}
                      onChange={handleEditChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Status</label>
                    <select
                      className="form-select"
                      name="status"
                      value={editForm.status}
                      onChange={handleEditChange}
                    >
                      {statusOptions.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="adminCheckEdit"
                      name="isAdmin"
                      checked={editForm.isAdmin}
                      onChange={handleEditChange}
                    />
                    <label className="form-check-label" htmlFor="adminCheckEdit">
                      Admin privileges
                    </label>
                  </div>
                </form>
              </div>
              <div className="modal-footer border-0 pt-0">
                <button type="button" className="btn btn-light" onClick={() => setShowEditModal(false)}>
                  Cancel
                </button>
                <button type="button" className="btn btn-primary" onClick={handleEditSave}>
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;