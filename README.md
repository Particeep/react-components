# Mui-extension

Set of [React](https://reactjs.org/) components based on [Material icons](https://material.io/icons/). See Material icons installation instructions [here](http://google.github.io/material-design-icons/#icon-font-for-the-web).

### Installation

```npm i -s git+https://github.com/Particeep/react-components.git```

### Demo

[Click here](https://mui-extension.firebaseapp.com/)


### Usage

```
import {Btn, Panel, PanelBody} from 'mui-extension'

const AppComponent = () => 
  <Panel>
    <PanelBody>
      <Btn loading={false}>Button</Btn>
    </Panel>
  </PanelBody>
```

### Class names conflict

You may need to define a class name generator to prevent conflict in production mode.

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
