import { describe, it, expect } from 'vitest'
import logLerp from "./log-lerp";

describe('logLerp', () => {
  it('returns low on t = 0', () => {
    const low = 1
    const high = 2
    expect(logLerp(low, high, 0)).toBe(low)
  })

  it('returns high on t = 1', () => {
    const low = 1
    const high = 2
    expect(logLerp(low, high, 1)).toBe(high)
  })

  it('returns the geometric mean on t = 0.5', () => {
    const low = 1
    const high = 2
    expect(logLerp(low, high, 0.5)).toBe(Math.sqrt(low * high))
  })
})
