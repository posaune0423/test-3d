import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const detectiOS = () => {
  const toMatch = [/iPhone/i, /iPad/i, /iPod/i]

  return toMatch.some((toMatchItem) => {
    return RegExp(toMatchItem).exec(navigator.userAgent)
  })
}

export const detectAndroid = () => {
  const toMatch = [/Android/i, /webOS/i, /BlackBerry/i, /Windows Phone/i]

  return toMatch.some((toMatchItem) => {
    return RegExp(toMatchItem).exec(navigator.userAgent)
  })
}

export const detectMobile = () => {
  return detectiOS() || detectAndroid()
}

export const isPWA = () => {
  if (!window) {
    return false
  }
  return window.matchMedia('(display-mode: standalone)').matches
}
