import React from 'react';
import { motion } from "framer-motion";
import { InlineWidget } from "react-calendly";



export default function ScheduleCycleExchange({ fadeIn, location }) {

  return (
    <div className="calendly__wrap">
      <InlineWidget url="https://calendly.com/d/2gvx-2dtm/ce-purchase-check?hide_gdpr_banner=1" />
    </div>
  )

}