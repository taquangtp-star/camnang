import React from 'react';
import { BookOpen, ShieldCheck, FileCheck } from 'lucide-react';

interface EbookMockupProps {
  className?: string;
  onClick?: () => void;
}

export const EbookMockup: React.FC<EbookMockupProps> = ({ className = '', onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`relative group cursor-pointer select-none perspective-[1200px] ${className}`}
      title="Bấm để xem mục lục 23 trang tài liệu"
    >
      {/* Dynamic ambient shadow */}
      <div className="absolute -inset-4 bg-gradient-to-r from-neutral-900/10 via-red-900/10 to-neutral-900/10 rounded-2xl blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

      {/* Book container with 3D rotation */}
      <div className="relative mx-auto w-[280px] sm:w-[320px] md:w-[340px] aspect-[1/1.42] transition-transform duration-500 ease-out group-hover:[transform:rotateY(-6deg)_rotateX(3deg)_scale(1.02)] [transform-style:preserve-3d]">
        
        {/* Book spine thickness effect */}
        <div className="absolute top-2 bottom-2 left-[-14px] w-[18px] bg-gradient-to-r from-neutral-800 via-neutral-900 to-neutral-700 rounded-l-sm shadow-md [transform:rotateY(-90deg)_translateZ(9px)] flex flex-col justify-between py-6 items-center">
          <span className="text-[9px] text-neutral-400 font-mono tracking-widest [writing-mode:vertical-rl] rotate-180 font-bold uppercase">
            Nguyễn Nam BĐS
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
        </div>

        {/* Paper page edge layers on right */}
        <div className="absolute top-3 bottom-3 -right-2.5 w-3 bg-neutral-100 border-y border-r border-neutral-300 shadow-sm rounded-r-xs flex flex-col justify-evenly">
          <div className="h-[1px] bg-neutral-200 w-full" />
          <div className="h-[1px] bg-neutral-200 w-full" />
          <div className="h-[1px] bg-neutral-200 w-full" />
          <div className="h-[1px] bg-neutral-200 w-full" />
        </div>

        {/* Main Cover */}
        <div className="relative w-full h-full bg-white rounded-r-md border border-neutral-300 shadow-2xl p-6 md:p-7 flex flex-col justify-between overflow-hidden">
          
          {/* Subtle paper grain texture */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:12px_12px]" />

          {/* Left spine binding crease */}
          <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-neutral-300/40 via-neutral-100/20 to-transparent pointer-events-none" />
          <div className="absolute left-3.5 top-0 bottom-0 w-[1px] bg-neutral-300/60 pointer-events-none" />

          {/* Top cover header */}
          <div className="relative z-10 pt-1">
            <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
              <span className="text-[11px] font-bold tracking-wider text-neutral-500 uppercase">
                Tài Liệu Độc Quyền
              </span>
              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 bg-neutral-100 text-neutral-700 border border-neutral-200">
                23 TRANG PDF
              </span>
            </div>

            <div className="mt-4 flex items-center gap-1.5 text-red-600 text-xs font-semibold tracking-wide">
              <ShieldCheck className="w-4 h-4 stroke-[2.2]" />
              <span>KIỂM SOÁT DÒNG TIỀN & PHÁP LÝ</span>
            </div>

            {/* Main book title */}
            <div className="mt-2.5">
              <h1 className="text-xl sm:text-2xl font-extrabold text-neutral-950 tracking-tight leading-[1.2]">
                CẨM NANG <span className="text-red-600">8 BƯỚC</span>
              </h1>
              <p className="text-base sm:text-lg font-bold text-neutral-900 mt-1 leading-snug">
                MUA NHÀ ĐANG THẾ CHẤP NGÂN HÀNG
              </p>
            </div>

            {/* Red bold separator */}
            <div className="w-12 h-1 bg-red-600 mt-3" />

            <p className="text-xs text-neutral-600 mt-3 leading-relaxed">
              Làm thế nào để đưa tiền mà vẫn kiểm soát được rủi ro? Từ đặt cọc, tất toán, giải chấp đến khi Sổ hồng đứng tên người mua.
            </p>
          </div>

          {/* Center Graphic Badge */}
          <div className="relative z-10 my-3 p-3 bg-neutral-50 border border-neutral-200/90 rounded text-left">
            <div className="text-[11px] font-bold text-neutral-900 flex items-center gap-1.5">
              <FileCheck className="w-3.5 h-3.5 text-red-600" />
              <span>ĐÍNH KÈM: BỘ CHECKLIST 10 ĐIỀU</span>
            </div>
            <p className="text-[10px] text-neutral-500 mt-1">
              Kiểm tra thực địa, số dư nợ ngân hàng & hợp đồng cọc trước khi chuyển khoản.
            </p>
          </div>

          {/* Bottom author lockup */}
          <div className="relative z-10 border-t border-neutral-200 pt-3 flex items-center justify-between">
            <div>
              <div className="text-xs font-bold text-neutral-950 tracking-wide uppercase">
                Nguyễn Nam BĐS
              </div>
              <div className="text-[10px] text-neutral-500 font-mono">
                nambds.vn
              </div>
            </div>

            <div className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center text-xs font-bold shadow">
              <BookOpen className="w-4 h-4" />
            </div>
          </div>

        </div>

      </div>

      {/* Floating badge below mockup */}
      <div className="mt-4 text-center">
        <span className="inline-flex items-center gap-2 text-xs font-medium text-neutral-600 bg-neutral-100 hover:bg-neutral-200 transition-colors px-3 py-1.5 rounded border border-neutral-200 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          Bản phát hành chuẩn 2026 · Định dạng PDF độ phân giải cao
        </span>
      </div>
    </div>
  );
};
