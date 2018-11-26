import * as React from 'react'
import {useEffect, useState} from 'react'
import {Fender} from '../../../lib/index'

export const FenderDemoLoading = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1600)
  }, [])

  return (
    <div>
      <Fender type={isLoading ? 'loading' : 'empty'}>
        {isLoading ? <div>Loading...</div> : <div>No data</div>}
      </Fender>
    </div>
  )
}

