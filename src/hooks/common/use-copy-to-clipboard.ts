import { useRef, useState } from 'react'

export default function useCopyToClipboard(delay: number = 2000) {
  const [isCopy, setIsCopy] = useState(false)
  const timeId = useRef<NodeJS.Timeout | null>(null)

  const copyToClipboard = (value = '') => {
    if (timeId.current) return

    navigator.clipboard.writeText(value)

    setIsCopy(true)

    timeId.current = setTimeout(() => {
      timeId.current = null
      setIsCopy(false)
    }, delay)
  }

  return { isCopy, copyToClipboard }
}
