'use client';

import { useEffect, useRef, useState } from 'react';
import {
  MediaControlBar,
  MediaController,
  MediaMuteButton,
  MediaPlayButton,
  MediaSeekBackwardButton,
  MediaSeekForwardButton,
  MediaTimeDisplay,
  MediaTimeRange,
  MediaVolumeRange,
} from 'media-chrome/react';
import type { ComponentProps, CSSProperties } from 'react';
import { cn } from '@/lib/utils';

export type VideoPlayerProps = ComponentProps<typeof MediaController>;

const variables = {
  // Transparent controls with black timeline - always visible, no tooltips
  '--media-primary-color': '#fff',
  '--media-secondary-color': '#fff',
  '--media-icon-color': '#fff',
  '--media-text-color': '#fff',
  '--media-background-color': 'transparent',
  '--media-control-background': 'transparent',
  '--media-control-hover-background': 'rgba(255,255,255,0.1)',
  '--media-font-family': 'var(--font-sans)',
  '--media-live-button-icon-color': '#fff',
  '--media-live-button-indicator-color': '#ef4444',
  '--media-range-track-background': 'rgba(255,255,255,0.3)',
  '--media-range-track-progress-color': '#000',
  '--media-range-thumb-background': '#000',
  '--media-button-icon-width': '20px',
  '--media-button-icon-height': '20px',
  '--media-control-display': 'block',
  '--media-volume-range-display': 'none',
  '--media-range-track-height': '4px',
  '--media-controls-fade-delay': '99999s',
  '--media-controls-fade-duration': '0s',
  '--media-tooltip-display': 'none',
} as CSSProperties;

export const VideoPlayer = ({ style, ...props }: VideoPlayerProps) => (
  <MediaController
    style={{
      ...variables,
      ...style,
    }}
    {...props}
  />
);

export type VideoPlayerControlBarProps = ComponentProps<typeof MediaControlBar>;

export const VideoPlayerControlBar = ({
  className,
  style,
  ...props
}: VideoPlayerControlBarProps & { style?: CSSProperties }) => (
  <MediaControlBar
    className={cn('bg-transparent', className)}
    style={{
      '--media-control-background': 'transparent',
      '--media-text-color': '#fff',
      background: 'transparent',
      ...style,
    } as CSSProperties}
    {...props}
  />
);

export type VideoPlayerTimeRangeProps = ComponentProps<typeof MediaTimeRange>;

export const VideoPlayerTimeRange = ({
  className,
  ...props
}: VideoPlayerTimeRangeProps) => (
  <MediaTimeRange
    title=""
    className={cn('absolute bottom-0 left-0 right-0 h-1 p-0 z-30 w-full', className)}
    style={{
      '--media-range-track-background': 'rgba(255,255,255,0.3)',
      '--media-range-track-progress-color': '#000',
      '--media-range-thumb-background': '#000',
      '--media-range-thumb-width': '0px',
      '--media-range-thumb-height': '0px',
      '--media-range-track-height': '4px',
      '--media-controls-fade-delay': '99999s',
      '--media-controls-fade-duration': '0s',
      width: '100%',
      margin: 0,
      padding: 0,
      opacity: 1,
      visibility: 'visible',
      display: 'block',
    } as unknown as CSSProperties}
    {...props}
  />
);

export type VideoPlayerTimeDisplayProps = ComponentProps<
  typeof MediaTimeDisplay
>;

export const VideoPlayerTimeDisplay = ({
  className,
  ...props
}: VideoPlayerTimeDisplayProps) => (
  <MediaTimeDisplay className={cn('p-2.5 text-white', className)} {...props} />
);

export type VideoPlayerVolumeRangeProps = ComponentProps<
  typeof MediaVolumeRange
>;

export const VideoPlayerVolumeRange = ({
  className,
  ...props
}: VideoPlayerVolumeRangeProps) => (
  <MediaVolumeRange title="" className={cn('p-2.5', className)} {...props} />
);

export type VideoPlayerPlayButtonProps = ComponentProps<typeof MediaPlayButton>;

export const VideoPlayerPlayButton = ({
  className,
  ...props
}: VideoPlayerPlayButtonProps) => (
  <MediaPlayButton
    title=""
    className={cn('p-2.5 text-white', className)}
    {...props}
  />
);

export type VideoPlayerSeekBackwardButtonProps = ComponentProps<
  typeof MediaSeekBackwardButton
>;

export const VideoPlayerSeekBackwardButton = ({
  className,
  ...props
}: VideoPlayerSeekBackwardButtonProps) => (
  <MediaSeekBackwardButton title="" className={cn('p-2.5 text-white', className)} {...props} />
);

export type VideoPlayerSeekForwardButtonProps = ComponentProps<
  typeof MediaSeekForwardButton
>;

export const VideoPlayerSeekForwardButton = ({
  className,
  ...props
}: VideoPlayerSeekForwardButtonProps) => (
  <MediaSeekForwardButton title="" className={cn('p-2.5 text-white', className)} {...props} />
);

export type VideoPlayerMuteButtonProps = ComponentProps<typeof MediaMuteButton>;

export const VideoPlayerMuteButton = ({
  className,
  ...props
}: VideoPlayerMuteButtonProps) => (
  <MediaMuteButton
    title=""
    className={cn('absolute top-4 right-4 w-10 h-10 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition-all z-20', className)}
    style={{
      '--media-volume-range-display': 'none',
      '--media-control-display': 'block',
      '--media-controls-fade-delay': '99999s',
      '--media-controls-fade-duration': '0s',
      '--media-tooltip-display': 'none',
      opacity: 1,
      visibility: 'visible',
    } as unknown as CSSProperties}
    {...props}
  />
);

export type VideoPlayerContentProps = ComponentProps<'video'>;

export const VideoPlayerContent = ({
  className,
  ...props
}: VideoPlayerContentProps) => (
  <video className={cn('w-full h-full object-cover', className)} {...props} />
);

export type VideoPlayerClickOverlayProps = {
  className?: string;
};

export const VideoPlayerClickOverlay = ({
  className,
}: VideoPlayerClickOverlayProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    const overlayElement = overlayRef.current;
    if (!overlayElement) return;

    // Find the parent media controller
    const mediaController = overlayElement.closest('media-controller');
    if (!mediaController) return;

    // Find the video element
    const video = mediaController.querySelector('video') as HTMLVideoElement;
    if (!video) return;

    // Toggle play/pause
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <div 
      ref={overlayRef}
      className={cn(
        'absolute inset-0 z-5 cursor-pointer',
        'touch-manipulation',
        className
      )}
      onClick={handleClick}
      style={{
        WebkitTapHighlightColor: 'transparent',
      }}
    />
  );
};

export type VideoPlayerCallToActionProps = {
  className?: string;
  text?: string;
};

export const VideoPlayerCallToAction = ({
  className,
  text = "Click to know more!",
}: VideoPlayerCallToActionProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctaElement = ctaRef.current;
    if (!ctaElement) return;

    // Find the parent media controller
    const mediaController = ctaElement.closest('media-controller');
    if (!mediaController) return;

    // Find the video element
    const video = mediaController.querySelector('video');
    if (!video) return;

    const handlePlay = () => {
      if (!hasStarted) {
        setHasStarted(true);
        setIsVisible(false);
      }
    };

    // Listen for the first play event
    video.addEventListener('play', handlePlay);

    return () => {
      video.removeEventListener('play', handlePlay);
    };
  }, [hasStarted]);

  if (!isVisible || hasStarted) {
    return null;
  }

  return (
    <div 
      ref={ctaRef}
      className={cn(
        'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10',
        'text-white text-xl md:text-2xl lg:text-3xl',
        'pointer-events-none select-none',
        'transition-all duration-500 ease-in-out',
        'opacity-100',
        className
      )}
      style={{
        textShadow: '2px 2px 12px rgba(0,0,0,0.9)',
        fontFamily: 'var(--font-neue-montreal, system-ui, sans-serif)',
      }}
    >
      <span className="font-medium tracking-wide text-center block">{text}</span>
    </div>
  );
};
