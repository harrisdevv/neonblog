'use client'
import { useState, useEffect } from 'react'

interface ReversedGradientArrowProps {
  length?: number // Length of the arrow in pixels
}

export default function GradientArrow({ length = 300 }: ReversedGradientArrowProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Calculate dimensions
  const arrowHeadSize = 20
  const height = 60
  const viewBoxWidth = length
  const arrowBodyStart = arrowHeadSize

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <svg
        viewBox={`0 0 ${viewBoxWidth} ${height}`}
        className={`w-full h-auto transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
        }`}
      >
        <defs>
          <linearGradient id="reversedPinkGradient" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#FF69B4" />
            <stop offset="100%" stopColor="#FFB6C1" />
          </linearGradient>
        </defs>
        <path
          d={`M${viewBoxWidth},${height / 2} H${arrowBodyStart} L${arrowBodyStart + arrowHeadSize},${arrowHeadSize} M${arrowBodyStart},${height / 2} L${arrowBodyStart + arrowHeadSize},${height - arrowHeadSize}`}
          fill="none"
          stroke="url(#reversedPinkGradient)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}