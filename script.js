// إضافة تأثير عند تمرير الماوس على الخلايا
document.querySelectorAll('td').forEach(cell => {
    cell.addEventListener('mouseenter', () => {
        const cellText = cell.textContent;
        console.log(`تم تمرير الماوس على: ${cellText}`);
    });
});
