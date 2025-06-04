import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Modal, Button, Form, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dashboard.css";

const progressData = [
  {
    name: "Website Redesign",
    percent: 75,
    color: "progress-bar-blue",
  },
  {
    name: "Mobile App Development",
    percent: 45,
    color: "progress-bar-purple",
  },
  {
    name: "Marketing Campaign",
    percent: 90,
    color: "progress-bar-green",
  },
  {
    name: "Database Migration",
    percent: 30,
    color: "progress-bar-orange",
  },
];

const taskStatus = [
  { label: "Pending", count: 4, color: "text-primary", bar: "bg-primary" },
  { label: "In Progress", count: 3, color: "text-purple", bar: "bg-purple" },
  { label: "Completed", count: 5, color: "text-success", bar: "bg-success" },
  { label: "Overdue Tasks", count: 2, color: "text-danger", bar: "bg-danger" },
];

const donutSegments = [
  { color: "#2563eb", value: 25 }, // Pending
  { color: "#a259e6", value: 20 }, // In Progress
  { color: "#22c55e", value: 35 }, // Completed
  { color: "#f59e42", value: 20 }, // Overdue
];

const events = [
  {
    title: "Team Weekly Meeting",
    time: "10:00 AM - 11:00 AM",
    color: "event-blue",
    users: [
      { name: "JD", color: "user-badge-blue" },
      { name: "RM", color: "user-badge-green" },
      { name: "+3", color: "user-badge-yellow" }
    ]
  },
  {
    title: "Client Presentation",
    time: "2:00 PM - 3:30 PM",
    color: "event-green",
    users: [
      { name: "SL", color: "user-badge-red" },
      { name: "TK", color: "user-badge-blue" }
      
    ]
  },
  {
    title: "Product Demo",
    time: "4:00 PM - 5:00 PM",
    color: "event-purple",
    users: [
      { name: " " }
    ],
    designed: true
  }
];

const days = [
  { label: "MON", date: 3 },
  { label: "TUE", date: 4 },
  { label: "WED", date: 5 },
  { label: "THU", date: 6 },
  { label: "FRI", date: 7 },
  { label: "SAT", date: 8 },
  { label: "SUN", date: 9 }
];

const activities = [
  {
    icon: "bi bi-pencil activity-icon activity-icon-purple",
    text: (
      <>
        Emily Rodriguez updated the task <a href="#" className="activity-link">"Mobile app wireframes"</a>
      </>
    ),
    time: "Today at 10:45 AM"
  },
  {
    icon: "bi bi-check-circle activity-icon activity-icon-green",
    text: (
      <>
        David Chen completed the task <a href="#" className="activity-link">"Database optimization"</a>
      </>
    ),
    time: "Today at 9:32 AM"
  },
  {
    icon: "bi bi-person activity-icon activity-icon-blue",
    text: (
      <>
        Sarah Johnson assigned <a href="#" className="activity-link">"API integration for reports"</a> to Michael Thompson
      </>
    ),
    time: "Yesterday at 4:15 PM"
  },
  {
    icon: "bi bi-chat-dots activity-icon activity-icon-yellow",
    text: (
      <>
        Alex Lee commented on <a href="#" className="activity-link">"User authentication system"</a>
      </>
    ),
    time: "Yesterday at 2:30 PM"
  },
  {
    icon: "bi bi-calendar-event activity-icon activity-icon-pink",
    text: (
      <>
        Team meeting scheduled for <a href="#" className="activity-link">"Project Review"</a>
      </>
    ),
    time: "Yesterday at 11:00 AM"
  }
];

const initialTasks = {
  todo: [
    {
      id: "task-1",
      title: "Update dashboard layout",
      desc: "Redesign the project dashboard with new metrics and improved UX",
      label: "Design",
      labelColor: "badge-blue",
      user: "JD",
      date: "June 10"
    },
    {
      id: "task-2",
      title: "API integration for reports",
      desc: "Connect the reporting module with the new analytics API",
      label: "Development",
      labelColor: "badge-green",
      user: "RM",
      date: "June 12"
    },
    {
      id: "task-3",
      title: "Competitor analysis",
      desc: "Research top 5 competitors and document key features",
      label: "Research",
      labelColor: "badge-purple",
      user: "AL",
      date: "June 15"
    },
    {
      id: "task-4",
      title: "Fix calendar sync issue",
      desc: "Resolve the calendar sync problems reported by users",
      label: "Bug Fix",
      labelColor: "badge-red",
      user: "TK",
      date: "June 11"
    }
  ],
  inprogress: [
    {
      id: "task-5",
      title: "Create email campaign",
      desc: "Design and implement Q2 email marketing campaign",
      label: "Marketing",
      labelColor: "badge-yellow",
      user: "AL",
      date: "June 8"
    },
    {
      id: "task-6",
      title: "Mobile app wireframes",
      desc: "Create wireframes for the new mobile application",
      label: "Design",
      labelColor: "badge-blue",
      user: "JD",
      date: "June 9"
    },
    {
      id: "task-7",
      title: "User authentication system",
      desc: "Implement OAuth 2.0 and two-factor authentication",
      label: "Development",
      labelColor: "badge-green",
      user: "RM",
      date: "June 7"
    }
  ],
  completed: [
    {
      id: "task-8",
      title: "Database optimization",
      desc: "Optimize database queries for improved performance",
      label: "Development",
      labelColor: "badge-green",
      user: "RM",
      date: "June 5"
    },
    {
      id: "task-9",
      title: "Icon set design",
      desc: (
        <>
          Create custom icon set for the application
          <div className="mt-1">
            <span className="badge badge-grey me-1">Designed by</span>
            <span className="badge badge-grey">Readdy</span>
          </div>
        </>
      ),
      label: "Design",
      labelColor: "badge-blue",
      user: "JD",
      date: "June 3"
    },
    {
      id: "task-10",
      title: "User interviews",
      desc: "Conduct user interviews for product feedback",
      label: "Research",
      labelColor: "badge-purple",
      user: "AL",
      date: "June 2"
    },
    {
      id: "task-11",
      title: "Social media strategy",
      desc: "Develop Q2 social media content strategy",
      label: "Marketing",
      labelColor: "badge-yellow",
      user: "AL",
      date: "June 1"
    },
    {
      id: "task-12",
      title: "Fix login page issues",
      desc: "Resolve browser compatibility issues on login page",
      label: "Bug Fix",
      labelColor: "badge-red",
      user: "TK",
      date: "May 31"
    }
  ]
};

const columns = [
  {
    key: "todo",
    title: "To Do",
    icon: "bi bi-list-task text-blue",
  },
  {
    key: "inprogress",
    title: "In Progress",
    icon: "bi bi-arrow-repeat text-purple",
  },
  {
    key: "completed",
    title: "Completed",
    icon: "bi bi-check2-circle text-green",
  }
];

const Dashboard = () => {
  const [tasks, setTasks] = useState(initialTasks);

  // Modal state for adding/editing tasks
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [modalColumn, setModalColumn] = useState("todo");
  const [editTask, setEditTask] = useState(null);
  const [taskForm, setTaskForm] = useState({
    title: "",
    desc: "",
    label: "Design",
    labelColor: "badge-blue",
    user: "",
    date: "",
  });

  // Dropdown state for 3-dots menu
  const [dropdownOpen, setDropdownOpen] = useState({});
  
  // Open Add/Edit Task Modal
  const handleShowTaskModal = (columnKey, task = null, idx = null) => {
    setModalColumn(columnKey);
    if (task) {
      setEditTask({ ...task, idx });
      setTaskForm({
        title: typeof task.title === "string" ? task.title : "",
        desc: typeof task.desc === "string" ? task.desc : "",
        label: task.label,
        labelColor: task.labelColor,
        user: task.user,
        date: task.date,
      });
    } else {
      setEditTask(null);
      setTaskForm({
        title: "",
        desc: "",
        label: "Design",
        labelColor: "badge-blue",
        user: "",
        date: "",
      });
    }
    setShowTaskModal(true);
  };

  // Handle Add/Edit Task
  const handleTaskFormChange = (e) => {
    const { name, value } = e.target;
    setTaskForm((prev) => ({
      ...prev,
      [name]: value,
      labelColor:
        name === "label"
          ? value === "Design"
            ? "badge-blue"
            : value === "Development"
            ? "badge-green"
            : value === "Research"
            ? "badge-purple"
            : value === "Bug Fix"
            ? "badge-red"
            : value === "Marketing"
            ? "badge-yellow"
            : prev.labelColor
          : prev.labelColor,
    }));
  };

  const handleSaveTask = () => {
    if (editTask) {
      // Edit existing task
      const updated = [...tasks[modalColumn]];
      updated[editTask.idx] = {
        ...updated[editTask.idx],
        ...taskForm,
      };
      setTasks({ ...tasks, [modalColumn]: updated });
    } else {
      // Add new task
      setTasks({
        ...tasks,
        [modalColumn]: [
          ...tasks[modalColumn],
          {
            id: `task-${Date.now()}`,
            ...taskForm,
          },
        ],
      });
    }
    setShowTaskModal(false);
  };

  // Handle Delete Task
  const handleDeleteTask = (columnKey, idx) => {
    const updated = [...tasks[columnKey]];
    updated.splice(idx, 1);
    setTasks({ ...tasks, [columnKey]: updated });
    setDropdownOpen({});
  };

  // Handle 3-dot dropdown open/close
  const handleDropdownToggle = (columnKey, idx) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [`${columnKey}-${idx}`]: !prev[`${columnKey}-${idx}`],
    }));
  };

  // Drag and drop logic (same as before)
  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }
    const start = source.droppableId;
    const finish = destination.droppableId;
    if (start === finish) {
      const newTaskIds = Array.from(tasks[start]);
      const [removed] = newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, removed);
      setTasks({
        ...tasks,
        [start]: newTaskIds,
      });
      return;
    }
    const startTaskIds = Array.from(tasks[start]);
    const [removed] = startTaskIds.splice(source.index, 1);
    const finishTaskIds = Array.from(tasks[finish]);
    finishTaskIds.splice(destination.index, 0, removed);
    setTasks({
      ...tasks,
      [start]: startTaskIds,
      [finish]: finishTaskIds,
    });
  };

  return (
    <div className="dashboard-kanban-bg p-5">
      <div className="container-fluid">
        {/* Header */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4">
          <div className="mb-3 mb-md-0">
            <h1 className="h4 fw-bold mb-1">Dashboard Widgets</h1>
            <p className="text-muted small mb-0">Drag and drop to customize</p>
          </div>
          <div className="d-flex flex-wrap gap-2">
            <button className="btn btn-primary btn-sm">+ Create Dashboard</button>
            <button className="btn btn-outline-secondary btn-sm">Add Widget</button>
          </div>
        </div>

        {/* Main Content */}
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="row g-3 g-md-4">
            {/* Kanban Columns */}
            {columns.map((column) => (
              <div className="col-12 col-lg-4" key={column.key}>
                <div className="card kanban-card h-100">
                  <div className="card-header bg-white border-0 pb-1 d-flex align-items-center justify-content-between">
                    <div>
                      <i className={`${column.icon} me-2`}></i>
                      <span className="kanban-title">{column.title}</span>
                      <span className="badge badge-light ms-2">{tasks[column.key].length}</span>
                    </div>
                    <div>
                      <i
                        className="bi bi-plus-lg text-primary me-2"
                        style={{ cursor: "pointer" }}
                        title="Add Task"
                        onClick={() => handleShowTaskModal(column.key)}
                      ></i>
                      
                    </div>
                  </div>
                  <Droppable droppableId={column.key}>
                    {(provided) => (
                      <div
                        className="card-body pt-2"
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                      >
                        {tasks[column.key].map((task, index) => (
                          <Draggable
                            key={task.id}
                            draggableId={task.id}
                            index={index}
                          >
                            {(provided) => (
                              <div
                                className="kanban-task mb-3"
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <div className="d-flex align-items-center mb-1">
                                  <span className={`badge ${task.labelColor} me-2`}>{task.label}</span>
                                  <span className="fw-semibold">{typeof task.title === "string" ? task.title : ""}</span>
                                  <Dropdown show={dropdownOpen[`${column.key}-${index}`]} onToggle={() => handleDropdownToggle(column.key, index)} className="ms-auto">
                                    <Dropdown.Toggle as="span" style={{ cursor: "pointer" }}>
                                      <i className="bi bi-three-dots-vertical text-muted"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu align="end">
                                      <Dropdown.Item
                                        onClick={() => {
                                          handleShowTaskModal(column.key, task, index);
                                          setDropdownOpen({});
                                        }}
                                      >
                                        Edit
                                      </Dropdown.Item>
                                      <Dropdown.Item
                                        onClick={() => handleDeleteTask(column.key, index)}
                                      >
                                        Delete
                                      </Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                </div>
                                <div className="kanban-desc mb-2">{typeof task.desc === "string" ? task.desc : ""}</div>
                                <div className="d-flex justify-content-between align-items-center">
                                  <span className="kanban-user-badge">{task.user}</span>
                                  <span className="text-muted small">{task.date}</span>
                                </div>
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </div>
              </div>
            ))}

            {/* Project Progress and Task Distribution */}
            <div className="col-12 col-md-6">
              <div className="card h-100 project-progress-card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="h5 fw-bold mb-0">Project Progress</h5>
                    <i className="bi bi-three-dots-vertical text-muted"></i>
                  </div>
                  {progressData.map((proj) => (
                    <div className="mb-3" key={proj.name}>
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <span className="fw-semibold">{proj.name}</span>
                        <span className="fw-bold">{proj.percent}%</span>
                      </div>
                      <div className="progress project-progress-bar custom-progress-height">
                        <div
                          className={`progress-bar ${proj.color}`}
                          role="progressbar"
                          style={{ width: `${proj.percent}%` }}
                          aria-valuenow={proj.percent}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  ))}
                  <div className="d-flex flex-wrap justify-content-start align-items-center mt-3 gap-3 gap-md-4">
                    <span className="text-primary fw-bold">2</span>
                    <span className="text-success fw-bold">5</span>
                    <span className="text-warning fw-bold">1</span>
                    <span className="text-muted ms-2">Active</span>
                    <span className="text-muted">Completed</span>
                    <span className="text-muted">Delayed</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="card h-100 task-distribution-card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="h5 fw-bold mb-0">Task Distribution</h5>
                    <i className="bi bi-three-dots-vertical text-muted"></i>
                  </div>
                  <ul className="list-unstyled mb-4">
                    {taskStatus.map((status) => (
                      <li className="d-flex align-items-center mb-2" key={status.label}>
                        <span className={`me-2 ${status.color}`}>
                          <i className="bi bi-circle-fill"></i>
                        </span>
                        <span className="me-auto">{status.label}</span>
                        <span className="fw-semibold">{status.count} tasks</span>
                      </li>
                    ))}
                  </ul>
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="donut-chart">
                      <svg width="110" height="110" viewBox="0 0 42 42" className="donut">
                        <circle className="donut-ring" cx="21" cy="21" r="15.9155" fill="transparent" stroke="#e5e7eb" strokeWidth="3" />
                        <circle className="donut-segment" cx="21" cy="21" r="15.9155" fill="transparent"
                          stroke="#2563eb" strokeWidth="3" strokeDasharray="25 75" strokeDashoffset="0"/>
                        <circle className="donut-segment" cx="21" cy="21" r="15.9155" fill="transparent"
                          stroke="#a259e6" strokeWidth="3" strokeDasharray="20 80" strokeDashoffset="-25"/>
                        <circle className="donut-segment" cx="21" cy="21" r="15.9155" fill="transparent"
                          stroke="#22c55e" strokeWidth="3" strokeDasharray="35 65" strokeDashoffset="-45"/>
                        <circle className="donut-segment" cx="21" cy="21" r="15.9155" fill="transparent"
                          stroke="#f59e42" strokeWidth="3" strokeDasharray="20 80" strokeDashoffset="-80"/>
                      </svg>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center gap-3 mt-3 flex-wrap">
                    <span className="legend-dot bg-primary"></span>
                    <span className="legend-label">Pending</span>
                    <span className="legend-dot" style={{ background: "#a259e6" }}></span>
                    <span className="legend-label">In Progress</span>
                    <span className="legend-dot bg-success"></span>
                    <span className="legend-label">Completed</span>
                    <span className="legend-dot" style={{ background: "#f59e42" }}></span>
                    <span className="legend-label">Overdue</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="col-12">
              <div className="card activity-card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="activity-title">Recent Activity</span>
                    <a href="#" className="activity-viewall text-dark">View all</a>
                    <i className="bi bi-three-dots text-muted ms-2"></i>
                  </div>
                  <ul className="list-unstyled mb-0">
                    {activities.map((a, i) => (
                      <li className="d-flex align-items-start mb-3" key={i}>
                        <span className={a.icon + " me-3"}></span>
                        <div>
                          <div className="activity-text">{a.text}</div>
                          <div className="activity-time">{a.time}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Calendar */}
            <div className="col-12">
              <div className="card calendar-card">
                <div className="card-body">
                  <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-3">
                    <span className="calendar-title mb-2 mb-md-0">Calendar Overview</span>
                    <div className="d-flex">
                      <button className="calendar-btn">Day</button>
                      <button className="calendar-btn calendar-btn-active ms-2">Week</button>
                      <button className="calendar-btn ms-2">Month</button>
                    </div>
                  </div>
                  <div className="calendar-date-range text-center mb-3">
                    June 3 - June 9, 2025
                  </div>
                  <div className="d-flex flex-wrap justify-content-between align-items-center calendar-days mb-2">
                    <i className="bi bi-chevron-left text-muted"></i>
                    {days.map((d, i) => (
                      <div className="calendar-day text-center flex-fill" key={i}>
                        <div className="calendar-day-label">{d.label}</div>
                        <div className="calendar-day-date">{d.date}</div>
                      </div>
                    ))}
                    <i className="bi bi-chevron-right text-muted"></i>
                  </div>
                  <div className="calendar-events">
                    {events.map((e, i) => (
                      <div className={`calendar-event ${e.color} d-flex flex-column flex-md-row align-items-start align-items-md-center mb-2`} key={i}>
                        <div className="calendar-event-bar"></div>
                        <div className="calendar-event-content flex-grow-1">
                          <div className="calendar-event-title">{e.title}</div>
                          <div className="calendar-event-time">{e.time}</div>
                        </div>
                        <div className="calendar-event-users d-flex align-items-center ms-md-auto mt-2 mt-md-0">
                          {e.users && e.users.map((u, j) => (
                            <span className={`calendar-user-badge ${u.color} me-1`} key={j}>{u.name}</span>
                          ))}
                          {e.designed && (
                            <div className="calendar-designed-by ms-3">
                              <span className="badge badge-grey me-1">Designed by</span>
                              <span className="badge badge-grey">
                                <i className="bi bi-triangle-fill text-purple me-1"></i>
                                Readdy
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DragDropContext>
      </div>

      {/* Add/Edit Task Modal */}
      <Modal show={showTaskModal} onHide={() => setShowTaskModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{editTask ? "Edit Task" : "Add Task"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={taskForm.title}
                onChange={handleTaskFormChange}
                placeholder="Enter task title"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                name="desc"
                value={taskForm.desc}
                onChange={handleTaskFormChange}
                placeholder="Enter description"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Label</Form.Label>
              <Form.Select
                name="label"
                value={taskForm.label}
                onChange={handleTaskFormChange}
              >
                <option value="Design">Design</option>
                <option value="Development">Development</option>
                <option value="Research">Research</option>
                <option value="Bug Fix">Bug Fix</option>
                <option value="Marketing">Marketing</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>User</Form.Label>
              <Form.Control
                type="text"
                name="user"
                value={taskForm.user}
                onChange={handleTaskFormChange}
                placeholder="User initials (e.g. JD)"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="text"
                name="date"
                value={taskForm.date}
                onChange={handleTaskFormChange}
                placeholder="e.g. June 10"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={() => setShowTaskModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSaveTask}>
            {editTask ? "Save Changes" : "Add Task"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Dashboard;