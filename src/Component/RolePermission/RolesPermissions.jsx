import React, { useState } from "react";
import { Button, Dropdown, Modal, Form } from "react-bootstrap";

const users = [
  {
    initials: "JD",
    name: "John Davis",
    email: "john.davis@example.com",
    role: "Admin",
    permissions: ["View", "Create", "Edit", "Delete"],
    status: "Active",
  },
  {
    initials: "SM",
    name: "Sarah Miller",
    email: "sarah.miller@example.com",
    role: "Project Manager",
    permissions: ["View", "Create", "Edit", "Delete"],
    status: "Active",
  },
  {
    initials: "RJ",
    name: "Robert Johnson",
    email: "robert.johnson@example.com",
    role: "Team Member",
    permissions: ["View", "Create", "Edit", "Delete"],
    status: "Active",
  },
];

const roles = [
  {
    name: "Admin",
    description: "Full system access",
    permissions: ["View", "Create", "Edit", "Delete"],
  },
  {
    name: "Project Manager",
    description: "Manage projects and team members",
    permissions: ["View", "Create", "Edit", "Delete"],
  },
  {
    name: "Team Member",
    description: "Basic access to assigned projects",
    permissions: ["View", "Create", "Edit", "Delete"],
  },
];

const RolesPermissions = () => {
  const [showAddRole, setShowAddRole] = useState(false);
  const [showEditUser, setShowEditUser] = useState(false);
  const [showEditRole, setShowEditRole] = useState(false);
  const [editUser, setEditUser] = useState(null);
  const [editRole, setEditRole] = useState(null);
  const [editRolePermissions, setEditRolePermissions] = useState([]);

  // Dummy permissions for Add Role modal
  const permissionsList = ["View", "Create", "Edit", "Delete"];

  // Open Edit User modal with user data
  const handleEditUser = (user) => {
    setEditUser(user);
    setShowEditUser(true);
  };

  // Open Edit Role modal with role data
  const handleEditRole = (role) => {
    setEditRole(role);
    setEditRolePermissions(role.permissions);
    setShowEditRole(true);
  };

  const handleEditRolePermissionChange = (perm) => {
    setEditRolePermissions((prev) =>
      prev.includes(perm)
        ? prev.filter((p) => p !== perm)
        : [...prev, perm]
    );
  };

  return (
    <div className="container-flud py-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-11 col-lg-10 col-xl-11">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h4>Roles & Permissions</h4>
            <Button variant="primary" onClick={() => setShowAddRole(true)}>
              + Add New Role
            </Button>
          </div>

          {/* User Permissions Table */}
          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <h5 className="mb-3">User Permissions</h5>
              <div className="table-responsive">
                <table className="table align-middle">
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Role</th>
                      <th>Permissions</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, idx) => (
                      <tr key={idx}>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="avatar-circle bg-light border me-2">
                              {user.initials}
                            </div>
                            <div>
                              <div className="fw-bold">{user.name}</div>
                              <div className="text-muted small">{user.email}</div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <Dropdown>
                            <Dropdown.Toggle
                              variant="light"
                              className="border rounded px-3"
                              size="sm">
                              {user.role}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              {roles.map((r, i) => (
                                <Dropdown.Item key={i}>{r.name}</Dropdown.Item>
                              ))}
                            </Dropdown.Menu>
                          </Dropdown>
                        </td>
                        <td>
                          {user.permissions.map((perm, i) => (
                            <span
                              key={i}
                              className={`badge me-1 ${
                                perm === "Delete" ? "bg-light text-dark" : "bg-success"
                              }`}>
                              {perm}
                            </span>
                          ))}
                        </td>
                        <td>
                          <span className="badge bg-light text-success">{user.status}</span>
                        </td>
                        <td>
                          <a
                            href="#"
                            className="text-primary text-decoration-none"
                            onClick={e => {
                              e.preventDefault();
                              handleEditUser(user);
                            }}
                          >
                            Edit
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Role Definitions */}
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="mb-3">Role Definitions</h5>
              <div className="table-responsive">
                <table className="table align-middle">
                  <thead>
                    <tr>
                      <th>Role</th>
                      <th>Description</th>
                      <th>Permissions</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {roles.map((role, i) => (
                      <tr key={i}>
                        <td className="fw-semibold">{role.name}</td>
                        <td>{role.description}</td>
                        <td>
                          {role.permissions.map((perm, i) => (
                            <span
                              key={i}
                              className={`badge me-1 ${
                                perm === "Delete" ? "bg-light text-dark" : "bg-success"
                              }`}>
                              {perm}
                            </span>
                          ))}
                        </td>
                        <td>
                          <a
                            href="#"
                            className="text-primary text-decoration-none"
                            onClick={e => {
                              e.preventDefault();
                              handleEditRole(role);
                            }}
                          >
                            Edit
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add New Role Modal */}
      <Modal show={showAddRole} onHide={() => setShowAddRole(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add New Role</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Role Name</Form.Label>
              <Form.Control type="text" placeholder="Enter role name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter description" />
            </Form.Group>
            <Form.Label className="fw-semibold mb-2">Permissions</Form.Label>
            <div className="mb-3">
              {permissionsList.map((perm, idx) => (
                <Form.Check
                  key={perm}
                  type="checkbox"
                  id={`perm-${perm}`}
                  label={perm}
                  className="mb-2"
                />
              ))}
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={() => setShowAddRole(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => setShowAddRole(false)}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Edit User Modal */}
      <Modal show={showEditUser} onHide={() => setShowEditUser(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                defaultValue={editUser?.name}
                placeholder="Enter name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                defaultValue={editUser?.email}
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Role</Form.Label>
              <Form.Select defaultValue={editUser?.role}>
                {roles.map((role, idx) => (
                  <option key={idx} value={role.name}>
                    {role.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={() => setShowEditUser(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => setShowEditUser(false)}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Edit Role Modal */}
      <Modal show={showEditRole} onHide={() => setShowEditRole(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Role</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Role Name</Form.Label>
              <Form.Control
                type="text"
                defaultValue={editRole?.name}
                placeholder="Enter role name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                defaultValue={editRole?.description}
                placeholder="Enter description"
              />
            </Form.Group>
            <Form.Label className="fw-semibold mb-2">Permissions</Form.Label>
            <div className="mb-3">
              {permissionsList.map((perm, idx) => (
                <Form.Check
                  key={perm}
                  type="checkbox"
                  id={`edit-perm-${perm}`}
                  label={perm}
                  className="mb-2"
                  checked={editRolePermissions.includes(perm)}
                  onChange={() => handleEditRolePermissionChange(perm)}
                  style={{
                    accentColor: "#635BFF"
                  }}
                />
              ))}
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={() => setShowEditRole(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => setShowEditRole(false)}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default RolesPermissions;
