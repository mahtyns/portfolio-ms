import { useEffect, useRef, useState } from 'react'

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

export const useScrambleText = (
    text: string,
    speed = 30,
    increment = 0.2
) => {
    const [displayText, setDisplayText] = useState(text)
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

    const scramble = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current)
        }

        let iterations = 0

        intervalRef.current = setInterval(() => {
            setDisplayText(
                text
                    .split('')
                    .map((char, index) => {
                        if (char === ' ') return ' '

                        if (index < iterations) {
                            return char
                        }

                        return LETTERS[
                            Math.floor(Math.random() * LETTERS.length)
                        ]
                    })
                    .join('')
            )

            if (iterations >= text.length) {
                if (intervalRef.current) {
                    clearInterval(intervalRef.current)
                }

                setDisplayText(text)
            }

            iterations += increment
        }, speed)
    }

    useEffect(() => {
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
            }
        }
    }, [])

    return {
        displayText,
        scramble
    }
}