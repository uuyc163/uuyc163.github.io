window.CODES = {
 "cant-connect": {
  "cat": "Kết nối / rớt",
  "name": "Không kết nối / kết nối thất bại",
  "alias": "khong ket noi ket noi that bai khong the ket noi timeout khong vao duoc cant connect 连不上",
  "sym": "Client báo \"không thể kết nối tới máy tính từ xa / thất bại / timeout\"; bạn không vào được máy chủ.",
  "cause": "Máy chủ tắt / chưa đăng nhập / ngoại tuyến, tường lửa hoặc diệt virus chặn, công tắc từ xa lỗi, IP nhà đổi, hoặc cổng bị chiếm.",
  "fix": "1) Xác nhận máy chủ bật, đăng nhập và trực tuyến; 2) cho phép UU Remote trong tường lửa và diệt virus; 3) tắt rồi bật công tắc từ xa để đặt lại; 4) khởi động lại router để làm mới IP; 5) nếu cổng 3389 bị chiếm, đổi cổng hoặc dừng chương trình xung đột.",
  "prevent": "Cấp cho máy chủ IP LAN cố định, thêm vào danh sách tin cậy, giữ bật và trực tuyến.",
  "sev": "Cao"
 },
 "black-screen": {
  "cat": "Hình ảnh / màn hình đen",
  "name": "Màn hình đen sau khi kết nối",
  "alias": "man hinh den den khong co hinh black screen ket noi den 黑屏",
  "sym": "Kết nối được nhưng hình hoàn toàn đen, thường khi nghe được tiếng và thấy chuột.",
  "cause": "Độ phân giải không được hỗ trợ, độ phân giải toàn màn hình của game != độ phân giải phát, driver GPU cũ, hoặc bộ nhớ đệm bitmap bền vững hỏng.",
  "fix": "1) Đổi máy chủ sang độ phân giải phổ biến như 1080p; 2) chuyển game toàn màn hình sang cửa sổ; 3) cập nhật driver GPU; 4) tắt \"bộ nhớ đệm bitmap bền vững\" (tab Hiệu năng RDP).",
  "prevent": "Dùng độ phân giải tương thích, giữ driver GPU mới.",
  "sev": "Cao"
 },
 "lag": {
  "cat": "Độ trễ / lag",
  "name": "Lag / trễ thao tác",
  "alias": "lag do tre tre thao tac giat khung khung lag cham 卡顿",
  "sym": "Trễ thao tác rõ rệt, giật / rớt khung hình, phản hồi kém.",
  "cause": "Nghẽn mạng / mất gói, Wi-Fi yếu, upload máy chủ thấp, bitrate vượt băng thông, hoặc độ trễ bộ mã hóa bất thường từ driver GPU mới.",
  "fix": "1) Chuyển sang cáp hoặc lại gần Wi-Fi 5 GHz; 2) hạ giới hạn bitrate/băng thông để có dư; 3) kiểm mất gói, đóng app ngốn băng thông khác; 4) ở máy chủ quay lại driver GPU ổn định.",
  "prevent": "Ưu tiên cáp; bitrate < upload có dư.",
  "sev": "Trung bình"
 },
 "disconnect": {
  "cat": "Kết nối / rớt",
  "name": "Rớt thường xuyên / rớt sau vài giây",
  "alias": "rot ket noi rot thuong xuyen rot sau vai giay cu rot disconnect 掉线",
  "sym": "Rớt sau vài giây hoặc một phút, kết nối lại liên tục.",
  "cause": "Mạng không ổn định / mất gói, chưa đặt keep-alive, vấn đề lớp bảo mật hoặc chứng chỉ, hoặc lỗi giao thức TermDD X.224 (Event ID 50).",
  "fix": "1) Kiểm mất gói và độ ổn định định tuyến; 2) đặt khoảng keep-alive ở máy chủ; 3) xem lớp bảo mật và mã hóa; 4) xem Event ID 50 trong Trình xem Sự kiện để định vị gián đoạn giao thức.",
  "prevent": "Mạng ổn định, lớp bảo mật và chứng chỉ đúng.",
  "sev": "Cao"
 },
 "no-audio": {
  "cat": "Âm thanh / thiết bị",
  "name": "Mất tiếng",
  "alias": "mat tieng khong co am thanh khong nghe duoc tat tieng khong loa 没声音",
  "sym": "Hình tốt nhưng đầu từ xa mất tiếng.",
  "cause": "Máy chủ không có thiết bị âm thanh dùng được (PC đám mây / không loa hiện \"Không có loa hoặc tai nghe được cắm\") hoặc chọn sai thiết bị thu.",
  "fix": "1) Cài thiết bị âm thanh ảo (như VB-Cable) ở máy chủ; 2) chọn đúng thiết bị thu trong cài đặt; 3) nếu có người đang kết nối, kết nối lại để áp dụng.",
  "prevent": "Đảm bảo máy chủ có thiết bị xuất âm thanh dùng được.",
  "sev": "Trung bình"
 },
 "controller": {
  "cat": "Âm thanh / thiết bị",
  "name": "Tay cầm / thiết bị không nhận",
  "alias": "tay cam gamepad khong nhan thiet bi ban phim chuot joystick khong phan hoi 手柄",
  "sym": "Tay cầm, bàn phím/chuột hoặc thiết bị khác không được nhận hoặc không phản hồi ở đầu từ xa.",
  "cause": "Passthrough tay cầm chưa bật ở client, thiếu driver tay cầm ở máy chủ, hoặc chương trình khác giữ thiết bị độc quyền.",
  "fix": "1) Bật passthrough tay cầm/thiết bị trong UU Remote; 2) cài driver tay cầm phù hợp ở máy chủ; 3) kết nối lại và đóng chương trình giữ thiết bị độc quyền.",
  "prevent": "Cài driver trước và bật passthrough.",
  "sev": "Trung bình"
 },
 "port-conflict": {
  "cat": "Kết nối / rớt",
  "name": "Xung đột cổng / vấn đề listener",
  "alias": "xung dot cong cong 3389 cong dang dung listener netstat 端口",
  "sym": "Listener bất thường / kết nối bị từ chối, hay gặp ở RDP tự host / cùng máy.",
  "cause": "Cổng RDP mặc định 3389 (hoặc cổng đã đặt) bị chương trình khác dùng.",
  "fix": "1) Dùng netstat -a -o để tìm PID đang dùng cổng; 2) đối chiếu bằng tasklist /svc; 3) đổi cổng hoặc dừng chương trình xung đột, rồi khởi động lại dịch vụ từ xa.",
  "prevent": "Tránh nhiều công cụ từ xa tranh cùng cổng.",
  "sev": "Trung bình"
 },
 "sleep-wake": {
  "cat": "Kết nối / rớt",
  "name": "Không tới được khi ngủ/ngủ đông",
  "alias": "ngu ngu dong danh thuc wol wake on lan khong ket noi dang ngu 睡眠",
  "sym": "Máy chủ không phản hồi và không tài nào kết nối.",
  "cause": "Máy chủ vào chế độ ngủ hoặc ngủ đông, nên card mạng mất điện và không phản hồi.",
  "fix": "1) Đặt gói điện máy chủ thành không bao giờ ngủ/ngủ đông; 2) đánh thức bằng Wake-on-LAN hoặc bật nguồn từ xa UU; 3) bắt đầu kết nối sau khi thức.",
  "prevent": "Tắt ngủ/ngủ đông, cấu hình bật nguồn từ xa.",
  "sev": "Trung bình"
 },
 "ipv6": {
  "cat": "Kết nối / rớt",
  "name": "IPv6 gây kết nối chập chờn",
  "alias": "ipv6 chap chon luc duoc luc khong khong on dinh khi duoc khi mat 时连时断",
  "sym": "Chập chờn không kết nối, lúc được lúc không, mạng khác lại kết nối được.",
  "cause": "Hệ thống thích ứng IPv6 kém và ưu tiên một đường IPv6 không tới được.",
  "fix": "1) Tắt IPv6 tạm thời để thử có phục hồi không; 2) đặt router/hệ thống về IPv4; 3) đảm bảo hai đầu dùng cùng ngăn xếp mạng.",
  "prevent": "Giữ hai đầu cùng ngăn xếp; tắt IPv6 nếu cần.",
  "sev": "Thấp"
 },
 "artifacts": {
  "cat": "Hình ảnh / màn hình đen",
  "name": "Nhiễu / hình mờ",
  "alias": "nhieu mo mo macroblock vo pixel chat luong thap 花屏",
  "sym": "Nhiễu / khối vuông, hoặc hình nhìn chung mờ, không rõ.",
  "cause": "Bitrate quá thấp và tự hạ, giải mã phần cứng bất thường, hoặc mất gói làm vỡ hình.",
  "fix": "1) Tăng bitrate; 2) tắt giải mã phần cứng ở máy chủ/client để thử giải mã phần mềm; 3) kiểm mất gói và độ ổn định mạng.",
  "prevent": "Cấp đủ bitrate; giữ mạng ổn định và không mất gói.",
  "sev": "Thấp"
 },
 "security-error": {
  "cat": "Kết nối / rớt",
  "name": "Lỗi bảo mật - không kết nối",
  "alias": "loi bao mat security error chung chi ma hoa xac thuc thong tin dang nhap 安全错误",
  "sym": "Hiện \"do lỗi bảo mật, client không thể kết nối tới máy tính từ xa\".",
  "cause": "Lớp xác thực/mã hóa cấu hình sai, hoặc chứng chỉ giấy phép (ủy quyền) hỏng.",
  "fix": "1) Cấu hình đúng lớp bảo mật và mức mã hóa; 2) nếu chứng chỉ giấy phép hỏng, sau khi sao lưu xóa khóa registry chứng chỉ X509 và kích hoạt lại dịch vụ cấp phép; 3) xác nhận giờ và thông tin đăng nhập đúng.",
  "prevent": "Chứng chỉ và cấu hình cấp phép đúng.",
  "sev": "Cao"
 },
 "no-permission": {
  "cat": "Âm thanh / thiết bị",
  "name": "Tài khoản không có quyền từ xa",
  "alias": "khong quyen tu choi truy cap nguoi dung may tinh tu xa gioi han ket noi quyen dang nhap 权限",
  "sym": "Sau khi đăng nhập bạn không thể bắt đầu điều khiển từ xa, kèm cảnh báo thiếu quyền hoặc bị từ chối.",
  "cause": "Tài khoản không trong nhóm \"Người dùng Máy tính Từ xa\", hoặc chính sách \"Giới hạn số kết nối\" chặn.",
  "fix": "1) Thêm tài khoản vào nhóm \"Người dùng Máy tính Từ xa\" của máy chủ; 2) kiểm và nới chính sách nhóm \"Giới hạn số kết nối\"; 3) xác nhận tài khoản có quyền đăng nhập từ xa.",
  "prevent": "Cấp quyền tài khoản đúng, chính sách giới hạn kết nối hợp lý.",
  "sev": "Trung bình"
 }
};
window.LABELS = {"miss": "Chưa có - thử cách diễn đạt khác (vd. không kết nối / màn hình đen / lag / mất tiếng / tay cầm) hoặc xem bảng tra đầy đủ bên dưới.", "codeword": ""};
window.FIELDS = [["sym", "Triệu chứng"], ["cause", "Nguyên nhân khả dĩ nhất"], ["fix", "Các bước khắc phục"], ["prevent", "Phòng ngừa / tự kiểm"], ["sev", "Mức độ"]];
window.THEAD = ["Vấn đề", "Danh mục", "Triệu chứng", "Hướng khắc phục"];
window.CHIPS = ["không kết nối", "màn hình đen", "lag", "mất tiếng", "rớt kết nối", "tay cầm"];
