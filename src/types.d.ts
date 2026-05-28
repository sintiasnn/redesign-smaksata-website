declare module 'aos' {
  interface AosOptions {
    duration?: number
    once?: boolean
    offset?: number
    delay?: number
    easing?: string
  }
  const AOS: {
    init(options?: AosOptions): void
  }
  export default AOS
}

declare module '*.css'
