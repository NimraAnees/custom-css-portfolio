// import React from 'react';
// import "../app/styles/card.css";

//  interface propsType {
//    title : string;
//     desc : string;
//      tags : string[];
//  }
//  const Card: React.FC<propsType>= ({title, desc, tags}) => {
//   return (
 
//     <div className={`card ${window.innerWidth >= 640 ? 'card-sm' : ''}`} data-aos="zoom-in-up">  
//       <div className='card-content'> 
//           <div className='card-title'>{title}</div>
//              <div>{desc}</div>
//                <div>
//                 {tags.map((el) => (
//                  <div className='card-tags' key={el}>
//                  {el}
//              </div>))}

//            </div>
//         </div>
//      </div>
//  );
//  };

// export default Card;


import React from 'react';
import "../app/styles/card.css";

interface PropsType {
 title: string;
 desc: string;
 tags: string[];
}

const Card: React.FC<PropsType> = ({ title, desc, tags }) => {
 const isSmallScreen = typeof window !== "undefined" && window.innerWidth >= 640;

 return (
 <div className={`card ${isSmallScreen ? "card-sm" : ""}`} data-aos="zoom-in-up">
 <div className="card-content">
 <div className="card-title">{title}</div>
 <div>{desc}</div>
 <div>
 {tags.map((el) => (
 <div className="card-tags" key={el}>
 {el}
 </div>
 ))}
 </div>
 </div>
 </div>
 );
};

export default Card;



