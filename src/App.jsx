import React from "react"
import icon_star from "./assets/images/icon-star.svg"
import icon_plus from "./assets/images/icon-plus.svg"
import icon_minus from "./assets/images/icon-minus.svg"

import { useState } from "react"

function App() {

    const [isMenuOpen, setMenuOpen] = useState(Array(3).fill(false));
    const toggleMenu = (index) => {
      const updatedStates = [...isMenuOpen];
      updatedStates[index] = !updatedStates[index];
      setMenuOpen(updatedStates);
    };

  return (
    <>
      <div className="lg:w-2/6 w-[355px] mx-auto mt-[10rem] flex items-center">
        <main className="bg-white w-full h-auto p-8 rounded-xl">
         
          <head className="flex items-center">
            <img src={icon_star} className="pr-5 py-5" />
            <h1 className="text-5xl">FAQs</h1>
          </head>
          
          {/* accordian section */}
          <section>

            <article>
              <div className="flex justify-between" onClick={() => toggleMenu(0)}>
                <h4 className="py-5 hover:text-[#ad28eb] active:text-[#2f1533]">What is Frontend Mentor, and how will it help me?</h4>
                {isMenuOpen[0] ? <img src={icon_minus}/> : <img src={icon_plus} className="animate-pulse"/>}
              </div>
              {isMenuOpen[0] && (
                <p className="pb-5 animate-pulse">
                  Frontend Mentor offers realistic coding challenges to help developers improve their 
                  frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
                  all levels and ideal for portfolio building.
                </p>
              )}
              <hr />
            </article>

            <article>
              <div className="flex justify-between" onClick={() => toggleMenu(1)}>
                <h4 className="py-5 hover:text-[#ad28eb] active:text-[#2f1533]">Is Frontend Mentor free?</h4>
                {isMenuOpen[1] ? <img src={icon_minus}/> : <img src={icon_plus} className="animate-pulse"/>}
              </div>
              {isMenuOpen[1] && (
                <p className="pb-5 animate-pulse">
                  Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
                  option providing access to a range of projects suitable for all skill levels.
                </p>
              )}
              <hr />
            </article>

            <article>
              <div className="flex justify-between" onClick={() => toggleMenu(2)}>
                <h4 className="py-5 hover:text-[#ad28eb] active:text-[#2f1533]">What is Frontend Mentor, and how will it help me?</h4>
                {isMenuOpen[2] ? <img src={icon_minus}/> : <img src={icon_plus} className="animate-pulse"/>}
              </div>
              {isMenuOpen[2] && (
                <p className="pb-5 animate-pulse">
                  Frontend Mentor offers realistic coding challenges to help developers improve their 
                  frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
                  all levels and ideal for portfolio building.
              </p>
              )}
              <hr />
            </article>

            <article>
              <div className="flex justify-between" onClick={() => toggleMenu(3)}>
                <h4 className="py-5 hover:text-[#ad28eb] active:text-[#2f1533]">What is Frontend Mentor, and how will it help me?</h4>
                {isMenuOpen[3] ? <img src={icon_minus}/> : <img src={icon_plus} className="animate-pulse"/>}
              </div>
              {isMenuOpen[3] && (
                <p className="pb-5 animate-pulse">
                  Frontend Mentor offers realistic coding challenges to help developers improve their 
                  frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
                  all levels and ideal for portfolio building.
              </p>
              )}
            </article>

          </section>

        </main>
      </div>
    </>
  )
}

export default App

{/* FAQs






Can I use Frontend Mentor projects in my portfolio?

Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
way to showcase your skills to potential employers!

How can I get help if I'm stuck on a Frontend Mentor challenge?

The best place to get help is inside Frontend Mentor's Discord community. There's a help 
channel where you can ask questions and seek support from other community members. */}
