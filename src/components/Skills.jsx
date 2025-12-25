import React from 'react'
import { skills, skillLevels } from '../data/skills'

const Skills = () => {
  return (
    <div className='skills'>
      <div className='flex flex-col'>
        <div className="heading-section">
          <div className='heading-box' data-aos='fade-up'>
            <span>This is my</span>
            <h1>Skills</h1>
            <p>Here are some of skills I have.</p>
          </div>
        </div>
        <div className='content-box'>
          <div>
            <table className='skill-box my-4' data-aos='fade-up'>
              <tbody>
                {skills.map((item, i) => (
                  <tr key={i}>
                    <th><h4 data-aos='fade-in' data-aos-delay={i * 100}>{item.title}</h4></th>
                    <td>
                      <div className='skill-items'>
                        {item.values.map((sub, j) => (
                          <span key={j} data-aos='fade-left' data-aos-delay={j * 100}>{sub.valueName},</span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <div className='skill-chart' data-aos='fade-up' data-aos-delay='100'>
              <ul className='list-none'>
                {skillLevels.map((item, i) => (
                  <li key={i} data-aos='fade-up' data-aos-delay={i * 100}>
                    <div className='flex justify-between'>
                      <span>{item.title}</span>
                      <span>{item.value}%</span>
                    </div>
                    <div className="chart-border">
                      <div className={`chart-percentage ${item.valueText}`}></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills