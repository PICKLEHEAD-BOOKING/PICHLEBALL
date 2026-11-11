// DỮ LIỆU HÀNG HÓA MẪU
const products = [
    { id: 1, name: "Nước suối aquafina", short: "nước suối", description: "Chai 500 ml", price: 15000, quantity: 4, image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAA7CAYAAACHZoEkAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAACBNJREFUeAHtWctvXFcd/s59z3hm7LENacZx3AQl0JAqEoEgFKKqPDY8JJCQUBcguuu6QixYISGxYcF/wAY2IEAqElDRVVUhkKAQ0bQkRY0Tx4EIbDxjz537vpfvd+7MxBOYh8fQbnos617fuXO+83t9v4dVwYW3eRl4B5Y164uikDAM0el0EAQ+8izjUwXDMmBbLur1OhYXF2faa2ZQpRRu3LiBbreLStXlFw19kBQ5ilzBdV1cvnx5pr1mBpXlOg7MegO2rXgIA4ZhIFcFshT6ftZ1JNDFpSVEVHF1YYH6VnxS+mAv6KFarc68jzqK96a0Y5wkiKKEklGtRQ4TLgyz0Oq1rNlkOJL3+l0fod+DSZUq2tEoqN4iQxjEODjozrzPzKCiEPoSTMvU9xDtygM6ku0Y+jZN05n2mglUNpNQGVhi4DTi0fIrj+WZvBNF0dT9JtpUPspoRwkT0zRx+NUSrBh5V3tznsOhl1cqlXHbTvZe2Whra0s7iGzkeZ5Wq6EsOa5AM0Zz7WByFcCDbo9/R1hfWx/r0RMlvXfvngZqNBpabTnfjNOMX6JaTaUjRtvaUHDMkiBs2yZzBbh7ZwtPXHji6JL2ej0sMTZlY5G0IJjtCAMRLc+1LSk2ncsWftLqFXN4ro0kGW/biaBix0NK0SCFXLWIgyuQ8QByQ3xKbeh35CDj1kTvFdUKySsdGmWE6LvSnIOz9KNH6cdi1yh++J0jg4pKZZPhhn0UHSp9oMEZhoeQz8tP5wMVtw+CYAhSDH7UCEr52SF/TEiVnufMB+p5FfT8iLY1+hotoTUPGQQ3xKam/szoH8KgYbvdALVaYz5Qi5SXpgn6smijKmWjyJSgkn/NUpGaFg8RRRpiQTLRPKCi1qpn6dN7fFVCfYHS1Vze0+9Nm0BWgZiHiwxH0jks08LrHdXn5THCYMr6+rdfxMmvtPDkNQ9RkuNmhywVFAgOYtzZi5Ev1NCsBDi/pPDFJQfPNIHv/CnEL88cA7RebeDn330L99PzeCW00Nkv8CG3hxefsvHbn/4A37eexAv1a7i1YuL6YwV+kcR482e3EXy+Rc1484G6rIfyf+7izz/cwWpjCTaZZs+4jdYLPpLap3gohdrOA6zsnkBrP8f7Ljt4af81Fm5XMbekKbm2eeEcfJZgSrFSiHP0jLNYUTGSgwxmlzZ3PFS8FI5XxUIewn6wixEye2RNzadWLmXKDunNRhylOk4VEjpN+ePw2DGB4thCloTwgwyfvHYaeZzPDwrbJDNVEe53EcYGWJkQQPG+wOKag9qakIVCZTFExme/32zg5U0TmTl+66nqPf/4Kl7d2cNzX3gMv3tjlzkyw4PeAk7VU9QbOW7dbeMTT9XwLz/DxZaDLeXgj+ZZSppNB43jWHOtXCUnZixRLF4dJ8UHzzZQ9zJcuVhlNQ/8ba/ApfUENzdDfPnpUwi7bXz6oovtdoyra4zhaycY28WwZpJ4Fw6XrCXpbwgqD+QlqRLkBaPvCfv7IW781ccftpewUotQdwKsLCT45ssuTjQ9tF/t8kAFWrcKevMyPmv38KNf3cY3vrauSaVMiWWuHfDzCOh/W7040eVJmNSY5nxs7dFDrRBLTHuilZbno6OqKOIIFW4XLSwjDUvKNAxzsnrHrSy34TfraLPO6hQt5CSGCA6cjEVbEWC3sQ4VH8A362g2XQQmbblk9pMD5gNtrb0Huy/dx8e/uggV7iJgTR9lFtNXyoOcwPM/eR5vfuk55IsxKqTAS60zOPkBR0qI+UEV66FUmehYDVQXm4zLDA7jklwBKzPw62e/hYTqd9+7jI+eNvCZU0wAH6uxdbTnB3366km8cvcf+N4zFn68H+E3nQzX9yy0I/arJAKvsox6JcPnTiV4dtVBk2q/cmm1LFPHCTKtgdpkKbnaYN1bXYXJSs8SL2TDlPBbEb1dErxDTViQZ2Qhy8FfXr+JCxfer0NuLknJ3NjZy7BWMwiSoScxL+GXCc2REEl3Kbtxy5JqkFdJpTxURrOM23wqDYYssgtVlii68jOIqKQLZlUPnkBKFt5jqC/SYiZV4XgFTgXN2GaLI0pLqEOdLaLSlZnR/2U8Ur2HI8RyTNZJB2P3nB6ntOPD1r5sDctKJNOYun3U9VFRjgT0ryJxJMcEVSWzKKrSUoau9KWoFx986IelqPK8wnwXs+Aet2ZQbzYyxCiKhzVu2SgP9FoMr4r0JxR5LNDD6zDg6DKHzx3PZZd3DFDJONIq5vloJTDowkdXmcKay8v/8f7hZU0D1PlPp7tHJXykCy97i35Dxe/YcxK+gG5sbOhrRjJQ2l1LiYbtlDKGDVPRbzkkpdVYD88FKuqTuVHpTP10NZw19AccwrGF7lT7ybqU0Jswc5hsUwJ0ez7LS0/HY0ZKTJnSYjpJHKe6M5d49aoywKI9M+nSS+dbWV6ZD9SkPbe3t9He72gpxb6GKfayyumYHgtYuP7aG2h39lmqprqJHo3fo0rK9fipDWy+dUcPMwbOk8qoRzaldDJZOXfujGYh7XQ8UJEbY0uVmUBtx8VHrnxYS1DOkgZNcNmhZ+xPHUrvMTblb5saaHfaE+N0aj7t9QLaLxpWiYIa0rlc1+Mww9JtqbQeciPTGBk+p+x3Tp/eGDt3mCpptVrRYHI2z63g7ztt+GGEMM1Z7/rajlmecCB5wO67rscFWhsT+tMjjV5l+b6P7fsPdA4/s7HOuUQ5W5Bd2u09PSWTIdYoLx8T9H+x3pH/VrwL+n9d/wabzNV99dXfhQAAAABJRU5ErkJggg==", category: "drink" },
    { id: 2, name: "Sting đỏ", short: "sting đỏ", description: "Chai 500 ml", price: 25000, quantity: 0, image: "data:image/png;base64,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", category: "drink" },
    { id: 3, name: "Bóng pickleball", short: "bóng pickleball", description: "Bóng ngoài trời · 40 lỗ", price: 20000, quantity: 1, image: "data:image/png;base64,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", category: "accessory" },
    { id: 4, name: "Quấn cán vợt", short: "quấn cán vợt", description: "Loại chống trượt · 1 chiếc", price: 30000, quantity: 0, image: "data:image/png;base64,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", category: "accessory" }
];


// DỮ LIỆU DỊCH VỤ MẪU
const services = [
    { id: 1, name: "Thuê vợt pickleball", description: "Vợt tiêu chuẩn, phù hợp mọi trình độ.", price: 30000, unit: "/ vợt / buổi", label: "vợt", quantity: 0, image: "data:image/png;base64,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" },
    { id: 2, name: "Khăn thể thao", description: "Khăn sạch, sử dụng trong buổi chơi.", price: 10000, unit: "/ khăn / buổi", label: "khăn", quantity: 0, image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAwCAYAAABE1blzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAADOdJREFUeAHtWlmMm+UVPf5t/973ZTzxjGfPnjQBkhD2BFH1oQ/Qh6q0UgqCPlHUQheatFWfqECUthLqI2+tSlJAFSrQglopISqEJcs0JLMlM8lsnsVjezxexmvP/TwzEBHBBEKYRPmkkaPf9v9/595zzz33cww1LlzDS8M1vq4DvNrXdYBX+7pkgIuiK69Xg/6alvtBAWQwGDA/X8TQyChm57Kw6hYEfF4EAz5YdDNW4jIstw8KsMFzI5hJpqGZNehmO0yahkqlArOuwemyI+wPwG6zYCWtzwBYQ7Vaw5mh84hPTMGgGeFyuFCpVgmshEq5yqwaCX4ebo8TZqMBNqsVoUgQLpsNK2FdFOAiHZOpFPr6ziKTL0A36QRVg9liRrFQhNfrUYANDEK5XFaA7Q475vme3eWAzWxGMOSFy27HV7k+AXARXG9vH4bjUzAazNB1k6JoKNSA/jNnEQ6FkMnMwupwYmpiAu1tMZhMmgoAUOFdjbDpOiVMg8Ouqzp1Or4aoBcAXAT37rvvYXg0DpvDzQ06CVBHIjENi8UOo1HDwOBZrFmzFv19fWhpbcFEPI6u9laUyiXoFp03NcqdUZgvwOFw8HsWWHk9HPZd8Yx+AuDgufPYf+BlRKPNFA4nI+9mIgykpA89vT1US52bdmLg7CB2796N5EwCGjPWf2YAsVgTTAYNZtahjTWYJ7VRrZDCFVitOgNQhN/vRcjvg9/nVsG8ogBlPfLojxEIReBxe2Bn9qw2K9wuN7Oowevz1+laKMPH1jA6No6ZxCwKhQKCQR8SMzMMhhHRVauUukqAHDY7iqxRQ61CrFXkCznYmE2nywa33YpwQ4PKMGQXXwLej/ogcfb092OcalmiOs7NzcHpdMLnDyOXK6Ip2oDMbJYtwchWYMXMdBJmZisWjcHmtuDUyVNY1Rhlpt2YmJjmqxepZJL0nSD4APK8n5X16Pd7oBtNSomz+TJ6B4bgctr53QbFjsuN9CMnQ7ocOnhIXcjOzWJqMo7xsTGMDg8T2CyGz48hm51TD89kshSdAqoMSrWWRzqRxPr165jZeZzq6SU9Lfjgg/dI2VZYSNd4fAQer4OscKBaqqBYKqHMDJcrZfZSIwr5eUxMJXCSQZqZSeFyrgucTGmeD2adVFk3Ripgkf2tRPnP5tJoCDcilU4wAwH++aioIWahJHGB2cxemMsyy428HkCCmXO7fTjdc5oAali3ulMFpFwsKmXVqlD9k4oFm9NGUDM4cuQ9dK1bg2p8mpm2w269PIbhAoCVWlkJhvp3tapEYC6dQnY2gyoV0mq1cZMFAk0pH6pbxJ4ZVXMXpKnUjKqngNdPSmZJcR0RKmc+n+XbmhIxTbIuBoItJejx4Nixo7C7vbh9111Ip9IoFSs4+WE/e6gPYdb5F20vFwAUcPQoMGs6NLaDqgKpqdaQnJHN6wq43VHEieMpxFpaMEe6StM3sbE7GHmd/vTDU91oZ9swMbtCP037qBIEpJGZM9M4/PkvL+CWO25lLZtVds0mBozPK5eMFK8kclRhq9mEoN/PZ7jwedYFKjoyMoK77/kGtmzZqtyJbETKXTafz+fVRmsE6Ha74Q+GlZNpa2ujZSujcVVEidLg4BC6OjuYqSoFSWhWhZFgTCZ5jEZltlN8ZjE4NIptO7bh+NFjVNKwMglVMigcbiDlzfVnGyTTZcUc6hLV3AE/s34pQrQEcLHJv/nmf/DQQw9jw6ZNcLlcvI1B9cEShUFoWB+TahQPi2ofbo+X75sQCkf4mTxa21pgYersNhcDYyUwfl8KlZuV+4lYnR+Jo6NrHUQ0y1Rsl91BAcuxf5IFVOhcjq2E7cVq0xnQmmKNsEcCOM8SaQj4lWBdcgaFkpKlFD3oI4/+CG+/fQSbNhKo24VZKqk07xKpJBlVmTWZ1DUbN5icTWNNZxfV0g0vMyzXHKwfs1lXgbPzc2Pj42jv6GCATDQNvYisimKO9zUxW82kez6XIT3LzLyZFE2rDLpcHvZfGnyahQJFz+GsTzFSyeGgHz6Pa/kA66s+yCo/2tePPQ88iBINdAc3P1+cJ12sKhBCIXUDfk6aunwv1hwjBR0MiANej181eqGki5EX4x4KBmnEPYrm8j2LhaDZik7+7zQ2btlMFV6F85xc8vlc3Sg4XdxLVRmEUDhMsE4qekbVuVHVdRUmBkMy6ve5lgtwAeYCFSWjb5C2P3/iCTZiK6JNUUVbYZ30ONlsjvXp8/nUQ43Mqpe0lclCRqgA20qZNPPwmmehfqwWhwqWUNfNDFg5gvWe7qMea8iw17a1tqGjo4UKe4I9dw4byaJkckaxyMiRrDkWUy1MI/2lj2ommU+NZI6HGXViIUOfDnCJtoxgHZABzz//PPb9+jfYvPFrCoBOqgpIcT3RaFTVaZWRN7BmrRarqqOm5iac7OnBjVtvVA92cxMiOpGGoGKBGHQRMCdBOlmjI8MjdEKTbBNhGJmdAAN3jr7XIWVCxY4xwAMDA7jt1p20fVmVTaF/sVTkc6n8FLyujpgAUyCXPdFXKlXVLsSF7P3FPvztxZexbv16NS3ILZqbmpQ7EfoyKqrXiRompem76m2kkRS06A5EImF1Hw+zFyRtRSWTdDAas+N0cvrQbareZrNZ1l4Jbj7jzMAgWtu7GBwNFrNB7UVKQGNbydML5+iiIgwKJUnNqG2xRrXvZR86yQ3VK6P07LPP4J23D3ODTlqyD9RYVGLkxLrppIyIj2nhVezebCaF3FwOPadOY3joLPr6+5ilOCYnp1W/Gxsdo7AY1P0kQOn0DAUnh1ZS0VjTcOpUDzw0+hYaizwpLAwRIFmaiXyxTFrPIzGZxJ49e/DAnu+j+3j30r4v+VRNaCUZa2yM4MALf8Vr//g7UokEjrGflRc8ptSZyWRUci8gi8USD6nofqplzKSmkJiKIz42wqxNY+jcEK1akoEYx2w6o1RaJhgrW8ZEfAwOlxXbt9/ACaUB6SRnUqtJmY9yWfRBx+joBI68c4RK68Xrr70mbgXvHj2ytN9lU/RiS31V+iezeuitw/ghR63OtnY0cAQSYCm2jqlpThYUF6GctAONf8ICAeHzcsrg9cbGJg7OzQxEUflcUVARJZtN+qhZZdSomQnaUa/bkhyZBFjbp1GhWG294SY89tijikG37LwN5UIKTz/128+XwY8vER6Dcjc13H7braTG+7hr1x04/N+3kJlLK4cjlFPU1fWFdgIFtkAbNjo2rIbgsfERdHd3c55MYHpqmtTLUyXLnEImFMWlJmtS06Sx9MgCGdHL4Zs3h5+D+P79L+CZZ/6IHdt3Ynz0PNpYq0t7vJw/n8kUIgNvOp3GY4//lKNTDzjnoonKJ25kEaTYQMmmtJSyfAeaUlCPx81XD92Mg9YvKsMG51GfEjh5L5fNc9JwUVDyqHHsEtOvW+30qgH22SQ3UKb47SfYJ9FCQbvsABfXou0b6B/Art138yTOik2bNis6i/OZJxWlv8pnqgvKq1wSgft8QQToUORsJxJZpVqANPg8TbvD4VHtaWpyUil0c0uMRmGc99VoLpyY5vVCfg4PPXj/Ui/8Un6bMCx41vaOdgwPn6MQvaIEpv9MvzqdUy5IjASBiSipTBKc/KVTCcTHxzimpTE5HkeW2ZqcTDAA9cOvXrJiLQ+8OlevpkCdY72HVZkMDg0q5f3Wvd9UVnzZjf6LrsXbC+jX//kGHn74B1izdh0Fxqs2IqppVkcV9X9jwbeKwWiMRBEigCh77KaNW/Dcc3/Cvn37cPDwIWXcW2MtnICGmd2S8qxdXfzcuo5LczKXa1UX/Kesnzz+Mxx48SXctG2bGpDlepZNXd4VsGLhxBV1dnbSyrlx88678Oqrr2LDhvU8vkwg2tqKoC+khMzMmpfThUgDAXa0XgBO1hX7+Wyp5riB3//hdzz/+TeS3Kwca8ikIPQTt7OoukLjOA+VPW5xOnb08HOy70wmr5TWTOPRfewYguEAbt6+/qLgrijAxSU9UEjTxiwcJMinn3oSR9leMjwWkesmNe2bln7Jkp8BmCS8+a9XVKu4ecd2rO3qQveJ49jJnrdl4+r6SYCsi5yzXjGKXmwt0lb+9u79JQ68/BK23bhDzAgVtQILheV7370fU1NJNVvK6YGoppjzhkgIWzevVUeOnzbgf6UAF9fioN3H+fPb37mfc2Ez+59fHV/sunMXTpzswZ133sEp4gyPIlvodpzYuKGrzgbaeu1TiLgifsLWFmjbybOc40ffx9fv2Y1+HkLLGWmgIaIOswb6BVyUU4sPWzatUVO9JE37DAgrIoMfX+J0RGDkAGzvvl9xxOrEfffeR8diRGd7FB5XfcoXw72cteIAyvp475ygktrt4mbcC2/ikk72VyTAy7mu/zeSq31d8wDlt4mDuIbX/wFqgwltexR/ZgAAAABJRU5ErkJggg==" },
    { id: 3, name: "Huấn luyện viên", description: "Hướng dẫn kỹ thuật cơ bản và nâng cao.", price: 200000, unit: "/ giờ", label: "giờ", quantity: 0, image: null }
];

let currentCategory = "all";
let currentTab = "goods";

// Định dạng số tiền theo kiểu Việt Nam
function formatMoney(number) {
    return number.toLocaleString("vi-VN") + "đ";
}

// Lấy danh sách hàng hóa sau khi lọc danh mục và tìm kiếm
function getFilteredProducts() {
    const keyword = document.getElementById("searchInput").value.toLowerCase();

    return products.filter(product => {
        const matchCategory =
            currentCategory === "all" || product.category === currentCategory;

        const matchSearch =
            product.name.toLowerCase().includes(keyword);

        return matchCategory && matchSearch;
    });
}

// Hiển thị danh sách hàng hóa
function displayProducts(list = products) {
    const productList = document.getElementById("productList");
    productList.innerHTML = "";

    list.forEach(product => {
        const total = product.price * product.quantity;
        const row = document.createElement("div");

        row.className = "product-row";
        row.innerHTML = `
            <div class="product-info">
                <div class="product-icon"><img src="${product.image}" alt="${product.name}" onerror="this.style.visibility='hidden'"></div>
                <div class="product-name">
                    <strong>${product.name}</strong>
                    <span>${product.description}</span>
                </div>
            </div>

            <div class="price">${formatMoney(product.price)}</div>

            <div class="quantity">
                <div class="quantity-control ${product.quantity === 0 ? "empty" : ""}">
                    <button type="button" aria-label="Giảm số lượng"
                        onclick="changeQuantity(${product.id}, -1)">−</button>
                    <input type="text" value="${product.quantity}" readonly>
                    <button type="button" aria-label="Tăng số lượng"
                        onclick="changeQuantity(${product.id}, 1)">+</button>
                </div>
            </div>

            <div class="total ${total === 0 ? "zero" : ""}">
                ${total === 0 ? "—" : formatMoney(total)}
            </div>
        `;

        productList.appendChild(row);
    });

    if (list.length === 0) {
        productList.innerHTML = `
            <div class="empty-message">Không tìm thấy sản phẩm phù hợp.</div>
        `;
    }
}

// Tăng hoặc giảm số lượng sản phẩm
function changeQuantity(id, amount) {
    const product = products.find(item => item.id === id);

    if (!product) return;

    product.quantity += amount;

    if (product.quantity < 0) {
        product.quantity = 0;
    }

    updateOrder();
    displayProducts(getFilteredProducts());
}

// Tính lại tổng tiền, thông tin đơn hàng và chân trang
const serviceIcon = `<svg viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="m16 11 2 2 4-4"/></svg>`;
const checkIcon = `<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>`;

function setText(id, text) {
    document.getElementById(id).innerText = text;
}

function updateOrder() {
    const goods = products.filter(p => p.quantity > 0);
    const goodsCount = goods.reduce((sum, p) => sum + p.quantity, 0);
    const goodsTotal = goods.reduce((sum, p) => sum + p.price * p.quantity, 0);

    const picked = services.filter(s => s.quantity > 0);
    const turns = picked.reduce((sum, s) => sum + s.quantity, 0);
    const serviceTotal = picked.reduce((sum, s) => sum + s.price * s.quantity, 0);
    const serviceDetail = picked.map(s => `${s.quantity} ${s.label} × ${formatMoney(s.price)}`);

    setText("tabCount", goods.length);
    setText("serviceTabCount", picked.length);
    document.getElementById("serviceTabCount").hidden = picked.length === 0;

    // Thông tin đơn hàng
    setText("productCount", goodsCount);
    setText("orderSubtotal", formatMoney(goodsTotal));
    setText("orderProducts", goods.map(p => picked.length
        ? `${p.quantity} ${p.short} × ${formatMoney(p.price)}`
        : `${p.quantity} ${p.short}`).join(" · ") || "Chưa có sản phẩm nào được chọn");

    document.getElementById("serviceBlock").hidden = picked.length === 0;
    setText("serviceCount", turns);
    setText("serviceSubtotal", formatMoney(serviceTotal));
    setText("serviceProducts", serviceDetail.join(" · "));
    setText("orderTotal", formatMoney(goodsTotal + serviceTotal));

    // Chân trang của thẻ bên trái
    const footer = document.getElementById("catalogFooter");
    const isService = currentTab === "service";
    footer.classList.toggle("service", isService);
    document.getElementById("footerLabel").hidden = !isService;
    document.getElementById("selectedDetail").hidden = !isService;

    if (isService) {
        setText("selectedInfo", `Đã chọn ${picked.length} dịch vụ · ${turns} lượt`);
        setText("selectedDetail", serviceDetail.join(" + ").replace(/ × /g, " × ") || "Chưa chọn dịch vụ nào");
        setText("footerTotal", formatMoney(serviceTotal));
    } else {
        setText("selectedInfo", `Đã chọn ${goods.length} loại · ${goodsCount} sản phẩm`);
        setText("footerTotal", formatMoney(goodsTotal));
    }
}

// Hiển thị danh sách dịch vụ
function displayServices() {
    const keyword = document.getElementById("serviceSearch").value.toLowerCase().trim();
    const list = services.filter(s => s.name.toLowerCase().includes(keyword));
    const box = document.getElementById("serviceList");

    box.innerHTML = list.map(s => {
        const on = s.quantity > 0;
        const total = s.price * s.quantity;
        return `
        <div class="service-card ${on ? "selected" : ""}">
            <div class="service-top">
                <div class="service-media ${s.image ? "" : "icon"}">
                    ${s.image ? `<img src="${s.image}" alt="${s.name}">` : serviceIcon}
                </div>
                <div class="service-name">
                    <strong>${s.name}</strong>
                    <span>${s.description}</span>
                </div>
                <button type="button" class="check ${on ? "checked" : ""}" role="checkbox"
                    aria-checked="${on}" aria-label="Chọn ${s.name}"
                    onclick="toggleService(${s.id})">${on ? checkIcon : ""}</button>
            </div>
            <div class="service-bottom">
                <div class="service-price"><strong>${formatMoney(s.price)}</strong> <span>${s.unit}</span></div>
                <div class="quantity-control ${on ? "" : "empty"}">
                    <button type="button" aria-label="Giảm số lượng" onclick="changeServiceQuantity(${s.id}, -1)">−</button>
                    <input type="text" value="${s.quantity}" readonly>
                    <button type="button" aria-label="Tăng số lượng" onclick="changeServiceQuantity(${s.id}, 1)">+</button>
                </div>
                <div class="total ${on ? "" : "zero"}">${on ? formatMoney(total) : "—"}</div>
            </div>
        </div>`;
    }).join("") || `<div class="empty-message">Không tìm thấy dịch vụ phù hợp.</div>`;
}

function changeServiceQuantity(id, amount) {
    const service = services.find(item => item.id === id);
    if (!service) return;
    service.quantity = Math.max(0, service.quantity + amount);
    updateOrder();
    displayServices();
}

// Tích chọn / bỏ chọn dịch vụ
function toggleService(id) {
    const service = services.find(item => item.id === id);
    if (!service) return;
    service.quantity = service.quantity > 0 ? 0 : 1;
    updateOrder();
    displayServices();
}


// Lọc theo danh mục
function filterCategory(category, button) {
    currentCategory = category;

    document.querySelectorAll(".category").forEach(item => {
        item.classList.remove("active");
    });

    button.classList.add("active");
    displayProducts(getFilteredProducts());
}

// Tìm kiếm hàng hóa
function searchProduct() {
    displayProducts(getFilteredProducts());
}

// Chuyển giữa tab hàng hóa và dịch vụ
function changeTab(tab) {
    currentTab = tab;
    const isGoods = tab === "goods";

    document.getElementById("goodsTab").classList.toggle("active", isGoods);
    document.getElementById("serviceTab").classList.toggle("active", !isGoods);
    document.getElementById("goodsPanel").hidden = !isGoods;
    document.getElementById("servicePanel").hidden = isGoods;

    setText("sectionTitle", isGoods ? "Hàng hóa tại sân" : "Dịch vụ bổ sung");
    setText("sectionDescription", isGoods
        ? "Chọn đồ uống và phụ kiện để buổi chơi trọn vẹn hơn."
        : "Sẵn sàng ra sân với những tiện ích dành riêng cho bạn.");

    if (isGoods) {
        displayProducts(getFilteredProducts());
    } else {
        displayServices();
    }
    updateOrder();
}

// Thông báo nổi trong trang (thay cho alert, vì trình duyệt có thể chặn alert lặp lại)
let toastTimer;
function showToast(message, isError = false) {
    let toast = document.getElementById("toast");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "toast";
        toast.setAttribute("role", "status");
        document.body.appendChild(toast);
    }
    toast.innerText = message;
    toast.className = "toast show" + (isError ? " error" : "");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

// Tạo đơn hàng mẫu
function createOrder() {
    const hasGoods = products.some(p => p.quantity > 0);
    const hasService = services.some(s => s.quantity > 0);

    if (!hasGoods && !hasService) {
        showToast("Vui lòng chọn ít nhất một sản phẩm hoặc dịch vụ!", true);
        return;
    }

    showToast("Tạo đơn hàng thành công!");
}

// Khởi tạo giao diện khi tải trang
displayProducts();
updateOrder();
