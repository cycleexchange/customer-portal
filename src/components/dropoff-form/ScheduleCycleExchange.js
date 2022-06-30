import React from 'react';
import { motion } from "framer-motion";
import { InlineWidget } from "react-calendly";



export default function ScheduleCycleExchange({ fadeIn, location, styles }) {

  return (
    <div className="calendly__wrap">
      <InlineWidget styles={styles} url="https://calendly.com/d/2gvx-2dtm/ce-purchase-check?hide_gdpr_banner=1" />
    </div>
  )

}