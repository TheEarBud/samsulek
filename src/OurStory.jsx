import React from 'react';
import './OurStory.css'; // Make sure to create this CSS file for styling

const OurStory = () => {
  return (
    <section className="our-story">
      <h2>Our Story</h2>
      <div className="story-content">
        <p>
        Welcome to Ikko Active™ Buds – Where Sound Meets Serenity.

The Ikko Active™ Buds were born out of countless hours spent refining the perfect listening experience to enhance your daily routine. We understand the frustration of traditional earbuds that fall short in delivering immersive sound and lasting comfort—especially when you’re on the go, working out, or just winding down after a hectic day.

Inspired by the calming flow of nature and the pursuit of balance, we’ve designed the Ikko Active™ Buds to provide more than just great audio—they offer a full sensory experience. Combining sleek, ergonomic design with state-of-the-art sound technology, the Ikko Active™ Buds allow you to enjoy your favorite tunes, podcasts, and calls in high-definition clarity, while offering the perfect level of comfort for all-day wear.

Whether you’re in need of an energizing soundtrack for your workout, a peaceful escape from the noise of the world, or crisp, clear communication on a call, the Ikko Active™ Buds are here to elevate your day.

Proudly blending cutting-edge innovation, high-quality audio, and a commitment to your well-being, the Ikko Active™ Buds are your perfect companion for any activity.
        </p>
        <div className="image-container">
        <div className="video-container videoo">
        <video 
            src="./7141fc63702f4acc92d5bddb93c2ac40.mp4" 
            autoPlay 
            muted 
            loop 
            playsInline 
            preload="auto"
            className="videoo"
        />
    </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
