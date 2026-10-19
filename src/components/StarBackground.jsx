import { useEffect, useState } from "react";

// Star:   id, size, x, y, opacity, animationDuration
// Meteor: id, size, x, y, delay, animationDuration

const createStars = () => {
  const numberOfStars = Math.floor(
    (window.innerWidth * window.innerHeight) / 10000
  );

  return Array.from({ length: numberOfStars }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    opacity: Math.random() * 0.5 + 0.5,
    animationDuration: Math.random() * 4 + 2,
  }));
};

const createMeteors = () =>
  Array.from({ length: 6 }, (_, i) => ({
    id: i,
    size: Math.random() * 2 + 1,
    x: Math.random() * 100,
    y: Math.random() * 20,
    delay: Math.random() * 15,
    animationDuration: Math.random() * 3 + 3,
  }));

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    setStars(createStars());
    setMeteors(createMeteors());

    // Only regenerate when the width changes. Mobile browsers fire resize
    // when the address bar shows/hides during scroll, which caused flicker.
    let lastWidth = window.innerWidth;
    const handleResize = () => {
      if (window.innerWidth === lastWidth) return;
      lastWidth = window.innerWidth;
      setStars(createStars());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden="true"
    >
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 5 + "px",
            height: meteor.size * 1.5 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay + "s",
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};
