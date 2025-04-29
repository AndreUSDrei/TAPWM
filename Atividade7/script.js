document.getElementById('triangleForm').addEventListener('submit', function(e) {
    e.preventDefault();
    

    const a = parseFloat(document.getElementById('sideA').value);
    const b = parseFloat(document.getElementById('sideB').value);
    const c = parseFloat(document.getElementById('sideC').value);
    

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        showResult("⚠️ Valores inválidos!", false);
        clearCanvas();
        return;
    }
    
    if (a <= 0 || b <= 0 || c <= 0) {
        showResult("❌ Valores devem ser positivos!", false);
        clearCanvas();
        return;
    }
    

    if (isTriangle(a, b, c)) {
        const type = getTriangleType(a, b, c);
        showResult(`✅ Triângulo ${type.toUpperCase()}`, true);
        drawTriangle(type);
    } else {
        showResult("❌ Não forma um triângulo", false);
        clearCanvas();
    }
});

function isTriangle(a, b, c) {
    return a + b > c && a + c > b && b + c > a;
}

function getTriangleType(a, b, c) {
    if (a === b && b === c) return "equilátero";
    if (a === b || a === c || b === c) return "isósceles";
    return "escaleno";
}

function showResult(msg, isSuccess) {
    const result = document.getElementById('result');
    result.textContent = msg;
    result.className = isSuccess ? 'result success' : 'result error';
}

function drawTriangle(type) {
    const canvas = document.getElementById('triangleCanvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.strokeStyle = '#4CAF50';
    ctx.lineWidth = 3;
    ctx.fillStyle = 'rgba(76, 175, 80, 0.1)';
    
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const size = 50;

    ctx.beginPath();
    if (type === "equilátero") {
        ctx.moveTo(centerX, centerY - size);
        ctx.lineTo(centerX - size, centerY + size);
        ctx.lineTo(centerX + size, centerY + size);
    } else if (type === "isósceles") {
        ctx.moveTo(centerX, centerY - size);
        ctx.lineTo(centerX - size, centerY + size);
        ctx.lineTo(centerX + size/2, centerY + size);
    } else {
        ctx.moveTo(centerX - size/2, centerY - size/2);
        ctx.lineTo(centerX - size, centerY + size);
        ctx.lineTo(centerX + size, centerY + size/2);
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

function clearCanvas() {
    const canvas = document.getElementById('triangleCanvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}