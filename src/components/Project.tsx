
import React from 'react';
import Heading from './Heading';
import Card from './Card';
import "../app/styles/project.css";

const data = [
    {
        id : 0,
        title :'Countdown Timer',
        desc : 'I developed a countdown timer using Next.js, React, and Tailwind CSS, combining modern tools to create an efficient, stylish, and responsive timer. ',
        img : '',
        tags : ["Next.js", "Tailwind CSS", "React"],
    },
    {
        id : 1,
        title : 'Weather Widget',
        desc : "This app is developed using Next.js, React, Tailwind CSS, a weather API, and ShadCN UI. This app dynamically retrieves and displays real-time weather data, leveraging Next.js.",
        img : '',
        tags : ["Next.js", "Tailwind CSS", "React"],
    },
    {
        id : 2,
        title : 'Static Resume',
        desc : 'A Typescript based resume built with HTML and CSS, allowing user to showcase my skills dynamically.This combination results in a professional, well-organized resume.',
        img : '',
        tags : ["HTML", "CSS", "Typescript"],
    },
    {
      id : 3,
      title: "Personal Portfolio Website",
      desc:
        "I crafted a personal portfolio using React, Framer Motion, and Tailwind CSS, combining animation, functionality, and style for an immersive user experience. This blend of technologies results in a visually appealing and engaging showcase of my skills and projects.",
      tags: ["Tailwind CSS", "React", "Framer Motion"],
    },
    {
      id : 4,
      title: "Editable Resume Builder",
      desc:
        "I developed an Editable Resume Builder, a tool designed to help users create, customize, and edit professional resumes effortlessly. Built using HTML, CSS, and TypeScript, this project brings together functionality, style, and ease of use. Users can easily update sections. ",
      tags: ["Tailwind CSS", "React", "Framer Motion"],
    },

]

const Project = () => {
  return (
    <div id='projects' className='projects-container'>
        <Heading title='My Projects'/>
      <div className='projects-grid projects-grid-xl projects-grid-md-2 projects-grid-lg-3 projects-center'>
          {data.map((el) => (<Card
          key={el.id}
          title={el.title}
          desc={el.desc}
          tags={el.tags}
          />))}
      </div>
    </div>
  );
};

export default Project;