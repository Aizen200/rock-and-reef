import { useEffect, useState } from 'react'

/**
 * Minimal path router: enough for a handful of static routes without pulling in
 * a routing library. Internal links call navigate(), which pushes history and
 * notifies every subscriber; the back button is handled by popstate.
 */
const listeners = new Set()

export function navigate(path, { hash } = {}) {
  const to = hash ? `${path}#${hash}` : path
  if (window.location.pathname + window.location.hash !== to) {
    window.history.pushState({}, '', to)
  }
  listeners.forEach((fn) => fn(window.location.pathname))
  if (hash) {
    // Let the new page mount before we look for the anchor.
    requestAnimationFrame(() => {
      const el = document.getElementById(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  } else {
    window.scrollTo({ top: 0 })
  }
}

export function useRoute() {
  const [path, setPath] = useState(() => window.location.pathname)

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname)
    listeners.add(setPath)
    window.addEventListener('popstate', onPop)
    return () => {
      listeners.delete(setPath)
      window.removeEventListener('popstate', onPop)
    }
  }, [])

  return path.replace(/\/+$/, '') || '/'
}
