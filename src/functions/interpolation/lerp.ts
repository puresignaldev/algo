/**
 * Linear interpolation (lerp).
 *
 * ```
 * result = start + t · (end − start)
 * ```
 *
 * @param t - Interpolation factor, typically in [0, 1].
 * @param start - Start value. Returned when `t = 0`.
 * @param end - End value. Returned when `t = 1`.
 */
export default function lerp(t: number, start: number, end: number) {
  return start + t * (end - start)
}
