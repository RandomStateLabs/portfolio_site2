import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const HeroBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrame: number;
    const stars: Array<{
      x: number;
      y: number;
      size: number;
      opacity: number;
      twinkleSpeed: number;
      twinkleOffset: number;
    }> = [];

    const shootingStars: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      length: number;
      opacity: number;
      life: number;
      maxLife: number;
    }> = [];

    const nebulaClouds: Array<{
      x: number;
      y: number;
      size: number;
      opacity: number;
      color: string;
      drift: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = Math.max(window.innerHeight, document.documentElement.scrollHeight);
    };

    const createStar = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.8 + 0.2,
      twinkleSpeed: Math.random() * 0.02 + 0.01,
      twinkleOffset: Math.random() * Math.PI * 2
    });

    const createShootingStar = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height * 0.5,
      vx: Math.random() * 8 + 4,
      vy: Math.random() * 4 + 2,
      length: Math.random() * 80 + 40,
      opacity: 1,
      life: 0,
      maxLife: Math.random() * 60 + 40
    });

    const createNebulaCloud = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 200 + 100,
      opacity: Math.random() * 0.1 + 0.05,
      color: ['#4c1d95', '#7c3aed', '#a855f7', '#c084fc'][Math.floor(Math.random() * 4)],
      drift: Math.random() * 0.2 + 0.1
    });

    const initSpace = () => {
      stars.length = 0;
      shootingStars.length = 0;
      nebulaClouds.length = 0;
      
      // Create stars
      for (let i = 0; i < 200; i++) {
        stars.push(createStar());
      }
      
      // Create nebula clouds
      for (let i = 0; i < 8; i++) {
        nebulaClouds.push(createNebulaCloud());
      }
    };

    const animate = (time: number) => {
      // Create space background gradient
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height)
      );
      gradient.addColorStop(0, '#0f0f23');
      gradient.addColorStop(0.5, '#1a1a2e');
      gradient.addColorStop(1, '#16213e');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw nebula clouds
      nebulaClouds.forEach((cloud, index) => {
        cloud.x += Math.sin(time * 0.001 + index) * cloud.drift;
        
        const nebulaGradient = ctx.createRadialGradient(
          cloud.x, cloud.y, 0,
          cloud.x, cloud.y, cloud.size
        );
        nebulaGradient.addColorStop(0, cloud.color + Math.floor(cloud.opacity * 255).toString(16).padStart(2, '0'));
        nebulaGradient.addColorStop(1, cloud.color + '00');
        
        ctx.fillStyle = nebulaGradient;
        ctx.fillRect(cloud.x - cloud.size, cloud.y - cloud.size, cloud.size * 2, cloud.size * 2);
      });

      // Draw stars with twinkling effect
      stars.forEach((star) => {
        const twinkle = Math.sin(time * star.twinkleSpeed + star.twinkleOffset) * 0.3 + 0.7;
        ctx.globalAlpha = star.opacity * twinkle;
        
        // Create star glow
        const starGradient = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, star.size * 3
        );
        starGradient.addColorStop(0, '#ffffff');
        starGradient.addColorStop(0.3, '#e0e7ff');
        starGradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = starGradient;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw star core
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Create shooting stars occasionally
      if (Math.random() < 0.003) {
        shootingStars.push(createShootingStar());
      }

      // Draw and update shooting stars
      shootingStars.forEach((shootingStar, index) => {
        shootingStar.x += shootingStar.vx;
        shootingStar.y += shootingStar.vy;
        shootingStar.life++;
        
        const lifeRatio = shootingStar.life / shootingStar.maxLife;
        shootingStar.opacity = 1 - lifeRatio;
        
        if (shootingStar.life >= shootingStar.maxLife || 
            shootingStar.x > canvas.width || shootingStar.y > canvas.height) {
          shootingStars.splice(index, 1);
          return;
        }
        
        // Draw shooting star trail
        const gradient = ctx.createLinearGradient(
          shootingStar.x, shootingStar.y,
          shootingStar.x - shootingStar.vx * 10, shootingStar.y - shootingStar.vy * 10
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${shootingStar.opacity})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.globalAlpha = shootingStar.opacity;
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(shootingStar.x, shootingStar.y);
        ctx.lineTo(
          shootingStar.x - shootingStar.vx * 10, 
          shootingStar.y - shootingStar.vy * 10
        );
        ctx.stroke();
      });

      ctx.globalAlpha = 1;
      animationFrame = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initSpace();
    animate(0);

    window.addEventListener('resize', () => {
      resizeCanvas();
      initSpace();
    });

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden w-full h-full">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      
      {/* Floating space objects */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full opacity-60"
          style={{
            left: `${10 + i * 12}%`,
            top: `${15 + (i % 3) * 25}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
      
      {/* Orbital rings */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute border border-indigo-400/20 rounded-full"
          style={{
            width: `${200 + i * 100}px`,
            height: `${200 + i * 100}px`,
            left: `${60 + i * 5}%`,
            top: `${20 + i * 15}%`,
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 30 + i * 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
      
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-slate-900/60" />
    </div>
  );
};

export default HeroBackground;