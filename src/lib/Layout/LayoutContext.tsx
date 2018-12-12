import * as React from 'react'
import {createContext, ReactChild, useContext, useEffect, useState} from 'react'
import {debounce} from '../../demo/utils/debounce'

const LayoutContext = createContext<SidebarContextProps>({} as SidebarContextProps)

interface IProps {
  children: ReactChild
  mobileBreakpoint?: number
  title?: string
}

interface SidebarContextProps {
  title?: string
  isMobileWidth: boolean
  isMobileSidebarOpened: boolean
  openMobileSidebar: () => void
  closeMobileSidebar: () => void
  toggleMobileSidebar: () => void
}

export const LayoutProvider = ({title, mobileBreakpoint = 700, children}: IProps) => {
  const [isMobileSidebarOpened, setIsMobileSidebarOpened] = useState(false)
  const [mobileWidth, setMobileWidth] = useState(getWidth())

  const openMobileSidebar = () => setIsMobileSidebarOpened(true)
  const closeMobileSidebar = () => setIsMobileSidebarOpened(false)
  const toggleMobileSidebar = () => setIsMobileSidebarOpened(!isMobileSidebarOpened)

  useEffect(() => {
    window.addEventListener('resize', debounce(() => setMobileWidth(getWidth()), 600))
  }, [])

  return (
    <LayoutContext.Provider value={{
      isMobileSidebarOpened,
      openMobileSidebar,
      closeMobileSidebar,
      toggleMobileSidebar,
      title,
      isMobileWidth: mobileWidth < mobileBreakpoint,
    }}>
      {children}
    </LayoutContext.Provider>
  )
}

function getWidth(): number {
  return window.innerWidth
}

export const useSidebarContext = (): SidebarContextProps => {
  return useContext<SidebarContextProps>(LayoutContext)
}
