import { describe, it, expect } from 'vitest'
import logSteps from "./log-steps";

describe('logSteps', () => {
  it('returns start on step = 0', () => {
    const start = 1
    const end = 2
    const steps = 12
    expect(logSteps(0, steps, start, end)).toBe(start)
  })

  it('returns end on step = steps', () => {
    const start = 2
    const end = 6
    const steps = 6
    expect(logSteps(steps, steps, start, end)).toBe(end)
  })

  it('returns the geometric mean on step = steps / 2', () => {
    const start = 200
    const end = 800
    const steps = 10
    expect(logSteps(steps / 2, steps, start, end)).toBe(Math.sqrt(start * end))
  })
})
