import { describe, it, expect } from 'vitest'
import logLerp from "./log-lerp";

describe('logLerp', () => {
  it('returns start on t = 0', () => {
    const start = 1
    const end = 2
    expect(logLerp(0, start, end)).toBe(start)
  })

  it('returns end on t = 1', () => {
    const start = 1
    const end = 2
    expect(logLerp(1, start, end)).toBe(end)
  })

  it('returns the geometric mean on t = 0.5', () => {
    const start = 1
    const end = 2
    expect(logLerp(0.5, start, end)).toBe(Math.sqrt(start * end))
  })
})
