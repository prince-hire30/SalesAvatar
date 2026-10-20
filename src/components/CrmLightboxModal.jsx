import React, { useEffect, useRef } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  Maximize2
} from 'lucide-react';
import { getScreenshotUrl } from '../data/crmScreenshots';

export default function CrmLightboxModal({
  isOpen,
  screenshots,
  currentIndex,
  onClose,
  onNavigate,
  onOpenTrial,
  onOpenDemo
}) {
  const filmstripRef = useRef(null);
  const activeThumbRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + screenshots.length) % screenshots.length);
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % screenshots.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, currentIndex, screenshots.length, onClose, onNavigate]);

  // Auto-scroll active thumbnail into view smoothly
  useEffect(() => {
    if (activeThumbRef.current && filmstripRef.current) {
      activeThumbRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  }, [currentIndex]);

  if (!isOpen || !screenshots || screenshots.length === 0) return null;

  const current = screenshots[currentIndex];
  if (!current) return null;

  const imageUrl = getScreenshotUrl(current.file);

  const scrollFilmstrip = (direction) => {
    if (filmstripRef.current) {
      const scrollAmount = direction === 'left' ? -260 : 260;
      filmstripRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="crm-lightbox-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={current.title}>
      <div 
        className="crm-lightbox-dialog" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="crm-lightbox-header">
          <div className="crm-lightbox-title-wrap">
            <div className="crm-lightbox-meta-row">
              <span className="crm-lightbox-badge">
                <Sparkles size={12} className="meta-sparkle" />
                <span>{current.category}</span>
                <span className="meta-sep">&bull;</span>
                <span className="meta-subbadge">{current.badge}</span>
              </span>
              <span className="crm-lightbox-counter-pill">
                Screen <strong>{currentIndex + 1}</strong> of {screenshots.length}
              </span>
            </div>
            <h3 className="crm-lightbox-title">{current.title}</h3>
          </div>

          <div className="crm-lightbox-header-right">
            {/* Keyboard Shortcuts Hint */}
            <div className="crm-lightbox-key-hints" title="Keyboard Shortcuts">
              <span className="key-cap">←</span>
              <span className="key-cap">→</span>
              <span className="key-label">Navigate</span>
              <span className="key-sep">&bull;</span>
              <span className="key-cap">ESC</span>
              <span className="key-label">Close</span>
            </div>

            <div className="crm-lightbox-actions">
              <a 
                href={imageUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="crm-lightbox-btn-icon" 
                title="Open full resolution capture in new tab"
              >
                <ExternalLink size={15} />
                <span className="btn-label-desktop">Full Size</span>
              </a>
              <button 
                type="button" 
                className="crm-lightbox-btn-close" 
                onClick={onClose} 
                title="Close (Esc)"
              >
                <X size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Main Content Area: Split View */}
        <div className="crm-lightbox-body">
          {/* Left Canvas: Screenshot with floating navigation */}
          <div className="crm-lightbox-stage-container">
            {/* Previous Navigation Floating Button */}
            <button 
              type="button" 
              className="crm-lightbox-nav-btn prev"
              onClick={() => onNavigate((currentIndex - 1 + screenshots.length) % screenshots.length)}
              title="Previous Screen (Left Arrow)"
              aria-label="Previous Screen"
            >
              <ChevronLeft size={22} />
            </button>

            {/* Browser Mockup Framing for Screenshot */}
            <div className="crm-browser-frame">
              <div className="crm-browser-chrome">
                <div className="browser-dots">
                  <span className="dot dot-red" />
                  <span className="dot dot-amber" />
                  <span className="dot dot-green" />
                </div>
                <div className="browser-url-pill">
                  <span className="url-lock-icon">🔒</span>
                  <span className="url-text">https://app.salesavatar.com/{current.navItem?.toLowerCase().replace(/\s+/g, '-') || 'workspace'}</span>
                </div>
                <div className="browser-actions">
                  <a
                    href={imageUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="browser-zoom-btn"
                    title="View original 100% resolution"
                  >
                    <Maximize2 size={13} />
                  </a>
                </div>
              </div>

              <div className="crm-browser-viewport">
                <img 
                  src={imageUrl} 
                  alt={current.title} 
                  className="crm-lightbox-main-img" 
                />
              </div>
            </div>

            {/* Next Navigation Floating Button */}
            <button 
              type="button" 
              className="crm-lightbox-nav-btn next"
              onClick={() => onNavigate((currentIndex + 1) % screenshots.length)}
              title="Next Screen (Right Arrow)"
              aria-label="Next Screen"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          {/* Right Panel: Clean, Beautiful Info Drawer */}
          <div className="crm-lightbox-info-pane">
            <div className="crm-pane-card">
              <div className="pane-card-header">
                <span className="crm-pane-label">MODULE DESCRIPTION</span>
                <span className="pane-active-tag">{current.navItem || 'Overview'}</span>
              </div>
              <p className="crm-pane-desc">{current.description}</p>
            </div>

            <div className="crm-pane-card">
              <span className="crm-pane-label">REAL FEATURES VISIBLE ON THIS SCREEN</span>
              <ul className="crm-pane-highlights">
                {current.highlights.map((h, idx) => (
                  <li key={idx}>
                    <div className="check-icon-circle">
                      <CheckCircle2 size={14} className="crm-pane-check" />
                    </div>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="crm-pane-card trust-card">
              <div className="crm-real-badge">
                <span className="real-indicator-dot" />
                <span className="real-badge-text">Authentic Production Capture</span>
              </div>
              <p className="trust-card-sub">
                Captured from active multi-tenant production deployments. Zero mockups or placeholder graphics.
              </p>
            </div>

            {/* Action Buttons in Drawer */}
            {(onOpenTrial || onOpenDemo) && (
              <div className="crm-pane-cta-block">
                {onOpenTrial && (
                  <button
                    type="button"
                    className="pane-cta-primary-btn"
                    onClick={() => {
                      onClose();
                      onOpenTrial('Professional');
                    }}
                  >
                    <span>Start 14-Day Free Trial</span>
                    <ArrowRight size={14} />
                  </button>
                )}
                {onOpenDemo && (
                  <button
                    type="button"
                    className="pane-cta-secondary-btn"
                    onClick={() => {
                      onClose();
                      onOpenDemo();
                    }}
                  >
                    <span>Schedule Live 1-on-1 Demo</span>
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Filmstrip Footer with Smooth Thumbnail Navigation */}
        <div className="crm-lightbox-filmstrip">
          <div className="crm-filmstrip-wrapper">
            <button
              type="button"
              className="filmstrip-arrow-btn left"
              onClick={() => scrollFilmstrip('left')}
              title="Scroll thumbnails left"
              aria-label="Scroll left"
            >
              <ChevronLeft size={16} />
            </button>

            <div className="crm-filmstrip-scroll" ref={filmstripRef}>
              {screenshots.map((s, idx) => {
                const thumbUrl = getScreenshotUrl(s.file);
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={s.id}
                    ref={isActive ? activeThumbRef : null}
                    type="button"
                    className={`crm-filmstrip-item ${isActive ? 'active' : ''}`}
                    onClick={() => onNavigate(idx)}
                    title={`${idx + 1}. ${s.title}`}
                  >
                    <img src={thumbUrl} alt={s.title} loading="lazy" />
                    <span className="crm-filmstrip-tag">{idx + 1}</span>
                    {isActive && <span className="active-dot-indicator" />}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              className="filmstrip-arrow-btn right"
              onClick={() => scrollFilmstrip('right')}
              title="Scroll thumbnails right"
              aria-label="Scroll right"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
