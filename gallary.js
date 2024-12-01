// فتح النافذة المنبثقة عند النقر على الصورة
function openModal(imgElement) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-img");
    modal.style.display = "flex"; // عرض النافذة المنبثقة
    modalImg.src = imgElement.src; // تعيين مصدر الصورة في النافذة المنبثقة
}

// إغلاق النافذة المنبثقة عند النقر عليها
function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none"; // إخفاء النافذة المنبثقة
}
