"use client";
import Image from "next/image";
import React, { useRef, useEffect } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../ui/animated-modal";
import { FloatingDock } from "../ui/floating-dock";
import Link from "next/link";
import { ChevronRight, ChevronLeft } from "lucide-react";

import SmoothScroll from "../smooth-scroll";
import experiences from "@/data/experience";
import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const ExperienceSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      // If the scroll is mainly vertical
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        const maxScrollLeft = el.scrollWidth - el.clientWidth;
        
        // Scrolling down
        if (e.deltaY > 0) {
          if (el.scrollLeft < maxScrollLeft - 1) { // Not at the end yet
            e.preventDefault();
            el.scrollLeft += e.deltaY;
          }
        } 
        // Scrolling up
        else {
          if (el.scrollLeft > 0) { // Not at the beginning yet
            e.preventDefault();
            el.scrollLeft += e.deltaY;
          }
        }
      }
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <section id="experience" className="max-w-7xl mx-auto py-16 md:py-32">
      <Link href={"#experience"}>
        <h2
          className={cn(
            "bg-clip-text text-4xl text-center text-transparent md:text-7xl mb-16",
            "bg-gradient-to-b from-black/80 to-black/50",
            "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50"
          )}
        >
          Experience
        </h2>
      </Link>
      
      <div className="relative">
        {/* Slider Controls */}
        <div className="absolute right-4 md:right-8 -top-16 md:-top-20 flex gap-2 z-10 hidden md:flex">
          <button 
            onClick={scrollLeft}
            className="p-3 rounded-full bg-white/10 dark:bg-black/50 border border-neutral-200 dark:border-white/10 hover:bg-neutral-100 dark:hover:bg-white/20 transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-black dark:text-white" />
          </button>
          <button 
            onClick={scrollRight}
            className="p-3 rounded-full bg-white/10 dark:bg-black/50 border border-neutral-200 dark:border-white/10 hover:bg-neutral-100 dark:hover:bg-white/20 transition-all"
          >
            <ChevronRight className="w-6 h-6 text-black dark:text-white" />
          </button>
        </div>

        {/* Slider Container */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 md:gap-8 pb-12 px-4 md:px-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] justify-start"
        >
          {experiences.map((project, index) => (
            <div key={project.src} className="snap-center shrink-0 w-[90vw] md:w-[450px]">
              <Modall project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Modall = ({ project }: { project: Project }) => {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <Modal>
        <ModalTrigger className="bg-transparent flex justify-center group/modal-btn w-full">
          <div
            className="relative w-full h-auto rounded-2xl overflow-hidden shadow-xl border border-neutral-200 dark:border-white/10"
            style={{ aspectRatio: "16/10" }}
          >
            <Image
              className="absolute w-full h-full top-0 left-0 object-cover hover:scale-[1.05] transition-transform duration-500"
              src={project.src}
              alt={project.title}
              width={600}
              height={400}
            />
            <div className="absolute w-full h-2/3 bottom-0 left-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none">
              <div className="flex flex-col h-full items-start justify-end p-6 md:p-8">
                <div className="text-xl md:text-2xl font-bold text-left text-white mb-2 shadow-sm">{project.title}</div>
                <div className="text-xs font-semibold bg-white/20 text-white border border-white/30 rounded-full w-fit px-3 py-1">
                  {project.category}
                </div>
              </div>
            </div>
          </div>
        </ModalTrigger>
        <ModalBody className="md:max-w-4xl md:max-h-[80%] overflow-auto">
          <SmoothScroll isInsideModal={true}>
            <ModalContent>
              <ProjectContents project={project} />
            </ModalContent>
          </SmoothScroll>
          <ModalFooter className="gap-4">
            <button className="px-4 py-2 bg-gray-200 text-black dark:bg-neutral-800 dark:border-neutral-700 dark:text-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-300 dark:hover:bg-neutral-700 transition">
              Cancel
            </button>
            {project.live && (
              <Link href={project.live} target="_blank">
                <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-6 py-2 rounded-lg border border-black dark:border-white font-medium hover:bg-opacity-80 transition">
                  Visit
                </button>
              </Link>
            )}
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
};

const ProjectContents = ({ project }: { project: Project }) => {
  return (
    <>
      <h4 className="text-2xl md:text-3xl text-neutral-800 dark:text-neutral-100 font-bold text-center mb-10">
        {project.title}
      </h4>
      <div className="flex flex-col md:flex-row md:justify-evenly max-w-screen overflow-hidden md:overflow-visible">
        {project.skills.frontend?.length > 0 && (
          <div className="flex flex-row md:flex-col-reverse justify-center items-center gap-3 text-3xl mb-8">
            <p className="text-sm font-medium mt-2 text-neutral-500 uppercase tracking-widest">
              Frontend
            </p>
            <FloatingDock items={project.skills.frontend} />
          </div>
        )}
        {project.skills.backend?.length > 0 && (
          <div className="flex flex-row md:flex-col-reverse justify-center items-center gap-3 text-3xl mb-8">
            <p className="text-sm font-medium mt-2 text-neutral-500 uppercase tracking-widest">
              Backend
            </p>
            <FloatingDock items={project.skills.backend} />
          </div>
        )}
      </div>
      <div className="mt-8 prose dark:prose-invert max-w-none text-neutral-700 dark:text-neutral-300">
        {project.content}
      </div>
    </>
  );
};

export default ExperienceSection;
