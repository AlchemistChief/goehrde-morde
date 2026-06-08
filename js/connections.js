// Drawing all connections in explicit red string
window.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('string-canvas');
    const ctx = canvas.getContext('2d');
    const board = document.getElementById('corkboard');
    function resizeCanvas() { canvas.width = board.clientWidth; canvas.height = board.clientHeight; drawAllConnections(); }
    function drawString(id1, id2, color = 'rgba(204, 0, 0, 0.85)', thickness = 2.5) {
        const el1 = document.querySelector(`#${id1} .pin`); const el2 = document.querySelector(`#${id2} .pin`); if (!el1 || !el2) return;
        const rect1 = el1.getBoundingClientRect(); const rect2 = el2.getBoundingClientRect(); const boardRect = board.getBoundingClientRect();
        const x1 = rect1.left - boardRect.left + (rect1.width / 2); const y1 = rect1.top - boardRect.top + (rect1.height / 2);
        const x2 = rect2.left - boardRect.left + (rect2.width / 2); const y2 = rect2.top - boardRect.top + (rect2.height / 2);
        ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.strokeStyle = color; ctx.lineWidth = thickness;
        ctx.shadowColor = 'rgba(0, 0, 0, 0.6)'; ctx.shadowBlur = 5; ctx.shadowOffsetX = 2; ctx.shadowOffsetY = 3; ctx.stroke();
    }
    function drawAllConnections() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); const redString = 'rgba(190, 10, 10, 0.85)';
        drawString('note-forest', 'note-victims1', redString); drawString('note-forest', 'note-victims2', redString);
        drawString('note-victims1', 'photo-v1', redString); drawString('photo-v1', 'note-mystery', redString);
        drawString('note-victims2', 'photo-v2', redString); drawString('photo-v2', 'note-mystery', redString);
        drawString('note-weapon', 'photo-handcuffs', redString); drawString('note-weapon', 'note-victims2', redString);
        drawString('note-mystery', 'note-car', redString); drawString('note-car', 'photo-car-img', redString);
        drawString('photo-car-img', 'photo-suspect', redString); drawString('note-mystery', 'note-suspect', redString, 3.5);
        drawString('note-suspect', 'photo-suspect', redString); drawString('photo-suspect', 'note-dna', redString);
        drawString('note-accomplice', 'note-mystery', redString); drawString('note-accomplice', 'note-dna', redString);
    }
    window.addEventListener('resize', resizeCanvas); setTimeout(resizeCanvas, 150);
});