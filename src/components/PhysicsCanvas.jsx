import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';

const PhysicsCanvas = ({ tags = [] }) => {
  const sceneRef = useRef(null);
  const engineRef = useRef(Matter.Engine.create());
  const bodiesRef = useRef([]);

  const tagBg = 'rgba(0, 210, 255, 0.8)';
  const tagStroke = 'rgba(124, 58, 237, 0.5)';
  const tagText = '#FFFFFF';

  useEffect(() => {
    const engine = engineRef.current;
    engine.gravity.y = 1.5; // Slightly stronger gravity for 'sudden' effect
    // ... rest of the logic remains same but using these constants
    const render = Matter.Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: sceneRef.current.clientWidth,
        height: 400,
        wireframes: false,
        background: 'transparent',
      },
    });

    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);
    Matter.Render.run(render);

    // Create boundaries
    const ground = Matter.Bodies.rectangle(
      sceneRef.current.clientWidth / 2,
      410,
      sceneRef.current.clientWidth,
      20,
      { isStatic: true, render: { visible: false } }
    );
    const leftWall = Matter.Bodies.rectangle(
      -10,
      200,
      20,
      400,
      { isStatic: true, render: { visible: false } }
    );
    const rightWall = Matter.Bodies.rectangle(
      sceneRef.current.clientWidth + 10,
      200,
      20,
      400,
      { isStatic: true, render: { visible: false } }
    );

    Matter.Composite.add(engine.world, [ground, leftWall, rightWall]);

    // Create tags
    const bodies = tags.map((tag, i) => {
      const x = Math.random() * sceneRef.current.clientWidth;
      const y = -100 - i * 50;
      
      const body = Matter.Bodies.rectangle(x, y, 120, 40, {
        chamfer: { radius: 20 },
        restitution: 0.8, // Bouncy feel
        friction: 0.1,
        render: {
          fillStyle: tagBg,
          strokeStyle: tagStroke,
          lineWidth: 2,
        },
      });
      return body;
    });

    bodiesRef.current = bodies;

    // Custom renderer for text
    const drawText = () => {
      const context = render.context;
      bodies.forEach((body, i) => {
        const { x, y } = body.position;
        const angle = body.angle;
        context.save();
        context.translate(x, y);
        context.rotate(angle);
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.font = 'bold 12px "Space Grotesk", sans-serif';
        context.fillStyle = '#FFFFFF';
        context.fillText(tags[i], 0, 0);
        context.restore();
      });
    };

    Matter.Events.on(render, 'afterRender', drawText);

    Matter.Composite.add(engine.world, bodies);

    // Mouse control
    const mouse = Matter.Mouse.create(render.canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

    Matter.Composite.add(engine.world, mouseConstraint);
    render.mouse = mouse;

    const handleResize = () => {
      render.canvas.width = sceneRef.current.clientWidth;
      Matter.Body.setPosition(ground, { x: sceneRef.current.clientWidth / 2, y: 410 });
      Matter.Body.setPosition(rightWall, { x: sceneRef.current.clientWidth + 10, y: 200 });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      Matter.Engine.clear(engine);
      render.canvas.remove();
      window.removeEventListener('resize', handleResize);
    };
  }, [tags]);

  return (
    <div className="w-full relative py-20 overflow-hidden" style={{ minHeight: '400px' }}>
        <div className="absolute inset-0 z-0 opacity-10">
            <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyber-blue via-transparent to-transparent"></div>
        </div>
        <div ref={sceneRef} className="w-full h-[400px] cursor-grab active:cursor-grabbing" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 pointer-events-none text-cyber-blue/50 text-[10px] uppercase tracking-widest font-bold">
            Interactive Physics Environment
        </div>
    </div>
  );
};

export default PhysicsCanvas;
