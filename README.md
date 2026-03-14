# @puresignal/essl

Algorithmic composition library named after the composer Karlheinz Essl and inspired by his [Real Time Composition Library](https://www.essl.at/works/rtc.html).

## Install

```sh
npm install @puresignal/algo
```

## API

### `Urn`

Cycles through a range of integers in random order, guaranteeing each value appears exactly once per cycle before repeating.

Inspired by the [urn](https://docs.cycling74.com/reference/urn/) object in Max/MSP.

```ts
import { Urn } from '@puresignal/algo'

const urn = new Urn(4) // values: 0, 1, 2, 3

urn.next() // e.g. 2
urn.next() // e.g. 0
urn.next() // e.g. 3
urn.next() // e.g. 1
urn.next() // new cycle begins
```

| Member                   | Description                             |
|--------------------------|-----------------------------------------|
| `new Urn(max, options?)` | Create an urn over the range `[0, max)` |
| `.next()`                | Draw the next value                     |
| `.max`                   | The range the urn was created with      |
| `.noRepeat`              | Whether no-repeat mode is enabled       |

**Options**

| Option     | Default | Description                                                                                        |
|------------|---------|----------------------------------------------------------------------------------------------------|
| `noRepeat` | `false` | Never return the same value twice in a row, even across cycle boundaries                           |
| `onCycle`  | —       | Callback invoked at the start of each new cycle, before the first value of that cycle is returned  |

```ts
const urn = new Urn(4, {
  noRepeat: true,
  onCycle: () => console.log('new cycle'),
})
```
