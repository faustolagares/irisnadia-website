"use client"

import { useState } from "react"
import Image from "next/image"

interface VideoPlayerProps {
  videoId: string
  thumbnailUrl: string
  title: string
}

export default function VideoPlayer({ videoId, thumbnailUrl, title }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  const playVideo = () => {
    setIsPlaying(true)
  }

  return (
    <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
      {!isPlaying ? (
        <div className="relative w-full h-full cursor-pointer group" onClick={playVideo}>
          <Image src={thumbnailUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-40 transition-all">
            <div className="w-20 h-20 rounded-full bg-[#A17840] flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="w-10 h-10"
                style={{ marginLeft: "3px" }}
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&rel=0`}
          title={title}
          className="absolute inset-0 w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  )
}
