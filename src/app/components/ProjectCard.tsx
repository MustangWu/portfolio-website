"use client";
import { Card } from "@douyinfe/semi-ui";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import constants from "../utils/constantUtils";
import { useState } from "react";

type infoParam = {
  id: number;
  title: string;
  description: string;
  coverAlt: string;
  coverUrl: string;
  cardContent: string;
  link: string;
  highlights?: string[];
  techStack?: string[];
};

export default function ProjectCard2({ cardInfo }: { cardInfo: infoParam }) {
  const { Meta } = Card;
  const [showAll, setShowAll] = useState(false);

  // 技术栈logo映射
  const logoMap = Object.fromEntries(constants.logoList.map(item => [item.alt.toLowerCase(), item.src]));

  return (
    <Link href={cardInfo.link || `/projects/${cardInfo.id}`} target="_blank" rel="noopener noreferrer">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className={`rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 mb-8 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex flex-col justify-between relative`}
        style={{ maxWidth: 340, minHeight: 480 }}
      >
        <Card
          style={{ boxShadow: "none", background: "transparent" }}
          className="flex-1 flex flex-col justify-between"
          cover={
            <motion.div whileHover={{ y: -5 }}>
              <div className="relative w-full h-40 rounded-t-xl overflow-hidden">
                <Image
                  alt={cardInfo.coverAlt}
                  src={cardInfo.coverUrl}
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                  sizes="(max-width: 768px) 100vw, 340px"
                />
              </div>
            </motion.div>
          }
        >
          <Meta
            title={<div className="dark:text-white text-lg font-bold text-left mt-2">{cardInfo.title}</div>}
            description={<div className="dark:text-gray-300 text-gray-800 text-left text-base mt-1">{cardInfo.description}</div>}
          />
          {/* Highlights 展示 */}
          {cardInfo.highlights && cardInfo.highlights.length > 0 && (
            <div className="mt-3 text-left">
              <div className="font-semibold text-gray-700 dark:text-gray-200 text-sm mb-1">Key Highlights:</div>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 text-sm pl-2">
                {cardInfo.highlights.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}
          {/* 技术栈标签+logo */}
          {cardInfo.techStack && cardInfo.techStack.length > 0 && (
            <div className="mt-3 text-left mb-2">
              <div className="font-semibold text-gray-700 dark:text-gray-200 text-sm mb-1">Tech Stack:</div>
              <div className="flex flex-wrap gap-2">
                {cardInfo.techStack.map((tech, idx) => {
                  // 取主名做小写匹配
                  const key = tech.split(" ")[0].toLowerCase();
                  const logo = logoMap[key];
                  return (
                    <span key={idx} className="flex items-center bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-100 px-2 py-0.5 rounded text-xs font-medium gap-1">
                      {logo && (
                        <Image src={logo} alt={tech} width={16} height={16} className="inline-block mr-1" />
                      )}
                      {tech}
                    </span>
                  );
                })}
              </div>
            </div>
          )}
        </Card>
      </motion.div>
    </Link>
  );
}
