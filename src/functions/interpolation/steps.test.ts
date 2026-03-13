import { describe, it, expect } from 'vitest'
import steps from "./steps";

describe('steps', () => {
  it('returns start on step = 0', () => {
    const start = 1
    const end = 2
    const n = 12
    expect(steps(0, n, start, end)).toBe(start)
  })

  it('returns end on step = steps', () => {
    const start = 2
    const end = 6
    const n = 6
    expect(steps(n, n, start, end)).toBe(end)
  })

  it('returns the arithmetic mean on step = steps / 2', () => {
    const start = 200
    const end = 800
    const n = 10
    expect(steps(n / 2, n, start, end)).toBe((start + end) / 2)
  })
})
