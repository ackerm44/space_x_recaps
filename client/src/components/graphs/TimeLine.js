import React from 'react';
import { DateFormat } from '../DateFormat'

const TimeLine = ({ history }) => {
  console.log(history)

  return (
    <section className="graph">
      <h2>SpaceX History Timeline</h2>
      <div className="timeline">
        {history.map((item, i) => {
          const placement = i % 2 === 0 ? 'even' : 'odd'
          return (
            <React.Fragment>
              <div key={i} className={`timeline-item ${placement}`}>
                <p><DateFormat date={item.event_date_utc} /></p>
                <h3>{item.title}</h3>
                <p>{item.details}</p>
                <a className="button" href={item.links.article} target="_blank">Learn More</a>
              </div>
              {placement === 'even' && 
              <div></div>
              }
              {placement === 'even' && 
              <div></div>
              }
            </React.Fragment>

          )
        })}
      </div>

    </section>
  )
}

export default TimeLine

