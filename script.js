const form = document.getElementById('chat-form');
const input = document.getElementById('user-input');
const result = document.getElementById('result');

function addResult(text, sender) {
    const div = document.createElement('div');
    div.className = 'result ' + sender;
    div.textContent = (sender === 'user' ? 'Tú: ' : 'Bot: ') + text;
    result.appendChild(div);
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const pregunta = input.value.trim();
    if (!pregunta) return;
    addResult(pregunta, 'user');
    input.value = '';
    try {
        const res = await fetch('http://127.0.0.1:8000/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ pregunta })
        });
        if (!res.ok) throw new Error('Error en la respuesta del servidor');
        const data = await res.json();
        addResult(data.respuesta, 'bot');
    } catch (err) {
        addResult('Error: ' + err.result, 'bot');
    }
});
