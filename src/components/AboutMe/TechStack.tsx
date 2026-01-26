// TechStackForceSmoothGentleHeightCircular.tsx
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { Box } from '@mui/material';

import css from '../../assets/techStack/css.svg';
import emotion from '../../assets/techStack/emotion.webp';
import express from '../../assets/techStack/express.svg';
import git from '../../assets/techStack/git.svg';
import html from '../../assets/techStack/html.svg';
import mui from '../../assets/techStack/mui.svg';
import nodejs from '../../assets/techStack/node.svg';
import postgre from '../../assets/techStack/postgre.svg';
import reactLogo from '../../assets/techStack/react.svg';
import typescript from '../../assets/techStack/ts.svg';

type TechNode = d3.SimulationNodeDatum & {
  id: string;
  rawSrc?: any;
  src?: string;
  radius?: number;
  anchorX?: number;
  anchorY?: number;
  isMouse?: boolean;
  label?: string;
};

// ----------------- TUNABLE CONSTANTS -----------------
// You can increase WIDTH/HEIGHT or ICON_SIZE here to scale everything.
const ICON_SIZE = 64;
const WIDTH = 1140; // viewBox width (example: 1.5x previous)
const HEIGHT = 780; // viewBox height (example: 1.5x previous)

const COL_GAP = 270;
const ROW_GAP = 150;
const BOUNCE = 0.8;

// Mouse tuning
const MOUSE_RADIUS = ICON_SIZE * 2.5;
const MOUSE_STRENGTH = 40;
const MAX_IMPULSE_PER_TICK = 0.5;
const VEL_LERP = 0.08;
// -----------------------------------------------------

const LABEL_FONT_SIZE = 12;
const LABEL_LINE_HEIGHT = 16;
const LABEL_PADDING = 8;

const initialTech = [
  { id: 'html', rawSrc: html },
  { id: 'css', rawSrc: css },
  { id: 'git', rawSrc: git },
  { id: 'react', rawSrc: reactLogo },
  { id: 'postgre', rawSrc: postgre },
  { id: 'emotion', rawSrc: emotion },
  { id: 'mui', rawSrc: mui },
  { id: 'typescript', rawSrc: typescript },
  { id: 'nodejs', rawSrc: nodejs },
  { id: 'express', rawSrc: express },
].filter(Boolean);

function resolveSrc(raw: any): string {
  if (!raw) return '';
  if (typeof raw === 'string') return raw;
  if (typeof raw === 'object' && typeof raw.src === 'string') return raw.src;
  return '';
}

const TechStackForceSmoothGentleHeightCircular: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const simulationRef = useRef<d3.Simulation<TechNode, undefined> | null>(null);

  useEffect(() => {
    const svgEl = svgRef.current;
    if (!svgEl) return;

    const svg = d3.select(svgEl);
    svg.selectAll('*').remove();

    // circle geometry (in viewBox coords)
    const centerX = WIDTH / 2;
    const centerY = HEIGHT / 2;

    // Use a single circleRadius (no inset) so clip and visible circle align.
    const circleRadius = Math.min(WIDTH, HEIGHT) / 2;

    // stroke settings: draw stroke fully inside the clip by shrinking the visible circle radius
    const strokeWidth = 2;
    const visibleCircleRadius = circleRadius - strokeWidth / 2;

    // layout positions (left 3, mid 4, right 3)
    const leftX = centerX - COL_GAP;
    const midX = centerX;
    const rightX = centerX + COL_GAP;
    const leftCount = 3;
    const midCount = 4;
    const rightCount = 3;

    function columnY(indexInColumn: number, rows: number) {
      return centerY + (indexInColumn - (rows - 1) / 2) * ROW_GAP;
    }

    // build nodes with anchors and resolved src
    const nodes: TechNode[] = [];
    for (let i = 0; i < leftCount; i++) {
      const item = initialTech[i];
      const label = item.id;
      const radius = ICON_SIZE / 2 + LABEL_LINE_HEIGHT + LABEL_PADDING;
      nodes.push({
        id: item.id,
        rawSrc: item.rawSrc,
        src: resolveSrc(item.rawSrc),
        x: leftX,
        y: columnY(i, leftCount),
        anchorX: leftX,
        anchorY: columnY(i, leftCount),
        radius,
        label,
      } as TechNode);
    }
    for (let i = 0; i < midCount; i++) {
      const item = initialTech[leftCount + i];
      const label = item.id;
      const radius = ICON_SIZE / 2 + LABEL_LINE_HEIGHT + LABEL_PADDING;
      nodes.push({
        id: item.id,
        rawSrc: item.rawSrc,
        src: resolveSrc(item.rawSrc),
        x: midX,
        y: columnY(i, midCount),
        anchorX: midX,
        anchorY: columnY(i, midCount),
        radius,
        label,
      } as TechNode);
    }
    for (let i = 0; i < rightCount; i++) {
      const item = initialTech[leftCount + midCount + i];
      const label = item.id;
      const radius = ICON_SIZE / 2 + LABEL_LINE_HEIGHT + LABEL_PADDING;
      nodes.push({
        id: item.id,
        rawSrc: item.rawSrc,
        src: resolveSrc(item.rawSrc),
        x: rightX,
        y: columnY(i, rightCount),
        anchorX: rightX,
        anchorY: columnY(i, rightCount),
        radius,
        label,
      } as TechNode);
    }

    // invisible mouse node
    const mouseNode: TechNode = {
      id: 'mouse',
      x: centerX,
      y: centerY,
      radius: MOUSE_RADIUS,
      isMouse: true,
    };

    const allNodes: TechNode[] = [...nodes, mouseNode];

    // create defs + clipPath circle so SVG content is visually circular
    const defs = svg.append('defs');
    defs
      .append('clipPath')
      .attr('id', 'circleClip')
      .append('circle')
      .attr('cx', centerX)
      .attr('cy', centerY)
      .attr('r', circleRadius); // use the single circleRadius here

    // visible circle (stroke) — use visibleCircleRadius so outer edge aligns with circleRadius
    svg
      .append('circle')
      .attr('cx', centerX)
      .attr('cy', centerY)
      .attr('r', visibleCircleRadius)
      .attr('fill', 'transparent')
      .attr('stroke', 'rgba(255,255,255,0.04)')
      .attr('stroke-width', strokeWidth);

    // group that will be clipped to the circle
    const content = svg.append('g').attr('clip-path', 'url(#circleClip)');

    // create groups so image+label move together
    const nodeGroups = content
      .selectAll<SVGGElement, TechNode>('g.node')
      .data(nodes, (d: any) => d.id)
      .enter()
      .append('g')
      .attr('class', 'node')
      .style('cursor', 'default');

    // append image inside group, positioned relative to group's origin (0,0)
    nodeGroups
      .append('image')
      .each(function (d) {
        const src = d.src ?? '';
        if (src) {
          d3.select(this).attr('href', src).attr('xlink:href', src);
        }
      })
      .attr('width', ICON_SIZE)
      .attr('height', ICON_SIZE)
      .attr('x', -ICON_SIZE / 2)
      .attr('y', -ICON_SIZE / 2)
      .style('pointer-events', 'none');

    // append label centered under the icon
    nodeGroups
      .append('text')
      .text((d) => d.label ?? '')
      .attr('font-size', LABEL_FONT_SIZE)
      .attr('text-anchor', 'middle')
      .attr('dy', ICON_SIZE / 2 + LABEL_LINE_HEIGHT / 2 + 4)
      .style('pointer-events', 'none')
      .style('fill', '#333');

    // set initial group transforms so nothing renders at 0,0
    nodeGroups.attr('transform', (d) => `translate(${d.x ?? centerX},${d.y ?? centerY})`);

    // forces
    const forceX = d3.forceX<TechNode>((d) => d.anchorX ?? centerX).strength(0.06);
    const forceY = d3.forceY<TechNode>((d) => d.anchorY ?? centerY).strength(0.06);
    const collision = d3.forceCollide<TechNode>().radius((d) => d.radius ?? ICON_SIZE / 2).iterations(6);
    const manyBody = d3.forceManyBody<TechNode>().strength(-40);

    // custom mouse repel (gentle)
    function mouseRepel() {
      let nodesRef: TechNode[] = [];
      function force(alpha: number) {
        if (!mouseNode || mouseNode.x == null || mouseNode.y == null) return;
        for (const n of nodesRef) {
          if (n.isMouse) continue;
          if (n.x == null || n.y == null) continue;

          const dx = n.x - (mouseNode.x as number);
          const dy = n.y - (mouseNode.y as number);
          const dist = Math.sqrt(dx * dx + dy * dy) || 0.0001;
          const r = (n.radius ?? ICON_SIZE / 2) + (mouseNode.radius ?? MOUSE_RADIUS);

          let desiredImpulseX = 0;
          let desiredImpulseY = 0;

          if (dist < r) {
            const overlap = (r - dist) / r;
            const mag = MOUSE_STRENGTH * overlap * alpha * 0.3;
            desiredImpulseX = (dx / dist) * mag;
            desiredImpulseY = (dy / dist) * mag;
          } else if (dist < r * 1.8) {
            const falloff = 1 - (dist - r) / (r * 0.8);
            const mag = MOUSE_STRENGTH * 0.03 * falloff * alpha;
            desiredImpulseX = (dx / dist) * mag;
            desiredImpulseY = (dy / dist) * mag;
          } else {
            continue;
          }

          const cappedImpulseX = Math.max(-MAX_IMPULSE_PER_TICK, Math.min(MAX_IMPULSE_PER_TICK, desiredImpulseX));
          const cappedImpulseY = Math.max(-MAX_IMPULSE_PER_TICK, Math.min(MAX_IMPULSE_PER_TICK, desiredImpulseY));

          const targetVx = (n.vx ?? 0) + cappedImpulseX;
          const targetVy = (n.vy ?? 0) + cappedImpulseY;

          n.vx = (n.vx ?? 0) + (targetVx - (n.vx ?? 0)) * VEL_LERP;
          n.vy = (n.vy ?? 0) + (targetVy - (n.vy ?? 0)) * VEL_LERP;
        }
      }
      force.initialize = (n: TechNode[]) => {
        nodesRef = n;
      };
      return force;
    }

    const mouseForce = mouseRepel();

    // simulation
    const simulation = d3
      .forceSimulation<TechNode>(allNodes)
      .force('x', forceX)
      .force('y', forceY)
      .force('charge', manyBody)
      .force('collision', collision)
      .force('mouse', mouseForce)
      .velocityDecay(0.2)
      .alpha(0.0)
      .alphaDecay(0.02);

    simulation.stop();
    simulationRef.current = simulation;

    // helper: reflect velocity across normal with bounce factor
    function reflectVelocity(n: TechNode, nx: number, ny: number) {
      const vx = n.vx ?? 0;
      const vy = n.vy ?? 0;
      const dot = vx * nx + vy * ny;
      const vnx = dot * nx;
      const vny = dot * ny;
      const tx = vx - vnx;
      const ty = vy - vny;
      n.vx = tx - vnx * BOUNCE;
      n.vy = ty - vny * BOUNCE;
    }

    // tick: update group transforms and enforce circular boundary
    simulation.on('tick', () => {
      for (const d of nodes) {
        if (d.x == null || d.y == null) continue;

        // enforce circular boundary for each node (consider node radius)
        const dx = d.x - centerX;
        const dy = d.y - centerY;
        const dist = Math.sqrt(dx * dx + dy * dy) || 0.0001;
        const maxDist = circleRadius - (d.radius ?? ICON_SIZE / 2);

        if (dist > maxDist) {
          const nx = dx / dist;
          const ny = dy / dist;
          d.x = centerX + nx * maxDist;
          d.y = centerY + ny * maxDist;
          reflectVelocity(d, nx, ny);
        }
      }

      // update group positions (centered at node.x,node.y)
      svg.selectAll<SVGGElement, TechNode>('g.node').attr('transform', (d) => {
        const x = d.x ?? centerX;
        const y = d.y ?? centerY;
        return `translate(${x},${y})`;
      });
    });

    // pointer handling: map pointer to viewBox coords and move mouse node (clamped to circle)
    const container = svgEl;

    function pointerToViewBox(e: PointerEvent) {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * WIDTH;
      const y = ((e.clientY - rect.top) / rect.height) * HEIGHT;
      return { x, y };
    }

    function clampToCircle(x: number, y: number) {
      const dx = x - centerX;
      const dy = y - centerY;
      const dist = Math.sqrt(dx * dx + dy * dy) || 0.0001;
      if (dist > circleRadius) {
        const nx = dx / dist;
        const ny = dy / dist;
        return { x: centerX + nx * circleRadius, y: centerY + ny * circleRadius };
      }
      return { x, y };
    }

    let started = false;
    function onPointerMove(e: PointerEvent) {
      const { x: rawX, y: rawY } = pointerToViewBox(e);
      const { x, y } = clampToCircle(rawX, rawY);
      mouseNode.x = x;
      mouseNode.y = y;
      mouseNode.fx = x;
      mouseNode.fy = y;

      if (!started) {
        started = true;
        simulation.alpha(0.08).restart();
      } else {
        simulation.alphaTarget(0.03).restart();
      }
    }

    function onPointerLeave() {
      mouseNode.fx = null;
      mouseNode.fy = null;
      simulation.alphaTarget(0.02);
    }

    container.addEventListener('pointermove', onPointerMove);
    container.addEventListener('pointerleave', onPointerLeave);

    // set viewBox so svg scales but groups use viewBox coords
    svg.attr('viewBox', `0 0 ${WIDTH} ${HEIGHT}`).attr('preserveAspectRatio', 'xMidYMid meet');

    // cleanup
    return () => {
      simulation.stop();
      svg.selectAll('*').remove();
      container.removeEventListener('pointermove', onPointerMove);
      container.removeEventListener('pointerleave', onPointerLeave);
      simulationRef.current = null;
    };
  }, []);

  return (
    <Box
      sx={{
        width: { xs: '80vw', md: '58vw' }, // responsive width
        aspectRatio: '1 / 1',             // keep square so borderRadius: '50%' makes a circle
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        m: 0,
        p: 0,
        borderRadius: '50%',
        overflow: 'hidden',
        background: 'transparent',
      }}
    >
      <svg
        ref={svgRef}
        style={{ width: '100%', height: '100%', display: 'block', touchAction: 'none' }}
      />
    </Box>
  );
};

export default TechStackForceSmoothGentleHeightCircular;
