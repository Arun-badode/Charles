import React from 'react';


const reports = [
  {
    title: "Project Analytics",
    description: "Project performance, timelines, and progress reports",
    iconColor: "primary",
    icon: "bi-bar-chart"
  },
  {
    title: "Task Analytics",
    description: "Task productivity, completion rates, and team performance",
    iconColor: "success",
    icon: "bi-check2-circle"
  },
  {
    title: "Client Analytics",
    description: "Client relationships, project history, and satisfaction metrics",
    iconColor: "purple",
    icon: "bi-person-badge"
  },
  {
    title: "Financial Reports",
    description: "Revenue, costs, profitability, and billing analytics",
    iconColor: "success",
    icon: "bi-currency-dollar"
  },
  {
    title: "Custom Reports",
    description: "Build custom reports with advanced filtering and visualization",
    iconColor: "warning",
    icon: "bi-sliders"
  },
];

const ReportsAnalytics = () => {
  return (
    <div className="container-flud mt-2 p-5">
      <h4 className="mb-4 fw-bold">Reports & Analytics</h4>
      <div className="row">
        {reports.map((report, idx) => (
          <div className="col-md-6 col-lg-4 mb-4" key={idx}>
            <div className="border rounded p-3 h-100 shadow-sm">
              <div className="d-flex align-items-center gap-2 mb-2">
                <i className={`bi ${report.icon} text-${report.iconColor}`}></i>
                <h6 className="m-0 fw-semibold">{report.title}</h6>
              </div>
              <p className="text-muted small mb-0">{report.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportsAnalytics;
