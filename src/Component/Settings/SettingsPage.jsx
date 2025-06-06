import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Nav,
  Tab,
  Card,
  Modal,
} from "react-bootstrap";
import { FaCamera, FaUserCircle } from "react-icons/fa";

const teamMembersInitial = [
  {
    initials: "JD",
    name: "John Davis",
    email: "john.davis@example.com",
    role: "Admin",
    status: "Active",
    badgeClass: "bg-primary-subtle text-primary",
  },
  {
    initials: "SM",
    name: "Sarah Miller",
    email: "sarah.miller@example.com",
    role: "Designer",
    status: "Active",
    badgeClass: "bg-danger-subtle text-danger",
  },
  {
    initials: "RJ",
    name: "Robert Johnson",
    email: "robert.johnson@example.com",
    role: "Developer",
    status: "Inactive",
    badgeClass: "bg-primary-subtle text-primary",
  },
];

const SettingsPage = () => {
  // Modal state
  const [showAddMember, setShowAddMember] = useState(false);
  const [memberForm, setMemberForm] = useState({
    name: "",
    email: "",
    role: "Developer",
    status: "Active",
  });

  // Team members state for edit
  const [teamMembers, setTeamMembers] = useState(teamMembersInitial);

  // Edit modal state
  const [showEditMember, setShowEditMember] = useState(false);
  const [editMemberIdx, setEditMemberIdx] = useState(null);
  const [editMemberForm, setEditMemberForm] = useState({
    name: "",
    email: "",
    role: "Developer",
    status: "Active",
  });

  const handleMemberFormChange = (e) => {
    const { name, value } = e.target;
    setMemberForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddMember = () => {
    // Add member logic
    setTeamMembers([
      ...teamMembers,
      {
        initials: memberForm.name
          .split(" ")
          .map((n) => n[0])
          .join("")
          .toUpperCase(),
        name: memberForm.name,
        email: memberForm.email,
        role: memberForm.role,
        status: memberForm.status,
        badgeClass:
          memberForm.role === "Designer"
            ? "bg-danger-subtle text-danger"
            : "bg-primary-subtle text-primary",
      },
    ]);
    setShowAddMember(false);
    setMemberForm({
      name: "",
      email: "",
      role: "Developer",
      status: "Active",
    });
  };

  // Edit modal handlers
  const handleEditClick = (idx) => {
    setEditMemberIdx(idx);
    setEditMemberForm({
      name: teamMembers[idx].name,
      email: teamMembers[idx].email,
      role: teamMembers[idx].role,
      status: teamMembers[idx].status,
    });
    setShowEditMember(true);
  };

  const handleEditMemberFormChange = (e) => {
    const { name, value } = e.target;
    setEditMemberForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEditMemberSave = () => {
    const updated = [...teamMembers];
    updated[editMemberIdx] = {
      ...updated[editMemberIdx],
      name: editMemberForm.name,
      email: editMemberForm.email,
      role: editMemberForm.role,
      status: editMemberForm.status,
      initials: editMemberForm.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase(),
      badgeClass:
        editMemberForm.role === "Designer"
          ? "bg-danger-subtle text-danger"
          : "bg-primary-subtle text-primary",
    };
    setTeamMembers(updated);
    setShowEditMember(false);
  };

  return (
    <Container fluid className="py-4">
      <Row className="justify-content-center">
        <Col md={11}>
          <h3 className="mb-4">Settings</h3>
          <Card>
            <Card.Body>
              <Tab.Container defaultActiveKey="account">
                <Nav variant="tabs" className="mb-4">
                  <Nav.Item>
                    <Nav.Link eventKey="account">Account</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="workspace">Workspace</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="app">App Settings</Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content>
                  <Tab.Pane eventKey="account">
                    {/* Profile Information */}
                    <h5 className="mb-3">Profile Information</h5>
                    <Row className="align-items-center mb-4">
                      <Col md={2} className="text-center">
                        <div className="position-relative d-inline-block">
                          <FaUserCircle size={70} className="text-primary" />
                          <span className="position-absolute bottom-0 end-0 translate-middle p-1 bg-white rounded-circle border">
                            <FaCamera size={14} />
                          </span>
                        </div>
                      </Col>
                      <Col md={10}>
                        <Row>
                          <Col md={6}>
                            <Form.Group>
                              <Form.Label>First name</Form.Label>
                              <Form.Control type="text" defaultValue="John" />
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group>
                              <Form.Label>Last name</Form.Label>
                              <Form.Control type="text" defaultValue="Davis" />
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group>
                              <Form.Label>Email</Form.Label>
                              <Form.Control
                                type="email"
                                defaultValue="john.davis@example.com"
                              />
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group>
                              <Form.Label>Job title</Form.Label>
                              <Form.Control
                                type="text"
                                defaultValue="Project Manager"
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                      </Col>
                    </Row>

                    {/* Email Preferences */}
                    <div className="d-flex justify-content-between align-items-start mb-4">
                      <div>
                        <h6>Email Notifications</h6>
                        <p className="text-muted mb-0">
                          Receive email notifications for task assignments,
                          updates, and reminders
                        </p>
                      </div>
                    </div>

                    <hr />

                    {/* Password */}
                    <h5 className="mb-3">Password</h5>
                    <Row className="mb-3">
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Current password</Form.Label>
                          <Form.Control type="password" />
                        </Form.Group>
                      </Col>
                      <Col md={6}></Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>New password</Form.Label>
                          <Form.Control type="password" />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Confirm password</Form.Label>
                          <Form.Control type="password" />
                        </Form.Group>
                      </Col>
                      <Col md={12} className="mt-3">
                        <Button variant="primary">Update Password</Button>
                      </Col>
                    </Row>

                    <hr />

                    {/* Two-Factor Authentication */}
                    <div className="d-flex justify-content-between align-items-center mt-4">
                      <div>
                        <h6>Enable two-factor authentication</h6>
                        <p className="text-muted mb-0">
                          Add an extra layer of security to your account
                        </p>
                      </div>
                      <Form.Check type="radio" name="twoFactor" />
                    </div>
                  </Tab.Pane>

                  <Tab.Pane eventKey="workspace">
                    {/* Organization Details */}
                    <h5 className="mb-3">Organization Details</h5>
                    <Row className="mb-4">
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Organization name</Form.Label>
                          <Form.Control type="text" defaultValue="Acme Inc." />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Website</Form.Label>
                          <Form.Control
                            type="text"
                            defaultValue="https://acme.com"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    {/* Team Members */}
                    <h5 className="mb-3">Team Members</h5>
                    <Card className="mb-4">
                      <Card.Body className="p-0">
                        <div className="d-flex justify-content-end p-3">
                          <Button
                            variant="primary"
                            size="sm"
                            onClick={() => setShowAddMember(true)}
                          >
                            + Add Member
                          </Button>
                        </div>
                        <div className="table-responsive">
                          <table className="table mb-0 align-middle">
                            <thead>
                              <tr>
                                <th>NAME</th>
                                <th>EMAIL</th>
                                <th>ROLE</th>
                                <th>STATUS</th>
                                <th></th>
                              </tr>
                            </thead>
                            <tbody>
                              {teamMembers.map((member, idx) => (
                                <tr key={idx}>
                                  <td>
                                    <div className="d-flex align-items-center gap-2">
                                      <span
                                        className={`badge rounded-circle ${member.badgeClass} fw-semibold p-3`}
                                      >
                                        {member.initials}
                                      </span>
                                      {member.name}
                                    </div>
                                  </td>
                                  <td>{member.email}</td>
                                  <td>{member.role}</td>
                                  <td>
                                    <span
                                      className={`badge ${
                                        member.status === "Active"
                                          ? "bg-success-subtle text-success"
                                          : "bg-secondary-subtle text-secondary"
                                      }`}
                                    >
                                      {member.status}
                                    </span>
                                  </td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-decoration-none"
                                      onClick={(e) => {
                                        e.preventDefault();
                                        handleEditClick(idx);
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
                      </Card.Body>
                    </Card>
                    {/* Billing Information */}
                    <h5 className="mb-3">Billing Information</h5>
                    <Card>
                      <Card.Body>
                        <div className="mb-3">
                          <div className="fw-semibold">
                            Current Plan: Professional
                          </div>
                          <div className="text-muted small mb-2">
                            $49/month, billed annually
                          </div>
                          <Button variant="outline-secondary" size="sm">
                            Change Plan
                          </Button>
                        </div>
                        <div>
                          <div className="fw-semibold mb-1">Payment Method</div>
                          <div className="d-flex align-items-center gap-2">
                            <span className="badge bg-primary-subtle text-primary fw-semibold">
                              Visa
                            </span>
                            <span>ending in 4242</span>
                          </div>
                          <div className="text-muted small">
                            Expires 12/2025
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Tab.Pane>
                  <Tab.Pane eventKey="app">
                    {/* Appearance */}
                    <h5 className="mb-3">Appearance</h5>
                    <Row className="align-items-center mb-3">
                      <Col md={6}>
                        <div className="mb-2 fw-semibold">Dark Mode</div>
                        <div className="text-muted mb-2">
                          Use dark theme for the application
                        </div>
                      </Col>
                      <Col md={6} className="text-md-end">
                        <Form.Check
                          type="switch"
                          id="darkModeSwitch"
                          label=""
                        />
                      </Col>
                    </Row>
                    <Row className="mb-4">
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Language</Form.Label>
                          <Form.Select>
                            <option>English</option>
                            <option>Hindi</option>
                            <option>Spanish</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Time Zone</Form.Label>
                          <Form.Select>
                            <option>UTC (GMT+0)</option>
                            <option>IST (GMT+5:30)</option>
                            <option>PST (GMT-8)</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                    </Row>
                    <hr />
                    {/* Notifications */}
                    <h5 className="mb-3">Notifications</h5>
                    <div className="fw-semibold mb-1">Push Notifications</div>
                    <div className="text-muted mb-3">
                      Receive browser notifications for important updates
                    </div>
                    <Form>
                      <Form.Check
                        type="checkbox"
                        id="taskAssignments"
                        label={
                          <span>
                            <span className="fw-semibold text-primary">
                              Task assignments
                            </span>
                            <br />
                            <span className="text-muted small">
                              Get notified when you are assigned to a task
                            </span>
                          </span>
                        }
                        defaultChecked
                        className="mb-3"
                      />
                      <Form.Check
                        type="checkbox"
                        id="taskUpdates"
                        label={
                          <span>
                            <span className="fw-semibold text-primary">
                              Task updates
                            </span>
                            <br />
                            <span className="text-muted small">
                              Get notified when a task you're involved with is
                              updated
                            </span>
                          </span>
                        }
                        defaultChecked
                        className="mb-3"
                      />
                      <Form.Check
                        type="checkbox"
                        id="projectUpdates"
                        label={
                          <span>
                            <span className="fw-semibold text-primary">
                              Project updates
                            </span>
                            <br />
                            <span className="text-muted small">
                              Get notified about new projects and project
                              updates
                            </span>
                          </span>
                        }
                        defaultChecked
                        className="mb-3"
                      />
                    </Form>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Add New Team Member Modal */}
      <Modal show={showAddMember} onHide={() => setShowAddMember(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add New Team Member</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={memberForm.name}
                onChange={handleMemberFormChange}
                placeholder="Enter name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={memberForm.email}
                onChange={handleMemberFormChange}
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Role</Form.Label>
              <Form.Select
                name="role"
                value={memberForm.role}
                onChange={handleMemberFormChange}
              >
                <option>Developer</option>
                <option>Designer</option>
                <option>Manager</option>
                <option>Admin</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Select
                name="status"
                value={memberForm.status}
                onChange={handleMemberFormChange}
              >
                <option>Active</option>
                <option>Inactive</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={() => setShowAddMember(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddMember}>
            Add Member
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Edit Team Member Modal */}
      <Modal show={showEditMember} onHide={() => setShowEditMember(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Team Member</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={editMemberForm.name}
                onChange={handleEditMemberFormChange}
                placeholder="Enter name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={editMemberForm.email}
                onChange={handleEditMemberFormChange}
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Role</Form.Label>
              <Form.Select
                name="role"
                value={editMemberForm.role}
                onChange={handleEditMemberFormChange}
              >
                <option>Developer</option>
                <option>Designer</option>
                <option>Manager</option>
                <option>Admin</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Select
                name="status"
                value={editMemberForm.status}
                onChange={handleEditMemberFormChange}
              >
                <option>Active</option>
                <option>Inactive</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={() => setShowEditMember(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleEditMemberSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default SettingsPage;
