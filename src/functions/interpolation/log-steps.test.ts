import { describe, it, expect } from 'vitest'
import logSteps from "./log-steps";

describe('logSteps', () => {
  it('returns low on step = 0', () => {
    const low = 1
    const high = 2
    const steps = 12
    expect(logSteps(0, steps, low, high)).toBe(low)
  })

  it('returns high on step = steps', () => {
    const low = 2
    const high = 6
    const steps = 6
    expect(logSteps(steps, steps, low, high)).toBe(high)
  })

  it('returns the geometric mean on step = steps / 2', () => {
    const low = 200
    const high = 800
    const steps = 10
    expect(logSteps(steps / 2, steps, low, high)).toBe(Math.sqrt(low * high))
  })
})
