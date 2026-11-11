/* Router.js - bảng định tuyến cho các màn hình xác thực */
(function (global) {
  'use strict';

  // Tên route -> đường dẫn file (đổi tại đây khi cấu trúc thư mục thay đổi)
  const ROUTES = {
    dangNhap: 'DangNhap.html',
    dangKy: 'DangKy.html',
    xacThucOtp: 'XacThucOTP.html',
    quenMatKhau: 'QuenMatKhau.html',
    datLaiMatKhau: 'DatLaiMatKhau.html',
    trangChu: '../Khachhang/TrangChu.html'
  };

  const Router = {
    routes: ROUTES,
    go(name) {
      if (!ROUTES[name]) { console.error('Route không tồn tại:', name); return; }
      window.location.href = ROUTES[name];
    },
    // Gắn click cho mọi phần tử có data-route="tenRoute"
    bind() {
      document.querySelectorAll('[data-route]').forEach((el) => {
        const name = el.getAttribute('data-route');
        if (el.tagName === 'A') el.setAttribute('href', ROUTES[name] || '#');
        el.addEventListener('click', (e) => { e.preventDefault(); Router.go(name); });
      });
    }
  };

  global.Router = Router;
})(window);