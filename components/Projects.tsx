"use client";
import React from "react";
import { Project } from "@/typings";
import { urlFor } from "@/sanity";
import Link from "next/link";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {

  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 ">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex snap-x snap-mandatory z-20 overflow-y-hidden scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin">
        {projects.map((project, i) => (
          <div key={project._id} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <div
              style={{ backgroundImage: `url(${urlFor(project.image).url()})` }}
              className="shadow-lg shadow-[#040c16] group rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
            >
              {/* Hover effect for project images */}
              <div className="opacity-0 group-hover:opacity-100">
                <div className="pt-8 text-center">
                  <Link
                    href={project.linkToBuild}
                    target="_blank"
                  >
                    <button className="heroButton mr-10">Code</button>
                  </Link>
                  <a href={project.linkToDemo} target="_blank">
                    <button className="heroButton">Demo</button>
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                {project.title}
              </h4>

              <div className="flex items-center space-x-2 justify-center">
                {project?.technologies.map((technology) => (
                  <img
                    className="h-10 w-10"
                    key={technology._id}
                    src={urlFor(technology.image).url()}
                    alt=""
                  />
                ))}
              </div>

              <p className="text-lg text-center md:text-left">
                {project.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </div>
  );
}

export default Projects;
