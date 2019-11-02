import React from 'react'
import {Switch, Route} from 'react-router-dom';

import Arc from './components/arc';
import Area from './components/area';
import Bar from './components/bar';
import Heatmap from './components/heatmap';
import Label from './components/label';
import LineMark from './components/lineMark';

const Charts = () => {
  return (
    <Switch>
      <Route path="/charts/arc" component={Arc} />
      <Route path="/charts/lineMark" component={LineMark} />
      <Route path="/charts/bar" component={Bar} />
      <Route path="/charts/heatmap" component={Heatmap} />
      <Route path="/charts/area" component={Area} />
      <Route path="/charts/label" component={Label} />
    </Switch>
  )
}

export default Charts