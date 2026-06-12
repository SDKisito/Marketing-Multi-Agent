"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { AVATAR_MAP, DEFAULT_AVATAR, agentGlow } from "@/lib/agentsUI";

// Re-export helper (consommateurs legacy)
export { agentGlow } from "@/lib/agentsUI";

interface AvatarProps {
  slug: string;
  size?: number;
  className?: string;
  /** Animation "alive" : respiration + wave périodique. Par défaut true. */
  animate?: boolean;
  /** Aura verte pulsante derrière l'avatar. Par défaut true pour les gros avatars (size ≥ 100). */
  aura?: boolean;
  priority?: boolean;
}

export function AgentAvatar({
  slug,
  size = 120,
  className,
  animate = true,
  aura,
  priority,
}: AvatarProps) {
  const src = AVATAR_MAP[slug] ?? DEFAULT_AVATAR;
  const showAura = aura ?? size >= 100;
  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center",
        className
      )}
      style={{ width: size, height: size }}
    >
      {showAura && (
        <div
          className="avatar-aura-green pointer-events-none absolute rounded-full"
          style={{
            width: size * 1.2,
            height: size * 1.2,
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
          aria-hidden
        />
      )}
      <div
        className={cn(
          "relative flex items-center justify-center w-full h-full",
          animate && "avatar-alive"
        )}
        style={{ transformOrigin: "50% 85%" }}
      >
        <Image
          src={src}
          alt={`Avatar ${slug}`}
          width={size}
          height={size}
          priority={priority}
          className="object-contain drop-shadow-[0_10px_28px_rgba(0,0,0,0.55)]"
          style={{
            width: size,
            height: size,
          }}
        />
      </div>
    </div>
  );
}
