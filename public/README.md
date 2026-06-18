# TECOTEC Email Signature Generator

Đây là ứng dụng Web nội bộ giúp nhân viên TECOTEC Group và các công ty thành viên tạo chữ ký email chuẩn hóa theo định dạng thương hiệu.

Ứng dụng được thiết kế dưới dạng **Static Web App** (React + Vite) để có thể dễ dàng host tĩnh trên GitHub Pages mà không cần server backend.

🔗 **[Live Demo / Sử dụng ứng dụng tại đây](https://mkt-tecotec.github.io/tecotec-email-signature/)**

---

## 🛠 Cách Thêm / Sửa Mẫu Chữ Ký (Identity) Mới
Ứng dụng được thiết kế mở, giúp Admin/Marketing dễ dàng thêm mẫu chữ ký cho các thương hiệu mới mà **không cần can thiệp vào code React (JS/JSX)**.

Chỉ cần làm việc với thư mục `public/`.

### Bước 1: Thêm tài nguyên ảnh (Tùy chọn)
Nếu thương hiệu mới có Logo hoặc Icon social riêng:
- Tạo thư mục mới trong `public/logos/` (Ví dụ: `public/logos/new_brand/`)
- Tải các ảnh logo, facebook, website icon vào đó.

### Bước 2: Tạo File HTML Mẫu
- Soạn thảo một file `.html` chứa khung thiết kế của chữ ký.
- Ở những vị trí cần điền thông tin người dùng, hãy dùng **cú pháp biến** (được bọc trong `{{ }}`).
- Các biến hỗ trợ mặc định:
  - `{{name}}`: Họ và tên
  - `{{position}}`: Chức vụ
  - `{{department}}`: Phòng ban
  - `{{phone}}`: Số điện thoại
  - `{{email}}`: Email
  - `{{website}}`: Website
  - `{{address}}`: Địa chỉ
- Đặt file HTML này vào thư mục `public/templates/` (Ví dụ: `public/templates/new_brand_signature.html`).

### Bước 3: Đăng ký Template lên hệ thống
Mở file `public/templates.json` và thêm một block định nghĩa cấu hình cho mẫu chữ ký mới:

```json
[
  {
    "id": "tecotec",
    "name": "TECOTEC Group",
    "htmlPath": "/templates/tecotec.html",
    "brandFolder": "/logos/tecotec"
  },
  {
    "id": "new_brand",
    "name": "Chữ ký Thương hiệu Mới",
    "htmlPath": "/templates/new_brand_signature.html",
    "brandFolder": "/logos/new_brand"
  }
]
```
*(Lưu ý: Nhớ thêm dấu phẩy `,` giữa các block JSON để đúng cú pháp).*

Lưu file lại và bạn sẽ thấy "Chữ ký Thương hiệu Mới" xuất hiện trong ô Dropdown trên giao diện Web!

---

## 🚀 Hướng Dẫn Deploy (Phát hành bản cập nhật)

Khi bạn cập nhật code, thêm mẫu chữ ký HTML mới, hoặc thay file ảnh trong thư mục `public/`, bạn cần cập nhật phiên bản Web trên GitHub Pages.

Ứng dụng sử dụng gói `gh-pages` để deploy tự động nội dung của thư mục build (`dist`) lên nhánh `gh-pages`.

### Quy trình Deploy:
1. **Lưu (Commit) các thay đổi:** Hãy chắc chắn mọi sửa đổi file HTML/JSON đã được lưu lại qua Git.
   ```bash
   git add .
   git commit -m "Thêm mẫu chữ ký mới cho thương hiệu X"
   git push origin main
   ```

2. **Cập nhật lên Github Pages (Deploy):**
   Mở Terminal trong thư mục gốc của dự án và chạy lần lượt 2 lệnh sau:
   ```bash
   npm run build
   npx gh-pages -d dist
   ```

3. **Hoàn tất:** Lệnh thứ hai có thể yêu cầu đăng nhập (nếu Github chưa lưu credential). Khi terminal in ra chữ `Published`, nghĩa là quá trình deploy đã thành công! Làm mới trang web (F5) **Live Demo** sau khoảng 1-2 phút là cập nhật mới sẽ khả dụng.

---

## 💻 Hướng Dẫn Dev Local (Dành cho Developer)

Nếu bạn muốn kéo code về máy phát triển thêm tính năng:

```bash
# 1. Cài đặt các gói thư viện
npm install

# 2. Khởi chạy server phát triển (Hot-reload)
npm run dev
```

Project sử dụng:
- Vite
- React.js 18
- CSS thuần (Vanilla CSS)
- Các icon tải từ `lucide-react`
