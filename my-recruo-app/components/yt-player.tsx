import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

const YouTubePlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "dQw4w9WgXcQ"; // Replace with your actual YouTube video ID

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleClose = () => {
    setIsPlaying(false);
  };

  return (
    <div id="demo-video-section" className="bg-black">
      <div className="container mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold mb-8">
            Watch Our Demo
            <span className="text-orange-500"> in Action</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            See how Recruo revolutionizes technical interviews and streamlines your hiring process
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {!isPlaying ? (
            <div className="relative group">
              <div className="absolute inset-0 bg-orange-500 opacity-20 rounded-2xl group-hover:opacity-30 transition-opacity"></div>
              <img
                // src="/api/placeholder/1280/720"
                src="yt-preview.png"
                alt="Video thumbnail"
                className="w-full rounded-2xl"
              />
              <button
                onClick={handlePlay}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-24 h-24 rounded-full bg-orange-500 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-12 h-12 text-white ml-2" />
                </div>
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-8 rounded-b-2xl">
                <div className="text-2xl font-bold">Experience AI-Powered Technical Interviews</div>
                <p className="text-gray-300 mt-2">Learn how our platform saves time and improves hiring decisions</p>
              </div>
            </div>
          ) : (
            <div className="relative pt-[50.25%] bg-gray-900 rounded-2xl overflow-hidden">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                title="Recruo Demo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center hover:bg-orange-600 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>
          )}
        </div>

        <div className="flex justify-center mt-12 gap-4">
          <div className="flex items-center gap-6 px-8 py-4 bg-gray-900 rounded-xl">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span className="text-gray-300">12:34</span>
            </div>
            <div className="h-8 w-px bg-gray-800"></div>
            <div className="text-gray-300">Watch the full demo to learn about our features</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouTubePlayer;