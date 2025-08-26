import React, { useState } from 'react';
import './VideoLibrary.css';

const VideoLibrary = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const videoData = {
    "Chess Fundamentals": [
      {
        id: 1,
        title: "Files and Ranks",
        duration: "3:45",
        difficulty: "beginner",
        thumbnail: "📐",
        description: "Learn the basic coordinate system of the chess board - files and ranks.",
        videoFile: "/videos/files_and_ranks.mp4"
      },
      {
        id: 2,
        title: "How Pawns Move",
        duration: "6:20",
        difficulty: "beginner",
        thumbnail: "♟️",
        description: "Master the movement of pawns, the most numerous pieces on the board.",
        videoFile: "/videos/How_Pawns_Move.mp4"
      },
      {
        id: 3,
        title: "How Knights Move",
        duration: "4:35",
        difficulty: "beginner",
        thumbnail: "♞",
        description: "Learn the unique L-shaped movement pattern of the knight.",
        videoFile: "/videos/How_Knights_Move.mp4"
      },
      {
        id: 4,
        title: "How Bishops Move",
        duration: "5:45",
        difficulty: "beginner",
        thumbnail: "♝",
        description: "Master diagonal movement with the bishop across the board.",
        videoFile: "/videos/How_Bishop_Move.mp4"
      }
    ],
    "Piece Movement & Rules": [
      {
        id: 5,
        title: "How Rooks Move and Castling",
        duration: "6:20",
        difficulty: "beginner",
        thumbnail: "♜",
        description: "Learn rook movement and the special castling maneuver.",
        videoFile: "/videos/Rooks_Moves_and_Castling.mp4"
      },
      {
        id: 6,
        title: "How Queens Move",
        duration: "3:15",
        difficulty: "beginner",
        thumbnail: "♕",
        description: "Master the most powerful piece - the queen's movement.",
        videoFile: "/videos/How_Queens_Move.mp4"
      },
      {
        id: 7,
        title: "How Kings Move",
        duration: "3:45",
        difficulty: "beginner",
        thumbnail: "♔",
        description: "Learn the king's movement and its importance in the game.",
        videoFile: "/videos/How_Kings_Move.mp4"
      },
      {
        id: 8,
        title: "En Passant",
        duration: "7:25",
        difficulty: "intermediate",
        thumbnail: "⚡",
        description: "Master the special pawn capture rule - en passant.",
        videoFile: "/videos/En_passant.mp4"
      }
    ],
    "Tactics & Checkmates": [
      {
        id: 9,
        title: "Check",
        duration: "3:50",
        difficulty: "beginner",
        thumbnail: "⚠️",
        description: "Learn what a check is and how to respond to it.",
        videoFile: "/videos/Check.mp4"
      },
      {
        id: 10,
        title: "Checkmate",
        duration: "1:45",
        difficulty: "beginner",
        thumbnail: "🏆",
        description: "Understand the ultimate goal - achieving checkmate.",
        videoFile: "/videos/Checkmate.mp4"
      },
      {
        id: 11,
        title: "Checkmate with Queen",
        duration: "7:45",
        difficulty: "intermediate",
        thumbnail: "♕",
        description: "Learn effective queen checkmate patterns and techniques.",
        videoFile: "/videos/Checkmate_with_Queen.mp4"
      },
      {
        id: 12,
        title: "Checkmate with Rook",
        duration: "7:20",
        difficulty: "intermediate",
        thumbnail: "♜",
        description: "Master the technique of checkmating with a rook.",
        videoFile: "/videos/Checkmate_with_Rook.mp4"
      }
    ],
    "Advanced Techniques": [
      {
        id: 13,
        title: "Ladder Checkmate",
        duration: "4:50",
        difficulty: "intermediate",
        thumbnail: "🪜",
        description: "Learn the ladder checkmate technique with two rooks.",
        videoFile: "/videos/Ladder_checkmate.mp4"
      },
      {
        id: 14,
        title: "Material and Examples",
        duration: "10:45",
        difficulty: "intermediate",
        thumbnail: "⚖️",
        description: "Understand material value and see practical examples.",
        videoFile: "/videos/Material_and_Example.mp4"
      }
    ]
  };

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
    setSelectedVideo(null);
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'beginner': return 'difficulty-beginner';
      case 'intermediate': return 'difficulty-intermediate';
      case 'advanced': return 'difficulty-advanced';
      default: return 'difficulty-beginner';
    }
  };

  const filterVideos = (videos) => {
    if (selectedDifficulty === 'all') return videos;
    return videos.filter(video => video.difficulty === selectedDifficulty);
  };

  return (
    <div className="video-library">
      <section className="hero-section">
        <div className="container">
          <h1>Chess Video Library</h1>
          <p>Master chess with our comprehensive collection of instructional videos</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="filters">
            <h3>Filter by Difficulty:</h3>
            <div className="difficulty-filters">
              <button
                className={`filter-btn ${selectedDifficulty === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedDifficulty('all')}
              >
                All Levels
              </button>
              <button
                className={`filter-btn ${selectedDifficulty === 'beginner' ? 'active' : ''}`}
                onClick={() => setSelectedDifficulty('beginner')}
              >
                Beginner
              </button>
              <button
                className={`filter-btn ${selectedDifficulty === 'intermediate' ? 'active' : ''}`}
                onClick={() => setSelectedDifficulty('intermediate')}
              >
                Intermediate
              </button>
              <button
                className={`filter-btn ${selectedDifficulty === 'advanced' ? 'active' : ''}`}
                onClick={() => setSelectedDifficulty('advanced')}
              >
                Advanced
              </button>
            </div>
          </div>

          {Object.entries(videoData).map(([category, videos]) => {
            const filteredVideos = filterVideos(videos);
            if (filteredVideos.length === 0) return null;
            
            return (
              <div key={category} className="category-section">
                <h2 className="category-title">{category}</h2>
                <div className="video-grid">
                  {filteredVideos.map((video) => (
                    <div
                      key={video.id}
                      className="video-card"
                      onClick={() => handleVideoClick(video)}
                    >
                      <div className="video-thumbnail">
                        {video.thumbnail}
                      </div>
                      <div className="video-info">
                        <h3 className="video-title">{video.title}</h3>
                        <div className="video-meta">
                          <div className="video-duration">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                            {video.duration}
                          </div>
                          <span className={`difficulty-badge ${getDifficultyColor(video.difficulty)}`}>
                            {video.difficulty}
                          </span>
                        </div>
                        <p className="video-description">{video.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Video Modal */}
      {isVideoModalOpen && selectedVideo && (
        <div className="video-modal-overlay" onClick={closeVideoModal}>
          <div className="video-modal" onClick={(e) => e.stopPropagation()}>
            <div className="video-modal-header">
              <h2>{selectedVideo.title}</h2>
              <button className="close-btn" onClick={closeVideoModal}>×</button>
            </div>
            <div className="video-player-container">
              <video
                controls
                className="video-player"
                preload="metadata"
              >
                <source src={selectedVideo.videoFile} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="video-modal-info">
              <div className="video-meta">
                <span className="duration">Duration: {selectedVideo.duration}</span>
                <span className={`difficulty-badge ${getDifficultyColor(selectedVideo.difficulty)}`}>
                  {selectedVideo.difficulty}
                </span>
              </div>
              <p className="description">{selectedVideo.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoLibrary; 