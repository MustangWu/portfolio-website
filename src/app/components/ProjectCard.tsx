"use client";
import { Card } from "@douyinfe/semi-ui";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

type infoParam = {
  id: number;
  title: string;
  description: string;
  coverAlt: string;
  coverUrl: string;
  cardContent: string;
  link: string;
};

export default function ProjectCard2({ cardInfo }: { cardInfo: infoParam }) {
  const { Meta } = Card;
  
  return (
    <Link href={cardInfo.link || `/projects/${cardInfo.id}`} target="_blank" rel="noopener noreferrer">
      <motion.div
        whileHover={{
          scale: 1.05,
        }}
      >
        <Card
          style={{ maxWidth: 300 }}
          className="dark:bg-gray-800 dark:border-gray-700"
          cover={
            <motion.div
              whileHover={{
                y: -5,
              }}
            >
              <div className="relative w-full h-40">
                <Image
                  alt={cardInfo.coverAlt}
                  src={cardInfo.coverUrl}
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
            </motion.div>
          }
        >
          <Meta 
            title={<div className="dark:text-white">{cardInfo.title}</div>} 
            description={<div className="dark:text-gray-300">{cardInfo.description}</div>} 
          />
        </Card>
      </motion.div>
    </Link>
  );
}
