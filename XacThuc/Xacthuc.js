/* XacThuc.js - xử lý chung cho 5 màn hình xác thực.
   Mỗi trang đặt <body data-page="login|register|otp|forgot|reset"> */
(function () {
  'use strict';

  const EYE = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/><circle cx="12" cy="12" r="3"/></svg>';
  const EYE_OFF = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.9 17.9A10.9 10.9 0 0 1 12 19c-7 0-11-7-11-7a19.8 19.8 0 0 1 5.1-5.9M9.9 5.2A10 10 0 0 1 12 5c7 0 11 7 11 7a19.7 19.7 0 0 1-3.2 4.2M1 1l22 22"/></svg>';

  const $ = (sel, root) => (root || document).querySelector(sel);
  const store = {
    get(k) { try { return sessionStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { sessionStorage.setItem(k, v); } catch (e) {} }
  };

  /* ---------- Tiện ích ---------- */
  function maskEmail(email) {
    const [name, domain] = (email || '').split('@');
    if (!domain) return email || '';
    return name.slice(0, 2) + '*'.repeat(Math.max(name.length - 2, 3)) + '@' + domain;
  }
  const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  const isPhone = (v) => /^(0|\+84)\d{9}$/.test(v.replace(/\s/g, ''));

  function setError(input, msg) {
    const field = input.closest('.field');
    field.classList.toggle('invalid', !!msg);
    let p = $('.field-error', field);
    if (!p) { p = document.createElement('p'); p.className = 'field-error'; field.appendChild(p); }
    p.textContent = msg || '';
    return !msg;
  }

  /* ---------- Ẩn/hiện mật khẩu ---------- */
  function initPasswordToggle() {
    document.querySelectorAll('[data-toggle-pw]').forEach((btn) => {
      const input = btn.parentElement.querySelector('input');
      btn.innerHTML = EYE_OFF;
      btn.setAttribute('aria-label', 'Hiện mật khẩu');
      btn.addEventListener('click', () => {
        const show = input.type === 'password';
        input.type = show ? 'text' : 'password';
        btn.innerHTML = show ? EYE : EYE_OFF;
        btn.setAttribute('aria-label', show ? 'Ẩn mật khẩu' : 'Hiện mật khẩu');
      });
    });
  }

  /* ---------- Kiểm tra từng màn hình ---------- */
  const validators = {
    login(f) {
      return [
        setError(f.email, isEmail(f.email.value.trim()) ? '' : 'Vui lòng nhập email hợp lệ'),
        setError(f.password, f.password.value ? '' : 'Vui lòng nhập mật khẩu')
      ];
    },
    register(f) {
      const year = Number(f.birth.value);
      return [
        setError(f.email, isEmail(f.email.value.trim()) ? '' : 'Vui lòng nhập email hợp lệ'),
        setError(f.phone, !f.phone.value.trim() || isPhone(f.phone.value) ? '' : 'Số điện thoại không hợp lệ'),
        setError(f.fullname, f.fullname.value.trim() ? '' : 'Vui lòng nhập họ và tên'),
        setError(f.birth, !f.birth.value || (year >= 1900 && year <= new Date().getFullYear()) ? '' : 'Năm sinh không hợp lệ'),
        setError(f.password, f.password.value.length >= 8 ? '' : 'Mật khẩu tối thiểu 8 ký tự'),
        setError(f.confirm, f.confirm.value && f.confirm.value === f.password.value ? '' : 'Mật khẩu nhập lại không khớp')
      ];
    },
    otp(f) {
      return [setError(f.otp, /^\d{6}$/.test(f.otp.value.trim()) ? '' : 'Mã OTP gồm 6 chữ số')];
    },
    forgot(f) {
      const v = f.identity.value.trim();
      return [setError(f.identity, isEmail(v) || isPhone(v) ? '' : 'Vui lòng nhập email hoặc số điện thoại hợp lệ')];
    },
    reset(f) {
      return [
        setError(f.password, f.password.value.length >= 8 ? '' : 'Mật khẩu tối thiểu 8 ký tự'),
        setError(f.confirm, f.confirm.value && f.confirm.value === f.password.value ? '' : 'Mật khẩu xác nhận không khớp')
      ];
    }
  };

  /* ---------- Hành động sau khi hợp lệ (thay bằng gọi API thật) ---------- */
  const actions = {
    login() { Router.go('trangChu'); },
    register(f) {
      store.set('auth_email', f.email.value.trim());
      store.set('auth_flow', 'register');
      Router.go('xacThucOtp');
    },
    forgot(f) {
      store.set('auth_email', f.identity.value.trim());
      store.set('auth_flow', 'forgot');
      Router.go('xacThucOtp');
    },
    otp() {
      Router.go(store.get('auth_flow') === 'forgot' ? 'datLaiMatKhau' : 'dangNhap');
    },
    reset() { Router.go('dangNhap'); }
  };

  /* ---------- Màn hình OTP: hiển thị email + đếm ngược gửi lại ---------- */
  function initOtp() {
    const target = $('#maskedTarget');
    if (target) target.textContent = maskEmail(store.get('auth_email')) || 'email của bạn';

    const btn = $('#resendBtn');
    if (!btn) return;
    let left = 0, timer;
    function start() {
      left = 60;
      btn.disabled = true;
      clearInterval(timer);
      timer = setInterval(() => {
        left--;
        btn.textContent = left > 0 ? 'Gửi lại mã OTP (' + left + 's)' : 'Gửi lại mã OTP';
        if (left <= 0) { clearInterval(timer); btn.disabled = false; }
      }, 1000);
      btn.textContent = 'Gửi lại mã OTP (60s)';
    }
    btn.addEventListener('click', start);
    start();
  }

  function initReset() {
    const t = $('#resetTarget');
    if (t) t.textContent = maskEmail(store.get('auth_email')) || 'của bạn';
  }

  /* ---------- Khởi tạo ---------- */
  function init() {
    Router.bind();
    initPasswordToggle();

    const page = document.body.dataset.page;
    const form = $('form');
    if (!form || !validators[page]) return;

    if (page === 'otp') initOtp();
    if (page === 'reset') initReset();

    // Xóa lỗi khi người dùng gõ lại
    form.addEventListener('input', (e) => {
      const field = e.target.closest('.field');
      if (field) field.classList.remove('invalid');
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const ok = validators[page](form.elements).every(Boolean);
      if (ok) actions[page](form.elements);
    });
  }

  document.addEventListener('DOMContentLoaded', init);
})();