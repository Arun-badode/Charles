
 import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 



const plans = [
  {
    name: 'Main License',
    price: '$99',
    billingCycle: '/year',
    features: [
      'Dashboard & Analytics',
      'Case Management',
      'Project Scheduling',
      'All Management Tools',
      'Up to 15 users',
      'Basic Support',
    ],
    buttonStyle: 'btn-outline-primary',
  },
  {
    name: 'Pro License',
    price: '$199',
    billingCycle: '/year',
    features: [
      'All Main License features',
      'Advanced CRM',
      'Performance Management',
      'AI Analytics & Automation',
      'Communication Suite',
      'Priority Support',
      'Custom Integrations',
    ],
    badge: 'Most Popular',
    buttonStyle: 'btn-primary',
  },
];
const LandingPage = () => {
    const features = [
  {
    icon: '🏢',
    title: 'Multi Organization Management',
    desc: 'Manage multiple organizations with one smart access portal',
  },
  {
    icon: '🛡️',
    title: 'Enterprise Security',
    desc: 'Advanced security with training and user permissions',
  },
  {
    icon: '⚡',
    title: 'AI Powered Automation',
    desc: 'Smart task assignment and predictive analytics',
  },
  {
    icon: '📊',
    title: 'Advanced Analytics',
    desc: 'Comprehensive reporting and performance tracking',
  },
  {
    icon: '⚙️',
    title: 'Fully Customizable',
    desc: 'Drag and drop interface with personalized dashboards',
  },
];
  return (
    <div className="container-fluid">
      {/* Header */}
      <nav className="d-flex justify-content-between align-items-center py-3 px-4 border-bottom">
        <div className="d-flex align-items-center">
          <div className="bg-primary text-white fw-bold px-2 py-1 rounded me-2">PM</div>
          <h5 className="m-0">ProjectManager Pro</h5>
        </div>
        <div className="d-none d-md-flex align-items-center gap-3">
          <a href="/signin" className="text-dark text-decoration-none">Sign In</a>
          <a href="/get-started" className="btn btn-primary">Get Started</a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="d-flex flex-column align-items-center text-center py-5 px-3">
        <h1 className="fw-bold display-5 mb-3">
          The Ultimate <span className="text-primary">Project Management</span> Solution
        </h1>
        <p className="text-secondary fs-5 mb-4" style={{ maxWidth: '700px' }}>
          Streamline your projects, manage teams across organizations, and boost productivity with our AI-powered platform designed for modern businesses.
        </p>
        <div className="d-flex gap-3 flex-wrap justify-content-center">
          <a href="/start-trial" className="btn btn-primary px-4">Start Free Trial</a>
          <a href="/signin" className="btn btn-outline-secondary px-4">Sign In</a>
        </div>
      </div>
       <section className="bg-light py-5">
      <div className="container text-center">
        <h2 className="fw-bold mb-2">Powerful Features for Every Team</h2>
        <p className="text-muted mb-5">Everything you need to manage projects efficiently</p>
        <div className="row g-4 justify-content-center">
          {features.map((feature, index) => (
            <div className="col-12 col-sm-6 col-md-4" key={index}>
              <div className="card border-0 shadow-sm feature-card h-100 bg-white">
                <div className="card-body text-start">
                  <div className="feature-icon mb-3">{feature.icon}</div>
                  <h5 className="fw-semibold">{feature.title}</h5>
                  <p className="text-muted">{feature.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section>
          <div className="text-center mb-5">
        <h2 className="fw-bold">Simple, Transparent Pricing</h2>
        <p className="text-muted">Choose the plan that works best for your business.</p>
      </div>

      {/* Cards */}
      <div className="row justify-content-center g-4">
        {plans.map((plan, index) => (
          <div key={index} className="col-md-6 col-lg-5">
            <div className={`pricing-card position-relative ${plan.badge ? 'border-primary shadow' : ''}`}>
              {plan.badge && (
                <span className="badge-popular">{plan.badge}</span>
              )}
              <h4 className="fw-bold text-center">{plan.name}</h4>
              <h2 className="fw-bold text-center">
                {plan.price}<span className="fs-6 text-muted">{plan.billingCycle}</span>
              </h2>
              <ul className="list-unstyled mt-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-success">✔ {feature}</li>
                ))}
              </ul>
              <button className={`btn ${plan.buttonStyle} w-100 mt-4`}>
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default LandingPage;
