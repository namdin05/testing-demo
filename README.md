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

Testing có nhiều nhánh với workflow và dữ liệu khác nhau. Proposal cố ý không gom Performance, Security, Penetration hay Game-specific QA vào core ngay từ đầu.

Mục tiêu của hệ thống là làm rõ relationship giữa các artifact kiểm thử và giúp QA Lead trả lời nhanh các câu hỏi như:

- Release đang test đến đâu?
- Requirement nào chưa được cover?
- Test nào đang Fail / Blocked?
- Còn Critical bug nào chưa fix?
- Bug xuất phát từ test case nào?
- Regression đã hoàn thành chưa?
- Release có đủ điều kiện sign-off chưa?

## Thiết kế trang

Nội dung được trình bày như một bài luận kỹ thuật dài thay vì landing page chia thành nhiều module:

- Một mạch đọc liên tục theo thứ tự Vấn đề → Đề xuất → Ví dụ → Phạm vi → Giá trị.
- Mục lục cố định ở cạnh trái trên desktop và chuyển thành thanh ngang trên mobile.
- Dùng Be Vietnam Pro được nhúng trực tiếp để hiển thị đầy đủ dấu tiếng Việt.
- Cột chữ hẹp và khoảng trắng lớn để ưu tiên khả năng đọc.
- Chỉ giữ lại những sơ đồ, danh sách cần thiết để làm rõ lập luận.
- Responsive cho desktop và mobile, không phụ thuộc framework hoặc thư viện UI.

## Chạy local

Chỉ cần mở index.html, hoặc dùng extension Live Server trong VS Code.

Ví dụ:

npx serve .

## Public bằng GitHub Pages

Vì đây là static site thuần HTML/CSS/JS, có thể publish trực tiếp từ branch main:

1. Mở Settings → Pages.
2. Ở Build and deployment chọn Source: Deploy from a branch.
3. Chọn Branch: main và Folder: /(root).
4. Save.

GitHub Pages sẽ serve trực tiếp index.html ở root.

---

Stage: Idea validation — scope before features.
