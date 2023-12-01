"use client";
import TAnimatedInput from "@/types/animatedInput";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedInput({
  settings,
}: {
  settings: TAnimatedInput;
}) {
  const [isFocused, setFocus] = useState(false);

  const initial = {
    left: 10,
    top: "50%",
    translateY: "-50%",
    fontSize: settings.labelStyle.fontSize
      ? settings.labelStyle.fontSize
      : "1rem",
    lineHeight: settings.labelStyle.lineHeight
      ? settings.labelStyle.lineHeight
      : "1.5rem",
  };
  const isFocusedAnimation = {
    left: 0,
    top: 0,
    translateY: 0,
    fontSize: "0.75rem",
    lineHeight: "1rem",
  };
  return (
    <div className={settings.inputWrapperStyle}>
      <motion.p
        initial={initial}
        animate={isFocused ? isFocusedAnimation : initial}
        style={settings.labelStyle}
      >
        {settings.labelText}
      </motion.p>
      <input
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        type={settings.inputType ? settings.inputType : "text"}
        name={settings.inputName}
        style={settings.inputStyle}
      />
    </div>
  );
}
