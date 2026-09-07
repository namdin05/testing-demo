# TRACE / QA — Testing Workflow Proposal

Landing page proposal cho ý tưởng **Software Test Execution & Quality Management Platform**.

## Mục tiêu

Website này chưa phải sản phẩm hoàn chỉnh. Nó được dùng để truyền đạt và lấy feedback cho ý tưởng đồ án trước khi chốt feature và phân chia công việc.

Bài toán được khóa ở:

- Đối tượng chính: QA / QC / QA Lead.
- Loại kiểm thử chính: Functional Testing và Regression Testing.
- Execution: Manual + Automated functional results.
- Phạm vi sản phẩm: Web / Mobile software.
- Luồng cốt lõi: Requirement → Test Design → Test Execution → Defect → Regression → Release Decision.

## Vì sao scope này?

Testing có nhiều nhánh với workflow và dữ liệu khác nhau. Proposal cố ý **không** gom Performance, Security, Penetration hay Game-specific QA vào core ngay từ đầu.

Mục tiêu của hệ thống là làm rõ relationship giữa các artifact kiểm thử và giúp QA Lead trả lời nhanh các câu hỏi như:

- Release đang test đến đâu?
- Requirement nào chưa được cover?
- Test nào đang Fail / Blocked?
- Còn Critical bug nào chưa fix?
- Bug xuất phát từ test case nào?
- Regression đã hoàn thành chưa?
- Release có đủ điều kiện sign-off chưa?

## Thiết kế landing page

Phong cách được chọn theo hướng editorial / product proposal:

- Bố cục typography lớn, có nhịp điệu.
- Ít card bo tròn, không gradient trang trí.
- Các sơ đồ workflow được biểu diễn trực tiếp bằng HTML/CSS.
- Màu sắc mang ý nghĩa trạng thái testing thay vì trang trí.
- Responsive cho desktop và mobile.
- Không phụ thuộc framework hoặc thư viện UI.

## Chạy local

Chỉ cần mở `index.html`, hoặc dùng extension Live Server trong VS Code.

Ví dụ:

```bash
npx serve .
```

## Public bằng GitHub Pages

Repository có workflow deploy trong `.github/workflows/pages.yml`.

Nếu Pages chưa được bật cho repo:

1. Mở **Settings → Pages**.
2. Ở **Build and deployment**, chọn **Source: GitHub Actions**.
3. Push/merge thay đổi vào branch `main`.
4. Workflow **Deploy proposal to GitHub Pages** sẽ publish site.

---

**Stage:** Idea validation — scope before features.
