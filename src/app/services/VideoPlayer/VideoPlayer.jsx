'use client'
import { useState } from "react";

const VideoPlayer = ({ service }) => {
    const [playVideo, setPlayVideo] = useState(false);


    return (
        <div className="relative w-full rounded-lg overflow-hidden shadow-lg h-60 md:h-[400px] flex items-center justify-center">
            {service.youtube_video_link && !playVideo ? (
                <div
                    className="absolute inset-0 w-full h-full cursor-pointer"
                    onClick={() => setPlayVideo(true)}
                >
                    {/* Cover Image */}
                    <img
                        src={service.video_cover}
                        alt={`${service.title} Cover`}
                        className="w-full h-full object-cover"
                    />
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 bg-black/40 bg-opacity-40 hover:bg-opacity-60 transition flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-20 w-20 text-red-500 border-red-500 rounded-full border-2  hover:scale-110 transition"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </div>
                </div>
            ) : service.youtube_video_link ? (
                <iframe
                    className="absolute inset-0 w-full h-full"
                    src={service.youtube_video_link.replace("watch?v=", "embed/") + "?autoplay=1"}
                    title={`${service.title} Video`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            ) : (
                <img
                    src="https://repairsmith-prod-wordpress.s3.amazonaws.com/2022/09/car-repair.jpg"
                    alt="Video not available"
                    className="absolute inset-0 w-full h-full object-cover"
                />
            )}
        </div>
    );
};

export default VideoPlayer;
