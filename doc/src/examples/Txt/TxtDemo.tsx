import * as React from 'react';
import {Page} from '../../shared/Page/Page';
import {PageTitle} from '../../shared/PageTitle/PageTitle';
import {Demo} from 'mui-extension/lib';
import {TxtDemoSkeleton} from './TxtDemoSkeleton';
import {TxtDemoCustom} from './TxtDemoCustom';

export const TxtDemo = () => {
  return (
    <Page>
      <PageTitle>Txt</PageTitle>
      <p>
        Factorize typography behavior.
      </p>

      <Demo
        raw={preval`module.exports = require('fs').readFileSync(require.resolve('./TxtDemoSkeleton.tsx'), 'utf8')`}
        component={TxtDemoSkeleton}/>
      <Demo
        raw={preval`module.exports = require('fs').readFileSync(require.resolve('./TxtDemoCustom.tsx'), 'utf8')`}
        component={TxtDemoCustom}/>
    </Page>
  );
};
