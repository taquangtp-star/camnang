import React from 'react';
import { CheckSquare, AlertTriangle, FileText } from 'lucide-react';

interface ChecklistMockupProps {
  className?: string;
  onPreviewClick?: () => void;
}

export const ChecklistMockup: React.FC<ChecklistMockupProps> = ({ 
  className = '', 
  onPreviewClick 
}) => {
  return (
    <div 
      onClick={onPreviewClick}
      className={`relative group cursor-pointer select-none ${className}`}
      title="Bấm để xem chi tiết bộ checklist"
    >
      {/* Clip & paper layered depth */}
      <div className="absolute -inset-2 bg-gradient-to-br from-neutral-200 to-neutral-300 rounded-lg blur-sm opacity-50 group-hover:opacity-80 transition-opacity" />

      {/* Underlying second page effect */}
      <div className="absolute top-2 right-[-8px] bottom-[-6px] left-2 bg-neutral-200 border border-neutral-300 rounded shadow-md transform rotate-1 pointer-events-none" />

      {/* Main Document Sheet */}
      <div className="relative bg-white border border-neutral-300 rounded shadow-xl p-5 sm:p-6 transition-all duration-300 group-hover:-translate-y-1">
        
        {/* Top Binder Clip Aesthetic */}
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-16 h-7 bg-neutral-900 rounded-t-sm shadow-md flex items-center justify-center">
          <div className="w-10 h-2 bg-neutral-700 rounded-xs" />
        </div>

        {/* Header of the legal sheet */}
        <div className="border-b-2 border-neutral-900 pb-3 pt-2">
          <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 uppercase">
            <span>BĐS NGUYỄN NAM</span>
            <span>PHỤ LỤC TRANG 22</span>
          </div>
          <h2 className="text-sm sm:text-base font-extrabold text-neutral-950 mt-1 uppercase tracking-tight">
            CHECKLIST 10 ĐIỀU KIỂM TRA TRƯỚC KHI CHUYỂN TIỀN
          </h2>
          <p className="text-[11px] text-neutral-600">
            Áp dụng cho giao dịch mua bán nhà đất đang thế chấp ngân hàng
          </p>
        </div>

        {/* Checklist Rows Preview */}
        <div className="mt-4 space-y-2.5 text-left text-xs">
          
          {/* Row 1 */}
          <div className="p-2 rounded bg-neutral-50 border border-neutral-200 flex items-start gap-2.5">
            <div className="mt-0.5 w-4 h-4 rounded-xs border-2 border-red-600 bg-red-600 text-white flex items-center justify-center text-[10px] font-bold shrink-0">
              ✓
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-bold text-neutral-900 text-xs truncate">
                01. Đúng người đứng tên trên Sổ & tình trạng hôn nhân
              </div>
              <div className="text-[10px] text-neutral-500">
                Đối chiếu CCCD, Giấy kết hôn hoặc xác nhận độc thân
              </div>
            </div>
            <span className="text-[9px] font-mono font-bold text-red-600 uppercase shrink-0">
              Bắt buộc
            </span>
          </div>

          {/* Row 2 */}
          <div className="p-2 rounded bg-neutral-50 border border-neutral-200 flex items-start gap-2.5">
            <div className="mt-0.5 w-4 h-4 rounded-xs border-2 border-red-600 bg-red-600 text-white flex items-center justify-center text-[10px] font-bold shrink-0">
              ✓
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-bold text-neutral-900 text-xs truncate">
                02. Văn bản tính dư nợ do ngân hàng phát hành
              </div>
              <div className="text-[10px] text-neutral-500">
                Gốc + lãi + phạt tính đến ngày nộp tiền chính xác
              </div>
            </div>
            <span className="text-[9px] font-mono font-bold text-red-600 uppercase shrink-0">
              Bắt buộc
            </span>
          </div>

          {/* Row 3 */}
          <div className="p-2 rounded bg-neutral-50 border border-neutral-200 flex items-start gap-2.5">
            <div className="mt-0.5 w-4 h-4 rounded-xs border-2 border-red-600 bg-red-600 text-white flex items-center justify-center text-[10px] font-bold shrink-0">
              ✓
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-bold text-neutral-900 text-xs truncate">
                03. Tài khoản nộp tiền là tài khoản thu nợ ngân hàng
              </div>
              <div className="text-[10px] text-neutral-500">
                Không chuyển vào tài khoản cá nhân người bán
              </div>
            </div>
            <span className="text-[9px] font-mono font-bold text-red-600 uppercase shrink-0">
              Bắt buộc
            </span>
          </div>

          {/* Row 4 */}
          <div className="p-2 rounded bg-neutral-50 border border-neutral-200 flex items-start gap-2.5">
            <div className="mt-0.5 w-4 h-4 rounded-xs border-2 border-neutral-400 bg-white flex items-center justify-center text-[10px] font-bold shrink-0">
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-bold text-neutral-700 text-xs truncate">
                04. Tài khoản phong tỏa (escrow) phần tiền chênh lệch
              </div>
              <div className="text-[10px] text-neutral-500">
                Chỉ giải tỏa sau khi công chứng & nộp đăng bộ
              </div>
            </div>
            <span className="text-[9px] font-mono font-medium text-neutral-500 uppercase shrink-0">
              Trang 22
            </span>
          </div>

          {/* Row 5 - Blurred preview of the rest */}
          <div className="p-2 rounded bg-neutral-50/70 border border-dashed border-neutral-300 flex items-center justify-between text-neutral-400">
            <div className="flex items-center gap-2">
              <CheckSquare className="w-3.5 h-3.5" />
              <span className="text-[11px] font-medium italic">
                + 6 mục kiểm tra chuyên sâu khác (Hiện trạng, Quy hoạch, Giữ sổ...)
              </span>
            </div>
            <span className="text-[10px] text-red-600 font-bold underline">
              Bấm để xem đủ
            </span>
          </div>

        </div>

        {/* Red Legal Stamp Effect */}
        <div className="mt-4 pt-3 border-t border-neutral-200 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-[10px] text-neutral-600 font-mono">
            <FileText className="w-3 h-3 text-neutral-500" />
            <span>MẪU CHUẨN SOẠN BỞI NGUYỄN NAM</span>
          </div>

          <div className="border border-red-600 text-red-600 rounded-xs px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rotate-[-2deg]">
            BẢO VỆ NGƯỜI MUA
          </div>
        </div>

      </div>

      <div className="mt-2 text-center text-[11px] text-neutral-500 font-medium">
        (Có thể in trực tiếp hoặc lưu trên điện thoại mang đi khi xem nhà & đặt cọc)
      </div>
    </div>
  );
};
