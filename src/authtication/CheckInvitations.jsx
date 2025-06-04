import React from "react";

const CheckInvitations = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="bg-white border rounded-4 shadow-sm p-4 w-100" style={{ maxWidth: 500 }}>
        <h2 className="fw-semibold text-center mb-2">Check for Invitations</h2>
        <div className="text-center text-muted mb-4 fs-5">
          Enter your invitation token or search for invitations sent to your email
        </div>

        <div className="mb-3">
          <h5 className="fw-semibold mb-1">Email Invitations</h5>
          <div className="text-muted mb-3">
            Check for invitations sent to your email from any organization
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text bg-white border-end-0">
              <i className="bi bi-envelope fs-5"></i>
            </span>
            <input
              type="text"
              className="form-control border-start-0 fw-semibold"
              placeholder="Check Email Invitations"
              readOnly
            />
          </div>
          <button className="btn btn-dark w-100 fw-semibold d-flex align-items-center justify-content-center gap-2 mb-2 fs-5">
            <i className="bi bi-envelope"></i>
            Get by Email Invitations
          </button>
          <div className="text-center mb-3">
            <a href="/license" className="text-decoration-none link-primary fw-semibold fs-6">
              <i className="bi bi-link-45deg me-1"></i>
              Verify License Instead
            </a>
          </div>
        </div>

        <div className="mb-4">
          <div className="fw-semibold mb-2">How it works:</div>
          <ul className="mb-0 ps-3">
            <li>Search for invitations across all organizations</li>
            <li>See invitations tagged with your</li>
            <li>Accept invitations to get started</li>
            <li>Apply your invitation forever</li>
          </ul>
        </div>

        <button className="btn btn-outline-secondary w-100 fw-semibold py-2 fs-5 text-dark">
          Continue
        </button>
      </div>
    </div>
  );
};

export default CheckInvitations;
