import React from 'react';
import { InlineWidget } from "react-calendly";


export default function ScheduleFlammeRouge({ styles }) {
  
  return (
    <div className="calendly__wrap">
      <InlineWidget styles={styles} url="https://calendly.com/d/dm3-zw4-qp2/ce-purchase-check-flamme-rouge?hide_gdpr_banner=1&primary_color=ff575f" />
    </div>
  )
}