import React from 'react'

const Skills = () => {
  return (
    <div>
      <div className='content-box flex-col'>
        <div className="heading-section">
          <div className='heading-box' data-aos='fade-up'>
            <span>This is my</span>
            <h1>Skills</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
        </div>
        <div className=''>
          <div className='w-1/2'>
            <div className='skill-box py-4' data-aos='fade-up'>
              <table className='bg-blue-100' >
                <tbody>
                  <tr>
                    <th className='w-1/2 pr-2 text-left align-top bg-red-100'>
                      <h4 className='text-lg leading-relaxed'>Programming Language</h4>
                    </th>
                    <td>
                      <div className='flex flex-wrap pl-2'>
                        <span>Java,</span>
                        <span>Java,</span>
                        <span>Java,</span>
                        <span>Java,</span>
                        <span>Java,</span>
                        <span>Java,</span>
                        <span>Java,</span>
                        <span>Java,</span>
                        <span>Java,</span>
                        <span>Java,</span>
                        <span>Java,</span>
                        <span>Java,</span>
                        <span>Java,</span>
                        <span>Java,</span>
                        <span>Java,</span>
                        <span>Java,</span>
                        <span>Dart</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th className='w-1/2 pr-2 text-left align-top'>
                      <h4 className='text-lg leading-relaxed'>Framework</h4>
                    </th>
                    <td>
                      <div className='flex flex-wrap pl-2'>
                        <span>Spring Boot,</span>
                        <span>Flutter</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className='w-1/2'>
            <div className='skill-chart py-4' data-aos='fade-up' data-aos-delay='100'>
              <ul className='skill-chat-list list-none'>
                <li>
                  <div className='chart-header flex justify-between'>
                    <span className='skill-title'>Mobile Developer</span>
                    <span className='percentage'>75%</span>
                  </div>
                  <div className="chart-border">
                    <div className='chart-percentage ninety-percent'></div>
                  </div>
                </li>
                <li>
                  <div className='chart-header flex justify-between'>
                    <span className='skill-title'>Backend Developer</span>
                    <span className='percentage'>75%</span>
                  </div>
                  <div className="chart-border">
                    <div className='chart-percentage ninety-percent'></div>
                  </div>
                </li>
                <li>
                  <div className='chart-header flex justify-between'>
                    <span className='skill-title'>Web Developer</span>
                    <span className='percentage'>75%</span>
                  </div>
                  <div className="chart-border">
                    <div className='chart-percentage ninety-percent'></div>
                  </div>
                </li>
                <li>
                  <div className='chart-header flex justify-between'>
                    <span className='skill-title'>Illustrator</span>
                    <span className='percentage'>75%</span>
                  </div>
                  <div className="chart-border">
                    <div className='chart-percentage ninety-percent'></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills