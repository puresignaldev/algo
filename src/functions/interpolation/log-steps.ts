import logLerp from "./log-lerp";

/**
 * Quantized logarithmic interpolation (logSteps).
 *
 * A stepped wrapper around {@link logLerp} — maps a discrete step index to a
 * value along the logarithmic scale between `low` and `high`:
 *
 * ```
 * result = logLerp(step / steps, low, high)
 * ```
 *
 * @param step - Current step index, typically in [0, steps].
 * @param steps - Total number of steps.
 * @param low - Start value. Returned when `step = 0`.
 * @param high - End value. Returned when `step = steps`.
 */
export default function logSteps(step: number, steps: number, low: number, high: number) {
  return logLerp(step / steps, low, high)
}