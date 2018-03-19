import React, { Component } from 'react'
// import '../node_modules/react-vis/dist/style.css';
import {XYPlot, XAxis, YAxis, VerticalBarSeries} from 'react-vis';

class LaunchesPerYear extends Component {
  render() {
    const data = [
      {x: 2006, y: 1},
      {x: 2007, y: 1},
      {x: 2008, y: 2},
      {x: 2009, y: 1},
      {x: 2010, y: 2},
      {x: 2011, y: 0},
      {x: 2012, y: 2},
      {x: 2013, y: 3},
      {x: 2014, y: 6},
      {x: 2015, y: 7},
      {x: 2016, y: 9},
      {x: 2017, y: 18},
      {x: 2018, y: 5}
    ]

    return(
      <div>
        <XYPlot height={300} width= {300}>
          <XAxis />
          <YAxis />
          <VerticalBarSeries data={data} />
        </XYPlot>
      </div>
    )
  }
}

export default LaunchesPerYear
