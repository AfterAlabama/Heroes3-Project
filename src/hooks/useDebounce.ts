
// eslint-disable-next-line @typescript-eslint/ban-types
export const useDebounce = (cb: Function) => {
  let timer: number;
  return (...args: unknown[]) => {
    clearTimeout(timer)
    timer = window.setTimeout(() => {
      cb(...args)
    }, 500)
  }
}