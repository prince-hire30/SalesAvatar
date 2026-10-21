import React, { useState } from 'react';
import { 
  Sparkles, 
  Check, 
  Minus, 
  ArrowRight, 
  ShieldCheck, 
  Building2, 
  HelpCircle, 
  ChevronDown
} from 'lucide-react';
import PricingSection from '../components/PricingSection';
import BottomCTASection from '../components/BottomCTASection';

export default function PricingPage({ onOpenTrial, onOpenDemo, onOpenEnterprise }) {
  const [openFaq, setOpenFaq] = useState(null);

  const pricingFaqs = [
    {
      q: 'Can we switch between Monthly and Yearly billing anytime?',
      a: 'Yes, you can easily upgrade from monthly to yearly billing or change plans from your workspace settings at any time with pro-rated billing.'
    },
    {
      q: 'Do you provide valid GST invoices for input tax credit?',
      a: 'Yes, absolutely. All Indian business accounts receive computerized GST invoices with your company GSTIN, eligible for 18% input tax credit (ITC).'
    },
    {
      q: 'What payment methods do you accept?',
      a: 'We accept all major corporate credit cards, debit cards, UPI (Google Pay, PhonePe, Paytm), Net Banking via Razorpay, and direct NEFT/RTGS for annual enterprise plans.'
    },
    {
      q: 'Is there a free trial before we commit?',
      a: 'Yes! We offer a full-featured 14-day free trial on any plan without requiring a credit card. You can test lead capture, pipeline boards, and mobile attendance immediately.'
    },
    {
      q: 'What happens to our customer data if we decide to cancel?',
      a: 'Your data is strictly yours. You can export all leads, pipeline history, attendance records, and ticket logs to CSV/Excel at any time with one click.'
    }
  ];

  const [teamSize, setTeamSize] = useState(15);
  const estimatedCost = teamSize <= 5 ? 999 : teamSize <= 10 ? 1699 : teamSize <= 20 ? 2499 : teamSize <= 50 ? 4999 : teamSize * 150;
  const legacyCrmCost = teamSize * 2200;
  const monthlySavings = legacyCrmCost - estimatedCost;

  return (
    <div className="subpage-view pricing-page">
      {/* Subpage Header Banner */}
      <section className="subpage-hero-banner">
        <div className="subpage-hero-split-container">
          {/* Left Column: Headline, Trust Checks & CTAs */}
          <div className="subpage-hero-left">
            <div className="section-pill-badge blue">
              <Sparkles size={13} />
              <span>TRANSPARENT, SCALABLE TIERS</span>
            </div>
            <h1 className="subpage-hero-title">
              Simple, Predictable Pricing <br />
              <span className="gradient-text">Built to Scale With Your Team</span>
            </h1>
            <p className="subpage-hero-subtitle">
              No hidden setup fees. No forced annual contracts. Every plan includes full 14-day trial access, 18% GST Input Tax Credit (ITC) invoices, and dedicated onboarding assistance.
            </p>

            <div className="subpage-hero-checks">
              <div className="subpage-check-item">
                <ShieldCheck size={14} color="#10b981" />
                <span>14-Day Free Trial (No Card Needed)</span>
              </div>
              <div className="subpage-check-item">
                <Check size={14} color="#10b981" />
                <span>18% GST Invoices with ITC</span>
              </div>
              <div className="subpage-check-item">
                <Building2 size={14} color="#ea580c" />
                <span>100% Indian Cloud Data Residency</span>
              </div>
            </div>

            <div className="subpage-hero-cta-row">
              <button 
                type="button" 
                className="btn-subpage-primary"
                onClick={() => {
                  const el = document.getElementById('pricing-plans-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  else onOpenTrial('Professional');
                }}
              >
                View Plans & Features <ArrowRight size={16} />
              </button>
              <button 
                type="button" 
                className="btn-subpage-ghost"
                onClick={onOpenDemo}
              >
                Schedule Demo Walkthrough
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Quick Plan & ROI Estimator */}
          <div className="subpage-hero-right">
            <div className="hero-preview-glass-card">
              <div className="preview-card-header">
                <div className="preview-header-left">
                  <span className="live-pulse-dot" />
                  <span className="preview-header-title">Quick ROI & Plan Estimator</span>
                </div>
                <span className="preview-header-badge">Instant Calculator</span>
              </div>

              {/* Slider / Team Size Selector */}
              <div style={{ marginBottom: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: '#334155' }}>Your Active Sales Reps:</span>
                  <span style={{ fontSize: 15, fontWeight: 800, color: '#ea580c', background: '#fff7ed', padding: '2px 10px', borderRadius: 8 }}>
                    {teamSize} Reps
                  </span>
                </div>
                <input 
                  type="range" 
                  min="2" 
                  max="60" 
                  step="1" 
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#ea580c', cursor: 'pointer' }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#94a3b8', marginTop: 4 }}>
                  <span>5 Reps (Starter)</span>
                  <span>20 Reps (Professional)</span>
                  <span>60+ (Enterprise)</span>
                </div>
              </div>

              {/* Savings Highlight Box */}
              <div style={{ 
                background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)', 
                border: '1.5px solid #86efac', 
                borderRadius: 14, 
                padding: '14px 16px',
                marginBottom: 16,
                textAlign: 'left'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 4 }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: '#166534', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Estimated Monthly Savings:
                  </span>
                  <span style={{ fontSize: 20, fontWeight: 900, color: '#15803d' }}>
                    ~₹{monthlySavings.toLocaleString('en-IN')}/mo
                  </span>
                </div>
                <p style={{ margin: 0, fontSize: 11.5, color: '#166534', lineHeight: 1.4 }}>
                  vs. traditional enterprise CRMs charging ₹2,200+/user without Indian GST support or GPS attendance.
                </p>
              </div>

              {/* Recommended Tier Pill */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', background: '#f8fafc', borderRadius: 10, border: '1px solid #e2e8f0', marginBottom: 14 }}>
                <div style={{ textAlign: 'left' }}>
                  <span style={{ display: 'block', fontSize: 10.5, fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>Recommended Tier</span>
                  <b style={{ fontSize: 14, color: '#0f172a' }}>
                    {teamSize <= 5 ? 'Starter (Up to 5 Users)' : teamSize <= 10 ? 'Growth (Up to 10 Users)' : teamSize <= 20 ? 'Professional (Popular)' : teamSize <= 50 ? 'Business (Up to 50 Users)' : 'Enterprise Custom'}
                  </b>
                </div>
                <button
                  type="button"
                  style={{
                    background: '#0f172a',
                    color: '#ffffff',
                    border: 'none',
                    padding: '8px 14px',
                    borderRadius: 8,
                    fontSize: 12,
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                  onClick={() => onOpenTrial(teamSize <= 5 ? 'Starter' : teamSize <= 10 ? 'Growth' : teamSize <= 20 ? 'Professional' : teamSize <= 50 ? 'Business' : 'Enterprise')}
                >
                  Start Trial →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Plans Grid with Monthly/Yearly toggle */}
      <div id="pricing-plans-section">
        <PricingSection 
          onSelectPlan={(plan, cycle) => onOpenTrial(plan, cycle)}
          onOpenEnterprise={onOpenEnterprise}
        />
      </div>

      {/* Plan Feature Comparison Table */}
      <section className="pricing-matrix-section">
        <div className="pricing-matrix-container">
          <div className="section-center-header">
            <div className="section-pill-badge purple">
              <ShieldCheck size={13} />
              <span>DETAILED BREAKDOWN</span>
            </div>
            <h2 className="section-main-title">Compare All Tier Capabilities</h2>
            <p className="section-main-subtitle">
              Every tool and limit clearly documented across our 5 plans.
            </p>
          </div>

          <div className="table-responsive-box">
            <table className="comparison-table pricing-spec-table">
              <thead>
                <tr>
                  <th style={{ width: '28%' }}>Plan Feature</th>
                  <th>Starter (₹999/mo)</th>
                  <th>Growth (₹1,699/mo)</th>
                  <th className="highlight-col">Professional (₹2,499/mo)</th>
                  <th>Business (₹4,999/mo)</th>
                  <th>Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="table-group-header">
                  <td colSpan="6">Core Capacity & Users</td>
                </tr>
                <tr>
                  <td>Team Member Seats</td>
                  <td>Up to 5 users</td>
                  <td>Up to 10 users</td>
                  <td className="highlight-col">Up to 20 users</td>
                  <td>Up to 50 users</td>
                  <td>Configurable (100+)</td>
                </tr>
                <tr>
                  <td>Lead & Customer Management</td>
                  <td><Check size={16} color="#10b981" /></td>
                  <td><Check size={16} color="#10b981" /></td>
                  <td className="highlight-col"><Check size={16} color="#10b981" /></td>
                  <td><Check size={16} color="#10b981" /></td>
                  <td><Check size={16} color="#10b981" /></td>
                </tr>
                <tr>
                  <td>Follow-up Reminders</td>
                  <td>Basic Reminders</td>
                  <td>Automated Alerts</td>
                  <td className="highlight-col">Advanced Reminders</td>
                  <td>Priority WhatsApp/SMS</td>
                  <td>Custom Multi-Channel</td>
                </tr>

                <tr className="table-group-header">
                  <td colSpan="6">Pipelines & Workflows</td>
                </tr>
                <tr>
                  <td>Sales Pipeline Stages</td>
                  <td>Standard Pipeline</td>
                  <td>Visual Kanban Stages</td>
                  <td className="highlight-col">Multi-Stage Pipelines</td>
                  <td>Multi-Branch Pipelines</td>
                  <td>Custom Workflows</td>
                </tr>
                <tr>
                  <td>Reports & Analytics</td>
                  <td>Basic Dashboard</td>
                  <td>Pipeline Reports</td>
                  <td className="highlight-col">Advanced Reports & Metrics</td>
                  <td>Executive Analytics</td>
                  <td>Custom BI & Data Lake</td>
                </tr>
                <tr>
                  <td>Sales Targets & Performance</td>
                  <td><Minus size={16} color="#94a3b8" /></td>
                  <td>Basic Targets</td>
                  <td className="highlight-col">Sales Targets & Milestones</td>
                  <td>Team Leaderboards</td>
                  <td>Custom KPI Tracking</td>
                </tr>
                <tr>
                  <td>Field Officer & Geo-Attendance</td>
                  <td><Minus size={16} color="#94a3b8" /></td>
                  <td><Minus size={16} color="#94a3b8" /></td>
                  <td className="highlight-col">Optional Add-on</td>
                  <td><Check size={16} color="#10b981" /> GPS Verification</td>
                  <td><Check size={16} color="#10b981" /> Geofenced Routes</td>
                </tr>
                <tr>
                  <td>Dealer & Distributor Management</td>
                  <td><Minus size={16} color="#94a3b8" /></td>
                  <td><Minus size={16} color="#94a3b8" /></td>
                  <td className="highlight-col"><Minus size={16} color="#94a3b8" /></td>
                  <td><Check size={16} color="#10b981" /> Included</td>
                  <td><Check size={16} color="#10b981" /> Custom Network</td>
                </tr>

                <tr className="table-group-header">
                  <td colSpan="6">Security, Multi-Tenancy & Roles</td>
                </tr>
                <tr>
                  <td>Role-Based Permissions</td>
                  <td>Company Admin</td>
                  <td>3 Standard Roles</td>
                  <td className="highlight-col">Granular Role Permissions</td>
                  <td>Custom Role Hierarchy</td>
                  <td>Tenant & Field-Level RBAC</td>
                </tr>
                <tr>
                  <td>Multi-Tenant Data Isolation</td>
                  <td>Tenant-Scoped DB</td>
                  <td>Tenant-Scoped DB</td>
                  <td className="highlight-col">Tenant-Scoped DB</td>
                  <td>Tenant-Scoped DB</td>
                  <td>Dedicated Tenant DB / VPC</td>
                </tr>
                <tr>
                  <td>Support SLA Response</td>
                  <td>Email (24 hrs)</td>
                  <td>Chat & Email (8 hrs)</td>
                  <td className="highlight-col">Priority Support (2 hrs)</td>
                  <td>Dedicated Desk (1 hr)</td>
                  <td>Dedicated Onboarding & 15m SLA</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Enterprise Custom Card */}
      <section className="pricing-enterprise-callout">
        <div className="pricing-enterprise-card">
          <div className="ent-card-left">
            <div className="ent-badge">
              <Building2 size={16} />
              <span>CUSTOM ENTERPRISE SCALE</span>
            </div>
            <h2>Managing 100+ Sales Reps or Multiple Branches?</h2>
            <p>
              Get customized volume pricing, dedicated cloud VPC, custom CRM integration, and on-site sales team training.
            </p>
            <div className="ent-perks-row">
              <div className="ent-perk"><Check size={15} color="#10b981" /> Custom SLA Contracts</div>
              <div className="ent-perk"><Check size={15} color="#10b981" /> Dedicated Account Manager</div>
              <div className="ent-perk"><Check size={15} color="#10b981" /> Single Sign-On (SAML/Okta)</div>
            </div>
          </div>
          <div className="ent-card-right">
            <button 
              type="button" 
              className="btn-ent-action"
              onClick={() => onOpenEnterprise('Enterprise')}
            >
              Contact Sales Engineering <ArrowRight size={16} />
            </button>
            <span className="ent-phone-note">Or call directly at +91 98765 43210</span>
          </div>
        </div>
      </section>

      {/* Pricing FAQs */}
      <section className="pricing-faq-section">
        <div className="pricing-faq-container">
          <div className="section-center-header">
            <div className="section-pill-badge blue">
              <HelpCircle size={13} />
              <span>QUESTIONS ANSWERED</span>
            </div>
            <h2 className="section-main-title">Pricing Frequently Asked Questions</h2>
          </div>

          <div className="faq-accordion-list">
            {pricingFaqs.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx} 
                  className={`faq-accordion-item ${isOpen ? 'open' : ''}`}
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                >
                  <div className="faq-question-row">
                    <span className="faq-q-text">{item.q}</span>
                    <ChevronDown size={18} className={`faq-arrow-icon ${isOpen ? 'rotate' : ''}`} />
                  </div>
                  {isOpen && (
                    <div className="faq-answer-block">
                      <p>{item.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <BottomCTASection 
        onOpenTrial={() => onOpenTrial('Business')}
        onOpenDemo={onOpenDemo}
      />
    </div>
  );
}
