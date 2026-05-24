'use client';

import type { ReactNode, SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

function BaseIcon({ size = 24, className, children, ...props }: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function Server(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="3" y="4" width="18" height="6" rx="2" />
      <rect x="3" y="14" width="18" height="6" rx="2" />
      <path d="M7 7h.01" />
      <path d="M7 17h.01" />
      <path d="M11 7h6" />
      <path d="M11 17h6" />
    </BaseIcon>
  );
}

export function Shield(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 3 19 6v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </BaseIcon>
  );
}

export function Database(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <ellipse cx="12" cy="5" rx="7" ry="3" />
      <path d="M5 5v5c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
      <path d="M5 10v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5" />
    </BaseIcon>
  );
}

export function Code2(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m10 18-6-6 6-6" />
      <path d="m14 6 6 6-6 6" />
    </BaseIcon>
  );
}

export function Cloud(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M7 18h9a4 4 0 0 0 .7-7.94A6 6 0 0 0 5.2 9.6 3.5 3.5 0 0 0 7 18Z" />
    </BaseIcon>
  );
}

export function Rocket(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M5 19c1.5-.5 2.7-1.7 3.2-3.2L17 7c1.1-1.1 2.9-2 4-2 0 1.1-.9 2.9-2 4l-8.8 8.8C8.7 18.3 7.5 19.5 7 21c-1.5-.5-2.5-1.5-2-2Z" />
      <path d="M14 5c-1.5 0-3.5.7-5 2" />
      <path d="M9 15l-2 2" />
      <path d="M15 9l2 2" />
    </BaseIcon>
  );
}

export function Github(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M9 19c-4.5 1.5-4.5-2.5-6-3" />
      <path d="M15 22v-3.3c0-.9.3-1.5.8-2-2.7-.3-5.5-1.3-5.5-6a4.7 4.7 0 0 1 1.2-3.2c-.1-.3-.6-1.6.1-3.3 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C23.1 6.7 24 7 24 7c.7 1.7.2 3 .1 3.3a4.7 4.7 0 0 1 1.2 3.2c0 4.7-2.7 5.7-5.4 6 .5.4.9 1.2.9 2.4V22" transform="translate(-3 -3)" />
    </BaseIcon>
  );
}

export function Linkedin(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="5" cy="5" r="1.5" />
      <path d="M3.5 9.5v11" />
      <path d="M10 20.5v-6a3 3 0 0 1 6 0v6" />
      <path d="M10 10h0.01" />
      <rect x="2" y="2" width="20" height="20" rx="3" />
    </BaseIcon>
  );
}

export function Mail(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </BaseIcon>
  );
}

export function ExternalLink(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M14 3h7v7" />
      <path d="M10 14 21 3" />
      <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
    </BaseIcon>
  );
}

export function Activity(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M3 12h4l3-8 4 16 3-8h4" />
    </BaseIcon>
  );
}

export function Layers(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m12 2 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12 9 5 9-5" />
      <path d="m3 16 9 5 9-5" />
    </BaseIcon>
  );
}

export function Radio(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="12" r="2" />
      <path d="M4.9 19.1a10 10 0 0 1 0-14.2" />
      <path d="M19.1 4.9a10 10 0 0 1 0 14.2" />
      <path d="M7.8 16.2a6 6 0 0 1 0-8.4" />
      <path d="M16.2 7.8a6 6 0 0 1 0 8.4" />
    </BaseIcon>
  );
}