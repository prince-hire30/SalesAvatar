import React, { useState, useEffect } from 'react';
import {
  TrendingUp,
  Zap,
  Users,
  MapPin,
  LineChart,
  Crown,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

export default function WhyUsSection() {
  // Array of dummy images that dynamically change
  const dynamicPersonas = [
    {
      id: 1,
      image: '/images/businessman-1.jpg',
      name: 'Prince',
      role: 'Chief Sales Officer',
      badges: [
        { text: 'More Leads', value: '+120%', color: 'green' },
        { text: 'Higher Conversions', value: '+85%', color: 'orange' },
        { text: 'Better Team Productivity', value: '+70%', color: 'blue' }
      ]
    },
    {
      id: 2,
      image: '/images/businesswoman-2.jpg',
      name: 'Ananya Sharma',
      role: 'VP of Enterprise Sales',
      badges: [
        { text: 'Deal Velocity', value: '+94%', color: 'green' },
        { text: 'Win Rate Ratio', value: '+65%', color: 'orange' },
        { text: 'Follow-up Response', value: '< 5 Mins', color: 'blue' }
      ]
    },
    {
      id: 3,
      image: '/images/businessman-3.jpg',
      name: 'Rahul Kapoor',
      role: 'Director of Sales Operations',
      badges: [
        { text: 'Pipeline Visibility', value: '100%', color: 'green' },
        { text: 'Field Geo-Accuracy', value: '99.4%', color: 'orange' },
        { text: 'Annual Revenue Run', value: '3.4x', color: 'blue' }
      ]
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Dynamic automatic changing of images every 3.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % dynamicPersonas.length);
    }, 3800);
    return () => clearInterval(interval);
  }, [isPaused, dynamicPersonas.length]);

  const currentPersona = dynamicPersonas[currentIndex];

  const benefits = [
    {
      icon: TrendingUp,
      color: '#2563eb',
      bgLight: '#eff6ff',
      title: 'Zero High Upfront Capex',
      description: 'Rent cloud CRM on flexible monthly or annual subscriptions'
    },
    {
      icon: Zap,
      color: '#f97316',
      bgLight: '#fff7ed',
      title: 'Instant Company Onboarding',
      description: 'Dedicated isolated company workspace ready in minutes'
    },
    {
      icon: Users,
      color: '#ec4899',
      bgLight: '#fdf2f8',
      title: 'Lead & Customer 360°',
      description: 'Centralized customer database and automated follow-ups'
    },
    {
      icon: MapPin,
      color: '#06b6d4',
      bgLight: '#ecfeff',
      title: 'Office & Field Team Unity',
      description: 'Mobile GPS attendance and client site check-ins'
    },
    {
      icon: LineChart,
      color: '#10b981',
      bgLight: '#ecfdf5',
      title: 'Real-Time Pipeline Intelligence',
      description: 'Visual Kanban deal stages and executive reports'
    },
    {
      icon: Crown,
      color: '#eab308',
      bgLight: '#fefce8',
      title: 'Scale User Seats As You Grow',
      description: 'Upgrade from Starter (5 users) to 50+ seamlessly'
    }
  ];

  return (
    <section id="why-us" className="why-us-section">
      <div className="why-us-container">
        {/* Left Side: Dynamic Image Showcasing Indian Sales Leader with Badges */}
        <div
          className="why-us-visual"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Dynamic 3D Upward Arrow Graphic */}
          <div className="arrow-backdrop">
            <svg viewBox="0 0 160 220" className="purple-upward-arrow">
              <defs>
                <linearGradient id="purpleArrowGrad" x1="0" y1="1" x2="0.6" y2="0">
                  <stop offset="0%" stopColor="#818cf8" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#7c3aed" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="1" />
                </linearGradient>
              </defs>
              <path
                d="M 60,210 L 60,95 L 20,95 L 80,10 L 140,95 L 100,95 L 100,210 Z"
                fill="url(#purpleArrowGrad)"
              />
            </svg>
          </div>

          {/* Dynamic Image Wrapper */}
          <div className="dynamic-image-frame">
            {dynamicPersonas.map((persona, idx) => (
              <img
                key={persona.id}
                src={persona.image}
                alt={persona.name}
                className={`persona-image ${idx === currentIndex ? 'active' : ''}`}
              />
            ))}

            {/* Subtle Gradient Shadow Base */}
            <div className="image-base-glow"></div>

            {/* Dynamic Floating Badges (Match the screenshot placement!) */}
            <div className="floating-metric-badge badge-top-right">
              <div className="metric-icon-box green">
                <ArrowUpRight size={14} />
              </div>
              <div className="metric-copy">
                <span className="metric-label">{currentPersona.badges[0].text}</span>
                <span className="metric-val green">{currentPersona.badges[0].value}</span>
              </div>
            </div>

            <div className="floating-metric-badge badge-mid-right">
              <div className="metric-icon-box orange">
                <Users size={14} />
              </div>
              <div className="metric-copy">
                <span className="metric-label">{currentPersona.badges[1].text}</span>
                <span className="metric-val orange">{currentPersona.badges[1].value}</span>
              </div>
            </div>

            <div className="floating-metric-badge badge-bottom-right">
              <div className="metric-icon-box blue">
                <Zap size={14} />
              </div>
              <div className="metric-copy">
                <span className="metric-label">{currentPersona.badges[2].text}</span>
                <span className="metric-val blue">{currentPersona.badges[2].value}</span>
              </div>
            </div>


          </div>
        </div>

        {/* Right Side: Copy & 6 Feature Benefit Cards */}
        <div className="why-us-content">
          <div className="why-us-badge">
            <Sparkles size={14} className="badge-icon" />
            <span>WHY RENT OUR CLOUD CRM?</span>
          </div>

          <h2 className="why-us-title">
            Everything your sales team needs <br />
            <span className="gradient-text">On a predictable subscription</span>
          </h2>

          <p className="why-us-subtitle">
            Eliminate massive upfront software costs and server headaches. Rent verified CRM modules that scale as your business expands.
          </p>

          {/* 6 Benefit Cards Grid */}
          <div className="benefits-grid">
            {benefits.map((b, idx) => {
              const Icon = b.icon;
              return (
                <div key={idx} className="benefit-card">
                  <div
                    className="benefit-icon-box"
                    style={{ background: b.bgLight, color: b.color }}
                  >
                    <Icon size={20} strokeWidth={2.4} />
                  </div>
                  <div className="benefit-text">
                    <h4 className="benefit-heading">{b.title}</h4>
                    <p className="benefit-desc">{b.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
