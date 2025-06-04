import React, { useState } from 'react';
import { Button, Table, Badge, Row, Col, Card } from 'react-bootstrap';
import NewTaskModal from './NewTaskModal';


const tasks = [
  {
    task: 'Get stuff done',
    project: 'Secure payify.co - SSO website',
    status: 'Pending',
    priority: 'Low',
    assignedTo: '',
    dueDate: '',
  },
  {
    task: 'Task1',
    project: 'Migrate app',
    status: 'In Progress',
    priority: 'Low',
    assignedTo: '',
    dueDate: '5/28/2025',
  },
  {
    task: 'Task2',
    project: 'Secure payify.co - SSO website',
    status: 'Pending',
    priority: 'Medium',
    assignedTo: '',
    dueDate: '5/29/2025',
  },
  {
    task: 'Create mockups',
    project: 'Website redesign',
    status: 'Pending',
    priority: 'High',
    assignedTo: 'Sarah Miller',
    dueDate: '6/05/2025',
  },
  {
    task: 'Fix login bug',
    project: 'Mobile app',
    status: 'In Progress',
    priority: 'High',
    assignedTo: 'John Davis',
    dueDate: '6/07/2025',
  },
  {
    task: 'Update documentation',
    project: 'API integration',
    status: 'Completed',
    priority: 'Medium',
    assignedTo: '',
    dueDate: '6/10/2025',
  },
  {
    task: 'Design landing page',
    project: 'Marketing campaign',
    status: 'Pending',
    priority: 'Medium',
    assignedTo: '',
    dueDate: '6/15/2025',
  },
];

const statusVariant = {
  'Pending': 'warning',
  'In Progress': 'success',
  'Completed': 'primary',
};

const priorityVariant = {
  'Low': 'success',
  'Medium': 'warning',
  'High': 'danger',
};

const TaskPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [viewMode, setViewMode] = useState('table');

  const totalTasks = 24;
  const inProgress = 8;
  const completed = 12;
  const overdue = 4;

  return (
    <div className="contenair-flud d-flex p-4" style={{ minHeight: '100vh', background: '#f8fafc' }}>
      <div className="flex-grow-1 p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="fw-bold">Task Management</h4>
        </div>

        <Row className="mb-4">
          <Col md={3}>
            <Card className="shadow-sm border-0">
              <Card.Body>
                <div className="d-flex align-items-center">
                  <div className="bg-primary bg-opacity-10 p-2 rounded me-3">
                    <i className="bi bi-ui-checks-grid text-primary fs-6"></i>
                  </div>
                  <div>
                    <div>Total Tasks</div>
                    <div className="fw-bold fs-5">{totalTasks}</div>
                    <div>All task count</div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="shadow-sm border-0">
              <Card.Body>
                <div className="d-flex align-items-center">
                  <div className="bg-info bg-opacity-10 p-2 rounded me-3">
                    <i className="bi bi-clock-history text-info fs-6"></i>
                  </div>
                  <div>
                    <div>In Progress</div>
                    <div className="fw-bold fs-5">{inProgress}</div>
                    <div>Active tasks</div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="shadow-sm border-0">
              <Card.Body>
                <div className="d-flex align-items-center">
                  <div className="bg-success bg-opacity-10 p-2 rounded me-3">
                    <i className="bi bi-check-circle text-success fs-6"></i>
                  </div>
                  <div>
                    <div>Completed</div>
                    <div className="fw-bold fs-5">{completed}</div>
                    <div>Finished tasks</div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="shadow-sm border-0">
              <Card.Body>
                <div className="d-flex align-items-center">
                  <div className="bg-danger bg-opacity-10 p-2 rounded me-3">
                    <i className="bi bi-exclamation-circle text-danger fs-6"></i>
                  </div>
                  <div>
                    <div>Overdue</div>
                    <div className="fw-bold fs-5">{overdue}</div>
                    <div>Missed deadline</div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            <h4>Task Management</h4>
            <span className="fw-semibold text-muted">7 total tasks</span>
          </div>
          <div className="d-flex align-items-center">
            <Button variant="primary" className="me-2" size="sm">
              <i className="bi bi-download me-1 fs-6"></i> Export
            </Button>
            <Button 
              variant="primary" 
              onClick={() => setViewMode('grid')} 
              size="sm" 
              className="me-2"
            >
              <i className="bi bi-grid-3x3-gap fs-6"></i> Grid
            </Button>
            <Button variant="primary" onClick={() => setShowModal(true)} size="sm">
              + New Task
            </Button>
          </div>
        </div>

        <div className="mb-3">
          <span className="text-primary me-3" role="button">
            <i className="bi bi-plus me-1 fs-6"></i> Add filter
          </span>
          <span className="text-primary" role="button">
            <i className="bi bi-funnel me-1 fs-6"></i> Filter
          </span>
        </div>

        <Table hover responsive className="bg-white rounded shadow-sm">
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
            {tasks.map((task, index) => (
              <tr key={index}>
                <td className="fw-bold">{task.task}</td>
                <td>{task.project}</td>
                <td><Badge bg={statusVariant[task.status]}>{task.status}</Badge></td>
                <td><Badge bg={priorityVariant[task.priority]}>{task.priority}</Badge></td>
                <td>{task.assignedTo || 'Unassigned'}</td>
                <td>{task.dueDate || 'No due date'}</td>
                <td>
                  <i className="fa-solid fa-eye me-2 fs-6"></i>
                  <i className="fa-solid fa-trash me-2 fs-6"></i>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <div className="d-flex justify-content-between align-items-center mt-3">
          <div className="text-muted">Showing 1 to 7 of 7 results</div>
        </div>

        <NewTaskModal show={showModal} onHide={() => setShowModal(false)} />
      </div>
    </div>
  );
};

export default TaskPage;
