import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';

const PhysicsCanvas = ({ tags = [] }) => {
  const sceneRef = useRef(null);

  // Ultra-Modern Cyber Glassmorphic Color Palette
  const colorPalette = [
    { bg: 'rgba(15, 23, 42, 0.85)', stroke: '#00f0ff', text: '#38bdf8' },
    { bg: 'rgba(15, 23, 42, 0.85)', stroke: '#a855f7', text: '#c084fc' },
    { bg: 'rgba(15, 23, 42, 0.85)', stroke: '#3b82f6', text: '#60a5fa' },
    { bg: 'rgba(15, 23, 42, 0.85)', stroke: '#34d399', text: '#6ee7b7' },
  ];

  useEffect(() => {
    if (!sceneRef.current) return;

    const containerWidth = sceneRef.current.clientWidth || 320;
    const isMobile = containerWidth < 640;
    const height = isMobile ? 320 : 400;

    const engine = Matter.Engine.create();
    engine.gravity.y = 1.0;

    const render = Matter.Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: containerWidth,
        height: height,
        wireframes: false,
        background: 'transparent',
        pixelRatio: Math.min(window.devicePixelRatio || 1, 2),
      },
    });

    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);
    Matter.Render.run(render);

    // Create Dynamic Boundaries (Thicker to avoid clipping)
    const wallOptions = { isStatic: true, render: { visible: false } };
    const ground = Matter.Bodies.rectangle(containerWidth / 2, height + 25, containerWidth * 2, 50, wallOptions);
    const leftWall = Matter.Bodies.rectangle(-25, height / 2, 50, height * 2, wallOptions);
    const rightWall = Matter.Bodies.rectangle(containerWidth + 25, height / 2, 50, height * 2, wallOptions);

    Matter.Composite.add(engine.world, [ground, leftWall, rightWall]);

    // Measure text width using offscreen canvas
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const fontSize = isMobile ? 10 : 12;
    ctx.font = `bold ${fontSize}px "Space Grotesk", sans-serif`;

    // Responsive Tag Bodies
    const bodies = tags.map((tag, i) => {
      const textWidth = ctx.measureText(tag).width;
      const padding = isMobile ? 24 : 40;
      const bodyWidth = Math.min(Math.max(textWidth + padding, isMobile ? 70 : 90), containerWidth - 30);
      const bodyHeight = isMobile ? 32 : 38;

      const spawnX = Math.random() * (containerWidth - bodyWidth - 20) + bodyWidth / 2 + 10;
      const spawnY = -30 - i * (isMobile ? 35 : 45);

      const colorScheme = colorPalette[i % colorPalette.length];

      const body = Matter.Bodies.rectangle(spawnX, spawnY, bodyWidth, bodyHeight, {
        chamfer: { radius: bodyHeight / 2 },
        restitution: 0.7,
        friction: 0.1,
        frictionAir: 0.015,
        render: {
          fillStyle: colorScheme.bg,
          strokeStyle: colorScheme.stroke,
          lineWidth: 1.5,
        },
      });

      body.customMeta = {
        label: tag,
        textColor: colorScheme.text,
        strokeColor: colorScheme.stroke,
        fontSize: fontSize,
      };

      return body;
    });

    Matter.Composite.add(engine.world, bodies);

    // Custom Renderer for Neon Pill Typography
    const drawCustomCanvas = () => {
      const context = render.context;
      if (!context) return;

      bodies.forEach((body) => {
        const { x, y } = body.position;
        const angle = body.angle;
        const { label, textColor, strokeColor, fontSize } = body.customMeta;

        context.save();
        context.translate(x, y);
        context.rotate(angle);

        context.shadowColor = strokeColor;
        context.shadowBlur = 8;

        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.font = `bold ${fontSize}px "Space Grotesk", system-ui, sans-serif`;
        context.fillStyle = textColor;
        context.fillText(label, 0, 0);

        context.restore();
      });
    };

    Matter.Events.on(render, 'afterRender', drawCustomCanvas);

    // Mouse & Touch Constraints
    const mouse = Matter.Mouse.create(render.canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });

    Matter.Composite.add(engine.world, mouseConstraint);
    render.mouse = mouse;

    // Fully Responsive Window Resize Handler
    const handleResize = () => {
      if (!sceneRef.current || !render.canvas) return;
      const newWidth = sceneRef.current.clientWidth;
      const newIsMobile = newWidth < 640;
      const newHeight = newIsMobile ? 320 : 400;

      render.canvas.width = newWidth;
      render.canvas.height = newHeight;
      render.options.width = newWidth;
      render.options.height = newHeight;

      Matter.Body.setPosition(ground, { x: newWidth / 2, y: newHeight + 25 });
      Matter.Body.setPosition(rightWall, { x: newWidth + 25, y: newHeight / 2 });

      // Keep tags inside viewport after resize
      bodies.forEach((body) => {
        if (body.position.x > newWidth - 20) {
          Matter.Body.setPosition(body, { x: newWidth - 40, y: body.position.y });
        }
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      Matter.Events.off(render, 'afterRender', drawCustomCanvas);
      Matter.Composite.clear(engine.world);
      Matter.Engine.clear(engine);
      if (render.canvas) {
        render.canvas.remove();
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [tags]);

  return (
    <div className="w-full relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 backdrop-blur-2xl shadow-2xl min-h-[320px] sm:min-h-[400px]">

      {/* Background Cyber Grid Pattern */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#00f0ff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Ambient Glow */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/40 via-purple-500/10 to-transparent" />
      </div>

      <div ref={sceneRef} className="w-full h-[320px] sm:h-[400px] cursor-grab active:cursor-grabbing relative z-10" />

      {/* Floating Badge Footer */}
      <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 pointer-events-none z-20 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-slate-950/90 border border-cyan-500/30 backdrop-blur-md whitespace-nowrap">
        <span className="text-cyan-300 text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-[0.2em] flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          Drag & Toss Tech Pills
        </span>
      </div>
    </div>
  );
};

export default PhysicsCanvas;