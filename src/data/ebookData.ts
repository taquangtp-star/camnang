import { StepItem, ChecklistItem } from '../types';

export const EBOOK_INFO = {
  title: 'CẨM NANG 8 BƯỚC MUA NHÀ ĐANG THẾ CHẤP NGÂN HÀNG',
  tagline: 'Làm thế nào để đưa tiền mà vẫn kiểm soát được rủi ro?',
  subheadline: 'Từ lúc đặt cọc, tất toán khoản vay, giải chấp đến khi Sổ hồng chính thức đứng tên người mua.',
  author: 'Nguyễn Nam BĐS',
  website: 'nambds.vn',
  pageCount: 23,
  freePrice: 'Miễn phí 100%',
};

export const CORE_PAIN_POINTS = [
  {
    index: '01',
    question: 'Tôi phải chuyển tiền cho ai?',
    detail: 'Cho chủ nhà? Cho ngân hàng? Hay phải chia thành nhiều khoản riêng biệt để tránh rủi ro?',
    quote: 'Nếu chuyển toàn bộ cho chủ nhà, họ có mang nộp vào ngân hàng để rút Sổ ra không, hay mang đi trả nợ khác?',
  },
  {
    index: '02',
    question: 'Đưa tiền rồi chủ nhà không giải chấp thì sao?',
    detail: 'Đây thường là điều người mua nhà lo sợ nhất khi đã xuất vài tỷ tiền mặt nhưng Sổ vẫn nằm trong két sắt ngân hàng.',
    quote: 'Mất tiền cọc, nợ ngân hàng không giảm, người mua rơi vào thế tiến thoái lưỡng nan.',
  },
  {
    index: '03',
    question: 'Bao giờ mới nên công chứng?',
    detail: 'Giải chấp trước hay công chứng trước? Sang tên lúc nào để đảm bảo pháp lý vững chắc nhất?',
    quote: 'Ký công chứng khi Sổ chưa xóa thế chấp tiềm ẩn nguy cơ hợp đồng vô hiệu hoặc bị bên thứ ba ngăn chặn.',
  },
];

export const STEPS_8: StepItem[] = [
  {
    number: '01',
    title: 'Kiểm tra hiện trạng & xác thực dư nợ',
    subtitle: 'Thực địa, quy hoạch và ngân hàng',
    description: 'Xác minh chính xác người đứng tên trên sổ, hiện trạng nhà đất thực tế và yêu cầu văn bản xác nhận số dư nợ gốc + lãi đến ngày tất toán từ ngân hàng đang giữ sổ.',
    keyAction: 'Yêu cầu người bán cung cấp Thông báo số dư nợ chính thức có đóng dấu ngân hàng.',
    warningNote: 'Tuyệt đối không tin số dư nợ người bán tự thông báo miệng.',
  },
  {
    number: '02',
    title: 'Thỏa thuận ba bên (Người Mua – Người Bán – Ngân Hàng)',
    subtitle: 'Ràng buộc trách nhiệm bằng văn bản',
    description: 'Thống nhất cơ chế: Tiền của người mua sẽ nộp trực tiếp vào tài khoản tất toán khoản vay tại quầy ngân hàng, không đưa qua tay người bán.',
    keyAction: 'Lập biên bản thỏa thuận ba bên nêu rõ lịch trình rút sổ và bàn giao giấy tờ.',
  },
  {
    number: '03',
    title: 'Nộp tiền tất toán & phong tỏa phần chênh lệch',
    subtitle: 'Kiểm soát chặt chẽ từng đồng vốn',
    description: 'Tiền tất toán chuyển thẳng vào tài khoản thu nợ. Phần tiền mua còn lại đưa vào tài khoản phong tỏa (escrow) tại ngân hàng, chỉ giải tỏa khi sang tên xong.',
    keyAction: 'Nhận Phiếu thu nợ gốc/lãi và Giấy xác nhận đã hoàn thành nghĩa vụ tài chính.',
  },
  {
    number: '04',
    title: 'Ngân hàng xuất kho trả Sổ hồng & Hồ sơ giải chấp',
    subtitle: 'Bàn giao trực tiếp cho các bên',
    description: 'Ngân hàng phát hành Đơn yêu cầu xóa đăng ký thế chấp, thông báo giải chấp và bàn giao Giấy chứng nhận quyền sử dụng đất gốc.',
    keyAction: 'Người mua trực tiếp đi cùng người bán hoặc người được ủy quyền để giữ chặt hồ sơ gốc.',
  },
  {
    number: '05',
    title: 'Thực hiện thủ tục Xóa thế chấp tại Chi nhánh VPĐKĐĐ',
    subtitle: 'Giải phóng pháp lý cho tài sản',
    description: 'Nộp hồ sơ xóa đăng ký biện pháp bảo đảm tại Văn phòng Đăng ký đất đai quận/huyện để được đóng dấu xác nhận xóa thế chấp trên trang 4 hoặc phụ lục.',
    keyAction: 'Chờ nhận kết quả xóa thế chấp chính thức trước khi tiến hành ký công chứng mua bán.',
  },
  {
    number: '06',
    title: 'Ký Hợp đồng mua bán chính thức tại Phòng Công Chứng',
    subtitle: 'Khi tài sản đã hoàn toàn sạch sẽ',
    description: 'Công chứng viên kiểm tra hệ thống UCHI/cơ sở dữ liệu công chứng, xác nhận tài sản đã xóa thế chấp và đủ điều kiện giao dịch hợp pháp.',
    keyAction: 'Ký công chứng chuyển nhượng quyền sử dụng đất và tài sản gắn liền với đất.',
    warningNote: 'Nói KHÔNG với ký công chứng treo trước khi xóa thế chấp.',
  },
  {
    number: '07',
    title: 'Kê khai thuế & nộp hồ sơ đăng bộ sang tên',
    subtitle: 'Chuyển giao quyền sở hữu nhà nước',
    description: 'Nộp hồ sơ sang tên tại bộ phận Một cửa hoặc VPĐKĐĐ, hoàn thành nghĩa vụ thuế thu nhập cá nhân và lệ phí trước bạ theo quy định.',
    keyAction: 'Nhận Giấy hẹn trả kết quả đăng bộ đứng tên người mua.',
  },
  {
    number: '08',
    title: 'Nhận Sổ hồng đứng tên & giải tỏa tài khoản phong tỏa',
    subtitle: 'Giao dịch hoàn tất 100% an toàn',
    description: 'Người mua cầm trên tay Sổ hồng mới đứng tên mình. Ngân hàng tiến hành giải tỏa số tiền còn lại trong tài khoản phong tỏa cho người bán.',
    keyAction: 'Bàn giao nhà thực địa, nhận bàn giao chìa khóa và hồ sơ hoàn tất.',
  },
];

export const THREE_PITFALLS = [
  {
    title: 'Tin vào số dư nợ do người bán tự nói',
    summary: 'Người bán bảo chỉ nợ 1 tỷ, nhưng thực tế cả gốc + lãi quá hạn + phạt đã lên tới 1,8 tỷ đồng.',
    solution: 'Luôn yêu cầu văn bản xác nhận dư nợ chính thức do ngân hàng cấp trong vòng 3–5 ngày gần nhất.',
  },
  {
    title: 'Chuyển tiền trực tiếp cho người bán tự đi rút Sổ',
    summary: 'Người bán cầm 2 tỷ của bạn nhưng mang đi xử lý việc cá nhân khác hoặc bị chủ nợ khác xiết, không nộp vào ngân hàng.',
    solution: 'Nộp trực tiếp tại quầy ngân hàng vào tài khoản chỉ định tất toán khoản vay có giám sát của cán bộ tín dụng.',
  },
  {
    title: 'Ký hợp đồng "Công chứng treo"',
    summary: 'Ký trước hồ sơ công chứng rồi chờ rút sổ sau. Nếu có tranh chấp phát sinh hoặc người bán đổi ý, bạn mất trắng thế chủ động.',
    solution: 'Chỉ ký công chứng mua bán khi sổ đã hoàn tất thủ tục xóa thế chấp hợp pháp tại Văn phòng Đăng ký đất đai.',
  },
];

export const CHECKLIST_ITEMS: ChecklistItem[] = [
  {
    id: 'c1',
    title: 'Đúng người đứng tên & tình trạng hôn nhân',
    detail: 'Kiểm tra CMND/CCCD, sổ hộ khẩu/xác nhận cư trú, giấy đăng ký kết hôn hoặc giấy xác nhận độc thân của toàn bộ chủ sở hữu.',
    riskIfIgnored: 'Vợ/chồng hoặc đồng sở hữu từ chối ký, hợp đồng bị tuyên vô hiệu.',
    status: 'critical',
  },
  {
    id: 'c2',
    title: 'Ngân hàng đang nhận thế chấp thực tế',
    detail: 'Đối chiếu thông tin thế chấp ở Trang 4 Sổ hồng với tên chi nhánh ngân hàng đang giữ sổ.',
    riskIfIgnored: 'Nhầm lẫn giữa thế chấp ngân hàng và thế chấp cho bên thứ ba (tín dụng đen).',
    status: 'critical',
  },
  {
    id: 'c3',
    title: 'Hiện trạng thực tế & ranh giới nhà đất',
    detail: 'Đối chiếu bản vẽ sơ đồ nhà đất với ranh giới thực tế, có phần xây dựng cơi nới sai phép không được công nhận hay không.',
    riskIfIgnored: 'Bị đình chỉ sang tên hoặc buộc tháo dỡ công trình vi phạm.',
    status: 'important',
  },
  {
    id: 'c4',
    title: 'Quy hoạch và tình trạng ngăn chặn tranh chấp',
    detail: 'Kiểm tra quy hoạch tại Phòng Quản lý đô thị / TN&MT và kiểm tra thông tin ngăn chặn tại Chi nhánh VPĐKĐĐ địa phương.',
    riskIfIgnored: 'Dính quy hoạch giải tỏa trắng hoặc nhà đất đang bị phong tỏa thi hành án.',
    status: 'critical',
  },
  {
    id: 'c5',
    title: 'Văn bản xác nhận số tiền tất toán chính xác',
    detail: 'Văn bản tính dư nợ gốc + lãi + phí phạt trả nợ trước hạn do ngân hàng phát hành tính đến ngày giao dịch.',
    riskIfIgnored: 'Phát sinh thiếu tiền tất toán khiến ngân hàng không đồng ý xuất Sổ.',
    status: 'critical',
  },
  {
    id: 'c6',
    title: 'Cơ chế xử lý phần tiền chênh lệch còn lại',
    detail: 'Mở tài khoản phong tỏa (escrow) tại ngân hàng thỏa thuận rõ điều kiện giải tỏa tiền sau khi sang tên đổi chủ thành công.',
    riskIfIgnored: 'Chủ nhà nhận tiền xong né tránh ký các bước tiếp theo.',
    status: 'critical',
  },
  {
    id: 'c7',
    title: 'Điều kiện hoàn cọc & phạt cọc minh bạch',
    detail: 'Quy định rõ thời hạn rút sổ tối đa, nếu quá hạn hoặc ngân hàng không giải chấp thì người bán phải hoàn cọc + phạt cọc.',
    riskIfIgnored: 'Bị giam vốn nhiều tháng không đòi được tiền.',
    status: 'important',
  },
  {
    id: 'c8',
    title: 'Thỏa thuận rõ trách nhiệm chi phí & thuế phí',
    detail: 'Ai nộp thuế TNCN, ai nộp lệ phí trước bạ, phí công chứng, phí xóa thế chấp, phí đăng bộ.',
    riskIfIgnored: 'Bất đồng chia tiền thuế vào phút chót làm hoãn giao dịch.',
    status: 'important',
  },
  {
    id: 'c9',
    title: 'Biên bản thỏa thuận rõ ràng ai là người giữ Sổ gốc',
    detail: 'Sau khi ngân hàng xuất sổ, người mua hoặc văn phòng luật sư/công chứng được chỉ định phải là người cầm trực tiếp.',
    riskIfIgnored: 'Người bán cầm sổ đi thế chấp chỗ khác hoặc mang về cất giấu.',
    status: 'critical',
  },
  {
    id: 'c10',
    title: 'Không còn bất kỳ điều khoản nào chỉ cam kết bằng miệng',
    detail: 'Toàn bộ mốc thời gian, tài khoản chuyển tiền, trách nhiệm bàn giao phải thể hiện đầy đủ trên giấy tờ có chữ ký.',
    riskIfIgnored: 'Lời nói gió bay, không có căn cứ pháp lý khi xảy ra tranh chấp.',
    status: 'critical',
  },
];

export const TARGET_AUDIENCES = [
  {
    title: 'Đang chuẩn bị mua nhà đất',
    desc: 'và phát hiện Sổ hồng căn nhà ưng ý đang được thế chấp vay vốn tại ngân hàng.',
  },
  {
    title: 'Lần đầu gặp giao dịch thế chấp',
    desc: 'chưa hiểu quy trình giải chấp, tất toán, phong tỏa tài khoản và quyền lợi của người mua.',
  },
  {
    title: 'Sắp đặt cọc mua nhà',
    desc: 'nhưng còn lo lắng, chưa biết điều khoản hợp đồng cọc nào bắt buộc phải có để giữ an toàn.',
  },
  {
    title: 'Muốn tự chủ và kiểm soát rủi ro',
    desc: 'thay vì phó mặc toàn bộ số tiền mồ hôi nước mắt vài tỷ đồng cho người bán hay môi giới thiếu kinh nghiệm.',
  },
];
