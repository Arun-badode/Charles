import React from 'react';
import { Modal, Button, Form, Row, Col, Table } from 'react-bootstrap';

import './NewTaskModal.css';

const NewTaskModal = ({ show, handleClose }) => (
  <Modal show={show} onHide={handleClose} centered>
    <Modal.Header closeButton>
      <Modal.Title>
        <i className="bi bi-plus-circle me-2"></i>Create New Task
      </Modal.Title>
    </Modal.Header>

    <Modal.Body>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>
            <i className="bi bi-card-text me-2"></i>Task Name
          </Form.Label>
          <Form.Control type="text" placeholder="Enter task name" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>
            <i className="bi bi-folder me-2"></i>Project
          </Form.Label>
          <Form.Select>
            <option>Select a project</option>
            <option>Project 1</option>
            <option>Project 2</option>
          </Form.Select>
        </Form.Group>

        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>
                <i className="bi bi-list-check me-2"></i>Status
              </Form.Label>
              <Form.Select>
                <option>Pending</option>
                <option>In Progress</option>
                <option>Completed</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>
                <i className="bi bi-exclamation-triangle me-2"></i>Priority
              </Form.Label>
              <Form.Select>
                <option><i class="fa-solid fa-flag me-2 text-warning"></i>Low</option>
                <option><i class="fa-solid fa-flag me-2 text-blue" ></i>Medium</option>
                <option><i class="fa-solid fa-flag me-2 text-gray"></i>High</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>
            <i className="bi bi-person me-2"></i>Assigned To
          </Form.Label>
          <Form.Select>
            <option>Unassigned</option>
            <option>Sarah Miller</option>
            <option>John Davis</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>
            <i className="bi bi-calendar me-2"></i>Due Date
          </Form.Label>
          <Form.Control type="date" />
        </Form.Group>
      </Form>

      {/* Example Table with Eye and 3-dot Icons */}
      <Table striped bordered hover size="sm" className="mt-4">
        <thead>
          <tr>
            <th>Task</th>
            <th>Project</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sample Task</td>
            <td>Project 1</td>
            <td>
              <i className="bi bi-eye me-3" role="button" title="View"></i>
              <i className="bi bi-three-dots-vertical" role="button" title="More Options"></i>
            </td>
          </tr>
        </tbody>
      </Table>
    </Modal.Body>

    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        <i className="bi bi-x-circle me-1"></i>Cancel
      </Button>
      <Button variant="primary">
        <i className="bi bi-check-circle me-1"></i>Create Task
      </Button>
    </Modal.Footer>
  </Modal>
);

export default NewTaskModal;
