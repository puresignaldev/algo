import logLerp from "./log-lerp";

/**
 * Quantized logarithmic interpolation (logSteps).
 *
 * A stepped wrapper around {@link logLerp} — maps a discrete step index to a
 * value along the logarithmic scale between `start` and `end`:
 *
 * ```
 * result = logLerp(step / steps, start, end)
 * ```
 *
 * @param step - Current step index, typically in [0, steps].
 * @param steps - Total number of steps.
 * @param start - Start value. Returned when `step = 0`.
 * @param end - End value. Returned when `step = steps`.
 */
export default function logSteps(step: number, steps: number, start: number, end: number) {
  return logLerp(step / steps, start, end)
}