import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onCtaClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onCtaClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: '3 Nỗi Lo Lớn', href: '#noi-dau' },
    { label: '8 Bước Quy Trình', href: '#quy-trinh-8-buoc' },
    { label: 'Case Nhà 6 Tỷ', href: '#case-6-ty' },
    { label: 'Bộ Checklist', href: '#bo-checklist' },
    { label: '3 Cạm Bẫy', href: '#cam-bay' },
    { label: 'Về Tác Giả', href: '#tac-gia' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Zone 1: Single text element wordmark */}
          <a 
            href="#" 
            className="text-base sm:text-lg font-extrabold tracking-tight text-neutral-950 uppercase flex items-center gap-1.5"
          >
            <span className="w-2.5 h-2.5 bg-red-600 rounded-xs inline-block" />
            <span>NGUYỄN NAM BĐS</span>
          </a>

          {/* Zone 2: Clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold text-neutral-600">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-red-600 transition-colors whitespace-nowrap tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary action button */}
          <div className="flex items-center gap-3">
            <button
              onClick={onCtaClick}
              className="py-2.5 px-4 sm:px-5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold text-xs tracking-wider transition-colors shadow-xs flex items-center gap-1.5 whitespace-nowrap cursor-pointer uppercase"
            >
              <span>Nhận Cẩm Nang</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors cursor-pointer"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-neutral-200 bg-white px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-neutral-800 hover:text-red-600 border-b border-neutral-100"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onCtaClick();
            }}
            className="w-full mt-2 py-3 px-4 rounded-lg bg-red-600 text-white font-bold text-xs uppercase flex items-center justify-center gap-2"
          >
            <span>Nhận Cẩm Nang 8 Bước Miễn Phí</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
};
