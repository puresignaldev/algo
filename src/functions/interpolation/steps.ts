import lerp from "./lerp";

/**
 * Quantized linear interpolation (steps).
 *
 * A stepped wrapper around {@link lerp} — maps a discrete step index to a
 * value along the linear scale between `start` and `end`:
 *
 * ```
 * result = lerp(step / steps, start, end)
 * ```
 *
 * @param step - Current step index, typically in [0, steps].
 * @param steps - Total number of steps.
 * @param start - Start value. Returned when `step = 0`.
 * @param end - End value. Returned when `step = steps`.
 */
export default function steps(step: number, steps: number, start: number, end: number) {
  return lerp(step / steps, start, end)
}
