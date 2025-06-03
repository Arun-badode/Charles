import React from "react";
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

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const newOrder = Array.from(columnOrder);
    const [removed] = newOrder.splice(result.source.index, 1);
    newOrder.splice(result.destination.index, 0, removed);
    setColumnOrder(newOrder);
  };

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




const tasks = {
  todo: [
    {
      title: "Update dashboard layout",
      desc: "Redesign the project dashboard with new metrics and improved UX",
      label: "Design",
      labelColor: "badge-blue",
      user: "JD",
      date: "June 10"
    },
    {
      title: "API integration for reports",
      desc: "Connect the reporting module with the new analytics API",
      label: "Development",
      labelColor: "badge-green",
      user: "RM",
      date: "June 12"
    },
    {
      title: "Competitor analysis",
      desc: "Research top 5 competitors and document key features",
      label: "Research",
      labelColor: "badge-purple",
      user: "AL",
      date: "June 15"
    },
    {
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
      title: "Create email campaign",
      desc: "Design and implement Q2 email marketing campaign",
      label: "Marketing",
      labelColor: "badge-yellow",
      user: "AL",
      date: "June 8"
    },
    {
      title: "Mobile app wireframes",
      desc: "Create wireframes for the new mobile application",
      label: "Design",
      labelColor: "badge-blue",
      user: "JD",
      date: "June 9"
    },
    {
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
      title: "Database optimization",
      desc: "Optimize database queries for improved performance",
      label: "Development",
      labelColor: "badge-green",
      user: "RM",
      date: "June 5"
    },
    {
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
      title: "User interviews",
      desc: "Conduct user interviews for product feedback",
      label: "Research",
      labelColor: "badge-purple",
      user: "AL",
      date: "June 2"
    },
    {
      title: "Social media strategy",
      desc: "Develop Q2 social media content strategy",
      label: "Marketing",
      labelColor: "badge-yellow",
      user: "AL",
      date: "June 1"
    },
    {
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
    count: tasks.todo.length
  },
  {
    key: "inprogress",
    title: "In Progress",
    icon: "bi bi-arrow-repeat text-purple",
    count: tasks.inprogress.length
  },
  {
    key: "completed",
    title: "Completed",
    icon: "bi bi-check2-circle text-green",
    count: tasks.completed.length
  }
];



const Dashboard = () => (
  <div className="dashboard-kanban-bg p-4">
    <div className="container-fluid">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <span className="fw-bold fs-4">Dashboard Widgets</span>
          <span className="text-muted ms-2 small">Drag and drop to customize</span>
        </div>
        <div>
          <button className="btn btn-primary me-2">+ Create Dashboard</button>
          <button className="btn btn-outline-secondary">Add Widget</button>
        </div>
      </div>


      






      <div className="row g-4">
        {columns.map((col) => (
          <div className="col-lg-4" key={col.key}
          >
            <div className="card kanban-card">
              <div className="card-header bg-white border-0 pb-1 d-flex align-items-center justify-content-between">
                <div>
                  <i className={`${col.icon} me-2`}></i>
                  <span className="kanban-title">{col.title}</span>
                  <span className="badge badge-light ms-2">{col.count}</span>
                </div>
                <div>
                  <i className="bi bi-plus-lg text-muted me-2"></i>
                  <i className="bi bi-three-dots text-muted"></i>
                </div>
              </div>
              <div className="card-body pt-2">
                {tasks[col.key].map((t, i) => (
                  <div className="kanban-task mb-3" key={i}>
                    <div className="d-flex align-items-center mb-1">
                      <span className={`badge ${t.labelColor} me-2`}>{t.label}</span>
                      <span className="fw-semibold">{t.title}</span>
                      <i className="bi bi-three-dots-vertical ms-auto text-muted"></i>
                    </div>
                    <div className="kanban-desc mb-2">{t.desc}</div>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="kanban-user-badge">{t.user}</span>
                      <span className="text-muted small">{t.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        <div className="container py-4">
    <div className="row g-4">
      {/* Project Progress */}
     <div className="col-12 col-md-6 mb-4 mb-md-0">
  <div className="card h-100 project-progress-card">
    <div className="card-body">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h5 className="fw-bold mb-0">Project Progress</h5>
        <i className="bi bi-three-dots-vertical text-muted"></i>
      </div>
      <div className="mb-4"></div>
      {progressData.map((proj) => (
        <div className="mb-4" key={proj.name}>
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
      {/* Task Distribution */}
      <div className="col-lg-6">
        <div className="card h-100 task-distribution-card">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h5 className="fw-bold mb-0">Task Distribution</h5>
              <i className="bi bi-three-dots-vertical text-muted"></i>
            </div>
            <div className="mb-4"></div>
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
                  {/* Pending */}
                  <circle className="donut-segment" cx="21" cy="21" r="15.9155" fill="transparent"
                    stroke="#2563eb" strokeWidth="3" strokeDasharray="25 75" strokeDashoffset="0"/>
                  {/* In Progress */}
                  <circle className="donut-segment" cx="21" cy="21" r="15.9155" fill="transparent"
                    stroke="#a259e6" strokeWidth="3" strokeDasharray="20 80" strokeDashoffset="-25"/>
                  {/* Completed */}
                  <circle className="donut-segment" cx="21" cy="21" r="15.9155" fill="transparent"
                    stroke="#22c55e" strokeWidth="3" strokeDasharray="35 65" strokeDashoffset="-45"/>
                  {/* Overdue */}
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
    </div>
  </div>
  <div className="card activity-card mt-4">
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




      <div className="card calendar-card mt-4">
  <div className="card-body">
    <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-3">
      <span className="calendar-title mb-2 mb-md-0">Calendar Overview</span>
      <div>
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
  </div>
);

export default Dashboard;