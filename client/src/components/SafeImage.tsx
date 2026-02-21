import { useState, useEffect, ImgHTMLAttributes } from "react";

interface SafeImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

const DEFAULT_FALLBACK = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23e5e7eb'/%3E%3Ctext x='200' y='150' text-anchor='middle' dominant-baseline='central' font-family='Arial' font-size='14' fill='%239ca3af'%3EImage%3C/text%3E%3C/svg%3E";

export function SafeImage({ fallbackSrc, onError, src, ...props }: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setImgSrc(src);
    setHasError(false);
  }, [src]);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(fallbackSrc || DEFAULT_FALLBACK);
    }
    onError?.(e);
  };

  return <img {...props} src={imgSrc || DEFAULT_FALLBACK} onError={handleError} />;
}
