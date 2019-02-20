### Class names conflict

You may need to define a class name generator to prevent conflict in production mode.
Should not occur anymore since I fixed peer deps.

```npm i -s react-jss```

```
import React, {Component} from 'react'
import {createGenerateClassName} from '@material-ui/core'
import JssProvider from 'react-jss/lib/JssProvider'

const generateClassName = createGenerateClassName({
  productionPrefix: 'my-prefix',
})

class App extends Component {

  render() {
    return (
      <JssProvider generateClassName={generateClassName}>
        ...
      </JssProvider>
    );
  }
}

export default App
```
