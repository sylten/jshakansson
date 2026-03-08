export const colors = {
  base: "#F8F5F0",
  foreground: "#1A1A18",
  accent: "#324678",
  secondary: "#8A8A82",
  accentLight: "rgba(50, 70, 120, 0.08)",
  accentMid: "rgba(50, 70, 120, 0.18)",
  accentBorder: "rgba(50, 70, 120, 0.35)"
};

export const fontFamilies = {
  display: "var(--font-display), 'Josefin Sans', sans-serif",
  body: "var(--font-body), 'DM Sans', sans-serif",
  mono: "var(--font-mono), 'DM Mono', monospace"
};

export const spacing = {
  xs: "0.25rem",
  sm: "0.5rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
  xxl: "3rem",
  xxxl: "5rem"
};

export const typography = {
  sectionTitleTracking: "0.15em",
  displayTracking: "0.08em",
  monoTracking: "0.04em"
};

export const transitions = {
  fast: "150ms ease-out",
  base: "300ms ease-out",
  slow: "500ms cubic-bezier(0.16, 1, 0.3, 1)"
};

export const breakpoints = {
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px"
};

export const borders = {
  thin: `1px solid ${colors.accent}`,
  thinMuted: `1px solid ${colors.accentBorder}`,
  rule: `1px solid ${colors.accent}`
};
