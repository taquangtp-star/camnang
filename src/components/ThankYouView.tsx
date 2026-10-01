import React from 'react';
import { ArrowLeft, ShieldCheck, Mail, Download, FileText } from 'lucide-react';
import { LeadFormData } from '../types';

interface ThankYouViewProps {
  leadData: LeadFormData;
  onBackToHome: () => void;
  onOpenChecklistModal?: () => void;
  onOpenReaderModal?: () => void;
}

export const ThankYouView: React.FC<ThankYouViewProps> = ({
  leadData,
  onBackToHome,
  onOpenChecklistModal,
  onOpenReaderModal,
}) => {
  return (
    <main className="flex-1 flex flex-col items-center py-8 md:py-12 px-4 bg-neutral-50/50 min-h-screen">
      <div className="max-w-7xl w-full text-center space-y-6 md:space-y-8">
        
        {/* Top Header */}
        <div className="space-y-3">
          <h1 className="text-5xl md:text-7xl font-black text-[#E11D48] tracking-tighter uppercase leading-none">
            ĐÃ GỬI EMAIL!
          </h1>
          <p className="text-lg md:text-xl text-gray-500 font-bold italic">
            Hãy làm theo hướng dẫn bên dưới
          </p>

          {leadData?.email && (
            <div className="pt-1">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 text-sm font-semibold text-gray-700 shadow-2xs">
                <Mail className="w-4 h-4 text-[#E11D48]" />
                <span>Đã gửi tới: <strong className="text-gray-900">{leadData.email}</strong></span>
              </span>
            </div>
          )}
        </div>

        {/* 3 Step Visual Cards */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-stretch">
            
            {/* Step 1 Card */}
            <div className="flex flex-col group h-full">
              <div className="bg-white rounded-[2rem] p-2 md:p-3 w-full h-full border border-gray-100 shadow-xl hover:shadow-red-50 transition-all duration-300 flex flex-col">
                <div className="rounded-[1.5rem] overflow-hidden mb-3 flex items-center justify-center bg-gray-50 aspect-[4/5] w-full shadow-inner">
                  <img 
                    alt="Check Inbox" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" 
                    src="https://i.postimg.cc/GmP1Y4KN/Bu_o_c_1.png" 
                  />
                </div>
                <div className="mt-auto px-2 mb-4 min-h-[50px] flex items-center justify-center text-center">
                  <p className="text-gray-900 font-extrabold leading-tight text-lg md:text-xl">
                    Kiểm tra hộp thư <span className="text-[#E11D48]">Inbox (Chính)</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 Card */}
            <div className="flex flex-col group h-full">
              <div className="bg-white rounded-[2rem] p-2 md:p-3 w-full h-full border border-gray-100 shadow-xl hover:shadow-red-50 transition-all duration-300 flex flex-col">
                <div className="rounded-[1.5rem] overflow-hidden mb-3 flex items-center justify-center bg-gray-50 aspect-[4/5] w-full shadow-inner">
                  <img 
                    alt="Check Promotions" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" 
                    src="https://i.postimg.cc/XYK0FrLt/Bu_o_c_2.png" 
                  />
                </div>
                <div className="mt-auto px-2 mb-4 min-h-[50px] flex items-center justify-center text-center">
                  <p className="text-gray-900 font-extrabold leading-tight text-lg md:text-xl">
                    Kiểm tra tab <span className="text-[#E11D48]">Thư rác (Spam)</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 Card */}
            <div className="flex flex-col group h-full">
              <div className="bg-white rounded-[2rem] p-2 md:p-3 w-full h-full border border-gray-100 shadow-xl hover:shadow-red-50 transition-all duration-300 flex flex-col border-b-[8px] border-b-red-500">
                <div className="rounded-[1.5rem] overflow-hidden mb-3 flex items-center justify-center bg-gray-50 aspect-[4/5] w-full shadow-inner">
                  <img 
                    alt="Check Spam" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" 
                    src="https://i.postimg.cc/wvh1tXMV/Bu-o-c_3-new.png" 
                  />
                </div>
                <div className="mt-auto px-2 mb-4 min-h-[50px] flex items-center justify-center text-center">
                  <p className="text-gray-900 font-extrabold leading-tight text-lg md:text-xl uppercase">
                    BẤM <span className="text-[#E11D48]">"NOT SPAM"</span> ĐỂ NHẬN TÀI LIỆU
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Detailed Instructions Box */}
        <div className="max-w-4xl mx-auto w-full space-y-4">
          <div className="bg-white border border-blue-50 rounded-[2rem] shadow-lg overflow-hidden text-left">
            <div className="p-6 md:p-8 space-y-6">
              
              {/* Item 1 */}
              <div className="flex items-start gap-4 md:gap-6">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl shrink-0 shadow-md">
                  1
                </div>
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed pt-1">
                  Kiểm tra hộp thư <span className="font-bold text-gray-900">Inbox (Hộp thư đến)</span> hoặc tab <span className="font-bold text-gray-900">Promotions (Quảng cáo)</span>.
                </p>
              </div>

              <div className="h-px bg-gray-100 w-full" />

              {/* Item 2 */}
              <div className="flex items-start gap-4 md:gap-6">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl shrink-0 shadow-md">
                  2
                </div>
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed pt-1">
                  Nếu không thấy, vui lòng kiểm tra mục <span className="font-bold text-gray-900">Spam (Thư rác)</span>.
                </p>
              </div>

              <div className="h-px bg-gray-100 w-full" />

              {/* Item 3 */}
              <div className="flex items-start gap-4 md:gap-6">
                <div className="w-10 h-10 rounded-full bg-[#F43F5E] text-white flex items-center justify-center font-bold text-xl shrink-0 shadow-md">
                  3
                </div>
                <div className="space-y-2 pt-1">
                  <p className="text-[#F43F5E] font-black text-xl md:text-2xl uppercase tracking-tight">
                    QUAN TRỌNG:
                  </p>
                  <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                    Nếu mail nằm trong Spam, hãy bấm nút <span className="font-bold text-gray-900">"Report not spam"</span> để đảm bảo bạn nhận được tài liệu từ Nguyễn Nam.
                  </p>
                </div>
              </div>

            </div>
          </div>

          <p className="text-gray-400 text-base md:text-lg italic font-bold">
            * Email tự động có thể mất 30s để đến hộp thư của bạn.
          </p>

          {/* Quick reading & checklist options while waiting */}
          {(onOpenReaderModal || onOpenChecklistModal) && (
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              {onOpenReaderModal && (
                <button
                  onClick={onOpenReaderModal}
                  className="py-2.5 px-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-sm flex items-center gap-2 transition-colors cursor-pointer shadow-xs"
                >
                  <Download className="w-4 h-4 text-red-500" />
                  <span>Đọc Trực Tuyến Bản PDF</span>
                </button>
              )}
              {onOpenChecklistModal && (
                <button
                  onClick={onOpenChecklistModal}
                  className="py-2.5 px-4 rounded-xl bg-white border border-neutral-300 hover:bg-neutral-50 text-neutral-800 font-bold text-sm flex items-center gap-2 transition-colors cursor-pointer shadow-xs"
                >
                  <FileText className="w-4 h-4 text-neutral-600" />
                  <span>Xem Checklist 10 Điều</span>
                </button>
              )}
            </div>
          )}
        </div>

        {/* Back Link & Security Badge */}
        <div className="pt-6 pb-6 flex flex-col items-center gap-4">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors font-bold text-xl cursor-pointer"
          >
            <ArrowLeft className="w-6 h-6" />
            <span>Quay lại trang chính</span>
          </button>

          <div className="flex items-center gap-2 text-[12px] text-gray-400 font-bold uppercase tracking-[0.4em]">
            <ShieldCheck className="w-5 h-5 text-gray-400" />
            <span>BẢO MẬT & HỖ TRỢ 24/7</span>
          </div>
        </div>

      </div>
    </main>
  );
};
