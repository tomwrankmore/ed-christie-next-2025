"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
// import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { TiArrowBack } from "react-icons/ti";
interface AnimatedButtonProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  primaryColor?: string;
  secondaryColor?: string;
}

export function AnimatedButton({
  children,
  href,
  className = "",
  primaryColor = "#111", // default green
  secondaryColor = "#444", // default hover green
  // should do with variables really.
}: AnimatedButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={href} passHref className={`${className} cursor-pointer`}>
      <motion.span
        className={`relative overflow-hidden px-6 py-3 text-white hover:text-white font-medium font-tiemposFine bg-phoebe-green inline-block pr-10`}
        style={{ backgroundColor: primaryColor }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <motion.div
          className="absolute inset-0 bg-phoebe-darkerGreen"
          style={{ backgroundColor: secondaryColor }}
          initial={{ x: "100%" }}
          animate={{ x: isHovered ? 0 : "100%" }}
          transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
        />
        <span className="relative z-10">{children}</span>
        <TiArrowBack className="h-6 w-6 absolute right-2 top-1/2 -translate-y-1/2" />
      </motion.span>
    </Link>
  );
}
