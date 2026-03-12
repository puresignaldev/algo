import { describe, it, expect } from 'vitest'
import Urn from './Urn'

describe('Urn', () => {
  it('returns values in range [0, max)', () => {
    const urn = new Urn(5)
    for (let i = 0; i < 20; i++) {
      const v = urn.next()
      expect(v).toBeGreaterThanOrEqual(0)
      expect(v).toBeLessThan(5)
    }
  })

  it('returns each value exactly once before repeating (within a cycle)', () => {
    const max = 6
    const urn = new Urn(max)
    const seen = new Set<number>()
    for (let i = 0; i < max; i++) {
      seen.add(urn.next())
    }
    expect(seen.size).toBe(max)
  })

  it('exposes the max it was created with', () => {
    const urn = new Urn(7)
    expect(urn.max).toBe(7)
  })

  describe('onCycle', () => {
    it('calls the callback each time a new cycle begins', () => {
      let count = 0
      const urn = new Urn(3, { onCycle: () => count++ })
      for (let i = 0; i < 9; i++) urn.next() // 3 full cycles
      expect(count).toBe(2)
    })

    it('fires before the first value of the new cycle is returned', () => {
      const log: string[] = []
      const urn = new Urn(2, { onCycle: () => log.push('cycle') })
      log.push(`v:${urn.next()}`)
      log.push(`v:${urn.next()}`)  // end of cycle 1
      log.push(`v:${urn.next()}`)  // triggers onCycle, then returns first value of cycle 2
      expect(log[2]).toBe('cycle')
      expect(log[3]).toMatch(/^v:/)
    })
  })

  describe('noRepeat', () => {
    it('never returns the same value twice in a row', () => {
      // max=2 makes cycle boundaries frequent, maximising chance of cross-boundary collision
      const urn = new Urn(2, { noRepeat: true })
      let prev = urn.next()
      for (let i = 0; i < 20; i++) {
        const next = urn.next()
        expect(next).not.toBe(prev)
        prev = next
      }
    })
  })
})
