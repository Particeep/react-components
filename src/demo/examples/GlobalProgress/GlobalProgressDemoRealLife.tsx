import * as React from 'react'
import {Btn, withGlobalProgress} from '../../../lib'
import {GlobalProgressBar, GlobalProgressProvider} from '../../../lib/GlobalProgress'
import {useEffect} from 'react'

export const fetchSomething = () => new Promise(resolve => setTimeout(resolve, 800, {}))
export const fetchSomethingElse = () => new Promise(resolve => setTimeout(resolve, 1200, {}))
export const fetchSomethingElseElse = () => new Promise(resolve => setTimeout(resolve, 2400, {}))
export const fetchSomethingRejected = () => new Promise((resolve, reject) => setTimeout(() => reject('oops'), 2400, {}))

export const GlobalProgressDemoRealLife = () => {

  return (
    <GlobalProgressProvider>
      <GlobalProgressBar style={{position: 'fixed'}}/>
      <App/>
    </GlobalProgressProvider>
  )
}

const App = withGlobalProgress(({promisesWithProgress}) => {

  useEffect(() => fetch(), [])

  const fetch = () => {
    promisesWithProgress(
      fetchSomething().then(() => console.info('Something fetched')),
      fetchSomethingElse().then(() => console.info('Something else fetched')),
      fetchSomethingElseElse().then(() => console.info('Something else else fetched')),
    )
  }

  const fetchWithError = () => {
    promisesWithProgress(
      fetchSomething().then(() => console.info('Something fetched')),
      fetchSomethingElse().then(() => console.info('Something else fetched')),
      fetchSomethingRejected().catch(e => {console.info('Something fetched but rejected', e); throw new Error(e)}),
    )
  }

  return (
    <div style={{display: 'flex', justifyContent: 'space-around'}}>
      <Btn color="primary" onClick={fetch}>Fetch</Btn>
      <Btn color="primary" onClick={fetchWithError}>FetchWithError</Btn>
    </div>
  )
})
