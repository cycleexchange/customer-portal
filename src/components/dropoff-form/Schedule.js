import React from 'react';
import ScheduleCycleExchange from './ScheduleCycleExchange.js'
import ScheduleFettle from './ScheduleFettle.js'
import ScheduleFlammeRouge from './ScheduleFlammeRouge.js'


export default function Schedule({ fadeAnimation, location }) {

      switch (location) {
        case "Cycle Exchange Kingston":
          return (
            <ScheduleCycleExchange
              fadeIn={fadeAnimation}
              location={location}
            />
          )
          case "Fettle Hyde Park":
            return (
            <ScheduleFettle
              fadeIn={fadeAnimation}
              location={location}
            />
          )
          case "Flamme Rouge Bedford":
            return (
            <ScheduleFlammeRouge
              fadeIn={fadeAnimation}
              location={location}
            />
          )
      }
}