import React from 'react'
import "./branches.css";

const Branches = () => {
    const branchesData = [
        {
          id: 1,
          name: "Computer science and Engineering",
         
          image:
            "image/cse.png",
        },
        {
          id: 2,
          name: "Artificial Intelligence and Machine Learning Engineering",
          
          image:
            "image/aie.png",
        },
        {
          id: 3,
          name: "Electronics and Communication Engineering",
          
          image:
            "image/ece.png",
        },
        {
          id: 4,
          name: "Electrical and electronics Engineering ",
          
          image:
            "image/eee.png",
        },
      ];
  return (
    <section className='branches'>
        <h2>Our Branches</h2>
        <div className='branches-cards'>
            {
                branchesData.map((e)=>(
                    <div className='branche-card' key={e.id}>
                        <div className='branch-image'>
                            <img src={e.image} alt=''/>
                        </div>
                        <p className="message">{e.message}</p>
                        <div className="info">
                        <p className="name">{e.name}</p>
                        <p className="position">{e.position}</p>
                        </div>
                    </div>
                ))

            }

        </div>
    </section>
  );
};

export default Branches