import clsx from "clsx";
import Image from "next/image";
import React from "react";

interface StatCardProps {
  type: "appointments" | "pending" | "cancelled";
  icon: string;
  label: string;
  count: number;
}

const StatCard = ({ count = 0, type, label, icon }: StatCardProps) => {
  return (
    <div
      className={clsx("stat-card", {
        "bg-appointments": type === "appointments",
        "bg-pending": type === "pending",
        "bg-cancelled": type === "cancelled",
      })}
    >
      <div className="flex items-center gap-4">
        <Image
          alt={label}
          className="size-8 w-fit"
          height={32}
          width={32}
          src={icon}
        />
        <h2 className="text-32-bold text-white">{count}</h2>
        <p className="text-14-regular">{label}</p>
      </div>
    </div>
  );
};

export default StatCard;
