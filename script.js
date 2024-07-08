document.addEventListener('DOMContentLoaded', () => {
    const heart = document.getElementById('heart');
    const progressBar = document.getElementById('progressBar');
    let clicks = 0;

    heart.addEventListener('click', () => {
        clicks++;
        progressBar.value = clicks;

        if (clicks >= 20) {
            window.location.href = 'nextpage.html';
        }
    });
});
