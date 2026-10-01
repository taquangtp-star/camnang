import React, { useState } from 'react';
import { X, BookOpen, ChevronLeft, ChevronRight, Download, CheckCircle, FileText, ArrowRight } from 'lucide-react';
import { STEPS_8, THREE_PITFALLS, EBOOK_INFO } from '../data/ebookData';

interface EbookReaderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenForm: () => void;
}

export const EbookReaderModal: React.FC<EbookReaderModalProps> = ({
  isOpen,
  onClose,
  onOpenForm,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  if (!isOpen) return null;

  const totalPages = 5; // Interactive sample chapter pages

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-xs">
      <div 
        className="relative w-full max-w-4xl h-[88vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-neutral-300 animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
      >
        {/* Top Control Bar */}
        <div className="px-5 py-3.5 border-b border-neutral-200 bg-neutral-900 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-red-500" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-tight">
              BẢN ĐỌC THỬ EBOOK: 8 BƯỚC MUA NHÀ THẾ CHẤP (NGUYỄN NAM BĐS)
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenForm();
              }}
              className="hidden sm:inline-flex items-center gap-1.5 py-1.5 px-3 rounded bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Tải Bản Full 23 Trang</span>
            </button>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center text-neutral-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Đóng"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Reader Canvas */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-neutral-100 flex justify-center">
          <div className="w-full max-w-2xl bg-white rounded shadow-md border border-neutral-200 p-8 sm:p-12 min-h-full flex flex-col justify-between text-neutral-900">
            
            {/* Page 1: Bìa & Lời nói đầu */}
            {currentPage === 1 && (
              <div className="space-y-6 text-left">
                <div className="border-b-2 border-neutral-950 pb-4">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-red-600 font-bold">
                    TÀI LIỆU HƯỚNG DẪN THỰC CHIẾN BĐS
                  </span>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight mt-1">
                    CẨM NANG 8 BƯỚC MUA NHÀ ĐANG THẾ CHẤP NGÂN HÀNG
                  </h1>
                  <p className="text-sm font-semibold text-neutral-600 mt-2">
                    Làm thế nào để đưa tiền mà vẫn kiểm soát được rủi ro?
                  </p>
                </div>

                <div className="p-4 bg-neutral-50 border-l-4 border-red-600 rounded-r text-xs leading-relaxed text-neutral-700">
                  <p className="italic">
                    "Phần lớn người mua nhà lần đầu khi nghe người bán nói 'Sổ đang cắm ở ngân hàng' thường có 2 trạng thái cực đoan: Một là quá lo sợ bỏ qua một căn nhà tốt, hai là quá chủ quan đưa trước tiền cọc hàng trăm triệu hay cả tỷ đồng cho chủ nhà tự đi giải chấp. Cả hai đều bắt nguồn từ việc không hiểu quy trình kiểm soát dòng tiền và pháp lý."
                  </p>
                  <div className="mt-2 font-bold text-neutral-900">— Nguyễn Nam BĐS</div>
                </div>

                <div className="space-y-3 pt-2">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-900">
                    Mục tiêu xuyên suốt của tài liệu:
                  </h3>
                  <ul className="space-y-2 text-xs text-neutral-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">01.</span>
                      <span><strong>Hiểu quy trình:</strong> Nắm chắc trình tự 8 bước từ kiểm tra, thỏa thuận, tất toán đến sang tên đổi chủ.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">02.</span>
                      <span><strong>Kiểm soát dòng tiền:</strong> Tiền chuyển đi đâu, nộp vào tài khoản nào, khi nào phong tỏa và khi nào giải tỏa.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">03.</span>
                      <span><strong>Triệt tiêu rủi ro:</strong> Không để xảy ra tình trạng "tiền mất mà sổ đỏ vẫn nằm trong ngân hàng".</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* Page 2: Quy trình 8 bước tóm lược */}
            {currentPage === 2 && (
              <div className="space-y-4 text-left">
                <div className="border-b border-neutral-200 pb-2">
                  <span className="text-[10px] font-mono text-neutral-500 uppercase">CHƯƠNG 2 · QUY TRÌNH CHUẨN</span>
                  <h2 className="text-xl font-bold text-neutral-950">Lộ Trình 8 Bước An Toàn</h2>
                </div>

                <div className="space-y-3 text-xs">
                  {STEPS_8.slice(0, 4).map((step) => (
                    <div key={step.number} className="p-3 rounded border border-neutral-200 bg-neutral-50/50">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-[10px]">
                          {step.number}
                        </span>
                        <strong className="text-neutral-900 text-xs">{step.title}</strong>
                      </div>
                      <p className="text-neutral-600 text-[11px] mt-1 pl-7">
                        {step.description}
                      </p>
                    </div>
                  ))}
                  <div className="text-center p-2 bg-neutral-100 rounded text-neutral-500 text-[11px] italic">
                    (Các bước 5, 6, 7, 8 chi tiết có trong bản tải về đầy đủ)
                  </div>
                </div>
              </div>
            )}

            {/* Page 3: Case thực tế 6 tỷ */}
            {currentPage === 3 && (
              <div className="space-y-4 text-left">
                <div className="border-b border-neutral-200 pb-2">
                  <span className="text-[10px] font-mono text-neutral-500 uppercase">CHƯƠNG 3 · BÀI TOÁN THỰC TẾ</span>
                  <h2 className="text-xl font-bold text-neutral-950">Giao Dịch 6 Tỷ Đồng Vận Hành Ra Sao?</h2>
                </div>

                <div className="p-4 bg-neutral-900 text-white rounded-lg text-center space-y-3">
                  <div className="text-xs uppercase text-neutral-400 font-mono">TỔNG GIÁ TRỊ GIAO DỊCH</div>
                  <div className="text-3xl font-extrabold text-red-500 font-mono">6.000.000.000 VNĐ</div>

                  <div className="grid grid-cols-2 gap-3 pt-2 border-t border-neutral-800 text-left">
                    <div className="p-2.5 bg-neutral-800 rounded">
                      <div className="text-[10px] text-red-400 font-bold uppercase">Khoản 1 (2,5 Tỷ)</div>
                      <div className="text-xs font-semibold mt-0.5">Tất toán khoản nợ gốc + lãi</div>
                      <div className="text-[10px] text-neutral-400 mt-1">Nộp thẳng tài khoản thu nợ ngân hàng</div>
                    </div>

                    <div className="p-2.5 bg-neutral-800 rounded">
                      <div className="text-[10px] text-emerald-400 font-bold uppercase">Khoản 2 (3,5 Tỷ)</div>
                      <div className="text-xs font-semibold mt-0.5">Tiền chênh lệch còn lại</div>
                      <div className="text-[10px] text-neutral-400 mt-1">Mở tài khoản phong tỏa tại ngân hàng</div>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-neutral-700 leading-relaxed">
                  <strong>Nguyên tắc cốt lõi:</strong> Người bán không được chạm vào số tiền 3,5 tỷ đồng này cho tới khi việc ký công chứng và nộp hồ sơ đăng bộ sang tên người mua hoàn tất. Nếu có bất kỳ trục trặc nào về pháp lý, ngân hàng sẽ hoàn trả số tiền phong tỏa lại cho người mua.
                </p>
              </div>
            )}

            {/* Page 4: 3 Cạm bẫy */}
            {currentPage === 4 && (
              <div className="space-y-4 text-left">
                <div className="border-b border-neutral-200 pb-2">
                  <span className="text-[10px] font-mono text-neutral-500 uppercase">CHƯƠNG 4 · CẢNH BÁO RỦI RO</span>
                  <h2 className="text-xl font-bold text-neutral-950">3 Cạm Bẫy Người Mua Dễ Mắc Nhất</h2>
                </div>

                <div className="space-y-3">
                  {THREE_PITFALLS.map((pitfall, idx) => (
                    <div key={idx} className="p-3 border border-red-200 bg-red-50/40 rounded-lg text-xs">
                      <div className="font-bold text-red-700 text-xs">
                        Bẫy {idx + 1}: {pitfall.title}
                      </div>
                      <p className="text-neutral-700 text-[11px] mt-1">
                        <strong>Hậu quả:</strong> {pitfall.summary}
                      </p>
                      <p className="text-emerald-800 text-[11px] mt-1 font-medium">
                        <strong>Giải pháp:</strong> {pitfall.solution}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Page 5: Trang 22 Preview */}
            {currentPage === 5 && (
              <div className="space-y-4 text-left">
                <div className="border-b border-neutral-200 pb-2">
                  <span className="text-[10px] font-mono text-neutral-500 uppercase">TRANG 22 · PHỤ LỤC THỰC CHIẾN</span>
                  <h2 className="text-xl font-bold text-neutral-950">10 Điều Trước Khi Chuyển Khoản</h2>
                </div>

                <p className="text-xs text-neutral-600">
                  Đây là trang tài liệu quan trọng nhất trong toàn bộ cuốn cẩm nang. Hãy in ra hoặc chụp ảnh lại lưu vào điện thoại trước ngày đi gặp chủ nhà.
                </p>

                <div className="p-4 bg-neutral-50 border border-neutral-300 rounded space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-neutral-900 font-semibold">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Đúng căn nhà và đúng người có quyền bán hợp pháp</span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-900 font-semibold">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Có văn bản xác nhận số tiền tất toán do ngân hàng cấp</span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-900 font-semibold">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Tiền chuyển đi vào đâu (tài khoản thu nợ có kiểm soát)</span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-900 font-semibold">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Có cơ chế phong tỏa an toàn cho phần tiền chênh lệch</span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-900 font-semibold">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Xác định rõ ràng ai là người trực tiếp cầm Sổ gốc</span>
                  </div>
                </div>

                <div className="p-3 bg-neutral-900 text-white rounded text-center">
                  <div className="text-xs font-bold">Muốn sở hữu trọn bộ 23 trang chất lượng cao?</div>
                  <button
                    onClick={() => {
                      onClose();
                      onOpenForm();
                    }}
                    className="mt-2 py-2 px-4 bg-red-600 hover:bg-red-700 text-white rounded font-bold text-xs inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Điền Email Nhận Tài Liệu Miễn Phí</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* Pagination footer */}
            <div className="mt-8 pt-4 border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-500">
              <span>Trang {currentPage} / {totalPages} (Bản xem trước)</span>

              <div className="flex items-center gap-2">
                <button
                  disabled={currentPage <= 1}
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  className="p-1.5 rounded border border-neutral-300 hover:bg-neutral-100 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  disabled={currentPage >= totalPages}
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  className="p-1.5 rounded border border-neutral-300 hover:bg-neutral-100 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
