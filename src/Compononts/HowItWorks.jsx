import React from 'react';
import './Css/HowItWorks.css';
import step2 from "../assets/icons8-clock-50.png"
import step3 from "../assets/icons8-home-32.png"
import step1 from "../assets/icons8-search-50 (1).png"

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      img: step1,
      title: "Choose Your Service",
      description: 'Select trusted service near you',
      bgColor: '#8B5CF6',
      shadow: 'rgba(138, 92, 246, 0.15)'
    },
    {
      id: 2,
      img: step2,
      title: 'Pick Date & Time',
      description: 'Select convenient available time slot',
      bgColor: '#06B6D4',
      shadow: 'rgba(6, 182, 212, 0.15)'
    },
    {
      id: 3,
      img: step3,
      title: "Relax While We Work",
      description: 'Professional completes job at home',
      bgColor: '#EC4899',
      shadow: 'rgba(236, 72, 153,0.15)'
    }
  ];

  return (
    <section className="how-it-works">
      <div className="how-it-works-container">
        <h1>How We Work</h1>
        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> sit amet consectetur adipisicing elit. Placeat quibusdam, consequatur atque quos</h5>
        <div className="steps">
          <div className="vr-line"></div>
          {
            steps.map((step, index) => {
              return <>
                <div className="step">
                  <h5 className='step-count'> 0{index + 1}</h5>
                  {index != 0 && <div style={{ backgroundColor: steps[index].bgColor }} className="step-dot-before"></div>}
                  <div className='main'>
                    <div style={{ backgroundColor: steps[index].bgColor, boxShadow: `0px 15px 15px ${steps[index].shadow}` }} className="step-icon"><img src={steps[index].img} alt="" /></div>
                    <div className='main-content'>
                      <div className="step-title">{steps[index].title}</div>
                      <div className="step-description">{steps[index].description}</div>
                    </div>
                  </div>
                  {
                    index != steps.length - 1 && <div className='right'>
                      <div style={{ backgroundColor: steps[0].bgColor }} className="step-dot"></div>
                      <div style={{ borderColor: steps[0].bgColor }} className="step-connector"></div>
                    </div>
                  }
                </div>
              </>
            })
          }
        </div>

        {/* <div className="steps-wrapper">
          {steps.map((step, index) => (
            <>
              <div className="step-item">
                <div
                  className="step-icon-container"
                  style={{ backgroundColor: step.bgColor }}
                >
                  <span className="step-icon">{step.icon}</span>
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="step-connector">
                  <div className="connector-dot"></div>
                  <div className="connector-line"></div>
                   <div className="connector-dot"></div>
                </div>
              )}
            </>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default HowItWorks;