document.addEventListener('DOMContentLoaded', () => {
    const copyEmailBtn = document.getElementById('copy-email');
    const toast = document.getElementById('copy-toast');

    if (copyEmailBtn && toast) {
        copyEmailBtn.addEventListener('click', (event) => {
            event.preventDefault(); // Скасовуємо перехід за посиланням #
            
            const emailText = copyEmailBtn.textContent;

            // Копіюємо текст в буфер обміну
            navigator.clipboard.writeText(emailText).then(() => {
                // Показуємо сповіщення
                toast.classList.add('show');

                // Ховаємо його через 2 секунди
                setTimeout(() => {
                    toast.classList.remove('show');
                }, 2000);
            }).catch(err => {
                console.error('Не вдалося скопіювати: ', err);
            });
        });
    }
});