import React, { useRef, useEffect } from 'react';

export const BoilerCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Funções auxiliares para desenhar elementos específicos
        const drawScrew = (x: number, y: number) => {
          ctx.beginPath();
          ctx.arc(x, y, 4, 0, 2 * Math.PI);
          ctx.fillStyle = 'silver';
          ctx.fill();
          ctx.beginPath();
          ctx.moveTo(x - 2, y);
          ctx.lineTo(x + 2, y);
          ctx.moveTo(x, y - 2);
          ctx.lineTo(x, y + 2);
          ctx.strokeStyle = 'grey';
          ctx.stroke();
        };

        const drawReflection = () => {
          ctx.beginPath();
          ctx.ellipse(180, 250, 60, 120, Math.PI / 5, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
          ctx.fill();
        };

        // Desenho do corpo da caldeira
        const grdBody = ctx.createRadialGradient(200, 250, 50, 200, 250, 150);
        grdBody.addColorStop(0, '#f0f0f0');
        grdBody.addColorStop(1, '#a0a0a0');

        ctx.fillStyle = grdBody;
        ctx.beginPath();
        ctx.ellipse(200, 250, 120, 180, 0, 0, Math.PI * 2);
        ctx.fill();

        drawReflection();

        // Manômetro mais detalhado
        ctx.beginPath();
        ctx.arc(200, 120, 30, 0, Math.PI * 2);
        ctx.fillStyle = '#e0e0e0';
        ctx.fill();
        ctx.strokeStyle = '#606060';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Agulha do manômetro
        ctx.beginPath();
        ctx.moveTo(200, 120);
        ctx.lineTo(220, 130);
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Válvula e tubulação com efeitos de sombra
        ctx.fillStyle = '#505050';
        ctx.beginPath();
        ctx.arc(200, 380, 20, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = '#404040';
        ctx.lineWidth = 12;
        ctx.beginPath();
        ctx.moveTo(200, 380);
        ctx.lineTo(200, 440);
        ctx.stroke();

        // Detalhes como parafusos e sombras
        drawScrew(80, 220);
        drawScrew(320, 220);
        drawScrew(80, 280);
        drawScrew(320, 280);

        // Sombra projetada
        ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
        ctx.beginPath();
        ctx.ellipse(200, 450, 140, 20, 0, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }, []);

  return <canvas ref={canvasRef} width="400" height="500" style={{ boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)' }} />;
};
