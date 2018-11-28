import * as React from 'react'
import {Btn, withGlobalProgress} from '../../../lib'
import {GlobalProgressBar, GlobalProgressProvider} from '../../../lib/GlobalProgress'
import {useEffect} from 'react'

const fetchSomething = delay => new Promise(resolve => setTimeout(resolve, delay, {}))
const fetchSomethingRejected = delay => new Promise((resolve, reject) => setTimeout(() => reject('oops'), delay, {}))

export const GlobalProgressDemoRealLife = () => {

  return (
    <GlobalProgressProvider>
      <GlobalProgressBar
        style={{position: 'fixed'}}
        styleProgress={{
          height: 3,
          background: 'orange',
          boxShadow: `0 0 10px orange, 0 0 5px orange`
        }}/>
      <App/>
    </GlobalProgressProvider>
  )
}

const App = withGlobalProgress(({promisesWithProgress}) => {

  useEffect(() => fetch(), [])

  const fetch = () => {
    promisesWithProgress(
      fetchSomething(800).then(() => console.info('Something fetched')),
      fetchSomething(1200).then(() => console.info('Something else fetched')),
      fetchSomething(1500).then(() => console.info('Something else else fetched')),
    )
  }

  const fetchWithError = () => {
    promisesWithProgress(
      fetchSomething(800).then(() => console.info('Something fetched')),
      fetchSomething(1200).then(() => console.info('Something else fetched')),
      fetchSomethingRejected(2400).catch(e => {
        console.info('Something fetched but rejected', e)
        return Promise.reject(e)
      }),
    )
  }

  return (
    <div style={{display: 'flex', justifyContent: 'space-around'}}>
      <Btn color="primary" variant="outlined" onClick={fetch}>Fetch</Btn>
      <Btn color="primary" variant="outlined" onClick={fetchWithError}>FetchWithError</Btn>
    </div>
  )
})
