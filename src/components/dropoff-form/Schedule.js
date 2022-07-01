import React from 'react';
import ScheduleCycleExchange from './ScheduleCycleExchange.js'
import ScheduleFettle from './ScheduleFettle.js'
import ScheduleFlammeRouge from './ScheduleFlammeRouge.js'


export default function Schedule({ location }) {

  const calendlyEmbedStyles = {
    height: "1200px"
  }

  switch (location) {
    case "Cycle Exchange Kingston":
      return (
        <ScheduleCycleExchange
          styles={calendlyEmbedStyles}
        />
      )
    case "Fettle Hyde Park":
      return (
        <ScheduleFettle
          styles={calendlyEmbedStyles}
        />
      )
    case "Flamme Rouge Bedford":
      return (
        <ScheduleFlammeRouge
          styles={calendlyEmbedStyles}
        />
      )
  }
}