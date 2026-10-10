/** Crop only the attachment's empty margins; preserve the original artwork. */
export function BrandLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="108 148 1804 405"
      width="1804"
      height="405"
      aria-hidden="true"
      focusable="false"
    >
      <image href="/phyres-logo-source.png" width="2048" height="684" />
    </svg>
  );
}
