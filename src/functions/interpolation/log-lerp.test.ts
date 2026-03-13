import { describe, it, expect } from 'vitest'
import logLerp from "./log-lerp";

describe('logLerp', () => {
  it('returns low on t = 0', () => {
    const low = 1
    const high = 2
    expect(logLerp(0, low, high)).toBe(low)
  })

  it('returns high on t = 1', () => {
    const low = 1
    const high = 2
    expect(logLerp(1, low, high)).toBe(high)
  })

  it('returns the geometric mean on t = 0.5', () => {
    const low = 1
    const high = 2
    expect(logLerp(0.5, low, high)).toBe(Math.sqrt(low * high))
  })
})
