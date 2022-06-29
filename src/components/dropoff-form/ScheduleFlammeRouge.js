import React from 'react';
import { motion } from "framer-motion";
import { InlineWidget } from "react-calendly";


export default function ScheduleFlammeRouge({ fadeIn, location }) {
  return (
    <div className="calendly__wrap">
      <InlineWidget url="https://calendly.com/d/dm3-zw4-qp2/ce-purchase-check-flamme-rouge?hide_gdpr_banner=1&primary_color=ff575f" />
    </div>
  )
}