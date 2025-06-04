import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Nav,
  Tab,
  Card,
} from "react-bootstrap";
import { FaCamera, FaUserCircle } from "react-icons/fa";

const SettingsPage = () => {
  return (
    <Container fluid className="py-4">
      <Row className="justify-content-center">
        <Col md={10}>
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

                  {/* Other Tabs */}
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
                          <Button variant="primary" size="sm">
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
                              <tr>
                                <td>
                                  <div className="d-flex align-items-center gap-2">
                                    <span className="badge rounded-circle bg-primary-subtle text-primary fw-semibold p-3">
                                      JD
                                    </span>
                                    John Davis
                                  </div>
                                </td>
                                <td>john.davis@example.com</td>
                                <td>Admin</td>
                                <td>
                                  <span className="badge bg-success-subtle text-success">
                                    Active
                                  </span>
                                </td>
                                <td>
                                  <a href="#" className="text-decoration-none">
                                    Edit
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="d-flex align-items-center gap-2">
                                    <span className="badge rounded-circle bg-danger-subtle text-danger fw-semibold p-3">
                                      SM
                                    </span>
                                    Sarah Miller
                                  </div>
                                </td>
                                <td>sarah.miller@example.com</td>
                                <td>Designer</td>
                                <td>
                                  <span className="badge bg-success-subtle text-success">
                                    Active
                                  </span>
                                </td>
                                <td>
                                  <a href="#" className="text-decoration-none">
                                    Edit
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="d-flex align-items-center gap-2">
                                    <span className="badge rounded-circle bg-primary-subtle text-primary fw-semibold p-3">
                                      RJ
                                    </span>
                                    Robert Johnson
                                  </div>
                                </td>
                                <td>robert.johnson@example.com</td>
                                <td>Developer</td>
                                <td>
                                  <span className="badge bg-secondary-subtle text-secondary">
                                    Inactive
                                  </span>
                                </td>
                                <td>
                                  <a href="#" className="text-decoration-none">
                                    Edit
                                  </a>
                                </td>
                              </tr>
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
    </Container>
  );
};

// Badge + Toggle component (Designed by Readdy)

export default SettingsPage;
