import React from 'react';
import "../app/styles/skills.css";

const Skills = () => {
  return (
    <div id='skills' className='skills-container'>
       <div className='skills-grid'>
     <div data-aos="zoom-in-up" className='skills-left'>
     <h2  className='skills-heading'>Technologies i work with</h2>
      <p className='skills-text'>I’m a Full Stack Developer skilled in building both frontend and backend solutions. I work with technologies like HTML, CSS, JavaScript, TypeScript, and Node.js to create responsive, user-friendly web applications. I enjoy solving complex problems and turning ideas into efficient, functional products. With a passion for clean code and continuous learning, I stay updated on new technologies to deliver high-quality projects.</p>
     </div>
    <div className='skills-right'>
 <div className='skills-icons-grid'>
       <div className='skills-space'>
      <h2 data-aos="zoom-in-up">Typescript</h2>
      <h2 data-aos="zoom-in-up">React.js</h2>
       <h2 data-aos="zoom-in-up">Next.js</h2>
       </div>  

  <div className='skills-space'>
   <h2 data-aos="zoom-in-up">HTML</h2>
   <h2 data-aos="zoom-in-up">CSS</h2>
   <h2 data-aos="zoom-in-up">Node.js</h2>
   </div>  
               </div> 
                    
            </div>
        </div>
    </div>
  )
};

export default Skills;