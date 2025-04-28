"use client";
import React from "react";
import { Timeline as SemiTimeline } from "@douyinfe/semi-ui";
import constants from "../utils/constantUtils";

export default function Timeline({ isShowMore }: { isShowMore: boolean }) {
  return (
    <div
      className="relative isolate px-6 pt-14 lg:px-8"
      style={{ paddingTop: "2rem" }}
    >
      <SemiTimeline mode="alternate" border-color="red">
        {constants.timelineItems.map((elem, index) => (
          <SemiTimeline.Item
            key={index}
            time={elem.date}
            extra={elem.title}
            type={getStatus(elem.type)}
          >
            <div className="font-medium">{elem.content}</div>
            {elem.subtitle && (
              <div className="text-gray-500 text-sm mt-1 italic">{elem.subtitle}</div>
            )}
          </SemiTimeline.Item>
        ))}
      </SemiTimeline>
      {isShowMore && (
        <div className="flex justify-center">
          <a
            href={constants.navigation[3]?.href || "/about"}
            className="text-base font-semibold text-indigo-500"
          >
            Know more about me <span aria-hidden="true">&nbsp;&nbsp;→</span>
          </a>
        </div>
      )}
    </div>
  );
}

function getStatus(status: string): "error" | "default" | "ongoing" | "success" | "warning" | undefined {
  switch (status) {
    case "error":
    case "default":
    case "ongoing":
    case "success":
    case "warning":
      return status;
    default:
      return "default"; // 设置默认值
  }
}
