import React from 'react'
import './Help.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BsListTask, BsPeople, BsBarChart, BsGear } from "react-icons/bs";

const Help = () => {
    return (
        <div className="container">
            {/* Hero Section */}
            <h2 className="ms-3">Help Center</h2>
            <div className="container mt-4">
                <div className="hc-support-section">

                    <h4 className="text-center mb-4">How can we help you today?</h4>
                    <div className="input-group">
                        <span className="input-group-text bg-transparent border-end-0">
                            <i className="fas fa-search text-muted" />
                        </span>
                        <input
                            type="text"
                            className="form-control hc-search-input border-start-0"
                            placeholder="Search for help articles, tutorials, and more..."
                        />
                    </div>
                </div>
            </div>
            {/* Popular Topics Section */}
            <div className="container mt-3">
                <div className="hc-support-section">
                    <h3 className="hc-section-title">POPULAR TOPICS</h3>
                    <div className="row g-4 justify-content-center">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="hc-topic-card text-center">
                                <div className="hc-topic-icon-circle mx-auto mb-2">
                                    <BsListTask size={32} color="#5a6acf" />
                                </div>
                                <h6 className="mb-0 fw-semibold">Task Management</h6>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="hc-topic-card text-center">
                                <div className="hc-topic-icon-circle mx-auto mb-2">
                                    <BsPeople size={32} color="#5a6acf" />
                                </div>
                                <h6 className="mb-0 fw-semibold">Team Collaboration</h6>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="hc-topic-card text-center">
                                <div className="hc-topic-icon-circle mx-auto mb-2">
                                    <BsBarChart size={32} color="#5a6acf" />
                                </div>
                                <h6 className="mb-0 fw-semibold">Reports &amp; Analytics</h6>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="hc-topic-card text-center">
                                <div className="hc-topic-icon-circle mx-auto mb-2">
                                    <BsGear size={32} color="#5a6acf" />
                                </div>
                                <h6 className="mb-0 fw-semibold">Account Settings</h6>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* FAQ Section */}
            <div className="container mt-3">
                <div className="hc-support-section">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h3 className="hc-section-title mb-0">Frequently Asked Questions</h3>
                        <small className="text-muted">
                            Designed by <i className="fas fa-robot" /> Buddy
                        </small>
                    </div>
                    <div className="accordion" id="faqAccordion">
                        <div className="hc-faq-item">
                            <button
                                className="hc-faq-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#faq1"
                                aria-expanded="false"
                            >
                                How do I create a new project?
                            </button>
                            <div id="faq1" className="collapse" data-bs-parent="#faqAccordion">
                                <div className="p-3 border-top">
                                    To create a new project, click on the "New Project" button in your
                                    dashboard and fill out the required information.
                                </div>
                            </div>
                        </div>
                        <div className="hc-faq-item">
                            <button
                                className="hc-faq-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#faq2"
                                aria-expanded="false"
                            >
                                How do I invite team members?
                            </button>
                            <div id="faq2" className="collapse" data-bs-parent="#faqAccordion">
                                <div className="p-3 border-top">
                                    Go to your project settings and click on "Team Members" to send
                                    invitations via email.
                                </div>
                            </div>
                        </div>
                        <div className="hc-faq-item">
                            <button
                                className="hc-faq-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#faq3"
                                aria-expanded="false"
                            >
                                How do I track time on tasks?
                            </button>
                            <div id="faq3" className="collapse" data-bs-parent="#faqAccordion">
                                <div className="p-3 border-top">
                                    Use the built-in timer feature on each task or manually log your
                                    time entries.
                                </div>
                            </div>
                        </div>
                        <div className="hc-faq-item">
                            <button
                                className="hc-faq-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#faq4"
                                aria-expanded="false"
                            >
                                How do I generate reports?
                            </button>
                            <div id="faq4" className="collapse" data-bs-parent="#faqAccordion">
                                <div className="p-3 border-top">
                                    Navigate to the Reports section and select the type of report you
                                    need to generate.
                                </div>
                            </div>
                        </div>
                        <div className="hc-faq-item">
                            <button
                                className="hc-faq-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#faq5"
                                aria-expanded="false"
                            >
                                How do I change my subscription plan?
                            </button>
                            <div id="faq5" className="collapse" data-bs-parent="#faqAccordion">
                                <div className="p-3 border-top">
                                    Go to Account Settings &gt; Billing to view and modify your
                                    subscription plan.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Support and Contact Section */}
            <div className="container mt-3 mb-5">
                <div className="row g-4">
                    {/* Support Options */}
                    <div className="col-lg-6">
                        <div className="hc-support-section">
                            <h4 className="hc-section-title">Still need help?</h4>
                            <p className="text-muted mb-4">
                                Our support team is available to help you with any questions or
                                issues you might have.
                            </p>
                            <div className="hc-contact-option">
                                <div className="hc-contact-icon">
                                    <i className="fas fa-envelope" />
                                </div>
                                <div>
                                    <h6 className="mb-1">Email Support</h6>
                                    <small className="text-muted">
                                        support@projectmanager.com
                                        <br />
                                        Response within 24 hours
                                    </small>
                                </div>
                            </div>
                            <div className="hc-contact-option">
                                <div className="hc-contact-icon">
                                    <i className="fas fa-comments" />
                                </div>
                                <div>
                                    <h6 className="mb-1">Live Chat</h6>
                                    <small className="text-muted">
                                        Available Monday-Friday
                                        <br />
                                        9:00 AM - 6:00 PM EST
                                    </small>
                                </div>
                            </div>
                            <div className="hc-contact-option">
                                <div className="hc-contact-icon">
                                    <i className="fas fa-phone" />
                                </div>
                                <div>
                                    <h6 className="mb-1">Phone Support</h6>
                                    <small className="text-muted">
                                        +1 (555) 123-4567
                                        <br />
                                        Premium plans only
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Contact Form */}
                    <div className="col-lg-6">
                        <div className="hc-message-form">
                            <h4 className="hc-section-title">Send us a message</h4>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="hc-name" className="form-label">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control hc-form-control"
                                        id="hc-name"
                                        required=""
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="hc-email" className="form-label">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control hc-form-control"
                                        id="hc-email"
                                        required=""
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="hc-subject" className="form-label">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control hc-form-control"
                                        id="hc-subject"
                                        required=""
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="hc-message" className="form-label">
                                        Message
                                    </label>
                                    <textarea
                                        className="form-control hc-form-control"
                                        id="hc-message"
                                        rows={5}
                                        required=""
                                        defaultValue={""}
                                    />
                                </div>
                                <button type="submit" className="btn hc-btn-primary w-100">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Help
