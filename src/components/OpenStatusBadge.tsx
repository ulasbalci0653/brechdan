"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

interface OpenStatusProps {
  className?: string;
}

export default function OpenStatusBadge({ className = "" }: OpenStatusProps) {
  const [status, setStatus] = useState<{
    isOpen: boolean;
    text: string;
  }>({
    isOpen: true,
    text: "AÇIK • Kapanış 21:30",
  });

  useEffect(() => {
    const updateStatus = () => {
      // Brechdan hours: 09:00 - 21:30 every day
      const now = new Date();
      // Use Turkey timezone offset (UTC+3)
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const turkeyTime = new Date(utc + 3600000 * 3);

      const hours = turkeyTime.getHours();
      const minutes = turkeyTime.getMinutes();
      const totalMinutes = hours * 60 + minutes;

      const openMinutes = 9 * 60; // 09:00
      const closeMinutes = 21 * 60 + 30; // 21:30

      if (totalMinutes >= openMinutes && totalMinutes < closeMinutes) {
        setStatus({
          isOpen: true,
          text: "AÇIK • Kapanış 21:30",
        });
      } else {
        setStatus({
          isOpen: false,
          text: "KAPALI • Açılış 09:00",
        });
      }
    };

    updateStatus();
    const timer = setInterval(updateStatus, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all shadow-md ${
        status.isOpen
          ? "bg-[#143425]/90 text-[#6EE7B7] border border-[#23583E]/80 backdrop-blur-md"
          : "bg-[#2A231E]/90 text-[#FCA5A5] border border-[#5C382A]/80 backdrop-blur-md"
      } ${className}`}
    >
      <Clock className={`w-3.5 h-3.5 shrink-0 ${status.isOpen ? "text-[#6EE7B7]" : "text-[#FCA5A5]"}`} />
      <span className="font-bold text-[11px] sm:text-xs tracking-wider">{status.text}</span>
    </div>
  );
}
