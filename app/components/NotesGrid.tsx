import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-[1440px] py-10 mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          id={item.id}
          title={item.title}
          description={item.description}
          header={item.header}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div></div>
);

let nextId:number = 1;
const items = [
  {
    id: nextId++,
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.Explore the birth of groundbreaking ideas and inventionsExplore the birth of groundbreaking ideas and inventionsExplore the birth of groundbreaking ideas and inventionsExplore the birth of groundbreaking ideas and inventions",
    header: <Skeleton />,
  },
  {
    id: nextId++,
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
  },
  {
    id: nextId++,
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
  },
  {
    id: nextId++,
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
  },
];
