import * as React from 'react'
import {createContext, useContext, useState} from 'react'

const LayoutContext = createContext<SidebarContextProps>({} as SidebarContextProps)

interface SidebarContextProps {
  isMobileSidebarOpened: boolean
  openMobileSidebar: () => void
  closeMobileSidebar: () => void
  toggleMobileSidebar: () => void
}

export const SidebarContextProvider = ({children}) => {
  const [isMobileSidebarOpened, setIsMobileSidebarOpened] = useState(false)
  const openMobileSidebar = () => setIsMobileSidebarOpened(true)
  const closeMobileSidebar = () => setIsMobileSidebarOpened(false)
  const toggleMobileSidebar = () => setIsMobileSidebarOpened(!isMobileSidebarOpened)
  return (
    <LayoutContext.Provider value={{
      isMobileSidebarOpened,
      openMobileSidebar,
      closeMobileSidebar,
      toggleMobileSidebar,
    }}>
      {children}
    </LayoutContext.Provider>
  )
}

export const useSidebarContext = (): SidebarContextProps => {
  return useContext<SidebarContextProps>(LayoutContext)
}
