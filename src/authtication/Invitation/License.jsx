import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./License.css";
import { Link } from "react-router-dom";

const License = () => (
  <div className="license-bg">
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="license-card bg-white rounded-4 shadow-sm p-4 w-100">
        <div className="text-center mb-4">
          <h2 className="    license-title">License Verification</h2>
          <div className="text-muted license-subtitle">
            Enter your license key and organization information
          </div>
        </div>
        <form>
          <div className="mb-3">
            <label htmlFor="orgName" className="form-label fw-semibold">
              Organization Name
            </label>
            <input
              type="text"
              className="form-control license-input"
              id="orgName"
              placeholder="Enter organization name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="licenseKey" className="form-label fw-semibold">
              License Key
            </label>
            <input
              type="text"
              className="form-control license-input"
              id="licenseKey"
              placeholder="Enter your license key"
            />
          </div>
          <div className="form-text mb-3 text-muted">
            By clicking "Verify License", you agree that you have the rights to access and use this key.
          </div>
          <Link to="/dashboard">
          <button
            type="submit"
            className="btn btn-license w-100 mb-3"
          >
            Verify License
          </button>
          </Link>
        </form>
        <div className="text-center mt-2">
          <div className="license-link text-muted mb-1">I have an invitation.</div>
          <div className="text-muted small">
            Can't find a license? You can purchase one from the main organization or from team owner.
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default License;