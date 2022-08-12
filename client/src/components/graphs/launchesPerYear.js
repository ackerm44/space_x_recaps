import React, { Component } from 'react'
// import '../node_modules/react-vis/dist/style.css';
import {XYPlot, XAxis, YAxis, VerticalBarSeries, LabelSeries} from 'react-vis';

class LaunchesPerYear extends Component {
  render() {
//     const data = [
//       {
//           x: "2006",
//           y: 1
//       },
//       {
//           x: "2007",
//           y: 1
//       },
//       {
//           x: "2008",
//           y: 2
//       },
//       {
//           x: "2009",
//           y: 1
//       },
//       {
//           x: "2010",
//           y: 2
//       },
//       {
//           x: "2012",
//           y: 2
//       },
//       {
//           x: "2013",
//           y: 3
//       },
//       {
//           x: "2014",
//           y: 6
//       },
//       {
//           x: "2015",
//           y: 7
//       },
//       {
//           x: "2016",
//           y: 9
//       },
//       {
//           x: "2017",
//           y: 18
//       },
//       {
//           x: "2018",
//           y: 21
//       },
//       {
//           x: "2019",
//           y: 13
//       },
//       {
//           x: "2020",
//           y: 26
//       },
//       {
//           x: "2021",
//           y: 31
//       },
//       {
//           x: "2022",
//           y: 46
//       }
//   ]

    const data = this.props.launchData.reduce((prevVal, currVal) => {
      const year = new Date(currVal.date_utc).getFullYear().toString()
      if (prevVal.find(item => item.x === year)) {
        let find = prevVal.find(item => item.x === year)
        find.y++
      } else {
        prevVal.push({x: year, y: 1})
      }
      return prevVal
    }, [])

    // console.log(data)

    const labelData = data.map((d, idx) => ({
      x: d.x,
      y: d.y
    }));

    return(
      <section className="graph">
        <h2>Launches Per Year</h2>
        <XYPlot xType="ordinal" height={300} width= {1000} color="#081448">
          <XAxis />
          <YAxis />
          <VerticalBarSeries data={data} onValueMouseOver={(datapoint, event)=>{
            // console.log(datapoint)
            
          }}/>
        </XYPlot>
      </section>
    )
  }
}

export default LaunchesPerYear
