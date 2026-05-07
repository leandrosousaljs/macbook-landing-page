import { useEffect, useRef } from 'react';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2;
    }
  }, []);

  return (
    <section id="hero">
      <div>
        <h1>MacBook Pro</h1>
        <img src="/title.png" alt="Built for Apple Intelligence" />

        <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline></video>

        <button type="button">Buy</button>
        <p>From $1599 or $133.25/mo for 12 months</p>
      </div>
    </section>
  );
};

export default Hero;
