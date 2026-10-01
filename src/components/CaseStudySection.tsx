import React, { useState } from 'react';
import { ArrowDown, ShieldAlert, ShieldCheck, CheckCircle2, Building2, User, Landmark, HelpCircle } from 'lucide-react';

export const CaseStudySection: React.FC = () => {
  const [selectedMode, setSelectedMode] = useState<'safe' | 'risky'>('safe');
  const [housePrice, setHousePrice] = useState(6.0); // Tỷ VNĐ
  const [loanAmount, setLoanAmount] = useState(2.5); // Tỷ VNĐ

  const remainingAmount = Math.max(0, housePrice - loanAmount);

  return (
    <section id="case-6-ty" className="py-16 sm:py-20 bg-neutral-900 text-white relative overflow-hidden">
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-800 border border-neutral-700 text-xs font-mono font-bold uppercase text-red-400">
            <span>VÍ DỤ THỰC CHIẾN TỪ CẨM NANG</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-3 tracking-tight">
            Một giao dịch 6 tỷ thực tế vận hành như thế nào?
          </h2>

          <p className="text-neutral-300 text-sm sm:text-base mt-3 leading-relaxed">
            Mục tiêu không phải là "không đưa tiền", mà là <strong>biết tiền đang ở đâu, dùng để làm gì và khi nào được giải tỏa</strong>.
          </p>
        </div>

        {/* Comparison Mode Selector */}
        <div className="mt-8 flex justify-center">
          <div className="p-1 bg-neutral-800 rounded-xl border border-neutral-700 flex items-center gap-1">
            <button
              onClick={() => setSelectedMode('safe')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                selectedMode === 'safe'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <ShieldCheck className="w-4 h-4 text-white" />
              <span>Quy trình kiểm soát an toàn (Chuẩn Nguyễn Nam)</span>
            </button>

            <button
              onClick={() => setSelectedMode('risky')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                selectedMode === 'risky'
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <ShieldAlert className="w-4 h-4 text-white" />
              <span>Cách làm rủi ro thường gặp</span>
            </button>
          </div>
        </div>

        {/* Diagram Flow Board */}
        <div className="mt-10 bg-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-10 shadow-2xl">
          
          {selectedMode === 'safe' ? (
            /* Safe flow diagram as described in user brief */
            <div className="space-y-6">
              
              {/* Box 1: Tổng giá trị căn nhà */}
              <div className="max-w-md mx-auto p-4 sm:p-5 rounded-xl bg-neutral-900 border-2 border-neutral-700 text-center shadow-lg">
                <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 font-bold">
                  GIÁ THỎA THUẬN MUA BÁN
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  CĂN NHÀ: <span className="text-red-500 font-mono">6 TỶ</span>
                </div>
                <div className="text-xs text-neutral-400 mt-1">
                  Sổ hồng đang thế chấp bảo đảm cho khoản vay tại Ngân Hàng
                </div>
              </div>

              {/* Connecting Arrow */}
              <div className="flex flex-col items-center justify-center text-red-500">
                <ArrowDown className="w-6 h-6 animate-bounce" />
                <span className="text-[11px] font-mono text-neutral-400 uppercase mt-0.5">
                  PHÂN TÁCH DÒNG TIỀN THEO BIÊN BẢN 3 BÊN
                </span>
              </div>

              {/* Box 2 & 3: Two split streams */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                
                {/* Left Stream: Ngân hàng 2,5 tỷ */}
                <div className="p-5 rounded-xl bg-neutral-900/90 border border-red-500/40 relative overflow-hidden">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-red-400 uppercase">
                      KHOẢN 1 · TẤT TOÁN VAY
                    </span>
                    <Landmark className="w-4 h-4 text-red-400" />
                  </div>

                  <div className="text-xl sm:text-2xl font-bold text-white font-mono">
                    2,5 TỶ
                  </div>

                  <div className="text-xs font-semibold text-neutral-200 mt-2">
                    Nộp trực tiếp vào tài khoản thu nợ ngân hàng
                  </div>

                  <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                    Người mua cầm ủy nhiệm chi nộp tại quầy giao dịch ngân hàng cùng cán bộ tín dụng. <strong>Không qua tay người bán</strong>.
                  </p>

                  <div className="mt-3 pt-3 border-t border-neutral-800 text-[11px] text-emerald-400 flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>Ngân hàng phát hành đơn xóa thế chấp & trả Sổ gốc</span>
                  </div>
                </div>

                {/* Right Stream: 3,5 tỷ phong tỏa */}
                <div className="p-5 rounded-xl bg-neutral-900/90 border border-emerald-500/40 relative overflow-hidden">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-emerald-400 uppercase">
                      KHOẢN 2 · PHẦN TIỀN CÒN LẠI
                    </span>
                    <Building2 className="w-4 h-4 text-emerald-400" />
                  </div>

                  <div className="text-xl sm:text-2xl font-bold text-white font-mono">
                    3,5 TỶ
                  </div>

                  <div className="text-xs font-semibold text-neutral-200 mt-2">
                    Mở tài khoản phong tỏa (Escrow) tại ngân hàng
                  </div>

                  <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                    Số tiền được ngân hàng khóa lại. Người bán biết chắc chắn tiền đã có, nhưng chỉ rút được khi hoàn tất nghĩa vụ sang tên.
                  </p>

                  <div className="mt-3 pt-3 border-t border-neutral-800 text-[11px] text-emerald-400 flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>Đảm bảo người mua không bị giữ tiền hoặc bỏ ngang</span>
                  </div>
                </div>

              </div>

              {/* Connecting Arrow */}
              <div className="flex flex-col items-center justify-center text-emerald-500">
                <ArrowDown className="w-6 h-6" />
              </div>

              {/* Box 4: Hoàn thành sang tên */}
              <div className="max-w-md mx-auto p-4 rounded-xl bg-neutral-900 border border-neutral-700 text-center">
                <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold flex items-center justify-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>HOÀN THÀNH SANG TÊN & ĐĂNG BỘ SỔ HỒNG</span>
                </div>
                <div className="text-xs text-neutral-300 mt-1">
                  Công chứng viên ký duyệt hợp đồng → Nộp hồ sơ tại VPĐKĐĐ quận/huyện
                </div>
              </div>

              {/* Connecting Arrow */}
              <div className="flex flex-col items-center justify-center text-white">
                <ArrowDown className="w-6 h-6" />
              </div>

              {/* Box 5: Người bán nhận tiền */}
              <div className="max-w-md mx-auto p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/60 text-center">
                <div className="text-sm font-bold text-white uppercase tracking-wider">
                  NGƯỜI BÁN NHẬN ĐỦ 3,5 TỶ ĐỒNG TỪ TÀI KHOẢN PHONG TỎA
                </div>
                <div className="text-xs text-emerald-200 mt-1">
                  Người mua cầm chắc Sổ hồng mới đứng tên mình · Hai bên hoàn tất giao dịch an toàn 100%
                </div>
              </div>

            </div>
          ) : (
            /* Risky scenario explanation */
            <div className="space-y-5 text-left">
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs sm:text-sm">
                <strong>Kịch bản tai họa thường thấy trên thị trường:</strong> Người mua chuyển trước 1,5 tỷ - 2,5 tỷ tiền mặt vào tài khoản cá nhân của chủ nhà với thỏa thuận miệng: "Anh tự đi nộp ngân hàng rút sổ ra rồi tuần sau mình ra công chứng nhé".
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-lg bg-neutral-900 border border-neutral-800">
                  <div className="font-bold text-red-400 mb-1">Rủi ro 01</div>
                  <div className="text-white font-semibold">Chủ nhà dùng tiền vào việc khác</div>
                  <p className="text-neutral-400 mt-1">
                    Cầm 2,5 tỷ xong mang đi trả nợ giang hồ, đảo nợ kinh doanh hoặc tiêu xài, khoản nợ ngân hàng vẫn còn nguyên.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-neutral-900 border border-neutral-800">
                  <div className="font-bold text-red-400 mb-1">Rủi ro 02</div>
                  <div className="text-white font-semibold">Bị chủ nợ khác kê biên ngăn chặn</div>
                  <p className="text-neutral-400 mt-1">
                    Ngay khi ngân hàng vừa xuất sổ chuẩn bị xóa chấp thì tài sản bị Tòa án hoặc Thi hành án phát lệnh ngăn chặn.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-neutral-900 border border-neutral-800">
                  <div className="font-bold text-red-400 mb-1">Rủi ro 03</div>
                  <div className="text-white font-semibold">Ép giá người mua</div>
                  <p className="text-neutral-400 mt-1">
                    Người bán lấy được sổ ra nhưng thấy giá nhà đất đang lên, đòi tăng giá thêm 300 triệu mới chịu ký công chứng.
                  </p>
                </div>
              </div>

              <div className="text-center pt-2">
                <button
                  onClick={() => setSelectedMode('safe')}
                  className="px-5 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold text-xs transition-colors cursor-pointer"
                >
                  Xem Lại Quy Trình Kiểm Soát An Toàn Của Nguyễn Nam →
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Key Takeaway Banner */}
        <div className="mt-8 p-4 sm:p-5 rounded-xl bg-neutral-800/80 border border-neutral-700 text-center max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm text-neutral-300 font-medium">
            💡 <strong className="text-white">Điểm mấu chốt:</strong> Người bán không phải lo người mua quỵt tiền vì 3,5 tỷ đã nằm trong tài khoản phong tỏa ngân hàng. Người mua cũng không lo mất tiền vì chỉ khi Sổ hồng được hoàn thành đăng bộ thì tiền mới chảy vào tay người bán.
          </p>
        </div>

      </div>
    </section>
  );
};
