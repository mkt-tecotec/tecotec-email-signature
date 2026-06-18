---
type: note
tags: []
last_synced: 2026-05-13T09:39:48
---
 
# Email Signature - Best Practice & Vận Hành

> Áp dụng cho hệ thống chữ ký email đa thương hiệu TECOTEC Group
> Generator: https://mkt-tecotec.github.io/tecotec-email-signature/
> Source: https://github.com/mkt-tecotec/tecotec-email-signature

---

## 1. Nguyên tắc coding HTML signature

### Bắt buộc tuân thủ

**Dùng table-based layout, không dùng flexbox hay grid.**
Email clients (đặc biệt Outlook Windows/Mac) không hiểu flexbox. Mọi layout 2 cột, inline element đều phải dùng `<table><tr><td>`.

**Inline styles only.**
Không dùng `<style>` block hay class CSS. Gmail, Apple Mail và nhiều client khác strip `<style>` tag khi paste hoặc khi render. Toàn bộ style phải nằm trực tiếp trong attribute `style="..."` của từng element.

**Width bằng pixel attribute, không dùng %.**
```html
<!-- Sai - Outlook không đọc % trên td -->
<td style="width: 15%">

<!-- Đúng - dùng attribute width -->
<td width="110">
```

**Social icons: dùng `<table>` per row, không dùng `inline-block`.**
```html
<!-- Sai - display:block bên trong inline-block khiến icon xuống dòng trong Outlook -->
<a style="display: inline-block;">
  <img style="display: block;" />
</a>

<!-- Đúng - mỗi icon 1 td -->
<table cellpadding="0" cellspacing="0" border="0">
  <tr>
    <td style="padding-right: 8px;"><a href="..."><img width="32" height="32" style="display: block;" /></a></td>
    <td style="padding-right: 8px;"><a href="..."><img width="32" height="32" style="display: block;" /></a></td>
  </tr>
</table>
```

**Images phải hosted (absolute URL), không embed base64.**
Base64 bị block bởi nhiều mail server và làm tăng kích thước email. Toàn bộ ảnh host trên GitHub Pages: `https://mkt-tecotec.github.io/tecotec-email-signature/images/`

**Luôn có `width` và `height` attribute trên `<img>`.**
Tránh layout shift khi ảnh chưa load, đặc biệt quan trọng trên mobile.

### Tránh hoàn toàn
- `border-radius` trên `<table>` (Outlook Windows/Mac bỏ qua)
- `box-sizing`, `flexbox`, `grid`, CSS variables
- `max-width` trên `<td>` (dùng trên `<table>` ngoài cùng)
- `vh`, `vw`, `rem`, `em` cho font-size (dùng `px`)
- `&nbsp;` để tạo khoảng cách giữa icons (dùng `padding` trên `<td>`)

---

## 2. Cấu trúc template chuẩn

```
[Table ngoài - max-width: 500px]
  [Row 1] Thanks & Best regards + HR
  [Row 2]
    [TD trái - width="110"] Logo brand
    [TD phải - border-left] 
      Tên / Chức danh
      HR divider
      Tên công ty (màu brand)
      [Nested table] Contact rows (icon | text)
      [Nested table] Social icons (1 row, icon per td)
[Table banner - riêng biệt, margin-top: 20px]
  Link + Image banner campaign
```

Banner tách thành table riêng để dễ bật/tắt theo campaign mà không ảnh hưởng phần contact.

---

## 3. Cài đặt vào từng email client

### Gmail (Web)
1. Settings (bánh răng) > See all settings > Signatures > Create new
2. Mở file HTML trong Chrome/Safari > Cmd+A > Cmd+C
3. Paste vào ô soạn chữ ký
4. Set làm default cho New Email
5. Save Changes

> Gmail strip `<style>` tag nhưng giữ inline styles - template đúng chuẩn sẽ render OK.

### Microsoft Outlook Mac (New - 2022+)
1. Outlook > Settings > Signatures > dấu `+`
2. Mở file HTML trong Safari > Cmd+A > Cmd+C
3. Paste vào ô soạn chữ ký
4. Đặt tên > Save

> New Outlook Mac sync signature qua cloud (OWA). Không còn folder local approach.
> Renderer giống Word - table-based layout bắt buộc, nhiều CSS bị strip.

### Microsoft Outlook Mac (Classic - phiên bản cũ)
1. Đổi đuôi file thành `.htm`
2. Copy vào thư mục:
   ```
   ~/Library/Group Containers/UBF8T346G9.Office/Outlook/Outlook 15 Profiles/Main Profile/Data/Signatures/
   ```
3. Restart Outlook > Preferences > Signatures

> Cách folder này chỉ hoạt động với Classic Outlook, không hoạt động với New Outlook.

### Microsoft Outlook Windows (Classic)
1. File > Options > Mail > Signatures
2. New > đặt tên
3. Paste từ browser vào ô soạn

> Outlook Windows (Word renderer) khắt khe nhất. Nếu template test OK trên Outlook Windows thì client khác sẽ đều OK.

### Apple Mail (macOS)
1. Mail > Settings > Signatures > chọn account > dấu `+`
2. Bỏ tick "Always match my default message font"
3. Mở HTML trong Safari > Cmd+A > Cmd+C > Paste vào Apple Mail

> Apple Mail render HTML signature tốt. Nếu layout vẫn lỗi, thử paste vào TextEdit (Format > Make Rich Text) trước, rồi copy từ TextEdit sang Mail.

### Spark (macOS)
Settings > Signatures > `+` > Paste từ browser.
Spark render HTML tốt hơn Outlook.

### Outlook (iOS / Android)
Outlook mobile có signature editor nhưng chỉ hỗ trợ text thuần. Giải pháp duy nhất là dùng HTML rất đơn giản hoặc chấp nhận text-only trên mobile.

### Gmail (iOS)
Gmail iOS đọc signature từ Gmail Web settings. Cài đúng trên Gmail Web là đủ.

---

## 4. Quản lý đa thương hiệu

### Nguyên tắc
- Giữ **cấu trúc HTML chung** cho tất cả brand, chỉ thay đổi: màu sắc, logo, tên công ty, domain
- Mỗi brand có **folder images riêng** trên GitHub Pages
- Banner campaign là component độc lập, swap dễ dàng mà không đụng phần contact

### Brand hiện có
| Brand | Màu chính | Logo path |
|---|---|---|
| TECOTEC Group | `#FF9900` (orange) | `/images/icons/Logo-TECOTEC-Group.png` |
| TECOTEC E-Commerce | `#FF9900` | `/images/icons/logo-TECOTEC-eCom.png` |
| OES | (cần verify) | - |
| TUMIKI | (cần verify) | - |
| Cleveland Cyclewerks | (cần verify) | - |

### Workflow cấp phát chữ ký cho nhân viên mới
1. Nhân viên cung cấp: Tên, Chức danh, Email, SĐT
2. Vào generator > chọn brand > nhập thông tin
3. Copy HTML hoặc tải file `.html`
4. Gửi file kèm hướng dẫn cài đặt theo client họ dùng
5. Lưu record vào Fibery (nếu cần track)

---

## 5. Test checklist trước khi phát hành template mới

- [ ] Mở trong Chrome - layout đúng
- [ ] Mở trong Safari - layout đúng  
- [ ] Paste vào Gmail Web - icons thẳng hàng, không xuống dòng
- [ ] Paste vào New Outlook Mac - 2 cột giữ nguyên, icons thẳng hàng
- [ ] Gửi test email tới Gmail và Outlook - ảnh load từ GitHub Pages (không bị block)
- [ ] Check trên mobile (forward email từ máy tính) - responsive ok
- [ ] Các link (email, phone, social, banner) đều clickable
- [ ] UTM params trên banner link đúng format

---

## 6. Hosting & maintenance

**Images host:** GitHub Pages - `https://mkt-tecotec.github.io/tecotec-email-signature/images/`
- Ưu: miễn phí, CDN toàn cầu, version control qua Git
- Lưu ý: thay đổi ảnh phải push lên GitHub, có độ trễ cache vài phút
- Đặt tên file ổn định (không đổi tên sau khi deploy) vì link đã nằm trong email của người dùng

**Banner campaign:** Thay URL src trong template khi đổi campaign. Không đổi tên file banner cũ nếu chưa hết campaign (email cũ trong inbox người nhận vẫn load ảnh đó).

**Khi cần update logo/icon toàn bộ:** Push file mới lên GitHub với **tên file mới**, cập nhật URL trong generator. Không overwrite file cũ.

---

## 7. Các lỗi thường gặp

| Triệu chứng | Nguyên nhân | Fix |
|---|---|---|
| Social icons xuống dòng từng cái | `display: block` trên `<img>` bên trong `inline-block <a>` | Đổi sang table layout cho social icons |
| 2 cột bị stack dọc | `width: %` trên `<td>` | Dùng `width="110"` attribute |
| Ảnh không hiện (X đỏ) | Client block external images | User cần click "Load images" - không fix được từ phía sender |
| Font size thay đổi | Thiếu `font-family` inline trên table ngoài | Thêm `font-family: Arial, sans-serif` vào table wrapper |
| Banner bị co méo | Dùng `width: 100%` nhưng không có `width` attribute | Thêm `width="500"` attribute trên img banner |
| Paste vào Outlook bị mất format | CSS class hoặc `<style>` block | Kiểm tra lại - phải 100% inline styles |

---

*Cập nhật lần cuối: 2026-05-13*
*Liên quan: [[_Index]] | [[SEO-Best-Practice]]*