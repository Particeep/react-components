import * as React from 'react'
import {useState} from 'react'
import debounce from 'debounce'; // < 1kb payload overhead when lodash/debounce is > 3kb.

export const useIsMobileWidth = (): boolean => {

  const handleResize = debounce(() => {
    setIsMobileWidth(checkIsMobileWidth())
  })

  const checkIsMobileWidth = (): boolean => {
    return window.innerWidth < 700
  }

  window.addEventListener('resize', handleResize)

  const [isMobileWidth, setIsMobileWidth] = useState(checkIsMobileWidth())
  return isMobileWidth
}

