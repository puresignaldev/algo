/**
 * Logarithmic linear interpolation (logLerp).
 *
 * Linear in log space — equivalently, the weighted geometric mean of `start` and `end`:
 *
 * ```
 * ln(result) = (1 − t) · ln(start) + t · ln(end)
 * result     = start^(1−t) · end^t
 * ```
 *
 * @param t - Interpolation factor, typically in [0, 1].
 * @param start - Start value. Returned when `t = 0`.
 * @param end - End value. Returned when `t = 1`.
 */
export default function logLerp(t: number, start: number, end: number) {
  return start * Math.pow((end / start), t)
}