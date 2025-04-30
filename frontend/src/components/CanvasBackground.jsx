import { useEffect, useRef } from 'react';

export default function CanvasBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    canvas.style.backgroundColor = "transparent"; // <- garantir fundo transparente

    const points = [];
    const spacing = 80;
    const mouse = { x: width/2, y: height/2 };

    for (let x = 0; x < width; x += spacing) {
      for (let y = 0; y < height; y += spacing) {
        points.push({
          baseX: x,
          baseY: y,
          x: x,
          y: y,
          offsetX: Math.random() * 50,
          offsetY: Math.random() * 50,
          speedX: Math.random() * 0.5 + 0.5,
          speedY: Math.random() * 0.5 + 0.5
        });
      }
    }

    function drawLines() {
      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 1;
      points.forEach((point, i) => {
        points.forEach((otherPoint, j) => {
          if (i !== j) {
            const dx = point.x - otherPoint.x;
            const dy = point.y - otherPoint.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < spacing * 1.5) {
              ctx.strokeStyle = `rgba(0,0,0,${(1 - dist / (spacing * 1.5)) * 0.3})`; // linhas pretas no claro
              ctx.beginPath();
              ctx.moveTo(point.x, point.y);
              ctx.lineTo(otherPoint.x, otherPoint.y);
              ctx.stroke();
            }
          }
        });
      });

      points.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        const pulse = Math.abs(Math.sin(p.offsetX * 0.1));
        ctx.fillStyle = `rgba(0,0,0,${pulse * 0.5})`;
        ctx.fill();
      });
    }

    function animate() {
      points.forEach(p => {
        p.offsetX += p.speedX * 0.05;
        p.offsetY += p.speedY * 0.05;
        const waveX = Math.sin(p.offsetX) * 3;
        const waveY = Math.cos(p.offsetY) * 3;
        const dx = p.baseX - mouse.x;
        const dy = p.baseY - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const force = Math.min(100 / (dist || 1), 5);

        p.x = p.baseX + (dx / (dist || 1)) * force * 10 + waveX;
        p.y = p.baseY + (dy / (dist || 1)) * force * 10 + waveY;
      });

      drawLines();
      requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('mousemove', e => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    window.addEventListener('resize', () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    });

  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 opacity-20"></canvas>;
}

