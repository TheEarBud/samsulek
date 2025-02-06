import React from 'react';
import './OurStory.css'; // Make sure to create this CSS file for styling

const OurStory = () => {
  return (
    <section className="our-story">
      <h2>Our Story</h2>
      <div className="story-content">
        <p>
          The The Ear Bud™ lamp was born out of countless hours spent searching for the perfect lighting to create a calming, serene environment. I found myself frustrated with traditional lamps that lacked the ambiance and soothing atmosphere I was yearning for, especially after long, hectic days. I wanted something that could bring a sense of tranquility to my space, so I turned to the ocean and the graceful movements of jellyfish for inspiration. After years of research and development, I created a lamp that captures the mesmerizing beauty of jellyfish, bringing a peaceful and captivating presence into any room. I’m incredibly proud to introduce to you the The Ear Bud™ lamp—a perfect blend of art, innovation, and relaxation.
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
