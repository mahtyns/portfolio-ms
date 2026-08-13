import { useEffect, useRef } from 'react'

const ACTIVE_EASE = 0.08
const IDLE_EASE = 0.02
const PARTICLE_COUNT = 5

interface AmbientConfig {
    freqX: number
    freqY: number
    phaseX: number
    phaseY: number
    marginX: number
    marginY: number
}

const HeroInteractive = () => {
    const reticleRef = useRef<HTMLDivElement>(null)
    const particleRefs = useRef<(HTMLSpanElement | null)[]>([])

    useEffect(() => {
        const section = reticleRef.current?.closest('.home') as HTMLElement | null
        if (!section) return

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

        let width = 0
        let height = 0
        let currentX = 0
        let currentY = 0
        let pointerX = 0
        let pointerY = 0
        let isActive = false
        let running = true
        let animationId: number

        const measure = () => {
            const rect = section.getBoundingClientRect()
            width = rect.width
            height = rect.height
        }
        measure()
        currentX = width / 2
        currentY = height / 2

        // each ambient particle gets its own random-but-fixed rhythm, so none of them sync
        const ambientConfigs: AmbientConfig[] = Array.from({ length: PARTICLE_COUNT }, () => ({
            freqX: 0.00012 + Math.random() * 0.00022,
            freqY: 0.00012 + Math.random() * 0.00022,
            phaseX: Math.random() * Math.PI * 2,
            phaseY: Math.random() * Math.PI * 2,
            marginX: 0.12 + Math.random() * 0.15,
            marginY: 0.15 + Math.random() * 0.15,
        }))

        const setSpot = (x: number, y: number) => {
            section.style.setProperty('--spot-x', `${x}px`)
            section.style.setProperty('--spot-y', `${y}px`)
            if (reticleRef.current) {
                reticleRef.current.style.transform = `translate(${x}px, ${y}px)`
            }
        }

        const idleTarget = (t: number) => {
            const marginX = width * 0.18
            const marginY = height * 0.22
            return {
                x: width / 2 + Math.sin(t * 0.00025) * (width / 2 - marginX),
                y: height / 2 + Math.sin(t * 0.00037 + 1.3) * (height / 2 - marginY),
            }
        }

        const updateAmbientParticles = (t: number) => {
            ambientConfigs.forEach((cfg, i) => {
                const el = particleRefs.current[i]
                if (!el) return
                const x = width / 2 + Math.sin(t * cfg.freqX + cfg.phaseX) * (width / 2 - width * cfg.marginX)
                const y = height / 2 + Math.sin(t * cfg.freqY + cfg.phaseY) * (height / 2 - height * cfg.marginY)
                el.style.transform = `translate(${x}px, ${y}px)`
            })
        }

        const tick = (t: number) => {
            if (!running) return

            const target = isActive ? { x: pointerX, y: pointerY } : idleTarget(t)
            const ease = isActive ? ACTIVE_EASE : IDLE_EASE

            currentX += (target.x - currentX) * ease
            currentY += (target.y - currentY) * ease
            setSpot(currentX, currentY)
            updateAmbientParticles(t)

            animationId = requestAnimationFrame(tick)
        }

        const handleMove = (clientX: number, clientY: number) => {
            const rect = section.getBoundingClientRect()
            pointerX = clientX - rect.left
            pointerY = clientY - rect.top
        }

        const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX, e.clientY)
        const handleTouchMove = (e: TouchEvent) => {
            const touch = e.touches[0]
            if (touch) handleMove(touch.clientX, touch.clientY)
        }

        const handleEnter = () => {
            isActive = true
            section.classList.add('home--pointer-active')
        }
        const handleLeave = () => {
            isActive = false
            section.classList.remove('home--pointer-active')
        }
        const handleResize = () => measure()
        const handleVisibility = () => {
            running = document.visibilityState === 'visible'
            if (running) animationId = requestAnimationFrame(tick)
        }

        section.addEventListener('mousemove', handleMouseMove)
        section.addEventListener('mouseenter', handleEnter)
        section.addEventListener('mouseleave', handleLeave)
        section.addEventListener('touchmove', handleTouchMove, { passive: true })
        section.addEventListener('touchstart', handleEnter, { passive: true })
        section.addEventListener('touchend', handleLeave)
        window.addEventListener('resize', handleResize)
        document.addEventListener('visibilitychange', handleVisibility)

        section.classList.add('home--interactive')

        if (!prefersReducedMotion) {
            animationId = requestAnimationFrame(tick)
        } else {
            setSpot(width / 2, height / 2)
            updateAmbientParticles(0)
        }

        return () => {
            cancelAnimationFrame(animationId)
            section.removeEventListener('mousemove', handleMouseMove)
            section.removeEventListener('mouseenter', handleEnter)
            section.removeEventListener('mouseleave', handleLeave)
            section.removeEventListener('touchmove', handleTouchMove)
            section.removeEventListener('touchstart', handleEnter)
            section.removeEventListener('touchend', handleLeave)
            window.removeEventListener('resize', handleResize)
            document.removeEventListener('visibilitychange', handleVisibility)
            section.classList.remove('home--interactive', 'home--pointer-active')
        }
    }, [])

    return (
        <>
            <div className='home__reticle' ref={reticleRef} aria-hidden='true'>
                <span className='home__reticle-line home__reticle-line--h' />
                <span className='home__reticle-line home__reticle-line--v' />
                <span className='home__reticle-dot' />
            </div>
            {Array.from({ length: PARTICLE_COUNT }, (_, i) => (
                <span
                    key={i}
                    ref={(el) => { particleRefs.current[i] = el }}
                    className='home__particle'
                    aria-hidden='true'
                />
            ))}
        </>
    )
}

export default HeroInteractive