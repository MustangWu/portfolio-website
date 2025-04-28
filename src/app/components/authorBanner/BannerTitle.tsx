"use client";
import React from "react";
import clsx from "clsx";
import styles from "@/app/styles/Home.module.css";
import {
  noto_sans_sc,
  playwrite_us_modern,
  varela_round,
} from "@/app/fonts/font";
import { ReactTyped } from "react-typed";
import constantUtils from "@/app/utils/constantUtils";

export default function BannerTitle() {
  return (
    <div
      style={{
        transition: "all 0.5s",
        color: "#111827",
      }}
      className={clsx(
        styles.bannerInfo,
        "flex flex-col justify-center flex-1 p-8"
      )}
    >
      <div 
        className={clsx(varela_round.className, styles.title)}
        style={{ color: "#111827" }}
      >
        <ReactTyped
          strings={[constantUtils.authorBanner.bannerTitle]}
          fadeOut={true}
          startWhenVisible={true}
          shuffle={true}
          autoInsertCss={true}
          onComplete={(self) => {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            self.cursor && self.cursor.remove();
          }}
        />
      </div>
      <div 
        className={clsx(playwrite_us_modern.className, styles.subtitle)}
        style={{ color: "#111827" }}
      >
        <ReactTyped
          strings={[constantUtils.authorBanner.bannerSubtitle]}
          typeSpeed={20}
          startDelay={1000}
          fadeOut={true}
          startWhenVisible={true}
          shuffle={true}
          autoInsertCss={true}
          onComplete={(self) => {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            self.cursor && self.cursor.remove();
          }}
        />
      </div>
    </div>
  );
}
