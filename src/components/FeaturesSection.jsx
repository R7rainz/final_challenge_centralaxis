"use client"

import { useEffect, useRef, useState } from "react"

// Feature data
const features = [
  {
    poster_url: "https://www.centralaxis.com/posters/monitoring.png",
    video_url: "https://www.centralaxis.com/hb-monitoring.mp4",
    title: "Advanced Monitoring",
    description:
      "CentralAxis provides cutting-edge monitoring solutions for your data center, offering real-time insights and comprehensive analytics to optimize performance, reduce costs, and enhance reliability.",
    features: [
      "Real-time performance metrics and predictive analytics",
      "Automated alerts and intelligent incident response",
      "Comprehensive reporting and trend analysis",
    ],
  },
  {
    poster_url: "https://www.centralaxis.com/posters/networking.png",
    video_url: "https://www.centralaxis.com/landing/networking-b.mp4",
    title: "Network Management and Monitoring",
    description:
      "Comprehensive network monitoring and management that ensures optimal performance, security, and reliability across your entire data center infrastructure.",
    features: [
      "Real-time network performance monitoring and bandwidth optimization",
      "Automated network security and threat detection",
      "Advanced network diagnostics and troubleshooting tools",
    ],
  },
  {
    video_url: "https://www.centralaxis.com/landing/asset-management-b.mp4",
    poster_url: "https://www.centralaxis.com/posters/asset-management.png",
    title: "Asset Management",
    description:
      "Streamline your data center operations with our comprehensive asset management system. Track, maintain, and optimize your infrastructure with precision and ease.",
    features: [
      "Automated inventory tracking and lifecycle management",
      "Intelligent ticketing based on asset health and performance",
      "Efficient resource allocation and optimization",
    ],
  },
  {
    video_url: "https://www.centralaxis.com/landing/SinglePane-b.mp4",
    poster_url: "https://www.centralaxis.com/posters/singlepane.png",
    title: "A Single Pane of Glass",
    description: "A unified view across all of your BMS and EPMS systems, tailored to your needs.",
    features: [
      "Comprehensive visibility across all of your colocation infrastructure",
      "Customizable interface tailored to your specific operational requirements and priorities.",
      "Unified dashboard integrating all BMS and EPMS systems for seamless monitoring and management.",
    ],
  },
  {
    video_url: "https://www.centralaxis.com/landing/__compliance.mp4",
    poster_url: "https://www.centralaxis.com/posters/compliance.png",
    title: "Built-In Compliance",
    description: "CentralAxis provides compliance as a service for data centers.",
    features: [
      "Track data for EU, US, and global regulatory standards.",
      "We guarantee compliance and handle every step between monitoring and reporting.",
    ],
  },
  {
    video_url: "https://www.centralaxis.com/landing/dc-planning.mp4",
    poster_url: "https://www.centralaxis.com/posters/dc-planning.png",
    title: "Data Center Planning",
    description:
      "Want to support the latest and greatest architectures on the market? Modern GPUs and even CPUs are more water and energy intensive than ever.",
    features: [
      "Model new architectures and see detailed implications on power and cooling needs.",
      "Design unique specifications for your data center.",
      "Our continuous monitoring is the most advanced on the market, lowering costs while increasing reliability.",
    ],
  },
]

// Add preconnect links programmatically for React
const addPreconnect = () => {
  // Only add if they don't already exist
  if (!document.querySelector('link[rel="preconnect"][href="https://www.centralaxis.com"]')) {
    const preconnectLink = document.createElement("link")
    preconnectLink.rel = "preconnect"
    preconnectLink.href = "https://www.centralaxis.com"
    document.head.appendChild(preconnectLink)

    const dnsPrefetchLink = document.createElement("link")
    dnsPrefetchLink.rel = "dns-prefetch"
    dnsPrefetchLink.href = "https://www.centralaxis.com"
    document.head.appendChild(dnsPrefetchLink)
  }
}

// Preload critical assets programmatically
const preloadCriticalAssets = () => {
  // Preload first video
  if (features[0]) {
    const preloadVideo = document.createElement("link")
    preloadVideo.rel = "preload"
    preloadVideo.as = "video"
    preloadVideo.href = features[0].video_url
    preloadVideo.type = "video/mp4"
    document.head.appendChild(preloadVideo)

    // Preload first poster
    if (features[0].poster_url) {
      const preloadPoster = document.createElement("link")
      preloadPoster.rel = "preload"
      preloadPoster.as = "image"
      preloadPoster.href = features[0].poster_url
      document.head.appendChild(preloadPoster)
    }
  }
}

// Preload Manager - Handles preloading videos in the background
const useVideoPreloader = () => {
  const [preloadedVideos, setPreloadedVideos] = useState({})
  const preloadQueue = useRef([])
  const isPreloading = useRef(false)

  // Preload a single video
  const preloadVideo = async (url) => {
    if (preloadedVideos[url]) return

    try {
      const response = await fetch(url, {
        method: "HEAD",
        cache: "force-cache",
      })

      if (response.ok) {
        setPreloadedVideos((prev) => ({ ...prev, [url]: true }))
      }
    } catch (error) {
      console.error("Error preloading video:", error)
    }
  }

  // Process the preload queue
  const processQueue = async () => {
    if (isPreloading.current || preloadQueue.current.length === 0) return

    isPreloading.current = true
    const url = preloadQueue.current.shift()

    await preloadVideo(url)
    isPreloading.current = false
    processQueue()
  }

  // Add a video to the preload queue
  const queueVideoPreload = (url) => {
    if (!url || preloadedVideos[url] || preloadQueue.current.includes(url)) return

    preloadQueue.current.push(url)
    processQueue()
  }

  return { queueVideoPreload, preloadedVideos }
}

// Enhanced video component with optimized loading
function OptimizedVideo({ video_url, webm_url, poster_url, index, queueVideoPreload }) {
  const videoRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const observerRef = useRef(null)
  const [networkQuality, setNetworkQuality] = useState("high") // 'high', 'medium', 'low'

  // Check network conditions
  useEffect(() => {
    // Use the Network Information API if available
    if (navigator.connection) {
      const connection = navigator.connection

      if (connection.effectiveType === "4g" && !connection.saveData) {
        setNetworkQuality("high")
      } else if (connection.effectiveType === "3g" || connection.saveData) {
        setNetworkQuality("medium")
      } else {
        setNetworkQuality("low")
      }

      // Listen for changes in network quality
      const updateNetworkQuality = () => {
        if (connection.effectiveType === "4g" && !connection.saveData) {
          setNetworkQuality("high")
        } else if (connection.effectiveType === "3g" || connection.saveData) {
          setNetworkQuality("medium")
        } else {
          setNetworkQuality("low")
        }
      }

      connection.addEventListener("change", updateNetworkQuality)
      return () => connection.removeEventListener("change", updateNetworkQuality)
    }
  }, [])

  // Set up intersection observer for visibility detection
  useEffect(() => {
    // Preload first 3 videos immediately
    if (index < 3) {
      setIsVisible(true)
      if (index < 2) {
        // Queue next videos for preloading
        queueVideoPreload(video_url)
      }
      return
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)

          // Preload the next video when this one comes into view
          if (features[index + 1]) {
            queueVideoPreload(features[index + 1].video_url)
          }

          observerRef.current.disconnect()
        }
      },
      {
        rootMargin: "300px", // Increased from 200px to start loading earlier
        threshold: 0.1,
      },
    )

    if (videoRef.current) {
      observerRef.current.observe(videoRef.current)
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [index, queueVideoPreload, video_url])

  // Handle video loaded event
  const handleLoadedData = () => {
    setIsLoaded(true)
    setIsPlaying(true)
  }

  // Handle video error
  const handleVideoError = (e) => {
    console.error("Video error:", e)
    // Keep showing poster on error
  }

  return (
    <div
      ref={videoRef}
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "var(--radius, 0.5rem)",
        display: "block",
        height: "100%",
        width: "100%",
        aspectRatio: "16 / 9",
        inset: "0px",
      }}
    >
      {/* Only show poster image when video is not loaded */}
      {poster_url && !isLoaded && (
        <img
          src={poster_url || "/placeholder.svg"}
          alt=""
          style={{
            aspectRatio: "16 / 9",
            height: "100%",
            width: "100%",
            position: "absolute",
            objectFit: "contain",
            borderRadius: "var(--radius, 0.5rem)",
          }}
          loading={index > 2 ? "lazy" : "eager"}
        />
      )}

      {/* Only load video when near viewport */}
      {isVisible && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster={poster_url || ""}
          onLoadedData={handleLoadedData}
          onError={handleVideoError}
          style={{
            aspectRatio: "16 / 9",
            height: "100%",
            width: "100%",
            position: "absolute",
            border: "none",
            objectFit: "contain",
            borderRadius: "var(--radius, 0.5rem)",
            opacity: isLoaded ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
          preload={index < 3 ? "auto" : "metadata"}
        >
          {/* Use WebM if available and network is good */}
          {webm_url && networkQuality !== "low" && <source src={webm_url} type="video/webm" />}
          <source src={video_url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  )
}

function FeaturesSection() {
  const { queueVideoPreload, preloadedVideos } = useVideoPreloader()

  // Add preconnect and preload critical assets on component mount
  useEffect(() => {
    addPreconnect()
    preloadCriticalAssets()
  }, [])

  return (
    <section className="bg-[#08090a] min-h-screen w-full">
      <div className="container relative mx-auto flex flex-col items-center gap-10 px-6 py-14 md:py-[72px]">
        {/* Header */}
        <div className="flex flex-col items-center gap-3 self-center">
          <h3 className="bg-zinc-800/80 text-gray-400 flex min-h-7 items-center justify-center gap-2 rounded-full px-3.5 pb-px text-sm font-medium md:text-base">
            Built for AI
          </h3>
          <div className="flex max-w-[800px] flex-col items-center justify-center gap-1 self-center">
            <h4 className="text-pretty text-center text-3xl font-medium text-white md:text-4xl">
              Modernizing the Digital Backbone
            </h4>
          </div>
          <p className="text-gray-400 max-w-screen-md text-pretty text-center text-lg font-light md:text-xl">
            Data center software (DCIM, BMS and EPMS) has stagnated. We've built a better way.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="flex flex-col items-center gap-6 w-full">
          {features.map((item, index) => (
            <article
              key={index}
              className={`bg-[#17161b] flex min-h-96 w-full max-w-[380px] flex-col rounded-lg border border-zinc-800/50 p-px sm:max-w-full md:w-full ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"} xl:gap-16 mx-auto`}
            >
              {/* Video Section */}
              <figure className="p-2 md:h-auto md:w-[360px] lg:w-[480px] xl:w-[560px]">
                <OptimizedVideo
                  video_url={item.video_url}
                  webm_url={item.webm_url}
                  poster_url={item.poster_url || ""}
                  index={index}
                  queueVideoPreload={queueVideoPreload}
                />
              </figure>

              {/* Content Section */}
              <div className="flex flex-col gap-8 p-5 pt-6 md:flex-1 md:p-10">
                <div className="flex flex-col items-start gap-2">
                  <h5 className="text-white text-2xl font-medium md:text-3xl">{item.title}</h5>
                  <p className="text-gray-400 font-normal md:text-lg">{item.description}</p>
                </div>
                <ul className="flex flex-col items-start gap-3 pl-2 md:text-lg">
                  {item.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-300 flex items-center gap-4 font-normal">
                      <span
                        className="bg-zinc-800 flex size-6 items-center justify-center rounded-full"
                        style={{ minWidth: "1.5rem" }}
                      >
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-gray-500"
                        >
                          <path
                            d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
