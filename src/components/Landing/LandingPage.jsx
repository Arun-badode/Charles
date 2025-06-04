import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LandingPage.css"; // Custom styles for the landing page

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
  const featuresRef = useRef(null);
  const pricingRef = useRef(null);

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

  // Scroll to section helper
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container-fluid p-0">
      {/* Header */}
      <nav className="d-flex justify-content-between align-items-center py-3 px-4 border-bottom">
        <div className="d-flex align-items-center">
          <div className="bg-primary text-white fw-bold px-2 py-1 rounded me-2">PM</div>
          <h5 className="m-0">ProjectManager Pro</h5>
        </div>
        <div className="d-none d-md-flex align-items-center gap-3">
          <a href="/login" className="text-dark text-decoration-none">Sign In</a>
          <a href="/login" className="btn btn-primary">Get Started</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="d-flex flex-column align-items-center justify-content-center text-center"
        style={{ minHeight: "100vh" }}
      >
        <h1 className="fw-bold display-5 mb-3">
          The Ultimate <span className="text-primary">Project Management</span> Solution
        </h1>
        <p className="text-secondary fs-5 mb-4" style={{ maxWidth: "700px" }}>
         Automate routine tasks, get real-time insights, and stay ahead of deadlines effortlessly.
Empower every team with the tools they need to collaborate, plan, and execute seamlessly.
        </p>
        <div className="d-flex gap-3 flex-wrap justify-content-center mb-4">
          <a href="/dashboard" className="btn btn-primary px-4">Start Free Trial</a>
          <a href="/login" className="btn btn-outline-secondary px-4">Sign In</a>
        </div>
        <button
          className="btn btn-link text-primary"
          style={{ textDecoration: "none", fontWeight: 500 }}
          onClick={() => scrollToSection(featuresRef)}
        >
          <span style={{ fontSize: 22 }}>▼</span>
        </button>
      </section>

      {/* Features Section */}
      <section
        ref={featuresRef}
        className="bg-light py-5 d-flex align-items-center"
        style={{ minHeight: "100vh" }}
      >
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
          <button
            className="btn btn-link text-primary mt-5"
            style={{ textDecoration: "none", fontWeight: 500 }}
            onClick={() => scrollToSection(pricingRef)}
          >
            <span style={{ fontSize: 22 }}>▼</span>
          </button>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        ref={pricingRef}
        className="custom-container py-5 d-flex align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Simple, Transparent Pricing</h2>
            <p className="text-muted">Choose the plan that works best for your business.</p>
          </div>
          <div className="row justify-content-center g-4">
            {plans.map((plan, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-5 d-flex">
                <div className={`pricing-card position-relative w-100 h-100 d-flex flex-column justify-content-between ${plan.badge ? 'border-primary shadow' : ''}`}>
                  {plan.badge && (
                    <span className="badge-popular">{plan.badge}</span>
                  )}
                  <div>
                    <h4 className="fw-bold text-center">{plan.name}</h4>
                    <h2 className="fw-bold text-center">
                      {plan.price}
                      <span className="fs-6 text-muted">{plan.billingCycle}</span>
                    </h2>
                    <ul className="feature-list list-unstyled mt-4">
                      {plan.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <button className={`btn ${plan.buttonStyle} w-100 mt-4`}>
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
