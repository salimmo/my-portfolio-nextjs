export function ProgressiveBlur({
  className = '',
  direction = 'right',
  blurIntensity = 1
}) {
  const gradientDirection = {
    left: 'to right',
    right: 'to left',
    top: 'to bottom',
    bottom: 'to top',
  }[direction];

  const blurSteps = Array.from({ length: 5 }, (_, i) => {
    const blur = (i * blurIntensity * 2);
    const opacity = i / 5;
    return `rgba(0, 0, 0, ${opacity})`;
  }).join(', ');

  return (
    <div
      className={className}
      style={{
        background: `linear-gradient(${gradientDirection}, transparent, rgba(0, 0, 0, 0.1))`,
        backdropFilter: `blur(${blurIntensity * 4}px)`,
        WebkitBackdropFilter: `blur(${blurIntensity * 4}px)`,
      }}
    />
  );
}
