import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const Skills = () => {
  let [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("/skills.json")
      .then(res => res.json())
      .then(data => setSkills(data));
  }, []);

  let expert = skills.slice(0, 7);
  let comfortable = skills.slice(7);
  console.log(expert);
  console.log(comfortable);

  return (
    // <div className='container mx-auto pt-20 ' id='skills'>

    //     <h1 className='text-3xl text-center font-semibold my-10'>Expert At</h1>
    //     <Marquee>
    //         {
    //             expert.map(item => <div className='mx-10'>
    //                 <div className="card   ">
    //                     <figure className='w-20'><img src={item.img} alt="Shoes" /></figure>
    //                     <div className="card-body">
    //                         <h2 className="text-center text-xl font-semibold ">{item.name}</h2>

    //                     </div>
    //                 </div>
    //             </div>)
    //         }
    //     </Marquee>
    //     <h1 className='text-3xl text-center font-semibold my-10'>Comfortable At</h1>
    //     <Marquee  speed={30}>
    //         {
    //             comfortable.map(item => <div className='mx-10'>
    //                 <div className="card   ">
    //                     <figure className='w-20'><img src={item.img} alt="Shoes" /></figure>
    //                     <div className="card-body">
    //                         <h2 className="text-center text-xl font-semibold ">{item.name}</h2>

    //                     </div>
    //                 </div>
    //             </div>)
    //         }
    //     </Marquee>

    // </div>
    <div className="h-[20vh] bg-black w-full p-2 flex justify-center items-center">
      <Marquee gradient={false} speed={40}>
        {skills.map(item => (
          <div className="mx-10">
            <div className="flex  justify-center items-center gap-10  ">
              <figure className="w-20">
                <img className="w-full h-auto" src={item.img} alt="icon" />
              </figure>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Skills;
