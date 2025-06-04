import React, { useState } from 'react';
import { Button, Table, Badge, Row, Col, Card } from 'react-bootstrap';
import NewTaskModal from './NewTaskModal';
import 'bootstrap-icons/font/bootstrap-icons.css';

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
  'Pending': 'warning',       // Yellow
  'In Progress': 'info',      // Light Blue
  'Completed': 'success'      // Green
};

const priorityVariant = {
  'Low': 'info',              // Light Blue (same as "In Progress")
  'Medium': 'warning',        // Yellow (same as "Pending")
  'High': 'danger'            // Red
};

const TaskPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [viewMode, setViewMode] = useState('table');

  const totalTasks = 24;
  const inProgress = 8;
  const completed = 12;
  const overdue = 4;

  return (
    <div className="d-flex" style={{ minHeight: '100vh', background: '#f8fafc' }}>
      <div className="flex-grow-1 p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="fw-bold">Task Management</h4>
        </div>

        <Row className="mb-4">
          {/* Task summary cards */}
          {[
            { title: 'Total Tasks', count: totalTasks, subtitle: 'All task count', icon: 'bi-ui-checks-grid', color: 'primary' },
            { title: 'In Progress', count: inProgress, subtitle: 'Active tasks', icon: 'bi-clock-history', color: 'info' },
            { title: 'Completed', count: completed, subtitle: 'Finished tasks', icon: 'bi-check-circle', color: 'success' },
            { title: 'Overdue', count: overdue, subtitle: 'Missed deadline', icon: 'bi-exclamation-circle', color: 'danger' }
          ].map((card, index) => (
            <Col md={3} key={index}>
              <Card className="shadow-sm border-0">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <div>{card.title}</div>
                      <div className="fw-bold fs-5">{card.count}</div>
                      <div>{card.subtitle}</div>
                    </div>
                    <div className={`bg-${card.color} bg-opacity-10 p-2 rounded ms-3`}>
                      <i className={`bi ${card.icon} text-${card.color} fs-6`}></i>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

      <div className="mb-3 p-3 rounded shadow-sm" style={{ backgroundColor: '#ffffff' }}>
  <div className="d-flex justify-content-between align-items-center">
    <div>
      <h4 className="mb-1">Task Management</h4>
      <span className="fw-semibold text-muted">7 total tasks</span>
    </div>
    {/* Buttons group with border and white background */}
    <div className="d-flex align-items-center gap-2">
      <Button variant="outline-primary" size="sm">
        <i className="bi bi-download me-1 fs-6"></i> Export
      </Button>
      <Button variant="outline-primary" size="sm" onClick={() => setViewMode('grid')}>
        <i className="bi bi-grid-3x3-gap fs-6"></i> Grid
      </Button>
      <Button variant="primary" size="sm" onClick={() => setShowModal(true)}>
        + New Task
      </Button>
    </div>
  </div>
</div>


       <div className="mb-3 d-flex">
  {/* Add Filter Button */}
  <button className="btn btn-outline-secondary d-flex align-items-center me-2">
    <i className="bi bi-plus me-1 fs-6"></i>
    Add Filter
  </button>

  {/* Filter Button (Right-aligned) */}
  <button className="btn btn-outline-secondary d-flex align-items-center ms-auto">
    <i className="bi bi-funnel me-1 fs-6"></i>
    Filter
  </button>
</div>


        {/* Task table */}
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
