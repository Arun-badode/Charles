import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Invitations.css";

const Invitations = () => (
  <div className="invite-bg">
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="invite-card bg-white rounded-4 shadow-sm p-4 w-100">
        <div className="text-center mb-4">
          <h2 className=" invite-title">Check for Invitations</h2>
          <div className="text-muted invite-subtitle">
            Enter your invitation token or search for invitations sent to your email
          </div>
        </div>
        <div>
          <h5 className=" mb-2">Check Invitation</h5>
          <div className="text-muted mb-3">
            Enter your invitation token or check for invitations sent to your email
          </div>
          <form>
            <div className="mb-3">
              <label htmlFor="invitationToken" className="form-label fw-semibold">
                Invitation Token
              </label>
              <input
                type="text"
                className="form-control invite-input"
                id="invitationToken"
                placeholder="Enter invitation token"
              />
            </div>
            <button
              type="submit"
              className="btn btn-invite  w-100 mb-3"
            >
              Check Token
            </button>
          </form>
          <div className="text-center">
            <div className="invite-link text-muted mb-2">Check by Email</div>
            <div className="text-muted small">I don't have an invitation</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Invitations;