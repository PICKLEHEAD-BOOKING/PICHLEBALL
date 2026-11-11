/* TrangChu.js */
(function () {
  'use strict';

  // Dữ liệu mẫu - thay bằng API thật khi có backend
  // Ngày đăng nhập = ngày hiện tại, định dạng dd/mm/yyyy
  function formatToday() {
    const d = new Date();
    const dd = String(d.getDate()).padStart(2, '0');
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    return dd + '/' + mm + '/' + d.getFullYear();
  }
  const user = { name: 'Võ Vũ Trường Giang', initials: 'VG', lastLogin: formatToday() };
  const slots = [
    { time: '16:00', status: 'Còn trống' },
    { time: '17:30', status: 'Còn trống' },
    { time: '19:00', status: 'Còn trống' }
  ];
  const bookings = [
    { day: '02', month: 'THÁNG 11', court: 'Picklehead Booking · Sân A2',
      detail: 'Thứ hai · 18:00 – 19:30 · Mã SV02841', status: 'Đã xác nhận' }
  ];

  const $ = (id) => document.getElementById(id);
  let selected = '17:30';

  function toast(msg) {
    const t = $('toast');
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2000);
  }

  function renderUser() {
    $('userName').textContent = user.name;
    $('heroName').textContent = user.name.toUpperCase();
    $('avatar').textContent = user.initials;
    $('loginDate').textContent = user.lastLogin;
  }

  function renderSlots() {
    const box = $('slotList');
    box.innerHTML = '';
    slots.forEach((s) => {
      const b = document.createElement('button');
      b.className = 'slot' + (s.time === selected ? ' selected' : '');
      b.innerHTML = '<b>' + s.time + '</b><span>' + s.status + '</span>';
      b.addEventListener('click', () => { selected = s.time; renderSlots(); });
      box.appendChild(b);
    });
  }

  function renderBookings() {
    const box = $('bookingList');
    if (!bookings.length) {
      box.innerHTML = '<p class="empty">Bạn chưa có lượt đặt nào. Chọn khung giờ phía trên để đặt sân.</p>';
      return;
    }
    box.innerHTML = bookings.map((b) =>
      '<div class="booking">' +
        '<div class="booking__date"><small>' + b.month + '</small><b>' + b.day + '</b></div>' +
        '<div class="booking__info"><strong>' + b.court + '</strong><span>' + b.detail + '</span></div>' +
        '<span class="badge">' + b.status + '</span>' +
      '</div>').join('');
  }

  function init() {
    renderUser();
    renderSlots();
    renderBookings();

    const d = new Date();
    $('date').value = d.toISOString().slice(0, 10);

    $('btnBook').addEventListener('click', () => {
      const area = $('area').value;
      const date = $('date').value.split('-').reverse().join('/');
      toast('Đặt sân ' + selected + ' · ' + date + ' · ' + area);
      // window.location.href = 'DatSan.html?gio=' + selected + '&ngay=' + $('date').value;
    });
  }

  document.addEventListener('DOMContentLoaded', init);
})();