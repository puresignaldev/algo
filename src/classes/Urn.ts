function range(n: number) {
  return Array.from({ length: n }, (_, i) => i)
}

function shuffle<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j]!, array[i]!]
  }
  return array
}

export interface UrnOptions {
  /**
   * When `true`, the same value will never be returned twice in a row,
   * even across cycle boundaries.
   * @default false
   */
  noRepeat?: boolean

  /**
   * Called at the start of each new cycle, before the first value of that
   * cycle is returned.
   */
  onCycle?: () => void
}

/**
 * Cycles through the integers `[0, max)` in random order, guaranteeing each
 * value appears exactly once per cycle before repeating.
 *
 * Inspired by the [urn](https://docs.cycling74.com/reference/urn/) object in Max/MSP.
 */
export default class Urn {
  private collection: number[] = []
  private offset = 0
  private last: number | null = null

  /** The range this urn was created with. Values are drawn from `[0, max)`. */
  readonly max: number

  /** Whether the same value can be returned twice in a row across cycle boundaries. */
  readonly noRepeat: boolean

  /** Called at the start of each new cycle, before the first value is returned. */
  onCycle?: () => void

  constructor(max: number, { noRepeat = false, onCycle }: UrnOptions = {}) {
    this.max = max
    this.noRepeat = noRepeat
    this.onCycle = onCycle
    this.clear()
  }

  private clear() {
    this.collection = shuffle(range(this.max))
  }

  private toggleOffset() {
    this.offset = 1 - this.offset
  }

  private withOffset(value: number) {
    return (value + this.offset) % this.max
  }

  /** Draw the next value from the urn. */
  next() {
    if (this.collection.length === 0) {
      this.clear()
      this.onCycle?.()
    }

    const newValue = this.collection.pop()

    if (newValue === undefined) {
      throw new Error('Collection is unexpectedly empty!')
    }

    if (this.noRepeat && this.withOffset(newValue) === this.last) {
      this.toggleOffset()
    }

    this.last = this.noRepeat ? this.withOffset(newValue) : newValue

    return this.last
  }
}
