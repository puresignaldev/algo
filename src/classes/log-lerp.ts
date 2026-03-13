export default function logLerp(low: number, high: number, t: number) {
  return low * Math.pow((high / low), t)
}