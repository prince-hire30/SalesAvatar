import React, { useState } from 'react';
import { 
  Check, 
  ArrowRight, 
  Zap, 
  BarChart2, 
  Crown, 
  Users, 
  Building2 
} from 'lucide-react';

export default function PricingSection({ onSelectPlan, onOpenEnterprise }) {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'yearly'

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      tagline: 'Up to 5 users & basic CRM',
      icon: Zap,
      monthlyPrice: '₹999',
      yearlyPrice: '₹9,590',
      monthlyUnit: '/month + GST',
      yearlyUnit: '/year + GST',
      users: 'Up to 5 users',
      storage: 'Lead & customer management',
      highlight: 'Follow-up reminders & basic dashboard',
      themeColor: '#10b981',
      bgLight: '#ecfdf5',
      btnClass: 'btn-plan-green',
      isPopular: false
    },
    {
      id: 'growth',
      name: 'Growth',
      tagline: 'Up to 10 users & sales pipeline',
      icon: BarChart2,
      monthlyPrice: '₹1,699',
      yearlyPrice: '₹16,310',
      monthlyUnit: '/month + GST',
      yearlyUnit: '/year + GST',
      users: 'Up to 10 users',
      storage: 'Visual sales pipeline',
      highlight: 'Automated deal stages & SMS/Email alerts',
      themeColor: '#2563eb',
      bgLight: '#eff6ff',
      btnClass: 'btn-plan-blue',
      isPopular: false
    },
    {
      id: 'professional',
      name: 'Professional',
      tagline: 'Up to 20 users with reports & targets',
      icon: Crown,
      monthlyPrice: '₹2,499',
      yearlyPrice: '₹23,990',
      monthlyUnit: '/month + GST',
      yearlyUnit: '/year + GST',
      users: 'Up to 20 users',
      storage: 'Advanced reports & analytics',
      highlight: 'Sales targets & role-based permissions',
      themeColor: '#7c3aed',
      bgLight: '#f3e8ff',
      btnClass: 'btn-plan-purple',
      isPopular: true,
      popularLabel: 'Most Popular'
    },
    {
      id: 'business',
      name: 'Business',
      tagline: 'Up to 50 users & field officer GPS',
      icon: Users,
      monthlyPrice: '₹4,999',
      yearlyPrice: '₹47,990',
      monthlyUnit: '/month + GST',
      yearlyUnit: '/year + GST',
      users: 'Up to 50 users',
      storage: 'Field officer & geo-attendance',
      highlight: 'Dealer & distributor management',
      themeColor: '#f97316',
      bgLight: '#fff7ed',
      btnClass: 'btn-plan-orange',
      isPopular: false
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      tagline: 'Custom limits & dedicated workflows',
      icon: Building2,
      monthlyPrice: 'Custom pricing',
      yearlyPrice: 'Custom pricing',
      monthlyUnit: '',
      yearlyUnit: '',
      users: 'Configurable user limits',
      storage: 'Optional custom workflows',
      highlight: 'Integration & onboarding options',
      themeColor: '#1e293b',
      bgLight: '#f1f5f9',
      btnClass: 'btn-plan-dark',
      isPopular: false,
      isCustom: true
    }
  ];

  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-container">
        {/* Top Header */}
        <div className="section-center-header">
          <div className="section-pill-badge blue">
            <Zap size={13} color="#2563eb" />
            <span>TRANSPARENT, HONEST PRICING</span>
          </div>
          <h2 className="section-main-title">Simple Plans That Grow With Your Sales Team</h2>
          <p className="section-main-subtitle">
            Zero hidden fees. Zero implementation charges. Start with what you need today, and upgrade seats as your sales force expands.
          </p>

          {/* Monthly / Yearly Switcher */}
          <div className="pricing-toggle-wrap">
            <div className="pricing-toggle-pill" role="tablist" aria-label="Billing cycle selector">
              <button 
                type="button" 
                role="tab"
                aria-selected={billingCycle === 'monthly'}
                className={`toggle-option ${billingCycle === 'monthly' ? 'active' : ''}`}
                onClick={() => setBillingCycle('monthly')}
              >
                Monthly
              </button>
              <button 
                type="button" 
                role="tab"
                aria-selected={billingCycle === 'yearly'}
                className={`toggle-option ${billingCycle === 'yearly' ? 'active' : ''}`}
                onClick={() => setBillingCycle('yearly')}
              >
                Yearly (Save 20%)
              </button>
            </div>
          </div>
        </div>

        {/* 5 Plans Grid */}
        <div className="pricing-grid-5">
          {plans.map((p) => {
            const Icon = p.icon;
            const price = billingCycle === 'yearly' ? p.yearlyPrice : p.monthlyPrice;
            const unit = billingCycle === 'yearly' ? p.yearlyUnit : p.monthlyUnit;

            return (
              <div 
                key={p.id} 
                className={`pricing-card-col ${p.isPopular ? 'popular-card' : ''}`}
                style={{ '--plan-color': p.themeColor }}
              >
                {/* Most Popular Top Pill */}
                {p.isPopular && (
                  <div className="popular-pill-tag">
                    {p.popularLabel}
                  </div>
                )}

                {/* Card Header */}
                <div className="plan-header-row">
                  <div className="plan-icon-bubble" style={{ background: p.bgLight, color: p.themeColor }}>
                    <Icon size={18} strokeWidth={2.4} />
                  </div>
                  <div className="plan-title-block">
                    <h3 className="plan-name">{p.name}</h3>
                    <span className="plan-tagline">{p.tagline}</span>
                  </div>
                </div>

                {/* Price Display */}
                <div className="plan-price-block">
                  <span className={`plan-amount ${p.isCustom ? 'custom-text' : ''}`}>{price}</span>
                  {unit && <span className="plan-unit">{unit}</span>}
                </div>

                {/* Features List */}
                <ul className="plan-features-list">
                  <li>
                    <Check size={16} className="feature-check" style={{ color: p.themeColor }} />
                    <span>{p.users}</span>
                  </li>
                  <li>
                    <Check size={16} className="feature-check" style={{ color: p.themeColor }} />
                    <span>{p.storage}</span>
                  </li>
                  <li>
                    <Check size={16} className="feature-check" style={{ color: p.themeColor }} />
                    <span>{p.highlight || 'Configurable modules'}</span>
                  </li>
                </ul>

                {/* CTA Action */}
                <div className="plan-action-btn-wrap">
                  {p.isCustom ? (
                    <button 
                      type="button" 
                      className={`btn-plan ${p.btnClass}`}
                      onClick={() => onOpenEnterprise(p.name)}
                    >
                      Contact Sales <ArrowRight size={15} />
                    </button>
                  ) : (
                    <button 
                      type="button" 
                      className={`btn-plan ${p.btnClass}`}
                      onClick={() => onSelectPlan(p.name, billingCycle)}
                    >
                      Get Started <ArrowRight size={15} />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
