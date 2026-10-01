import React, { useState } from 'react';
import { X, CheckSquare, Square, Printer, Download, AlertTriangle, ShieldCheck, Check } from 'lucide-react';
import { CHECKLIST_ITEMS } from '../data/ebookData';

interface ChecklistModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenForm: () => void;
}

export const ChecklistModal: React.FC<ChecklistModalProps> = ({
  isOpen,
  onClose,
  onOpenForm,
}) => {
  const [checkedIds, setCheckedIds] = useState<Record<string, boolean>>({});

  if (!isOpen) return null;

  const toggleCheck = (id: string) => {
    setCheckedIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const completedCount = Object.values(checkedIds).filter(Boolean).length;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-xs">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-neutral-300 animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-neutral-200 flex items-center justify-between bg-neutral-50 shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono font-bold uppercase text-red-600">
                PHỤ LỤC TRANG 22 · EBOOK NGUYỄN NAM BĐS
              </span>
              <span className="text-neutral-300">·</span>
              <span className="text-[11px] font-mono text-neutral-500">
                10 ĐIỀU TRƯỚC KHI CHUYỂN KHOẢN
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-extrabold text-neutral-950 mt-1">
              Bộ Checklist Kiểm Tra Trước Khi Xuống Tiền
            </h2>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-neutral-200/80 hover:bg-neutral-300 flex items-center justify-center text-neutral-700 transition-colors cursor-pointer"
            aria-label="Đóng"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar & Subheader */}
        <div className="px-6 py-3 bg-red-50/50 border-b border-red-100 flex items-center justify-between text-xs shrink-0">
          <div className="flex items-center gap-2 text-neutral-700 font-medium">
            <ShieldCheck className="w-4 h-4 text-red-600" />
            <span>Tiến độ kiểm tra thực tế: <strong className="text-neutral-900 font-bold">{completedCount}/10 điều</strong></span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-2.5 py-1 text-xs font-semibold text-neutral-700 hover:text-neutral-950 bg-white border border-neutral-300 rounded shadow-2xs hover:bg-neutral-50 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>In Checklist</span>
            </button>
          </div>
        </div>

        {/* Checklist Content list */}
        <div className="p-6 overflow-y-auto space-y-3.5 flex-1 text-left text-neutral-800">
          <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-900 flex items-start gap-2.5">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <p>
              <strong>Nguyên tắc vàng của Nguyễn Nam:</strong> Tuyệt đối không chuyển bất kỳ khoản tiền nào (kể cả tiền cọc) nếu chưa xác nhận rõ ràng 10 điều dưới đây bằng văn bản có cơ sở pháp lý.
            </p>
          </div>

          {CHECKLIST_ITEMS.map((item, idx) => {
            const isChecked = !!checkedIds[item.id];
            return (
              <div
                key={item.id}
                onClick={() => toggleCheck(item.id)}
                className={`p-4 rounded-xl border transition-all cursor-pointer select-none ${
                  isChecked
                    ? 'bg-neutral-50/80 border-neutral-300'
                    : 'bg-white border-neutral-200 hover:border-neutral-300 hover:shadow-xs'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 shrink-0 text-red-600">
                    {isChecked ? (
                      <div className="w-5 h-5 rounded-xs bg-red-600 text-white flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                    ) : (
                      <Square className="w-5 h-5 text-neutral-400 hover:text-red-600" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className={`text-sm font-bold ${isChecked ? 'line-through text-neutral-500' : 'text-neutral-900'}`}>
                        {idx + 1}. {item.title}
                      </h4>
                      {item.status === 'critical' && (
                        <span className="text-[10px] font-mono font-bold text-red-700 bg-red-100 px-2 py-0.5 rounded shrink-0">
                          QUAN TRỌNG
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                      {item.detail}
                    </p>

                    <div className="mt-2 text-[11px] text-red-700/90 bg-red-50/50 p-2 rounded border border-red-100/60">
                      <strong>Rủi ro nếu bỏ qua:</strong> {item.riskIfIgnored}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-neutral-200 bg-neutral-50 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <span className="text-xs text-neutral-500 text-center sm:text-left">
            Trích từ <strong>Cẩm nang 8 bước mua nhà đang thế chấp ngân hàng</strong> · Nguyễn Nam BĐS
          </span>

          <button
            onClick={() => {
              onClose();
              onOpenForm();
            }}
            className="w-full sm:w-auto py-2.5 px-5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-lg shadow-sm transition-colors cursor-pointer"
          >
            Nhận Toàn Bộ 23 Trang Ebook Miễn Phí →
          </button>
        </div>
      </div>
    </div>
  );
};
