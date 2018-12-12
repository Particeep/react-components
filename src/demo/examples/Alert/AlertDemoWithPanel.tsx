import * as React from 'react'
import {Alert, Panel, PanelBody, PanelHead} from 'mui-extension'

export const AlertDemoWithPanel = () => {
  return (
    <Panel>
      <PanelHead icon="music_note">
        Pouloulou
      </PanelHead>
      <Alert type="info">
        Tout va bien
      </Alert>
      <PanelBody>
        Material icons are delightful, beautifully crafted symbols for common actions and items. Download on desktop
        to use them in your digital products for Android, iOS, and web.

        Each symbol is available in five themes and a range of downloadable sizes and densities.

        <br/>
        <br/>

        <Alert type="success" icon="battery_full" deletable>
          Vous allez mieux
        </Alert>
      </PanelBody>
    </Panel>
  )
}
