import { describe, it, expect } from 'vitest'
import lerp from "./lerp";

describe('lerp', () => {
  it('returns start on t = 0', () => {
    const start = 1
    const end = 2
    expect(lerp(0, start, end)).toBe(start)
  })

  it('returns end on t = 1', () => {
    const start = 1
    const end = 2
    expect(lerp(1, start, end)).toBe(end)
  })

  it('returns the arithmetic mean on t = 0.5', () => {
    const start = 1
    const end = 2
    expect(lerp(0.5, start, end)).toBe((start + end) / 2)
  })
})
