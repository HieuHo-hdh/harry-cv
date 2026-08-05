"use client";

import { useEffect, useRef } from "react";
import {
  Code2, Terminal, Database, Globe, Cpu, Layers,
  Braces, GitBranch, Server, Workflow, Box, Blocks,
  type LucideIcon,
} from "lucide-react";

type IconDef = { Icon: LucideIcon; size: number };

const ICONS: IconDef[] = [
  { Icon: Code2,     size: 28 },
  { Icon: Terminal,  size: 22 },
  { Icon: Database,  size: 24 },
  { Icon: Globe,     size: 30 },
  { Icon: Cpu,       size: 20 },
  { Icon: Layers,    size: 26 },
  { Icon: Braces,    size: 32 },
  { Icon: GitBranch, size: 20 },
  { Icon: Server,    size: 22 },
  { Icon: Workflow,  size: 18 },
  { Icon: Box,       size: 20 },
  { Icon: Blocks,    size: 26 },
];

type State = { x: number; y: number; vx: number; vy: number; rot: number };

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export default function FlyingIcons() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const states = useRef<State[]>([]);
  const raf = useRef<number>(0);

  useEffect(() => {
    const W = window.innerWidth;
    const H = window.innerHeight;
    const isMobile = W < 768;

    states.current = ICONS.map((_, i) => ({
      x: rand(0.05, 0.85) * W,
      y: rand(0.05, 0.85) * H,
      vx: rand(0.3, 0.8) * (Math.random() < 0.5 ? 1 : -1),
      vy: rand(0.3, 0.8) * (Math.random() < 0.5 ? 1 : -1),
      rot: rand(0, 360),
    }));

    const tick = () => {
      const W = window.innerWidth;
      const H = window.innerHeight;

      states.current.forEach((s, i) => {
        const el = refs.current[i];
        if (!el) return;

        const size = ICONS[i].size;
        const maxX = W - size;
        const maxY = H - size;

        s.x += s.vx;
        s.y += s.vy;
        s.rot += s.vx * 0.4;

        if (s.x <= 0)    { s.x = 0;    s.vx = Math.abs(s.vx); }
        if (s.x >= maxX) { s.x = maxX; s.vx = -Math.abs(s.vx); }
        if (s.y <= 0)    { s.y = 0;    s.vy = Math.abs(s.vy); }
        if (s.y >= maxY) { s.y = maxY; s.vy = -Math.abs(s.vy); }

        el.style.transform = `translate(${s.x}px, ${s.y}px) rotate(${s.rot}deg)`;
      });

      raf.current = requestAnimationFrame(tick);
    };

    if (isMobile) {
      if (typeof requestIdleCallback !== "undefined") {
        requestIdleCallback(() => {
          raf.current = requestAnimationFrame(tick);
        });
      }
    } else {
      raf.current = requestAnimationFrame(tick);
    }

    return () => cancelAnimationFrame(raf.current);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
      {ICONS.map(({ Icon, size }, i) => (
        <div
          key={i}
          ref={(el) => { refs.current[i] = el; }}
          className="absolute top-0 left-0 text-primary/20 dark:text-primary/40"
          style={{ willChange: "transform" }}
        >
          <Icon size={size} strokeWidth={1.5} />
        </div>
      ))}
    </div>
  );
}
