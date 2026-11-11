const icons = {
    sang: `<svg viewBox="0 0 24 24"><path d="M12 2v8M4.93 10.93l1.41 1.41M2 18h2M20 18h2M19.07 10.93l-1.41 1.41M22 22H2M8 6l4-4 4 4M16 18a4 4 0 0 0-8 0"/></svg>`,
    chieu: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2m-7.07-17.07 1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>`,
    toi: `<svg viewBox="0 0 24 24"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`,
    check: `<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>`
};

const shifts = [
    { id: "sang", name: "Ca sáng", desc: "Khởi đầu một ngày làm việc" },
    { id: "chieu", name: "Ca chiều", desc: "Tiếp nối nhịp làm việc trong ngày" },
    { id: "toi", name: "Ca tối", desc: "Đồng hành cùng những lượt sân tối" }
];

let selected = "sang";

function renderShifts() {
    document.getElementById("shiftOptions").innerHTML = shifts.map(s => {
        const on = s.id === selected;
        return `
        <button type="button" class="shift-card ${on ? "selected" : ""}" role="radio"
            aria-checked="${on}" onclick="selectShift('${s.id}')">
            <span class="shift-card-icon">${icons[s.id]}</span>
            <span class="radio ${on ? "checked" : ""}">${on ? icons.check : ""}</span>
            <strong>${s.name}</strong>
            <span class="shift-desc">${s.desc}</span>
            <span class="shift-state">${on ? "Đang chọn" : "Chọn ca này"}</span>
        </button>`;
    }).join("");

    document.getElementById("chosenName").innerText = shifts.find(s => s.id === selected).name;
}

function selectShift(id) {
    selected = id;
    renderShifts();
}

document.getElementById("confirmShift").addEventListener("click", () => {
    const shift = shifts.find(s => s.id === selected);
    try { localStorage.setItem("picklehead_shift", shift.name); } catch (e) {}
    location.href = "trangchu.html";
});

renderShifts();
