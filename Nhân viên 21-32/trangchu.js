// DỮ LIỆU MẪU
const bookings = [
    { customer: "Nguyễn Minh Anh", court: "Sân A1", time: "14:00 – 15:30", status: "wait" },
    { customer: "Trần Quốc Bảo", court: "Sân A2", time: "14:00 – 16:00", status: "use" },
    { customer: "Phạm Thu Hà", court: "Sân B1", time: "15:00 – 16:30", status: "wait" },
    { customer: "Lê Đức Huy", court: "Sân B2", time: "15:30 – 17:00", status: "pay" }
];

const statusInfo = {
    wait: { label: "Chờ nhận sân", cls: "wait", action: "Nhận sân", next: "use" },
    use:  { label: "Đang sử dụng", cls: "use", action: "Chi tiết", next: null },
    pay:  { label: "Chờ thanh toán", cls: "wait", action: "Thu tiền", next: "paid" },
    paid: { label: "Đã thanh toán", cls: "paid", action: "Chi tiết", next: null }
};

const todos = [
    { title: "Kiểm tra sân trước giờ nhận", note: "14:00 · Sân A1, B1", done: false },
    { title: "Đối soát tiền đầu ca", note: "Đã hoàn tất lúc 13:58", done: true },
    { title: "Kiểm tra thiết bị khu B", note: "Trước 16:00", done: false },
    { title: "Bàn giao cuối ca", note: "Cuối ca · Chờ ca tiếp theo", done: false }
];

const checkIcon = `<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>`;

function renderBookings() {
    document.getElementById("queueList").innerHTML = bookings.map((b, i) => {
        const info = statusInfo[b.status];
        return `
        <div class="queue-grid queue-row">
            <div class="cell-name">${b.customer}</div>
            <div>${b.court}</div>
            <div class="cell-time">${b.time}</div>
            <div><span class="pill ${info.cls}">${info.label}</span></div>
            <div><button type="button" class="row-action" onclick="handleAction(${i})">${info.action}</button></div>
        </div>`;
    }).join("");
}

// Nhận sân -> Đang sử dụng, Thu tiền -> Đã thanh toán
function handleAction(index) {
    const next = statusInfo[bookings[index].status].next;
    if (!next) return;
    bookings[index].status = next;
    renderBookings();
}

function renderTodos() {
    document.getElementById("todoList").innerHTML = todos.map((t, i) => `
        <div class="todo-item">
            <button type="button" class="todo-check ${t.done ? "checked" : ""}" role="checkbox"
                aria-checked="${t.done}" aria-label="${t.title}" onclick="toggleTodo(${i})">${t.done ? checkIcon : ""}</button>
            <div>
                <strong>${t.title}</strong>
                <span>${t.note}</span>
            </div>
        </div>
    `).join("");
}

function toggleTodo(index) {
    todos[index].done = !todos[index].done;
    renderTodos();
}

// Đổi icon banner nếu là ca tối
(function () {
    let shift = "Ca sáng";
    try { shift = localStorage.getItem("picklehead_shift") || shift; } catch (e) {}
    if (shift.toLowerCase().includes("tối")) {
        document.getElementById("shiftIcon").innerHTML =
            `<svg viewBox="0 0 24 24"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;
    }
})();

renderBookings();
renderTodos();
