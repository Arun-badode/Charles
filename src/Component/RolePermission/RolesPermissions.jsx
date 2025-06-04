import React from "react";
import { Button, Dropdown } from "react-bootstrap";
import "./RolesPermissions.css";

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
  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4>Roles & Permissions</h4>
        <Button variant="primary">+ Add New Role</Button>
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
                      <a href="#" className="text-primary">
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
                      <a href="#" className="text-primary">
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
  );
};

export default RolesPermissions;
