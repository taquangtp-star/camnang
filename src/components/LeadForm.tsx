import React, { useState } from 'react';
import { ArrowRight, Lock, AlertCircle, Loader2 } from 'lucide-react';
import { LeadFormData } from '../types';
import { submitToMautic } from '../services/mauticService';

interface LeadFormProps {
  id?: string;
  theme?: 'light' | 'dark';
  onSuccess: (data: LeadFormData) => void;
  className?: string;
  ctaText?: string;
  subtext?: string;
}

export const LeadForm: React.FC<LeadFormProps> = ({
  id = 'lead-form',
  theme = 'light',
  onSuccess,
  className = '',
  ctaText = 'GỬI CẨM NANG CHO TÔI →',
  subtext = 'Tài liệu được gửi trực tiếp vào email. Không thu phí.',
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const trimmedEmail = email.trim();
    const trimmedName = fullName.trim();

    if (!trimmedEmail) {
      setError('Vui lòng nhập địa chỉ email nhận tài liệu.');
      return;
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setError('Địa chỉ email chưa đúng định dạng (Ví dụ: ten@gmail.com).');
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Submit lead to Mautic (Form ID: 20 at crm.nambds.vn)
      await submitToMautic({
        firstname: trimmedName || 'Quý khách',
        email: trimmedEmail,
      });

      const leadData: LeadFormData = {
        fullName: trimmedName || 'Anh/Chị',
        email: trimmedEmail,
        submittedAt: new Date().toISOString(),
      };

      // 2. Save to local storage for persistence
      try {
        const existingLeads = JSON.parse(localStorage.getItem('nn_bds_leads') || '[]');
        existingLeads.unshift(leadData);
        localStorage.setItem('nn_bds_leads', JSON.stringify(existingLeads));
      } catch (err) {
        console.error('Storage error:', err);
      }

      setIsSubmitting(false);
      onSuccess(leadData);
    } catch (err: any) {
      console.error('Submission error:', err);
      setIsSubmitting(false);
      // Still proceed to thank you page so user experience is smooth
      onSuccess({
        fullName: trimmedName || 'Anh/Chị',
        email: trimmedEmail,
        submittedAt: new Date().toISOString(),
      });
    }
  };

  const isDark = theme === 'dark';

  return (
    <div
      id={id}
      className={`rounded-xl border transition-all ${
        isDark
          ? 'bg-neutral-900 border-neutral-800 text-white p-6 sm:p-8 shadow-2xl'
          : 'bg-white border-neutral-200 text-neutral-900 p-6 sm:p-7 shadow-lg'
      } ${className}`}
    >
      <div className="mb-5 text-left">
        <h3 className={`text-lg sm:text-xl font-bold uppercase tracking-tight ${isDark ? 'text-white' : 'text-neutral-950'}`}>
          NHẬN CẨM NANG MIỄN PHÍ
        </h3>
        <p className={`text-xs mt-1 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
          Bao gồm cẩm nang 8 bước và trọn bộ checklist 10 điều kiểm tra trước khi chuyển tiền.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        {/* Full Name Input */}
        <div>
          <label 
            htmlFor={`${id}-name`}
            className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${
              isDark ? 'text-neutral-300' : 'text-neutral-700'
            }`}
          >
            Tên của anh/chị
          </label>
          <input
            id={`${id}-name`}
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Nguyễn Văn A"
            className={`w-full px-3.5 py-2.5 rounded-lg text-sm border transition-colors outline-hidden focus:ring-2 focus:ring-red-600 focus:border-red-600 ${
              isDark
                ? 'bg-neutral-950 border-neutral-700 text-white placeholder-neutral-500'
                : 'bg-neutral-50 border-neutral-300 text-neutral-900 placeholder-neutral-400'
            }`}
          />
        </div>

        {/* Email Input */}
        <div>
          <label 
            htmlFor={`${id}-email`}
            className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${
              isDark ? 'text-neutral-300' : 'text-neutral-700'
            }`}
          >
            Email nhận tài liệu <span className="text-red-500">*</span>
          </label>
          <input
            id={`${id}-email`}
            type="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError(null);
            }}
            placeholder="email@gmail.com"
            className={`w-full px-3.5 py-2.5 rounded-lg text-sm border transition-colors outline-hidden focus:ring-2 focus:ring-red-600 focus:border-red-600 ${
              isDark
                ? 'bg-neutral-950 border-neutral-700 text-white placeholder-neutral-500'
                : 'bg-neutral-50 border-neutral-300 text-neutral-900 placeholder-neutral-400'
            }`}
          />
        </div>

        {/* Error message */}
        {error && (
          <div className="flex items-center gap-2 p-2.5 rounded bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-xs">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-2 py-3.5 px-6 rounded-lg bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold text-sm tracking-wide transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>ĐANG XỬ LÝ...</span>
            </>
          ) : (
            <>
              <span>{ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>

        {/* Trust disclaimer */}
        <div className="pt-1 flex items-center justify-center gap-1.5 text-center">
          <Lock className={`w-3.5 h-3.5 shrink-0 ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`} />
          <p className={`text-[11px] leading-tight ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
            {subtext}
          </p>
        </div>
      </form>
    </div>
  );
};
