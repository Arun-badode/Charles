// TaskPage.jsx
import React, { useState } from 'react';
import {
  Button,
  Table,
  Badge,
  Row,
  Col,
  Card,
  Container,
  Modal,
  Form
} from 'react-bootstrap';
import NewTaskModal from './NewTaskModal';

/* ------------------------------------------------------------------ */
/*  Dummy data                                                        */
/* ------------------------------------------------------------------ */
const tasks = [
  { task: 'Get stuff done', project: 'Secure payify.co - SSO website', status: 'Pending', priority: 'Low', assignedTo: '', dueDate: '' },
  { task: 'Task1', project: 'Migrate app', status: 'In Progress', priority: 'Low', assignedTo: '', dueDate: '5/28/2025' },
  { task: 'Task2', project: 'Secure payify.co - SSO website', status: 'Pending', priority: 'Medium', assignedTo: '', dueDate: '5/29/2025' },
  { task: 'Create mockups', project: 'Website redesign', status: 'Pending', priority: 'High', assignedTo: 'Sarah Miller', dueDate: '6/05/2025' },
  { task: 'Fix login bug', project: 'Mobile app', status: 'In Progress', priority: 'High', assignedTo: 'John Davis', dueDate: '6/07/2025' },
  { task: 'Update documentation', project: 'API integration', status: 'Completed', priority: 'Medium', assignedTo: '', dueDate: '6/10/2025' },
  { task: 'Design landing page', project: 'Marketing campaign', status: 'Pending', priority: 'Medium', assignedTo: '', dueDate: '6/15/2025' },
];

const statusVariant = {
  Pending: 'warning',
  'In Progress': 'info',
  Completed: 'success'
};

const priorityVariant = {
  Low: 'info',
  Medium: 'warning',
  High: 'danger'
};

/* ================================================================== */
/*  TaskPage Component                                                */
/* ================================================================== */
const TaskPage = () => {
  const [showModal, setShowModal] = useState(false);      // "New Task" modal
  const [viewModal, setViewModal] = useState(false);      // View-details modal
  const [editModal, setEditModal] = useState(false);      // Edit modal
  const [selected, setSelected] = useState(null);         // Task to view
  const [editTask, setEditTask] = useState(null);         // Editable copy

  const totalTasks = 24, inProgress = 8, completed = 12, overdue = 4;

  const handleView = (task) => {
    setSelected(task);
    setViewModal(true);
  };

  const handleEdit = (task) => {
    setEditTask({ ...task });
    setEditModal(true);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    /*  In a real app, update backend / state here.
        Dummy data is constant, so we just close modal. */
    setEditModal(false);
  };

  return (
    <Container fluid className="min-vh-100 p-3">
      {/* Header */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4">
        <h4 className="fw-bold">Task Management</h4>
      </div>

      {/* Summary Cards */}
      <Row className="g-3 mb-4">
        {[
          { title: 'Total Tasks', count: totalTasks, subtitle: 'All task count', icon: 'bi-ui-checks-grid', color: 'primary' },
          { title: 'In Progress', count: inProgress, subtitle: 'Active tasks', icon: 'bi-clock-history', color: 'info' },
          { title: 'Completed', count: completed, subtitle: 'Finished tasks', icon: 'bi-check-circle', color: 'success' },
          { title: 'Overdue', count: overdue, subtitle: 'Missed deadline', icon: 'bi-exclamation-circle', color: 'danger' }
        ].map((card, idx) => (
          <Col xs={12} sm={6} md={3} key={idx}>
            <Card className="shadow-sm border-0 h-100">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <div>{card.title}</div>
                    <div className="fw-bold fs-5">{card.count}</div>
                    <div className="text-muted">{card.subtitle}</div>
                  </div>
                  <div className={`bg-${card.color} bg-opacity-10 p-2 rounded`}>
                    <i className={`bi ${card.icon} text-${card.color} fs-5`}></i>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Top Action Bar */}
      <Card className="mb-3 shadow-sm">
        <Card.Body className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-2">
          <div>
            <h5 className="mb-1">Task Management</h5>
            <span className="fw-semibold text-muted">7 total tasks</span>
          </div>
          <div className="d-flex flex-wrap gap-2">
            <Button variant="outline-primary" size="sm">
              <i className="bi bi-download me-1"></i> Export
            </Button>   
            <Button variant="primary" size="sm" onClick={() => setShowModal(true)}>
              + New Task
            </Button>
          </div>
        </Card.Body>
      </Card>

      {/* Filter Actions */}
      <div className="mb-3 d-flex flex-column flex-sm-row gap-2">
        <Button variant="outline-secondary" className="d-flex align-items-center">
          <i className="bi bi-plus me-1"></i> Add Filter
        </Button>
        <Button variant="outline-secondary" className="d-flex align-items-center ms-sm-auto">
          <i className="bi bi-funnel me-1"></i> Filter
        </Button>
      </div>

      {/* Task Table */}
      <div className="table-responsive-md bg-white rounded shadow-sm">
        <Table hover responsive="md" className="mb-0">
          <thead className="bg-light">
            <tr>
              <th>TASK</th>
              <th>PROJECT</th>
              <th>STATUS</th>
              <th>PRIORITY</th>
              <th>ASSIGNED TO</th>
              <th>DUE DATE</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, idx) => (
              <tr key={idx}>
                <td className="fw-semibold">{task.task}</td>
                <td>{task.project}</td>
                <td><Badge bg={statusVariant[task.status]}>{task.status}</Badge></td>
                <td><Badge bg={priorityVariant[task.priority]}>{task.priority}</Badge></td>
                <td>{task.assignedTo || 'Unassigned'}</td>
                <td>{task.dueDate || 'No due date'}</td>
                <td>
                  <i
                    className="bi bi-eye-fill text-primary me-3"
                    role="button"
                    title="View"
                    onClick={() => handleView(task)}
                  ></i>
                  <i
                    className="bi bi-pencil-square text-warning me-3"
                    role="button"
                    title="Edit"
                    onClick={() => handleEdit(task)}
                  ></i>
                  <i className="bi bi-trash-fill text-danger" role="button" title="Delete"></i>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <div className="text-muted mt-3">Showing 1 to 7 of 7 results</div>

      {/* Existing "New Task" modal */}
      <NewTaskModal show={showModal} handleClose={() => setShowModal(false)} />

      {/* View-details Modal */}
      <Modal
        show={viewModal}
        onHide={() => setViewModal(false)}
        centered
        scrollable
      >
        <Modal.Header closeButton>
          <Modal.Title>Task Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selected && (
            <div className="vstack gap-2">
              <div><span className="fw-semibold">Task:</span> {selected.task}</div>
              <div><span className="fw-semibold">Project:</span> {selected.project}</div>
              <div><span className="fw-semibold">Status:</span> {selected.status}</div>
              <div><span className="fw-semibold">Priority:</span> {selected.priority}</div>
              <div><span className="fw-semibold">Assigned To:</span> {selected.assignedTo || 'Unassigned'}</div>
              <div><span className="fw-semibold">Due Date:</span> {selected.dueDate || 'No due date'}</div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setViewModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Edit Task Modal */}
      <Modal
        show={editModal}
        onHide={() => setEditModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {editTask && (
            <Form className="vstack gap-3">
              <Form.Group>
                <Form.Label>Task</Form.Label>
                <Form.Control
                  name="task"
                  value={editTask.task}
                  onChange={handleEditChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Project</Form.Label>
                <Form.Control
                  name="project"
                  value={editTask.project}
                  onChange={handleEditChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Status</Form.Label>
                <Form.Select
                  name="status"
                  value={editTask.status}
                  onChange={handleEditChange}
                >
                  <option>Pending</option>
                  <option>In Progress</option>
                  <option>Completed</option>
                </Form.Select>
              </Form.Group>
              <Form.Group>
                <Form.Label>Priority</Form.Label>
                <Form.Select
                  name="priority"
                  value={editTask.priority}
                  onChange={handleEditChange}
                >
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </Form.Select>
              </Form.Group>
              <Form.Group>
                <Form.Label>Assigned To</Form.Label>
                <Form.Control
                  name="assignedTo"
                  value={editTask.assignedTo}
                  onChange={handleEditChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Due Date</Form.Label>
                <Form.Control
                  type="date"
                  name="dueDate"
                  value={editTask.dueDate}
                  onChange={handleEditChange}
                />
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setEditModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default TaskPage;
