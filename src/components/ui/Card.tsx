"use client";

import React from "react";
import clsx from "clsx";
import Image from "next/image";
import { BoardMember } from "@/lib/governance";
import { useState } from "react";

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "rounded-2xl border border-neutral-200 bg-white shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
}



export function BoardMemberCardOld({
  member,
  compact = false,
}: {
  member: BoardMember;
  compact?: boolean;
}) {
  return (
    <div className="flex items-start gap-4">
      <Image
        src={member.photo}
        alt={member.name}
        width={compact ? 64 : 80}
        height={compact ? 64 : 80}
        className="rounded-xl object-cover"
      />

      <div>
        <p className="font-semibold text-neutral-900">
          {member.name}
        </p>
        <p className="text-sm text-neutral-600">
          {member.title}
        </p>

        {!compact && member.bio && (
          <p className="mt-2 text-sm text-neutral-600 leading-relaxed max-w-xl">
            {member.bio}
          </p>
        )}
      </div>
    </div>
  );
}

export default function BoardMemberCard({
  member,
  variant = "compact",
}: {
  member: BoardMember;
  variant?: "lead" | "compact" | "grid";
}) {
  const [open, setOpen] = useState(false);

  const size =
    variant === "lead" ? 96 : variant === "grid" ? 56 : 64;

  return (
    <div className="flex items-start gap-4">
      <Image
        src={member.photo}
        alt={member.name}
        width={size}
        height={size}
        className="rounded-xl object-cover shrink-0"
      />

      <div className="min-w-0">
        <p className="font-semibold text-neutral-900 truncate">
          {member.name}
        </p>
        <p className="text-sm text-neutral-600">
          {member.title}
        </p>

        {/* Bio only on demand */}
        {member.bio && variant !== "grid" && (
          <>
            <button
              onClick={() => setOpen(!open)}
              className="mt-2 text-sm font-medium text-neutral-900 underline underline-offset-4"
            >
              {open ? "Hide bio" : "Read bio"}
            </button>

            {open && (
              <p className="mt-3 text-sm text-neutral-600 leading-relaxed max-w-xl">
                {member.bio}
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}
