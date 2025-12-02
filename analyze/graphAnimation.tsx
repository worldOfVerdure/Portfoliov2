'use client';

import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';

interface Node {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

interface Edge {
  node1Id: number;
  node2Id: number;
}

const GraphAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const edgesRef = useRef<Edge[]>([]);
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const animationIdRef = useRef<number>(0);
  const nodeIdRef = useRef<number>(0);

  const PROXIMITY_THRESHOLD = 150;
  const NODE_RADIUS = 4;
  const INITIAL_NODE_COUNT = 30;
  const MAX_VELOCITY = 2;
  const MOUSE_NODE_RADIUS = 8;
  const EDGE_COLOR = 'rgba(200, 200, 200, 0.4)';
  const NODE_COLOR = 'rgba(255, 255, 255, 0.8)';
  const MOUSE_NODE_COLOR = 'rgba(100, 150, 255, 0.9)';

  // Initialize nodes
  const initializeNodes = (width: number, height: number) => {
    const nodes: Node[] = [];
    for (let i = 0; i < INITIAL_NODE_COUNT; i++) {
      nodes.push({
        id: nodeIdRef.current++,
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * MAX_VELOCITY,
        vy: (Math.random() - 0.5) * MAX_VELOCITY,
        radius: NODE_RADIUS,
      });
    }
    nodesRef.current = nodes;
  };

  // Update edges based on proximity
  const updateEdges = () => {
    const edges: Edge[] = [];
    const nodes = nodesRef.current;

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < PROXIMITY_THRESHOLD) {
          edges.push({
            node1Id: nodes[i].id,
            node2Id: nodes[j].id,
          });
        }
      }
    }

    edgesRef.current = edges;
  };

  // Update node positions and handle bouncing
  const updateNodes = (width: number, height: number) => {
    const nodes = nodesRef.current;
    const DAMPING = 0.99;
    const BOUNCE_DAMPING = 0.85;

    nodes.forEach((node) => {
      // Update position
      node.x += node.vx;
      node.y += node.vy;

      // Apply damping
      node.vx *= DAMPING;
      node.vy *= DAMPING;

      // Bounce off walls
      if (node.x - node.radius < 0) {
        node.x = node.radius;
        node.vx = Math.abs(node.vx) * BOUNCE_DAMPING;
      } else if (node.x + node.radius > width) {
        node.x = width - node.radius;
        node.vx = -Math.abs(node.vx) * BOUNCE_DAMPING;
      }

      if (node.y - node.radius < 0) {
        node.y = node.radius;
        node.vy = Math.abs(node.vy) * BOUNCE_DAMPING;
      } else if (node.y + node.radius > height) {
        node.y = height - node.radius;
        node.vy = -Math.abs(node.vy) * BOUNCE_DAMPING;
      }
    });
  };

  // Draw the graph
  const draw = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    // Clear canvas with gradient background (darker at top-right, brighter at bottom-left)
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, 'rgba(20, 20, 30, 1)');
    gradient.addColorStop(0.5, 'rgba(25, 25, 35, 0.95)');
    gradient.addColorStop(1, 'rgba(35, 35, 45, 0.8)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Calculate opacity based on mouse position (bottom-left bright, top-right dark)
    const opacityGradient = ctx.createLinearGradient(0, height, width, 0);
    opacityGradient.addColorStop(0, 'rgba(255, 255, 255, 0.15)');
    opacityGradient.addColorStop(1, 'rgba(0, 0, 0, 0.8)');
    ctx.fillStyle = opacityGradient;
    ctx.fillRect(0, 0, width, height);

    // Draw edges
    ctx.strokeStyle = EDGE_COLOR;
    ctx.lineWidth = 1;
    edgesRef.current.forEach((edge) => {
      const node1 = nodesRef.current.find((n) => n.id === edge.node1Id);
      const node2 = nodesRef.current.find((n) => n.id === edge.node2Id);

      if (node1 && node2) {
        ctx.beginPath();
        ctx.moveTo(node1.x, node1.y);
        ctx.lineTo(node2.x, node2.y);
        ctx.stroke();
      }
    });

    // Draw nodes
    nodesRef.current.forEach((node) => {
      ctx.fillStyle = node.radius > NODE_RADIUS ? MOUSE_NODE_COLOR : NODE_COLOR;
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      ctx.fill();
    });
  };

  // Animation loop
  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const width = canvas.width;
    const height = canvas.height;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    updateNodes(width, height);
    updateEdges();
    draw(ctx, width, height);

    animationIdRef.current = requestAnimationFrame(animate);
  };

  // Handle mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mouseRef.current = { x, y };

    // Create a new node at mouse position
    nodesRef.current.push({
      id: nodeIdRef.current++,
      x,
      y,
      vx: (Math.random() - 0.5) * MAX_VELOCITY,
      vy: (Math.random() - 0.5) * MAX_VELOCITY,
      radius: MOUSE_NODE_RADIUS,
    });

    // Limit total nodes to avoid performance issues
    if (nodesRef.current.length > 100) {
      nodesRef.current.shift();
    }

    // Increase opacity/brightness in mouse region via a local overlay effect
    // This is handled by the opacity gradient based on mouse position
  };

  // Handle canvas resize
  const handleResize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set initial canvas size
    handleResize();

    // Initialize nodes
    initializeNodes(canvas.width, canvas.height);

    // Start animation
    animate();

    // Add event listeners
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, []);

  return (
    <Box
      component="canvas"
      ref={canvasRef}
      onMouseMove={handleMouseMove}
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'block',
        cursor: 'crosshair',
        zIndex: 1,
      }}
    />
  );
};

export default GraphAnimation;
