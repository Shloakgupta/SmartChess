import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero-section">
        <div className="container">
          <h1>Master Chess with Expert Guidance</h1>
          <p>Join thousands of players improving their game with our comprehensive video library</p>
          <Link to="/videos" className="btn btn-primary">
            Explore Video Library
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Why Choose ChessMaster Academy?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3 className="feature-title">Structured Learning</h3>
              <p className="feature-description">
                Our curriculum is designed to take you from beginner to advanced, with clear progression paths and skill assessments.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👨‍🏫</div>
              <h3 className="feature-title">Expert Instructors</h3>
              <p className="feature-description">
                Learn from international masters and grandmasters who share their insights and strategies.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3 className="feature-title">Learn Anywhere</h3>
              <p className="feature-description">
                Access our video library on any device, anytime. Perfect for learning on the go or during your commute.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#f1f5f9' }}>
        <div className="container">
          <h2 className="section-title">What You'll Learn</h2>
          <div className="learning-areas">
            <div className="learning-area">
              <h3>Opening Strategies</h3>
              <p>Master essential openings, understand their principles, and build a solid foundation for your games.</p>
            </div>
            <div className="learning-area">
              <h3>Tactical Patterns</h3>
              <p>Develop your tactical vision with puzzles, combinations, and pattern recognition exercises.</p>
            </div>
            <div className="learning-area">
              <h3>Strategic Thinking</h3>
              <p>Learn to evaluate positions, plan long-term strategies, and understand positional play.</p>
            </div>
            <div className="learning-area">
              <h3>Endgame Mastery</h3>
              <p>Convert advantages into wins with essential endgame techniques and principles.</p>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/videos" className="btn btn-primary">
              Start Learning Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 