import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Play,
  CheckCircle2,
  Star,
  Search,
  Bell,
  Settings,
  TrendingUp,
  Calendar,
  Users,
  DollarSign,
  Briefcase,
  CheckSquare,
  Clock,
  Sparkles
} from 'lucide-react';

export default function HeroSection({ onOpenTrial, onOpenDemo }) {
  const [activeScreenTab, setActiveScreenTab] = useState(0);

  // Auto-cycle through preview tabs every 6 seconds to give dynamic feel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveScreenTab((prev) => (prev + 1) % 3);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        {/* Left Column: Hero Copy & CTA */}
        <div className="hero-left">
          {/* Badge */}
          <div className="hero-badge">
            <Sparkles size={15} className="badge-sparkle" />
            <span>Cloud CRM Rental & Subscription Platform</span>
          </div>

          {/* Headline */}
          <h1 className="hero-title">
            Rent Your Complete <br />
            <span className="gradient-text">Cloud-Based CRM</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle">
            Flexible monthly & annual subscriptions for growing businesses. Manage leads, customers, follow-up reminders, visual sales pipelines, and field officer tracking in one secure multi-tenant platform.
          </p>

          {/* Trust Checkmarks */}
          <div className="hero-checks">
            <div className="check-item">
              <CheckCircle2 size={17} className="check-icon" />
              <span>No credit card required</span>
            </div>
            <div className="check-item">
              <CheckCircle2 size={17} className="check-icon" />
              <span>Flexible subscription plans</span>
            </div>
            <div className="check-item">
              <CheckCircle2 size={17} className="check-icon" />
              <span>Instant company onboarding</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="hero-cta-group">
            <button
              type="button"
              className="btn-hero-primary"
              onClick={() => onOpenTrial('Professional')}
            >
              Get Started <ArrowRight size={18} />
            </button>
            <button
              type="button"
              className="btn-hero-secondary"
              onClick={onOpenDemo}
            >
              <div className="play-icon-bubble">
                <Play size={13} fill="#2563eb" color="#2563eb" />
              </div>
              Book a Demo
            </button>
          </div>

          {/* Social Proof Avatars & Rating */}
          <div className="hero-social-proof">
            <div className="avatar-stack">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                alt="Client 1"
                className="avatar-img"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                alt="Client 2"
                className="avatar-img"
              />
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
                alt="Client 3"
                className="avatar-img"
              />
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80"
                alt="Client 4"
                className="avatar-img"
              />
            </div>
            <div className="social-proof-text">
              <div className="proof-sub">
                <strong>Multi-Tenant Architecture</strong> &bull; Strict Company Data Isolation
              </div>
              <div className="proof-stars">
                <div className="stars-row">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
                <span className="rating-score">Enterprise Cloud Verified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Realistic Laptop Showcase with Live CRM Dashboard */}
        <div className="hero-right">
          {/* Floating Badge above laptop */}
          <div className="floating-laptop-tag">
            <div className="tag-icon-ring">
              <Sparkles size={14} color="#7c3aed" />
            </div>
            <div className="tag-text">
              <span className="tag-title">Rent &bull; Deploy &bull; Scale</span>
              <span className="tag-subtitle">&mdash; Multi-Tenant Cloud CRM</span>
            </div>
          </div>

          {/* Laptop Mockup Outer Frame */}
          <div className="laptop-wrapper">
            <div className="laptop-lid">
              <div className="laptop-camera"></div>

              {/* Laptop Screen Inside */}
              <div className="laptop-screen">
                {/* Screen Top Header */}
                <div className="crm-screen-nav">
                  <div className="crm-brand-pill">
                    <TrendingUp size={13} color="#ffffff" />
                    <span>CRM Cloud</span>
                  </div>

                  <div className="crm-search-box">
                    <Search size={12} color="#94a3b8" />
                    <input type="text" readOnly placeholder="Search leads, customers, pipelines..." />
                  </div>

                  <div className="crm-nav-user-items">
                    <Bell size={13} className="crm-icon-btn" />
                    <Settings size={13} className="crm-icon-btn" />
                    <div className="crm-user-profile">
                      <img
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&auto=format&fit=crop&q=80"
                        alt="Admin"
                        className="crm-user-avatar"
                      />
                      <div className="crm-user-details">
                        <span className="crm-user-name">Company Admin</span>
                        <span className="crm-user-role">Tenant Workspace</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CRM Screen Body */}
                <div className="crm-screen-body">
                  {/* Left Sidebar inside laptop */}
                  <div className="crm-sidebar">
                    <div className={`crm-sidebar-item ${activeScreenTab === 0 ? 'active' : ''}`} onClick={() => setActiveScreenTab(0)}>
                      <TrendingUp size={13} />
                      <span>Dashboard</span>
                    </div>
                    <div className={`crm-sidebar-item ${activeScreenTab === 1 ? 'active' : ''}`} onClick={() => setActiveScreenTab(1)}>
                      <Users size={13} />
                      <span>Leads</span>
                    </div>
                    <div className="crm-sidebar-item">
                      <Briefcase size={13} />
                      <span>Customers</span>
                    </div>
                    <div className="crm-sidebar-item">
                      <DollarSign size={13} />
                      <span>Pipeline</span>
                    </div>
                    <div className="crm-sidebar-item">
                      <CheckSquare size={13} />
                      <span>Follow-ups</span>
                    </div>
                    <div className={`crm-sidebar-item ${activeScreenTab === 2 ? 'active' : ''}`} onClick={() => setActiveScreenTab(2)}>
                      <Calendar size={13} />
                      <span>Field Officers</span>
                    </div>
                    <div className="crm-sidebar-item">
                      <Settings size={13} />
                      <span>Reports</span>
                    </div>
                  </div>

                  {/* Right Main Dashboard Content */}
                  <div className="crm-main-view">
                    {/* Welcome Banner */}
                    <div className="crm-welcome-bar">
                      <div>
                        <h3>Good morning, Prince! &#128075;</h3>
                        <p>Here's what's happening with your sales today.</p>
                      </div>
                    </div>

                    {/* 4 Metric Cards */}
                    <div className="crm-kpi-grid">
                      <div className="crm-kpi-card">
                        <div className="kpi-top">
                          <span className="kpi-label">Total Leads</span>
                          <span className="kpi-trend positive">+12%</span>
                        </div>
                        <div className="kpi-value-row">
                          <span className="kpi-num">1,284</span>
                          <div className="kpi-icon-pill green">
                            <Users size={12} />
                          </div>
                        </div>
                      </div>

                      <div className="crm-kpi-card">
                        <div className="kpi-top">
                          <span className="kpi-label">Follow-ups Due</span>
                          <span className="kpi-trend warning">+8%</span>
                        </div>
                        <div className="kpi-value-row">
                          <span className="kpi-num">146</span>
                          <div className="kpi-icon-pill orange">
                            <Clock size={12} />
                          </div>
                        </div>
                      </div>

                      <div className="crm-kpi-card">
                        <div className="kpi-top">
                          <span className="kpi-label">Site Visits</span>
                          <span className="kpi-trend positive">+10%</span>
                        </div>
                        <div className="kpi-value-row">
                          <span className="kpi-num">212</span>
                          <div className="kpi-icon-pill cyan">
                            <Calendar size={12} />
                          </div>
                        </div>
                      </div>

                      <div className="crm-kpi-card">
                        <div className="kpi-top">
                          <span className="kpi-label">Deals Won</span>
                          <span className="kpi-trend positive">+22%</span>
                        </div>
                        <div className="kpi-value-row">
                          <span className="kpi-num">&#8377;12.4L</span>
                          <div className="kpi-icon-pill green">
                            <DollarSign size={12} />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Charts Grid */}
                    <div className="crm-charts-grid">
                      {/* Left: Sales Performance Line Chart */}
                      <div className="crm-chart-card">
                        <div className="chart-card-header">
                          <div className="chart-header-left">
                            <span className="chart-title">Sales Performance</span>
                            <span className="badge-growth-tag">+120%</span>
                          </div>
                          <span className="chart-filter-tag">Last 6 Months &or;</span>
                        </div>

                        {/* Interactive SVG Chart Graphic */}
                        <div className="chart-canvas-container">
                          <svg viewBox="0 0 320 110" className="sales-svg-chart">
                            <defs>
                              <linearGradient id="purpleAreaGrad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.38" />
                                <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.0" />
                              </linearGradient>
                            </defs>
                            {/* Area fill */}
                            <path
                              d="M 10,85 Q 50,65 90,75 T 160,40 T 230,55 T 310,18 L 310,105 L 10,105 Z"
                              fill="url(#purpleAreaGrad)"
                            />
                            {/* Trend Line */}
                            <path
                              d="M 10,85 Q 50,65 90,75 T 160,40 T 230,55 T 310,18"
                              fill="none"
                              stroke="#7c3aed"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                            />
                            {/* Points */}
                            <circle cx="10" cy="85" r="3.5" fill="#ffffff" stroke="#7c3aed" strokeWidth="2" />
                            <circle cx="90" cy="75" r="3.5" fill="#ffffff" stroke="#7c3aed" strokeWidth="2" />
                            <circle cx="160" cy="40" r="3.5" fill="#ffffff" stroke="#7c3aed" strokeWidth="2" />
                            <circle cx="230" cy="55" r="3.5" fill="#ffffff" stroke="#7c3aed" strokeWidth="2" />
                            <circle cx="310" cy="18" r="4" fill="#7c3aed" stroke="#ffffff" strokeWidth="2" />
                          </svg>
                          <div className="chart-month-labels">
                            <span>Jan</span>
                            <span>Feb</span>
                            <span>Mar</span>
                            <span>Apr</span>
                            <span>May</span>
                            <span>Jun</span>
                          </div>
                        </div>
                      </div>

                      {/* Right: Leads by Source Donut Chart */}
                      <div className="crm-chart-card">
                        <div className="chart-card-header">
                          <span className="chart-title">Leads by Source</span>
                        </div>
                        <div className="donut-layout">
                          {/* Donut Graphic */}
                          <div className="donut-container">
                            <svg viewBox="0 0 36 36" className="circular-chart">
                              <path className="circle-bg"
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              />
                              {/* Meta Ads (32%) */}
                              <path className="circle-seg meta"
                                strokeDasharray="32, 100"
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              />
                              {/* WhatsApp (28%) */}
                              <path className="circle-seg whatsapp"
                                strokeDasharray="28, 100"
                                strokeDashoffset="-32"
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              />
                              {/* Website (20%) */}
                              <path className="circle-seg web"
                                strokeDasharray="20, 100"
                                strokeDashoffset="-60"
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              />
                              {/* Referrals (12%) */}
                              <path className="circle-seg referral"
                                strokeDasharray="12, 100"
                                strokeDashoffset="-80"
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              />
                            </svg>
                            <div className="donut-center-text">
                              <span className="donut-big-num">1,284</span>
                              <span className="donut-sub-label">Total Leads</span>
                            </div>
                          </div>

                          {/* Donut Legend */}
                          <div className="donut-legend">
                            <div className="legend-row">
                              <span className="legend-dot meta"></span>
                              <span className="legend-name">Meta Ads</span>
                              <span className="legend-pct">32%</span>
                            </div>
                            <div className="legend-row">
                              <span className="legend-dot whatsapp"></span>
                              <span className="legend-name">WhatsApp</span>
                              <span className="legend-pct">28%</span>
                            </div>
                            <div className="legend-row">
                              <span className="legend-dot web"></span>
                              <span className="legend-name">Website</span>
                              <span className="legend-pct">20%</span>
                            </div>
                            <div className="legend-row">
                              <span className="legend-dot referral"></span>
                              <span className="legend-name">Referrals</span>
                              <span className="legend-pct">12%</span>
                            </div>
                            <div className="legend-row">
                              <span className="legend-dot other"></span>
                              <span className="legend-name">Other</span>
                              <span className="legend-pct">8%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Tasks Row */}
                    <div className="crm-tasks-bar">
                      <div className="tasks-header">
                        <span className="tasks-title">Tasks for Today</span>
                        <span className="tasks-count-tag">3 pending</span>
                      </div>
                      <div className="tasks-list-row">
                        <div className="task-pill-item">
                          <span className="task-dot orange"></span>
                          <span className="task-name">Call Amit Patel</span>
                          <span className="task-time">10:30 AM</span>
                        </div>
                        <div className="task-pill-item">
                          <span className="task-dot blue"></span>
                          <span className="task-name">Follow-up &mdash; Priya Nair</span>
                          <span className="task-time">12:00 PM</span>
                        </div>
                        <div className="task-pill-item">
                          <span className="task-dot red"></span>
                          <span className="task-name">Site Visit &mdash; Rahul Joshi</span>
                          <span className="task-time">03:00 PM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Laptop Base / Keyboard Chassis */}
            <div className="laptop-base">
              <div className="laptop-notch"></div>
            </div>
            <div className="laptop-reflection"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
