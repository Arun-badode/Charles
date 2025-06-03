import React from "react";

import "./Calendar.css";

const calendarData = {
  year: 2025,
  month: 6, // June
  events: {
    1: [{ title: "Task", color: "danger" }],
    15: [{ title: "Meeting", color: "primary" }],
    22: [{ title: "Deadline", color: "secondary" }],
    28: [{ title: "Test", color: "primary" }],
    29: [{ title: "Update", color: "danger" }],
  },
  stats: {
    timeEvents: 0,
    activeProjects: 2,
    tasks: 1,
    milestones: 0,
  },
};

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function Calendar() {
  const { year, month, events, stats } = calendarData;

  const firstDay = new Date(year, month - 1, 1).getDay();
  const daysInMonth = new Date(year, month, 0).getDate();

  const calendarCells = [];
  let dayCounter = 1;

  for (let i = 0; i < 42; i++) {
    if (i >= firstDay && dayCounter <= daysInMonth) {
      calendarCells.push(dayCounter++);
    } else {
      calendarCells.push(null);
    }
  }

  const today = new Date();
  const isToday = (day) =>
    day === today.getDate() &&
    month === today.getMonth() + 1 &&
    year === today.getFullYear();

  return (
    <div className="container calendar-container py-4  mt-3">
      {/* Breadcrumb & Title */}
{/* Project Management heading and Search input in first row */}
<div className="row mb-3 align-items-center">
  <div className="col-6">
    <h4 className="mb-0">Project Management</h4>
  </div>
  <div className="col-6 d-flex justify-content-end">
    <input
      type="search"
      className="form-control form-control-sm"
      placeholder="Search"
      style={{ maxWidth: 250 }}
    />
  </div>
</div>

<div className="d-flex flex-wrap mb-3 gap-3">
  <div className="stats-box flex-fill">
    <span className="stats-badge time-events">{stats.timeEvents}</span>
    <small className="text-muted ms-2">Time Events</small>
  </div>
  <div className="stats-box flex-fill">
    <span className="stats-badge active-projects">{stats.activeProjects}</span>
    <small className="text-muted ms-2">Active Projects</small>
  </div>
  <div className="stats-box flex-fill">
    <span className="stats-badge tasks">{stats.tasks}</span>
    <small className="text-muted ms-2">Tasks</small>
  </div>
  <div className="stats-box flex-fill">
    <span className="stats-badge milestones">{stats.milestones}</span>
    <small className="text-muted ms-2">Milestones</small>
  </div>
</div>


{/* Month navigation in third row */}
<div className="row mb-3">
  <div className="col d-flex justify-content-start align-items-start">
    <button className="btn btn-link p-0 me-2" aria-label="Previous month">
      &lt;
    </button>
    <h6 className="mb-0 fw-bold">June 2025</h6>
    <button className="btn btn-link p-0 ms-2" aria-label="Next month">
      &gt;
    </button>
  </div>
</div>



      {/* Calendar table */}
      <table className="table table-bordered calendar-table text-center">
        <thead>
          <tr>
            {weekdays.map((wd) => (
              <th key={wd}>{wd}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[...Array(6)].map((_, rowIndex) => (
            <tr key={rowIndex}>
              {calendarCells
                .slice(rowIndex * 7, rowIndex * 7 + 7)
                .map((day, cellIndex) => {
                  const dayEvents = day ? events[day] || [] : [];
                  return (
                    <td key={cellIndex} className="calendar-cell">
                      {day && (
                        <>
                          <div className="d-flex justify-content-between">
                            <div className="day-number">{day}</div>
                            {isToday(day) ? (
                              <span className="badge bg-primary today-badge">3</span>
                            ) : (
                              <span className="badge bg-primary rounded-circle invisible">
                                &nbsp;
                              </span>
                            )}
                          </div>
                          {/* Events */}
                          {dayEvents.map((event, i) => (
                            <div
                              key={i}
                              className={`event-badge bg-${event.color} text-white rounded px-2 py-1 mt-1`}
                              title={event.title}
                            >
                              {event.title}
                            </div>
                          ))}
                        </>
                      )}
                    </td>
                  );
                })}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add Task button */}
      <div className="d-flex justify-content-end">
        <button className="btn btn-primary add-task-btn">+ Add Task</button>
      </div>
    </div>
  );
}

export default Calendar;
