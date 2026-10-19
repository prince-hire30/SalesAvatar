import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesQuickBar from '../components/FeaturesQuickBar';
import WhyUsSection from '../components/WhyUsSection';
import HowItWorksSection from '../components/HowItWorksSection';
import PricingSection from '../components/PricingSection';
import TestimonialsAndFAQ from '../components/TestimonialsAndFAQ';
import BottomCTASection from '../components/BottomCTASection';

export default function HomePage({ onOpenTrial, onOpenDemo, onOpenEnterprise }) {
  return (
    <div className="home-page-view">
      {/* 1. Hero Section */}
      <HeroSection 
        onOpenTrial={onOpenTrial}
        onOpenDemo={onOpenDemo}
      />

      {/* 2. Quick Ribbon Bar */}
      <FeaturesQuickBar />

      {/* 3. Why Us / Grow Without Chaos */}
      <WhyUsSection />

      {/* 4. How It Works (3 Steps) */}
      <HowItWorksSection />

      {/* 5. Pricing Plans Preview */}
      <PricingSection 
        onSelectPlan={(plan, cycle) => onOpenTrial(plan, cycle)}
        onOpenEnterprise={onOpenEnterprise}
      />

      {/* 6. Social Proof Testimonials & FAQ */}
      <TestimonialsAndFAQ 
        onOpenDemo={onOpenDemo}
        onOpenTrial={onOpenTrial}
      />

      {/* 7. Bottom CTA */}
      <BottomCTASection 
        onOpenTrial={() => onOpenTrial('Professional')}
        onOpenDemo={onOpenDemo}
      />
    </div>
  );
}
