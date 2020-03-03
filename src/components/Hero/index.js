import React from 'react';
import "./styles.css";

const Hero = () => {
  return (
    <div className="hero-lg">
      <section className="cta d-flex align-items-center h-100">
        <article className="w-50 text-light ml-auto">
          <blockquote class="blockquote">
            <h2 class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</h2>
          </blockquote>
          <span>Swami G</span>
        </article>
      </section>
    </div> 
  );   
}

export default Hero