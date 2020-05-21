import { useState, useEffect } from "react"

export const size = {
  mobile: 823,
  desktop: 1025,
}

export const useWindowDimensions = () => {
  const [useDevice, setDevice] = useState("loading")

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= size.mobile) {
        setDevice("mobile")
        return null
      }
      if (window.innerWidth <= size.tablet) {
        setDevice("tablet")
        return null
      }

      setDevice("desktop")
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [useDevice])

  return useDevice
}
