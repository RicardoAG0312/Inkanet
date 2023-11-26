document.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(function() {
        document.getElementById('loading-screen').remove();
        document.getElementById('content').style.display = 'block';
    }, 3000);
});