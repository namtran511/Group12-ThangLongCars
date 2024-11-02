
function validateForm() {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const mileage = document.getElementById("mileage").value;
    const year = document.getElementById("year").value;


    const namePattern = /^[A-Za-z\s]+$/;
    if (!namePattern.test(name)) {
        alert("Tên chỉ nên chứa chữ cái.");
        return false;
    }


    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        alert("Số điện thoại phải có 10 chữ số.");
        return false;
    }


    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Email không hợp lệ.");
        return false;
    }


    if (isNaN(mileage) || mileage === "") {
        alert("Số km đã đi chỉ nên chứa số.");
        return false;
    }


    if (isNaN(year) || year === "") {
        alert("Năm sản xuất chỉ nên chứa số.");
        return false;
    }


    return true;
}
