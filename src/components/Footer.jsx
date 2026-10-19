import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Lock,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  MessageCircle
} from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer({ onOpenLogin, onOpenDemo, onOpenTrial, onOpenEnterprise }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
      }, 3500);
    }
  };

  return (
    <footer className="footer-wrapper" aria-label="Website Footer">
      {/* Decorative Top Glow Bar */}
      <div className="footer-top-accent" />

      <div className="footer-container">
        {/* 1. Newsletter & Intelligence Banner */}
        <div className="footer-newsletter-banner">
          <div className="newsletter-text-col">
            <div className="newsletter-badge">
              <Sparkles size={13} className="badge-sparkle" />
              <span>CRM RENTAL & PRODUCT UPDATES</span>
            </div>
            <h3 className="newsletter-title">
              Stay ahead with cloud CRM best practices
            </h3>
            <p className="newsletter-subtitle">
              Get product release notes, sales pipeline playbooks, and multi-tenant rental feature updates.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="newsletter-form-col">
            {subscribed ? (
              <div className="newsletter-success">
                <CheckCircle2 size={18} className="success-icon" />
                <span>You're in! Check your inbox for the CRM setup guide.</span>
              </div>
            ) : (
              <div className="newsletter-input-wrap">
                <Mail size={17} className="input-mail-icon" />
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your work email address..."
                  required
                  className="newsletter-input"
                  aria-label="Work email address"
                />
                <button type="submit" className="newsletter-submit-btn">
                  <span>Subscribe</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            )}
          </form>
        </div>

        {/* 2. Main Navigation Columns */}
        <div className="footer-columns">
          {/* Brand Info & Trust Badges */}
          <div className="footer-col brand-col">
            <Link to="/" className="footer-brand" style={{ textDecoration: 'none' }} title="SalesAvatar Home">
              <div className="brand-logo-icon">
                <TrendingUp size={20} color="#ffffff" strokeWidth={2.8} />
              </div>
              <div className="brand-text">
                <div className="brand-title">
                  <span className="brand-bold">Sales</span>
                  <span className="brand-purple">Avatar</span>
                </div>
                <span className="brand-tagline">Sell &bull; Manage &bull; Grow</span>
              </div>
            </Link>

            <p className="footer-desc">
              Multi-tenant cloud CRM rental and subscription platform. Rent lead management, customer 360°, visual sales pipelines, and field officer tracking on flexible monthly or annual plans.
            </p>

            <div className="footer-contact-items">
              <a href="mailto:support@salesavatar.com" className="contact-line" title="Send email to support">
                <Mail size={15} className="contact-icon" />
                <span>support@salesavatar.com</span>
              </a>
              <a href="tel:+919876543210" className="contact-line" title="Call customer helpline">
                <Phone size={15} className="contact-icon" />
                <span>+91 98765 43210 (Mon-Sat, 9am-8pm)</span>
              </a>
              <Link to="/contact" className="contact-line" title="View office locations & directions">
                <MapPin size={15} className="contact-icon" />
                <span>Tech Park, Bangalore & Delhi NCR, India</span>
              </Link>
            </div>

            {/* Trust & Compliance Badges */}
            <div className="footer-compliance-row">
              <Link to="/security" className="compliance-chip clickable" title="Read our Indian DPDP Act & GDPR compliance policy">
                <ShieldCheck size={13} className="chip-icon" />
                <span>DPDP & GDPR Compliant</span>
              </Link>
              <Link to="/security" className="compliance-chip clickable" title="Read our AES-256 bank-grade encryption architecture">
                <Lock size={13} className="chip-icon" />
                <span>AES-256 Encrypted</span>
              </Link>
            </div>
          </div>

          {/* Product Links - Targeted to specific feature modules */}
          <div className="footer-col">
            <h4 className="footer-heading">CRM Modules</h4>
            <ul className="footer-links">
              <li>
                <Link to="/features#leads" title="Capture and organize inbound sales leads">
                  Lead Management
                  <span className="link-badge hot">CORE</span>
                </Link>
              </li>
              <li>
                <Link to="/features#customers" title="Customer 360 profiles & communication history">
                  Customer 360° Records
                </Link>
              </li>
              <li>
                <Link to="/features#followup" title="Never miss a lead with automated reminder alerts">
                  Follow-up Tasks & Reminders
                  <span className="link-badge pop">HOT</span>
                </Link>
              </li>
              <li>
                <Link to="/features#pipeline" title="Visual Kanban sales stages & forecasted revenue">
                  Visual Sales Pipeline
                </Link>
              </li>
              <li>
                <Link to="/features#attendance" title="GPS check-ins, site selfies & distance calculation">
                  Field Officer GPS Tracking
                  <span className="link-badge pop">POPULAR</span>
                </Link>
              </li>
              <li>
                <Link to="/features#dealers" title="Channel partner orders & territory fulfillments">
                  Dealer & Distributor Network
                </Link>
              </li>
              <li>
                <Link to="/features#targets" title="Quotas, closing ratios & live rep leaderboards">
                  Sales Team Quotas & Targets
                </Link>
              </li>
              <li>
                <Link to="/features#analytics" title="Dashboards, conversion bottlenecks & scheduled reports">
                  Reports & Revenue Analytics
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions Links - Tailored Industry Workflows */}
          <div className="footer-col">
            <h4 className="footer-heading">Industries</h4>
            <ul className="footer-links">
              <li>
                <Link to="/solutions#manufacturing" title="Supply chain pipelines, plant visits & bulk orders">
                  Manufacturing & Distribution
                </Link>
              </li>
              <li>
                <Link to="/solutions#real-estate" title="Portal leads, site visit check-ins & broker commission">
                  Real Estate & Developers
                </Link>
              </li>
              <li>
                <Link to="/solutions#field" title="Geofenced retailer visits, route tracking & attendance">
                  Field Sales & FMCG
                </Link>
              </li>
              <li>
                <Link to="/solutions#dealerships" title="Wholesale order quotes with volume price tiers">
                  Traders & Wholesale Dealerships
                </Link>
              </li>
              <li>
                <Link to="/solutions#b2b" title="Visual deal velocity pipeline tracking consultative deals">
                  B2B Corporate Services
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  className="footer-link-btn"
                  onClick={() => (onOpenEnterprise ? onOpenEnterprise('Enterprise') : onOpenTrial && onOpenTrial('Enterprise'))}
                  title="Configure custom enterprise CRM workflows"
                >
                  <span>Custom Enterprise Workflows</span>
                  <span className="link-badge new">REQUEST</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Platform / Company Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Platform</h4>
            <ul className="footer-links">
              <li><Link to="/why-us" title="Why subscription CRM beats heavy legacy software">Why Rent a Cloud CRM</Link></li>
              <li><Link to="/pricing" title="Explore monthly and annual subscription tiers">Monthly & Annual Plans</Link></li>
              <li><Link to="/testimonials" title="Read verified client case studies and feedback">Subscriber Case Studies</Link></li>
              <li><Link to="/faq" title="Answers to common questions about deployment and billing">Frequently Asked Questions</Link></li>
              <li><Link to="/contact" title="Get in touch with our technical assistance team">Contact Support Desk</Link></li>
              <li>
                <button
                  type="button"
                  className="footer-link-btn"
                  onClick={onOpenDemo}
                  title="Book a live interactive 1-on-1 walkthrough"
                >
                  <span>Book a Live 1-on-1 Demo</span>
                  <ArrowRight size={13} style={{ marginLeft: 6, color: '#818cf8' }} />
                </button>
              </li>
            </ul>
          </div>

          {/* Connect & Tenant Portal */}
          <div className="footer-col social-col">
            <h4 className="footer-heading">Tenant Access</h4>
            <p className="social-tagline">
              Dedicated cloud workspace access for subscribed companies and sales teams.
            </p>

            {/* Quick Action Interactive Buttons */}
            <div className="footer-tenant-actions">
              <button
                type="button"
                className="footer-tenant-login-btn"
                onClick={onOpenLogin}
                title="Sign into your company workspace"
              >
                <Lock size={14} />
                <span>Tenant Workspace Login</span>
              </button>

              <button
                type="button"
                className="footer-tenant-trial-btn"
                onClick={() => onOpenTrial && onOpenTrial('Professional')}
                title="Launch your 14-day free workspace trial"
              >
                <Sparkles size={14} color="#818cf8" />
                <span>Start 14-Day Free Trial</span>
              </button>
            </div>
          </div>
        </div>

        {/* 3. Bottom Legal & Copyright Strip */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p className="footer-copyright">
              &copy; {CURRENT_YEAR} SalesAvatar Technologies Inc. All rights reserved.
            </p>
            <span className="footer-craft-tag">
              <span className="flag-icon" role="img" aria-label="India Flag">🇮🇳</span>
              Built with precision for modern multi-tenant cloud CRM operations.
            </span>
          </div>

          <div className="footer-legal-links">
            <Link to="/privacy" title="Privacy policy & personal data processing">Privacy Policy</Link>
            <span className="legal-sep">&bull;</span>
            <Link to="/terms" title="Terms of service & subscription conditions">Terms of Service</Link>
            <span className="legal-sep">&bull;</span>
            <Link to="/cancellation-refund" title="Subscription cancellation & refund policy">Cancellation & Refund</Link>
            <span className="legal-sep">&bull;</span>
            <Link to="/security" title="Data residency & cloud security architecture">Security & Data Isolation</Link>
            <span className="legal-sep">&bull;</span>
            <Link to="/contact" title="Support desk and ticket escalation">Support Desk</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
