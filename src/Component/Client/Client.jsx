import React, { useState } from "react";

// Bootstrap Icons use karne ke liye npm install bootstrap-icons ya CDN se include karen

const initialClients = [
  {
    name: "Charles Long",
    email: "charles@example.com",
    phone: "(555) 123-4567",
    status: "Active",
    lastLogin: "3 days ago",
  },
  {
    name: "Aman Patel",
    email: "aman@example.com",
    phone: "(555) 987-6543",
    status: "Active",
    lastLogin: "1 day ago",
  },
  {
    name: "Riya Sharma",
    email: "riya@example.com",
    phone: "(555) 555-1212",
    status: "Inactive",
    lastLogin: "10 days ago",
  },
];

const statusOptions = ["Active", "Inactive"];

const ClientManagement = () => {
  const [clients, setClients] = useState(initialClients);
  const [activeTab, setActiveTab] = useState("All");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedClientIdx, setSelectedClientIdx] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    status: "Active",
  });

  // Filtered clients for tabs
  const filteredClients =
    activeTab === "All"
      ? clients
      : clients.filter((c) =>
          activeTab === "Active"
            ? c.status === "Active"
            : c.status === "Inactive"
        );

  // Modal open handlers
  const handleAddOpen = () => {
    setForm({ name: "", email: "", phone: "", status: "Active" });
    setShowAddModal(true);
  };

  const handleEditOpen = (idx) => {
    setSelectedClientIdx(idx);
    setForm({
      name: clients[idx].name,
      email: clients[idx].email,
      phone: clients[idx].phone,
      status: clients[idx].status,
    });
    setShowEditModal(true);
  };

  const handleViewOpen = (idx) => {
    setSelectedClientIdx(idx);
    setShowViewModal(true);
  };

  // Modal close handlers
  const closeAllModals = () => {
    setShowAddModal(false);
    setShowEditModal(false);
    setShowViewModal(false);
  };

  // Form change handler
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Add client
  const handleAddClient = () => {
    setClients([...clients, { ...form, lastLogin: "Never" }]);
    setShowAddModal(false);
  };

  // Edit client
  const handleEditClient = () => {
    const updated = [...clients];
    updated[selectedClientIdx] = { ...updated[selectedClientIdx], ...form };
    setClients(updated);
    setShowEditModal(false);
  };

  // Tab counts
  const allCount = clients.length;
  const activeCount = clients.filter((c) => c.status === "Active").length;
  const inactiveCount = clients.filter((c) => c.status === "Inactive").length;

  // Responsive modals and table
  return (
    <div className="container mt-4 p-4">
      {/* Header */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-3 gap-2">
        <div>
          <h5 className="fw-semibold mb-0">Client Management</h5>
          <div className="text-muted small">Client Management / View</div>
        </div>
        <div className="d-flex align-items-center gap-2">
          <button className="btn btn-light border d-flex align-items-center gap-1">
            <i className="bi bi-grid-fill text-secondary"></i> Grid View
          </button>
          <button className="btn btn-light border d-flex align-items-center gap-1">
            <i className="bi bi-box-arrow-up-right text-secondary"></i> Export
          </button>
          <button
            className="btn btn-primary d-flex align-items-center gap-1"
            onClick={handleAddOpen}
          >
            <i className="bi bi-plus-lg"></i> New Client
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
        <button
          className={`btn btn-sm d-flex align-items-center gap-1 rounded ${
            activeTab === "All"
              ? "btn-primary text-white"
              : "btn-light border text-secondary"
          }`}
          onClick={() => setActiveTab("All")}
        >
          <span className="position-relative">
            <i
              className={`bi bi-people-fill ${
                activeTab === "All" ? "text-white" : "text-secondary"
              }`}
            ></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
              {allCount}
            </span>
          </span>
          All
        </button>
        <button
          className={`btn btn-sm d-flex align-items-center gap-1 rounded ${
            activeTab === "Active"
              ? "btn-primary text-white"
              : "btn-light border text-secondary"
          }`}
          onClick={() => setActiveTab("Active")}
        >
          <span className="position-relative">
            <i
              className={`bi bi-person-check-fill ${
                activeTab === "Active" ? "text-white" : "text-secondary"
              }`}
            ></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
              {activeCount}
            </span>
          </span>
          Active
        </button>
        <button
          className={`btn btn-sm d-flex align-items-center gap-1 rounded ${
            activeTab === "Inactive"
              ? "btn-primary text-white"
              : "btn-light border text-secondary"
          }`}
          onClick={() => setActiveTab("Inactive")}
        >
          <span className="position-relative">
            <i
              className={`bi bi-person-x-fill ${
                activeTab === "Inactive" ? "text-white" : "text-secondary"
              }`}
            ></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
              {inactiveCount}
            </span>
          </span>
          Inactive
        </button>
      </div>

      {/* Search and Filter */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-stretch align-items-md-center mb-2 gap-2">
        <div className="input-group" style={{ maxWidth: 300 }}>
          <span className="input-group-text bg-white border-end-0">
            <i className="bi bi-search"></i>
          </span>
          <input
            type="text"
            className="form-control border-start-0"
            placeholder="Search clients..."
          />
        </div>
        <div className="d-flex gap-2">
          <button className="btn btn-light border d-flex align-items-center gap-1">
            <i className="bi bi-funnel"></i> Filter
          </button>
          <button className="btn btn-light border d-flex align-items-center gap-1">
            <i className="bi bi-arrow-down-up"></i> Sort
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="table-responsive border rounded">
        <table className="table align-middle mb-0">
          <thead className="table-light">
            <tr>
              <th>Client</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Last Login</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredClients.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center text-muted">
                  No clients found.
                </td>
              </tr>
            ) : (
              filteredClients.map((client, idx) => (
                <tr key={idx}>
                  <td>
                    <div className="d-flex align-items-center">
                      <div
                        className="bg-primary bg-opacity-10 rounded-circle d-flex justify-content-center align-items-center me-2"
                        style={{ width: 40, height: 40 }}
                      >
                        <span className="fw-bold text-uppercase text-primary">
                          {client.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="fw-semibold">{client.name}</div>
                        <div className="text-muted small">{client.email}</div>
                      </div>
                    </div>
                  </td>
                  <td>{client.phone}</td>
                  <td>
                    <span
                      className={`badge ${
                        client.status === "Active"
                          ? "bg-success bg-opacity-10 text-success"
                          : "bg-secondary bg-opacity-10 text-secondary"
                      }`}
                    >
                      {client.status}
                    </span>
                  </td>
                  <td>{client.lastLogin}</td>
                  <td className="text-center">
                    <button
                      className="btn btn-link text-primary p-1 me-2"
                      title="View"
                      onClick={() => handleViewOpen(clients.indexOf(client))}
                    >
                      <i className="bi bi-eye-fill"></i>
                    </button>
                    <button
                      className="btn btn-link text-success p-1 me-2"
                      title="Edit"
                      onClick={() => handleEditOpen(clients.indexOf(client))}
                    >
                      <i className="bi bi-pencil-square"></i>
                    </button>
                    <button
                      className="btn btn-link text-danger p-1"
                      title="Delete"
                      // You can add delete logic here
                    >
                      <i className="bi bi-trash-fill"></i>
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination and Footer */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-3 gap-2">
        <div className="text-muted small">
          Showing {filteredClients.length === 0 ? 0 : 1} to {filteredClients.length} of{" "}
          {filteredClients.length} results
        </div>
        <div>
          <nav>
            <ul className="pagination pagination-sm mb-0">
              <li className="page-item disabled">
                <button className="page-link">&lt;</button>
              </li>
              <li className="page-item active">
                <button className="page-link">1</button>
              </li>
              <li className="page-item disabled">
                <button className="page-link">&gt;</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Add New Client Modal */}
      {showAddModal && (
        <div className="modal fade show d-block" tabIndex="-1" style={{ background: "rgba(0,0,0,0.2)" }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header border-0 pb-0">
                <h5 className="modal-title fw-semibold">Add New Client</h5>
                <button type="button" className="btn-close" onClick={closeAllModals}></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={form.name}
                      onChange={handleFormChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={form.email}
                      onChange={handleFormChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      value={form.phone}
                      onChange={handleFormChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Status</label>
                    <select
                      className="form-select"
                      name="status"
                      value={form.status}
                      onChange={handleFormChange}
                    >
                      {statusOptions.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </div>
                </form>
              </div>
              <div className="modal-footer border-0 pt-0">
                <button type="button" className="btn btn-light" onClick={closeAllModals}>
                  Cancel
                </button>
                <button type="button" className="btn btn-primary" onClick={handleAddClient}>
                  Add Client
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Client Modal */}
      {showEditModal && (
        <div className="modal fade show d-block" tabIndex="-1" style={{ background: "rgba(0,0,0,0.2)" }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header border-0 pb-0">
                <h5 className="modal-title fw-semibold">
                  <i className="bi bi-kanban-fill me-2 text-primary"></i>Edit Client
                </h5>
                <button type="button" className="btn-close" onClick={closeAllModals}></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={form.name}
                      onChange={handleFormChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={form.email}
                      onChange={handleFormChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      value={form.phone}
                      onChange={handleFormChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Status</label>
                    <select
                      className="form-select"
                      name="status"
                      value={form.status}
                      onChange={handleFormChange}
                    >
                      {statusOptions.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </div>
                </form>
              </div>
              <div className="modal-footer border-0 pt-0">
                <button type="button" className="btn btn-light" onClick={closeAllModals}>
                  Cancel
                </button>
                <button type="button" className="btn btn-primary" onClick={handleEditClient}>
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* View Client Modal */}
      {showViewModal && (
        <div className="modal fade show d-block" tabIndex="-1" style={{ background: "rgba(0,0,0,0.2)" }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header border-0 pb-0">
                <h5 className="modal-title fw-semibold">View Client Details</h5>
                <button type="button" className="btn-close" onClick={closeAllModals}></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label fw-semibold mb-0">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={clients[selectedClientIdx]?.name || ""}
                    disabled
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold mb-0">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    value={clients[selectedClientIdx]?.email || ""}
                    disabled
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold mb-0">Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    value={clients[selectedClientIdx]?.phone || ""}
                    disabled
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold mb-0">Status</label>
                  <div>
                    <span
                      className={`badge px-3 py-1 fw-normal ${
                        clients[selectedClientIdx]?.status === "Active"
                          ? "bg-success bg-opacity-10 text-success"
                          : "bg-secondary bg-opacity-10 text-secondary"
                      }`}
                    >
                      {clients[selectedClientIdx]?.status}
                    </span>
                  </div>
                </div>
              </div>
              <div className="modal-footer border-0 pt-0">
                <button type="button" className="btn btn-light" onClick={closeAllModals}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientManagement;
