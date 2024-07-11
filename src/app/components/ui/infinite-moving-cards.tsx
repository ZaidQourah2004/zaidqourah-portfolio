// components/ui/infinite-moving-cards.js

"use client";

import React, { useEffect, useState } from "react";
import Image from 'next/image';
import { FaPython, FaJava, FaJs, FaReact, FaDatabase, FaNodeJs, FaGitAlt, FaLeaf } from 'react-icons/fa';
import { SiCplusplus, SiMysql, SiMongodb } from 'react-icons/si';
import { cn } from "@/utils/cn";

const skillIcons = {
    Python: <FaPython className="text-6xl text-blue-500" />,
    Java: <FaJava className="text-6xl text-red-600" />,
    "C++": <SiCplusplus className="text-6xl text-blue-700" />,
    JavaScript: <FaJs className="text-6xl text-yellow-500" />,
    SQL: <SiMysql className="text-6xl text-blue-600" />,
    NoSQL: <SiMongodb className="text-6xl text-green-600" />,
    React: <FaReact className="text-6xl text-blue-500" />,
    Spring: <FaLeaf className="text-6xl text-green-500" />,
    Git: <FaGitAlt className="text-6xl text-orange-500" />,
};

export const InfiniteMovingCards = ({
                                        items,
                                        direction = "left",
                                        speed = "fast",
                                        pauseOnHover = true,
                                        className,
                                    }) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);

    useEffect(() => {
        addAnimation();
    }, []);

    const [start, setStart] = useState(false);

    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }

    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards"
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse"
                );
            }
        }
    };

    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    };

    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] mx-auto",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
                    start && "animate-scroll",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {items.map((item, idx) => (
                    <li
                        className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px] bg-gray-800"
                        key={item.name}
                    >
                        <div className="flex flex-col items-center">
                            {skillIcons[item.name] || <Image src={item.image} alt={item.name} width={64} height={64} className="mb-4" />}
                            <blockquote>
                                <span className="relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
                                    {item.name}
                                </span>
                            </blockquote>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
