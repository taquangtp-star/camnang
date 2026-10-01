import React from 'react';
import { ArrowUp, BookOpen, ShieldCheck, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 text-neutral-400 border-t border-neutral-900 pt-12 pb-16 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-neutral-800/80">
          
          {/* Brand & Author lockup */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2 text-white font-extrabold text-base tracking-tight uppercase">
              <span className="w-2.5 h-2.5 bg-red-600 rounded-xs" />
              <span>NGUYỄN NAM BĐS</span>
            </div>

            <p className="text-neutral-400 leading-relaxed max-w-md text-xs">
              Nam xây dựng các nội dung BĐS theo hướng đơn giản hóa những vấn đề khó để người mua có thể hiểu rõ trước khi đưa ra quyết định chuyển tiền.
            </p>

            <div className="flex items-center gap-3 pt-1 text-[11px] text-neutral-300">
              <span className="font-semibold text-white">Trang chính thức:</span>
              <a 
                href="https://nambds.vn" 
                target="_blank" 
                rel="noreferrer noopener"
                className="text-red-400 hover:text-red-300 underline font-mono flex items-center gap-1"
              >
                <span>nambds.vn</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div className="text-white font-bold text-xs uppercase tracking-wider mb-3">
              Mục lục nội dung
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#noi-dau" className="hover:text-white transition-colors">3 Nỗi lo lớn nhất</a>
              </li>
              <li>
                <a href="#quy-trinh-8-buoc" className="hover:text-white transition-colors">Quy trình 8 bước chuẩn</a>
              </li>
              <li>
                <a href="#case-6-ty" className="hover:text-white transition-colors">Case thực tế nhà 6 tỷ</a>
              </li>
              <li>
                <a href="#bo-checklist" className="hover:text-white transition-colors">Checklist trước khi chuyển tiền</a>
              </li>
              <li>
                <a href="#cam-bay" className="hover:text-white transition-colors">3 Cạm bẫy thường gặp</a>
              </li>
            </ul>
          </div>

          {/* Core values */}
          <div>
            <div className="text-white font-bold text-xs uppercase tracking-wider mb-3">
              Cam kết tài liệu
            </div>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-red-500 shrink-0" />
                <span>Hoàn toàn miễn phí 100%</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-red-500 shrink-0" />
                <span>Không chèo kéo mua bán BĐS</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-red-500 shrink-0" />
                <span>Bảo mật tuyệt đối email</span>
              </li>
              <li className="flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-neutral-300 shrink-0" />
                <span>23 Trang kiến thức thực chiến</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal disclaimer & Back to top */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <p className="text-center md:text-left max-w-2xl leading-relaxed">
            * Miễn trừ trách nhiệm: Cẩm nang được biên soạn dựa trên kinh nghiệm thực tế trong giao dịch bất động sản và các quy định pháp luật hiện hành tại Việt Nam. Người mua nên kết hợp tham vấn thêm ý kiến của luật sư hoặc công chứng viên đối với từng hồ sơ nhà đất cụ thể.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-neutral-400 hover:text-white py-1.5 px-3 rounded bg-neutral-900 border border-neutral-800 transition-colors shrink-0 cursor-pointer"
          >
            <span>Lên đầu trang</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="mt-6 text-center text-neutral-600 text-[11px] font-mono">
          © {new Date().getFullYear()} NGUYỄN NAM BĐS · NAMBDS.VN · ALL RIGHTS RESERVED
        </div>

      </div>
    </footer>
  );
};
