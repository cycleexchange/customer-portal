import React from 'react';
import { motion } from "framer-motion";
import { InlineWidget } from "react-calendly";


export default function ScheduleFettle({ fadeIn, location }) {
  return (
    <div className="calendly__wrap">
      <InlineWidget url="https://calendly.com/d/dss-bw7-jhr/ce-purchase-check-fettle?hide_gdpr_banner=1&primary_color=ff575f" />
    </div>
  )
}