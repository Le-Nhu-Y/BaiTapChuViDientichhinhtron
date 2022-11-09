var a, b, c;

// Lấy giá trị từ ngươi dùng
a = prompt("Nhập điểm Lý");
b = prompt("Nhập điểm Hóa");
c = prompt("Nhập điểm Sinh");
// Đổi sang kiểu Number
a = parseInt(a);
b = parseInt(b);
c = parseInt(c);
// In kết quả ra trình duyệt
document.write("Tổng điểm Lý-Hóa-Sinh là " + (a + b + c) + "<br/>");
document.write("Điểm trung bình Lý-Hóa-Sinh là " + (a/3 + b/3 + c/3) + "<br/>");
