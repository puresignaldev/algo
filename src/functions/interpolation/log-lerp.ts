/**
 * Logarithmic linear interpolation (logLerp).
 *
 * Linear in log space — equivalently, the weighted geometric mean of `low` and `high`:
 *
 * ```
 * ln(result) = (1 − t) · ln(low) + t · ln(high)
 * result     = low^(1−t) · high^t
 * ```
 *
 * @param low - Start value. Returned when `t = 0`.
 * @param high - End value. Returned when `t = 1`.
 * @param t - Interpolation factor, typically in [0, 1].
 */
export default function logLerp(low: number, high: number, t: number) {
  return low * Math.pow((high / low), t)
}