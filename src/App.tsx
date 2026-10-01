/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  AlertTriangle, 
  BookOpen, 
  FileText, 
  HelpCircle, 
  Eye, 
  UserCheck, 
  Building, 
  ExternalLink,
  ChevronDown,
  Layers,
  FileCheck
} from 'lucide-react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { EbookMockup } from './components/EbookMockup';
import { ChecklistMockup } from './components/ChecklistMockup';
import { LeadForm } from './components/LeadForm';
import { CaseStudySection } from './components/CaseStudySection';
import { ThankYouView } from './components/ThankYouView';
import { ChecklistModal } from './components/ChecklistModal';
import { EbookReaderModal } from './components/EbookReaderModal';
import { 
  CORE_PAIN_POINTS, 
  STEPS_8, 
  THREE_PITFALLS, 
  TARGET_AUDIENCES,
  CHECKLIST_ITEMS,
  EBOOK_INFO 
} from './data/ebookData';
import { LeadFormData } from './types';

export default function App() {
  const [submittedLead, setSubmittedLead] = useState<LeadFormData | null>(null);
  const [isChecklistModalOpen, setIsChecklistModalOpen] = useState(false);
  const [isReaderModalOpen, setIsReaderModalOpen] = useState(false);
  const [expandedStep, setExpandedStep] = useState<string | null>('01');

  // Handle smooth scroll to form
  const scrollToForm = () => {
    const heroForm = document.getElementById('hero-lead-form');
    if (heroForm) {
      heroForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleLeadSuccess = (data: LeadFormData) => {
    setSubmittedLead(data);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // If user has successfully submitted the lead form, show the dedicated Thank You Page
  if (submittedLead) {
    return (
      <>
        <ThankYouView
          leadData={submittedLead}
          onBackToHome={() => setSubmittedLead(null)}
          onOpenChecklistModal={() => setIsChecklistModalOpen(true)}
          onOpenReaderModal={() => setIsReaderModalOpen(true)}
        />
        <ChecklistModal
          isOpen={isChecklistModalOpen}
          onClose={() => setIsChecklistModalOpen(false)}
          onOpenForm={() => {
            setIsChecklistModalOpen(false);
            setSubmittedLead(null);
            scrollToForm();
          }}
        />
        <EbookReaderModal
          isOpen={isReaderModalOpen}
          onClose={() => setIsReaderModalOpen(false)}
          onOpenForm={() => {
            setIsReaderModalOpen(false);
            setSubmittedLead(null);
            scrollToForm();
          }}
        />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-red-600 selection:text-white">
      {/* 3-Zone Top Bar */}
      <Header onCtaClick={scrollToForm} />

      {/* ========================================================================= */}
      {/* SECTION 1 — HERO: High Impact, Direct Problem, Minimal Lead Form + 3D Mockup */}
      {/* ========================================================================= */}
      <section className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 border-b border-neutral-200 overflow-hidden bg-white">
        
        {/* Subtle geometric grid backdrop */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Headline, Subheadline, 3 Value Props, Lead Form */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Unboxed Tag - Zero Pill Discipline */}
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-red-600">
                <span className="w-2 h-2 rounded-xs bg-red-600 inline-block" />
                <span>TÀI LIỆU MIỄN PHÍ DÀNH CHO NGƯỜI MUA NHÀ</span>
              </div>

              {/* Dominant Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-neutral-950 tracking-tight leading-[1.18] text-balance">
                Mua nhà đang thế chấp ngân hàng:
                <span className="block text-red-600 mt-1">Làm thế nào để đưa tiền mà vẫn kiểm soát được rủi ro?</span>
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed max-w-2xl font-normal">
                Nhận miễn phí <strong>Cẩm nang 8 bước mua nhà đang thế chấp ngân hàng</strong> – từ lúc đặt cọc, tất toán khoản vay, giải chấp đến khi Sổ hồng chính thức đứng tên người mua.
              </p>

              {/* 3 Value Checkmarks */}
              <div className="space-y-2.5 pt-1 text-sm font-semibold text-neutral-800">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-50 text-red-600 flex items-center justify-center shrink-0 border border-red-200">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Hiểu tường tận quy trình chuẩn 8 bước</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-50 text-red-600 flex items-center justify-center shrink-0 border border-red-200">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Biết chính xác tiền nên chuyển đi đâu, tài khoản nào an toàn</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-50 text-red-600 flex items-center justify-center shrink-0 border border-red-200">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Có bộ checklist 10 điều kiểm tra thực tế trước khi xuống tiền</span>
                </div>
              </div>

              {/* Form right in Hero */}
              <div className="pt-2 max-w-xl">
                <LeadForm
                  id="hero-lead-form"
                  theme="light"
                  onSuccess={handleLeadSuccess}
                  ctaText="GỬI CẨM NANG CHO TÔI →"
                  subtext="Tài liệu được gửi trực tiếp vào email. Không thu phí."
                />
              </div>

            </div>

            {/* Right Column: High Fidelity Ebook Mockup */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center pt-4 lg:pt-0">
              <EbookMockup onClick={() => setIsReaderModalOpen(true)} />

              <div className="mt-4 flex items-center gap-3 text-xs text-neutral-500">
                <button
                  onClick={() => setIsReaderModalOpen(true)}
                  className="font-semibold text-neutral-800 hover:text-red-600 underline flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Xem nhanh mục lục 23 trang</span>
                </button>
                <span>·</span>
                <span>Tác giả: <strong>Nguyễn Nam BĐS</strong></span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2 — ĐÁNH ĐÚNG NỖI ĐAU: 3 Trăn trở lớn nhất của người mua */}
      {/* ========================================================================= */}
      <section id="noi-dau" className="py-16 sm:py-20 bg-neutral-50 border-b border-neutral-200 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-wider">
              NỖI LO THỰC TẾ
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 mt-2 tracking-tight">
              Nếu căn nhà anh/chị muốn mua vẫn đang nằm trong ngân hàng thì sao?
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base mt-2">
              Hầu hết người mua đều cảm thấy bất an vì tài sản giá trị vài tỷ đồng nhưng giấy tờ gốc lại nằm ngoài tầm với.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {CORE_PAIN_POINTS.map((pain) => (
              <div 
                key={pain.index}
                className="bg-white rounded-xl border border-neutral-200 p-6 sm:p-7 shadow-xs flex flex-col justify-between hover:border-neutral-300 transition-colors"
              >
                <div>
                  <div className="text-2xl font-mono font-extrabold text-red-600 mb-3">
                    {pain.index}
                  </div>
                  <h3 className="text-lg font-bold text-neutral-950 leading-snug">
                    {pain.question}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-2.5 leading-relaxed">
                    {pain.detail}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-neutral-100 text-xs italic text-neutral-500 font-serif-title">
                  "{pain.quote}"
                </div>
              </div>
            ))}
          </div>

          {/* Quote kết nối */}
          <div className="mt-10 p-6 rounded-xl bg-white border-l-4 border-red-600 border-neutral-200 shadow-xs max-w-4xl">
            <p className="text-sm sm:text-base text-neutral-800 font-medium leading-relaxed">
              "Đây chính là lý do Nam làm cuốn cẩm nang này: <strong>biến một giao dịch tưởng chừng rất phức tạp thành từng bước rành mạch</strong> mà bất kỳ người mua bình thường nào cũng có thể tự tin theo dõi và kiểm soát được dòng tiền của mình."
            </p>
            <div className="mt-3 text-xs font-mono font-bold text-neutral-500 uppercase">
              — Nguyễn Nam BĐS · nambds.vn
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3 — CHO KHÁCH THẤY HỌ NHẬN ĐƯỢC GÌ: 5 Trụ cột cốt lõi */}
      {/* ========================================================================= */}
      <section id="quy-trinh-8-buoc" className="py-16 sm:py-24 bg-white border-b border-neutral-200 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-wider">
              CẤU TRÚC TÀI LIỆU
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 mt-2 tracking-tight">
              Trong 23 trang tài liệu, anh/chị sẽ biết:
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base mt-2">
              Không lý thuyết suông. Toàn bộ nội dung đúc kết từ hàng trăm giao dịch mua bán nhà đất thế chấp thực tế.
            </p>
          </div>

          <div className="mt-12 space-y-6 max-w-4xl">
            
            {/* Item 01 */}
            <div className="p-6 rounded-xl border border-neutral-200 bg-neutral-50/50 hover:bg-neutral-50 transition-colors">
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-lg bg-neutral-900 text-white font-mono font-bold text-sm flex items-center justify-center shrink-0">
                  01
                </span>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-neutral-950">
                    Hiểu đúng bản chất nhà đang thế chấp ngân hàng
                  </h3>
                  <p className="text-sm text-neutral-600 mt-1.5 leading-relaxed">
                    Nhà đang thế chấp <strong>không đồng nghĩa với “nhà có vấn đề” hay bị lừa đảo</strong>. Thực tế đây là tài sản đã được ngân hàng thẩm định pháp lý ban đầu. Tuy nhiên, người mua vẫn bắt buộc phải tự kiểm tra lại giấy tờ, hiện trạng, quy hoạch và nguy cơ tranh chấp phát sinh sau thời điểm thế chấp.
                  </p>
                </div>
              </div>
            </div>

            {/* Item 02 */}
            <div className="p-6 rounded-xl border border-neutral-200 bg-neutral-50/50 hover:bg-neutral-50 transition-colors">
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-lg bg-neutral-900 text-white font-mono font-bold text-sm flex items-center justify-center shrink-0">
                  02
                </span>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-neutral-950">
                    Hiểu rõ cách một giao dịch thực tế vận hành (Ví dụ căn nhà 6 tỷ)
                  </h3>
                  <p className="text-sm text-neutral-600 mt-1.5 leading-relaxed">
                    Giá mua 6 tỷ → Phân tách cụ thể: <strong>2,5 tỷ xử lý khoản vay trực tiếp tại ngân hàng</strong> + <strong>3,5 tỷ còn lại phải được kiểm soát bằng tài khoản phong tỏa</strong> cho tới khi Sổ hồng hoàn tất sang tên.
                  </p>
                  <a href="#case-6-ty" className="inline-flex items-center gap-1 text-xs font-bold text-red-600 mt-2 hover:underline">
                    <span>Xem sơ đồ dòng tiền chi tiết phía dưới</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Item 03: 8 Bước */}
            <div className="p-6 rounded-xl border-2 border-red-600/30 bg-white shadow-xs">
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-lg bg-red-600 text-white font-mono font-bold text-sm flex items-center justify-center shrink-0">
                  03
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <h3 className="text-lg font-bold text-neutral-950">
                      Quy trình mua nhà thế chấp chuẩn 8 bước an toàn
                    </h3>
                    <span className="text-xs font-mono font-semibold text-red-600 bg-red-50 px-2.5 py-0.5 rounded border border-red-200">
                      Trọng tâm tài liệu
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-600 mt-1.5">
                    Thỏa thuận 3 bên → Tất toán khoản vay → Ngân hàng trả Sổ gốc → Xóa thế chấp tại VPĐKĐĐ → Ký công chứng chính thức → Kê khai thuế & sang tên → Nhận Sổ hồng mới đứng tên người mua.
                  </p>

                  {/* Interactive Accordion for 8 steps */}
                  <div className="mt-4 pt-4 border-t border-neutral-100 space-y-2">
                    {STEPS_8.map((step) => {
                      const isExpanded = expandedStep === step.number;
                      return (
                        <div 
                          key={step.number}
                          className="border border-neutral-200 rounded-lg overflow-hidden bg-neutral-50/70"
                        >
                          <button
                            onClick={() => setExpandedStep(isExpanded ? null : step.number)}
                            className="w-full px-4 py-3 text-left flex items-center justify-between text-xs sm:text-sm font-bold text-neutral-900 hover:bg-neutral-100 transition-colors cursor-pointer"
                          >
                            <span className="flex items-center gap-2.5">
                              <span className="font-mono text-red-600">Bước {step.number}:</span>
                              <span>{step.title}</span>
                            </span>
                            <ChevronDown className={`w-4 h-4 text-neutral-500 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                          </button>

                          {isExpanded && (
                            <div className="px-4 pb-3.5 pt-1 text-xs text-neutral-600 bg-white border-t border-neutral-200 space-y-2">
                              <p className="leading-relaxed">{step.description}</p>
                              <div className="p-2 rounded bg-neutral-50 border border-neutral-200 font-medium text-neutral-800">
                                <strong>Hành động quyết định:</strong> {step.keyAction}
                              </div>
                              {step.warningNote && (
                                <div className="text-red-600 font-medium flex items-center gap-1.5">
                                  <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                                  <span>{step.warningNote}</span>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Item 04 */}
            <div id="cam-bay" className="p-6 rounded-xl border border-neutral-200 bg-neutral-50/50 hover:bg-neutral-50 transition-colors">
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-lg bg-neutral-900 text-white font-mono font-bold text-sm flex items-center justify-center shrink-0">
                  04
                </span>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-neutral-950">
                    Những cạm bẫy người mua thường gặp & cách phòng tránh
                  </h3>
                  <p className="text-sm text-neutral-600 mt-1.5 leading-relaxed">
                    Tài liệu chỉ rõ 3 sai lầm mất tiền phổ biến nhất: 
                    <strong> Tin số dư nợ do người bán tự nói miệng</strong>, 
                    <strong> Chuyển tiền trực tiếp vào tài khoản riêng của người bán</strong>, và 
                    <strong> Ký hợp đồng "công chứng treo" khi sổ chưa xóa thế chấp</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* Item 05 */}
            <div className="p-6 rounded-xl border border-neutral-200 bg-neutral-50/50 hover:bg-neutral-50 transition-colors">
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-lg bg-neutral-900 text-white font-mono font-bold text-sm flex items-center justify-center shrink-0">
                  05
                </span>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-neutral-950">
                    Bộ checklist 10 điều thực chiến có thể mang đi giao dịch
                  </h3>
                  <p className="text-sm text-neutral-600 mt-1.5 leading-relaxed">
                    Đây là phần giá trị nhất cuốn cẩm nang. Bản in sẵn sàng để người mua đối soát từng giấy tờ, từng điều khoản cọc trước khi bấm chuyển khoản tiền tỷ.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4 — “MỒI” BẰNG CHECKLIST: Mockup Trang 22 & Lợi ích thiết thực */}
      {/* ========================================================================= */}
      <section id="bo-checklist" className="py-16 sm:py-24 bg-neutral-100/70 border-b border-neutral-200 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-wider">
              VŨ KHÍ BẢO VỆ NGƯỜI MUA
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-950 mt-2 tracking-tight">
              Đặc biệt: Bộ checklist để kiểm tra trước khi chuyển tiền
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base mt-2">
              Trang 22 trong cẩm nang – Hãy mở ra kiểm tra từng điều trước khi ký bất kỳ giấy tờ hay chuyển một đồng tiền cọc nào.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Mockup Trang Checklist */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-md">
                <ChecklistMockup onPreviewClick={() => setIsChecklistModalOpen(true)} />
              </div>
            </div>

            {/* Right Column: Key Inspection Checklist items before Deposit */}
            <div className="lg:col-span-6 space-y-6">
              <div className="p-6 bg-white rounded-2xl border border-neutral-200 shadow-sm space-y-4">
                <div className="border-b border-neutral-100 pb-3">
                  <div className="text-xs font-mono font-bold text-red-600 uppercase">
                    TRƯỚC KHI ĐẶT CỌC
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-950 mt-1">
                    Anh/chị có thể kiểm tra lần lượt:
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-semibold text-neutral-800">
                  <div className="flex items-center gap-2.5 p-2 rounded bg-neutral-50 border border-neutral-200/80">
                    <Check className="w-4 h-4 text-red-600 shrink-0 stroke-[3]" />
                    <span>Đúng người đứng tên</span>
                  </div>

                  <div className="flex items-center gap-2.5 p-2 rounded bg-neutral-50 border border-neutral-200/80">
                    <Check className="w-4 h-4 text-red-600 shrink-0 stroke-[3]" />
                    <span>Ngân hàng đang nhận thế chấp</span>
                  </div>

                  <div className="flex items-center gap-2.5 p-2 rounded bg-neutral-50 border border-neutral-200/80">
                    <Check className="w-4 h-4 text-red-600 shrink-0 stroke-[3]" />
                    <span>Hiện trạng nhà thực tế</span>
                  </div>

                  <div className="flex items-center gap-2.5 p-2 rounded bg-neutral-50 border border-neutral-200/80">
                    <Check className="w-4 h-4 text-red-600 shrink-0 stroke-[3]" />
                    <span>Quy hoạch và tranh chấp</span>
                  </div>

                  <div className="flex items-center gap-2.5 p-2 rounded bg-neutral-50 border border-neutral-200/80">
                    <Check className="w-4 h-4 text-red-600 shrink-0 stroke-[3]" />
                    <span>Số tiền phải tất toán</span>
                  </div>

                  <div className="flex items-center gap-2.5 p-2 rounded bg-neutral-50 border border-neutral-200/80">
                    <Check className="w-4 h-4 text-red-600 shrink-0 stroke-[3]" />
                    <span>Cách xử lý phần tiền còn lại</span>
                  </div>

                  <div className="flex items-center gap-2.5 p-2 rounded bg-neutral-50 border border-neutral-200/80">
                    <Check className="w-4 h-4 text-red-600 shrink-0 stroke-[3]" />
                    <span>Điều kiện hoàn/phạt cọc</span>
                  </div>

                  <div className="flex items-center gap-2.5 p-2 rounded bg-neutral-50 border border-neutral-200/80">
                    <Check className="w-4 h-4 text-red-600 shrink-0 stroke-[3]" />
                    <span>Trách nhiệm của các bên</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setIsChecklistModalOpen(true)}
                    className="w-full py-3.5 px-6 rounded-lg bg-neutral-950 hover:bg-neutral-900 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                  >
                    <span>Mở Xem Đủ 10 Tiêu Chí Checklist</span>
                    <FileCheck className="w-4 h-4 text-red-500" />
                  </button>

                  <div className="mt-3 text-center">
                    <button
                      onClick={scrollToForm}
                      className="text-xs font-bold text-red-600 hover:text-red-700 underline cursor-pointer"
                    >
                      Hoặc nhận toàn bộ cẩm nang + checklist PDF gửi vào email →
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5 — MỘT VÍ DỤ TRỰC QUAN 6 TỶ: Bản đồ phân luồng tiền */}
      {/* ========================================================================= */}
      <CaseStudySection />

      {/* ========================================================================= */}
      {/* SECTION 6 — AI NÊN TẢI TÀI LIỆU NÀY?: 4 Đối tượng rõ ràng */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-neutral-200 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-wider">
              ĐỐI TƯỢNG PHÙ HỢP
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 mt-2 tracking-tight">
              Cẩm nang này phù hợp nếu anh/chị…
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base mt-2">
              Được thiết kế đặc biệt cho người mua nhà cá nhân cần sự an toàn tuyệt đối cho số tiền tích lũy nhiều năm.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TARGET_AUDIENCES.map((aud, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-neutral-50 border border-neutral-200 flex flex-col justify-between hover:border-neutral-300 transition-colors"
              >
                <div>
                  <div className="w-8 h-8 rounded bg-red-600 text-white font-mono font-bold text-xs flex items-center justify-center mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-neutral-950 leading-snug">
                    {aud.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-2 leading-relaxed">
                    {aud.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-neutral-200/60 flex items-center gap-1.5 text-xs font-semibold text-red-600">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                  <span>Giải quyết chính xác nhu cầu</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 12 HIGHLIGHT — BANNER USP: 10 Điều Trước Khi Chuyển Khoản */}
      {/* ========================================================================= */}
      <section className="py-12 bg-neutral-100 border-b border-neutral-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-neutral-300 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 text-left">
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-red-600">
                LỜI KHUYÊN TỪ TRANG 22
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-950 mt-1">
                "Trước khi chuyển vài tỷ đồng mua nhà, hãy kiểm tra đủ 10 điều này."
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 mt-2 max-w-xl">
                Không tin vào lời hứa miệng. Kiểm soát chặt chẽ hợp đồng thỏa thuận 3 bên, tài khoản thu nợ ngân hàng và người trực tiếp giữ Sổ gốc.
              </p>
            </div>

            <button
              onClick={() => setIsChecklistModalOpen(true)}
              className="py-3 px-5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wide shrink-0 transition-colors shadow-xs flex items-center gap-2 cursor-pointer"
            >
              <span>Xem 10 Điều Cụ Thể</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7 — NGUYỄN NAM LÀ AI?: Không phô trương, tập trung giải quyết việc */}
      {/* ========================================================================= */}
      <section id="tac-gia" className="py-16 sm:py-20 bg-white border-b border-neutral-200 text-left">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Author Portrait Card */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl bg-neutral-900 border-4 border-white shadow-xl overflow-hidden flex flex-col justify-end p-6 text-white group">
                {/* Real Author Portrait Image */}
                <img
                  src="https://i.postimg.cc/j5nWg8jz/anh-dai-dien.jpg"
                  alt="Chân dung Nguyễn Nam BĐS"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />

                {/* Measured contrast scrim overlay for crystal-clear text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent pointer-events-none" />

                <div className="relative z-10">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-red-400 uppercase">
                    TÁC GIẢ & CỐ VẤN
                  </span>
                  <div className="text-xl font-extrabold text-white mt-0.5">
                    Nguyễn Nam BĐS
                  </div>
                  <div className="text-xs text-neutral-300 mt-1">
                    Chuyên gia cố vấn pháp lý & quy trình giao dịch nhà đất
                  </div>
                </div>
              </div>
            </div>

            {/* Author Bio & Links */}
            <div className="md:col-span-7 space-y-4">
              <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-wider">
                VỀ TÁC GIẢ
              </span>
              
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight">
                Nguyễn Nam BĐS
              </h2>

              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                Nam xây dựng các nội dung BĐS theo hướng <strong>đơn giản hóa những vấn đề khó</strong> để người mua có thể hiểu rõ trước khi đưa ra quyết định chuyển tiền.
              </p>

              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Tài liệu này không nhằm mục đích quảng cáo bán dự án hay mời chào dịch vụ tư vấn trả phí. Mục tiêu duy nhất là giúp người mua nhà đất lần đầu không bị mất tiền bởi những sơ suất pháp lý đáng tiếc.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold">
                <span className="text-neutral-500 uppercase tracking-wider font-mono">
                  Theo dõi Nguyễn Nam BĐS:
                </span>
                
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="px-3 py-1.5 rounded bg-neutral-100 hover:bg-neutral-200 text-neutral-800 flex items-center gap-1.5 transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-red-600" />
                  <span>Kênh YouTube</span>
                </a>

                <a
                  href="https://nambds.vn"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="px-3 py-1.5 rounded bg-neutral-100 hover:bg-neutral-200 text-neutral-800 flex items-center gap-1.5 transition-colors"
                >
                  <span>nambds.vn</span>
                  <ExternalLink className="w-3 h-3 text-neutral-500" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 8 — CTA CUỐI: Nền Đen, Chữ Trắng, Quyết Định Cuối Cùng */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-neutral-950 text-white relative overflow-hidden">
        
        {/* Subtle red spotlight radial gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <span className="text-xs font-mono font-bold text-red-500 uppercase tracking-widest">
            HÀNH ĐỘNG THÔNG MINH
          </span>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3 tracking-tight text-balance leading-tight">
            Trước khi chuyển vài tỷ đồng, hãy dành 10 phút để hiểu quy trình.
          </h2>

          <p className="text-neutral-300 text-sm sm:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            Nhận miễn phí <strong>Cẩm nang 8 bước mua nhà đang thế chấp ngân hàng</strong>. Tài liệu PDF kèm đầy đủ checklist và case thực tế 6 tỷ sẽ được gửi ngay đến email của anh/chị.
          </p>

          <div className="mt-10 max-w-lg mx-auto">
            <LeadForm
              id="bottom-lead-form"
              theme="dark"
              onSuccess={handleLeadSuccess}
              ctaText="GỬI TÀI LIỆU CHO TÔI →"
              subtext="Tài liệu PDF được gửi trực tiếp vào email. Hoàn toàn miễn phí."
            />
          </div>

        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ChecklistModal
        isOpen={isChecklistModalOpen}
        onClose={() => setIsChecklistModalOpen(false)}
        onOpenForm={() => {
          setIsChecklistModalOpen(false);
          scrollToForm();
        }}
      />

      <EbookReaderModal
        isOpen={isReaderModalOpen}
        onClose={() => setIsReaderModalOpen(false)}
        onOpenForm={() => {
          setIsReaderModalOpen(false);
          scrollToForm();
        }}
      />
    </div>
  );
}
