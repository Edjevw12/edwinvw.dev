import React from 'react'
import { useTheme } from 'next-themes'
import { MoonIcon } from '@/components/icons/moon-icon'
import { SunIcon } from '@/components/icons/sun-icon'

export const DarkModeButton = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme

  function toggleMode() {
    setTheme(currentTheme === 'light' ? 'dark' : 'light')
  }
  return (
    <button onClick={toggleMode}>
      <div className="relative h-8 w-8">
        {currentTheme === 'light' ? (
          <span>
            <MoonIcon />
          </span>
        ) : (
          <span>
            <SunIcon />
          </span>
        )}
      </div>
    </button>
  )
}
