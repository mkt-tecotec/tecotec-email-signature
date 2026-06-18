Trước khi bất cứ thứ gì phải đọc ở file D:\Tecotec Group\tecotec-email-signature\Email-Signature-Best-Practice.md trước
Sau khi hoàn thành công việc, BẮT BUỘC phải hỏi người dùng xem có cần chỉnh sửa cấu hình domain không (ví dụ: baseUrl trong App.jsx).

---

# Tổng quan dự án (Project Overview)

## Mục đích
Dự án **Tecotec Email Signature Generator** là một công cụ nội bộ giúp nhân viên thuộc TECOTEC Group và các công ty thành viên (OES, ECOM-TRIMOS,...) tự động tạo chữ ký email chuẩn quy định của công ty một cách dễ dàng, nhất quán và chuyên nghiệp.

## Công nghệ sử dụng
- **Frontend Framework**: React (Vite)
- **Cấu trúc dữ liệu**: Quản lý template thông qua `public/templates.json` và render linh hoạt các file HTML tĩnh từ thư mục `public/templates/`.
- **Styling**: Sử dụng Vanilla CSS hoặc style inline trực tiếp trong HTML để tối ưu hiển thị tốt nhất trên các Email Client (Outlook, Gmail, Apple Mail...).

## Tính năng cốt lõi
1. **Nhập liệu động (Dynamic Data Entry)**: Form nhập thông tin cá nhân (Tên, Chức danh, Email, SĐT, v.v.).
2. **Hỗ trợ đa Template**: Người dùng có thể chọn các mẫu chữ ký ứng với các phòng ban/thương hiệu khác nhau (ví dụ: TECOTEC Group, TECOTEC A30 Banner, OES, TECOTEC E-Commerce).
3. **Live Preview**: Xem trước chữ ký ngay thời gian thực (Real-time).
4. **Copy & Paste linh hoạt**: Cung cấp khả năng sao chép HTML nguyên bản hoặc Copy nội dung Rich Text để dán trực tiếp vào các Client như Outlook, Webmail, Spark, v.v.

## Quy tắc thiết kế (Best Practices)
Dự án tuân thủ chặt chẽ các nguyên tắc xây dựng Email HTML như:
- Sử dụng hoàn toàn cấu trúc `<table>` thay vì `flexbox` hay `grid`.
- Tất cả các style được áp dụng dạng `inline styles`.
- Ảnh luôn được đặt `width`/`height` cố định và host trên URL tuyệt đối (absolute path), hiện tại là `https://email.tecotec.top`.
- Hạn chế tối đa sử dụng các thuộc tính CSS hiện đại không được support trên Outlook (ví dụ: `border-radius`, `% width` trên thẻ `td`...).

*(Chi tiết về best practices, vui lòng xem tại file `Email-Signature-Best-Practice.md`)*
