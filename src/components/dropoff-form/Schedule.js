import React from 'react';
import ScheduleCycleExchange from './ScheduleCycleExchange.js'
import ScheduleFettle from './ScheduleFettle.js'
import ScheduleFlammeRouge from './ScheduleFlammeRouge.js'


export default function Schedule({ fadeAnimation, location }) {

  const calendlyEmbedStyles = {
    height: "1100px"
}

  switch (location) {
    case "Cycle Exchange Kingston":
      return (
        <ScheduleCycleExchange
          styles={calendlyEmbedStyles}
          fadeIn={fadeAnimation}
          location={location}
        />
      )
    case "Fettle Hyde Park":
      return (
        <ScheduleFettle
          styles={calendlyEmbedStyles}
          fadeIn={fadeAnimation}
          location={location}
        />
      )
    case "Flamme Rouge Bedford":
      return (
        <ScheduleFlammeRouge
          styles={calendlyEmbedStyles}
          fadeIn={fadeAnimation}
          location={location}
        />
      )
  }
}