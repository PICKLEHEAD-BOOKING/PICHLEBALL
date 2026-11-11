// DỮ LIỆU KHÁCH HÀNG MẪU
const customers = [
    { id: 1, name: "Nguyễn Văn A", phone: "090 000 0101", email: "VanA.nguyen@gmail.com", online: true },
    { id: 2, name: "Trần Hoài Nam", phone: "090 000 0102", email: "hoainam.tran@gmail.com", online: false },
    { id: 3, name: "Nguyễn Thu Hà", phone: "090 000 0103", email: "thuha.nguyen@gmail.com", online: false },
    { id: 4, name: "Lê Quốc Bảo", phone: "090 000 0104", email: "quocbao.le@gmail.com", online: true },
    { id: 5, name: "Nguyễn Đức Huy", phone: "090 000 0105", email: "duchuy.nguyen@gmail.com", online: true },
    { id: 6, name: "Phạm Ngọc Linh", phone: "090 000 0106", email: "ngoclinh.pham@gmail.com", online: false }
];

const arrowRight = `<svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`;

function statusPill(online) {
    return `<span class="status ${online ? "online" : "offline"}">${online ? "Online" : "Offline"}</span>`;
}

// Lấy 2 chữ cái viết tắt từ họ tên (Nguyễn Văn A -> VA)
function getInitials(name) {
    const words = name.trim().split(/\s+/);
    const pick = words.length > 1 ? [words[words.length - 2], words[words.length - 1]] : [words[0]];
    return pick.map(word => word[0]).join("").toUpperCase();
}

/* ===== TRANG DANH SÁCH ===== */
function renderCustomers(list) {
    const box = document.getElementById("customerList");

    box.innerHTML = list.map(c => `
        <div class="customer-row customer-grid">
            <div class="cell-name">${c.name}</div>
            <div>${c.phone}</div>
            <div>${c.email}</div>
            <div>${statusPill(c.online)}</div>
            <div><a class="view-link" href="chitietkhachhang.html?id=${c.id}">Xem ${arrowRight}</a></div>
        </div>
    `).join("") || `<div class="empty-message">Không tìm thấy khách hàng phù hợp.</div>`;
}

function searchCustomer() {
    const keyword = document.getElementById("customerKeyword").value.trim().toLowerCase();
    const digits = keyword.replace(/\s/g, "");

    renderCustomers(customers.filter(c =>
        c.name.toLowerCase().includes(keyword) ||
        c.email.toLowerCase().includes(keyword) ||
        c.phone.replace(/\s/g, "").includes(digits)
    ));
}

if (document.getElementById("customerList")) {
    const input = document.getElementById("customerKeyword");

    input.addEventListener("input", () => {
        document.getElementById("charCount").innerText = `${input.value.length} / 1000 ký tự`;
    });
    input.addEventListener("keydown", event => {
        if (event.key === "Enter") searchCustomer();
    });
    document.getElementById("searchButton").addEventListener("click", searchCustomer);

    renderCustomers(customers);
}

/* ===== TRANG CHI TIẾT ===== */
if (document.getElementById("detailPanel")) {
    const id = Number(new URLSearchParams(location.search).get("id")) || 1;
    const customer = customers.find(c => c.id === id);

    if (!customer) {
        document.getElementById("detailPanel").innerHTML =
            `<div class="empty-message">Không tìm thấy khách hàng này.</div>`;
    } else {
        document.title = `${customer.name} - Picklehead Booking`;
        document.getElementById("detailAvatar").innerText = getInitials(customer.name);
        document.getElementById("detailName").innerText = customer.name;
        document.getElementById("detailFullName").innerText = customer.name;
        document.getElementById("detailPhone").innerText = customer.phone;
        document.getElementById("detailEmail").innerText = customer.email;
        document.getElementById("detailStatusTop").innerHTML = statusPill(customer.online);
        document.getElementById("detailStatus").innerHTML = statusPill(customer.online);
    }
}
