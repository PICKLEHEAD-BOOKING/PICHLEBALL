// Dùng chung cho mọi trang: ngày hiện tại và ca làm đang chọn
(function () {
    const days = ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"];
    const pad = n => String(n).padStart(2, "0");
    const now = new Date();
    const today = `${days[now.getDay()]}, ${pad(now.getDate())}/${pad(now.getMonth() + 1)}/${now.getFullYear()}`;

    let shift = "Ca sáng";
    try { shift = localStorage.getItem("picklehead_shift") || shift; } catch (e) {}
    const code = shift.split(/\s+/).map(w => w[0]).join("").toUpperCase(); // Ca sáng -> CS

    document.querySelectorAll("[data-today]").forEach(el => { el.textContent = today; });
    document.querySelectorAll("[data-shift]").forEach(el => { el.textContent = shift; });
    document.querySelectorAll("[data-shift-code]").forEach(el => { el.textContent = code; });
})();
