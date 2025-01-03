import { useState, useEffect } from 'react'

export default function useIsMd() {
    const [isMd, setIsMd] = useState(window.innerWidth > 768)

    useEffect(() => {
        function handleResize() {
            setIsMd(window.innerWidth > 768)
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return isMd
}