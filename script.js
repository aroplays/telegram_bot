let score = 0;

document.getElementById('gdpuri').addEventListener('click', function() {
    score++;
    document.getElementById('score').textContent = 'امتیاز: ' + score;
    sendScoreToTelegram(score);
});

function sendScoreToTelegram(score) {
    const token = '7984427469:AAEI1Z5W2vvmVqXcoLqqi1-3tHDJ_Z177Ns';  // توکن ربات خود را اینجا وارد کنید
    const chatId = '7984427469';  // شناسه چت خود را اینجا وارد کنید

    const message = `امتیاز شما: ${score}`;
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${message}`;

    fetch(url)
        .then(response => response.json())
        .then(data => console.log('Score sent to Telegram:', data))
        .catch(error => console.error('Error sending score:', error));
}
