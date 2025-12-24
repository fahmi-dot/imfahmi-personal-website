import React from 'react'

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
                <tr>
                  <th><h4>Programming Languages</h4></th>
                  <td>
                    <div className='skill-items'>
                      <span>Java,</span>
                      <span>Dart,</span>
                      <span>JavaScript,</span>
                      <span>Kotlin,</span>
                      <span>Golang</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th><h4>Frameworks</h4></th>
                  <td>
                    <div className='skill-items'>
                      <span>Spring Boot,</span>
                      <span>Flutter,</span>
                      <span>React JS,</span>
                      <span>React Native</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th><h4>Databases</h4></th>
                  <td>
                    <div className='skill-items'>
                      <span>MySQL,</span>
                      <span>PostgreSQL,</span>
                      <span>Firebase</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th><h4>Version Controls</h4></th>
                  <td>
                    <div className='skill-items'>
                      <span>Git,</span>
                      <span>GitHub,</span>
                      <span>GitLab</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th><h4>CI/CD's</h4></th>
                  <td>
                    <div className='skill-items'>
                      <span>Docker,</span>
                      <span>Jenkins,</span>
                      <span>GitHub Action</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th><h4>Others</h4></th>
                  <td>
                    <div className='skill-items'>
                      <span>VS Code,</span>
                      <span>Intellij IDEA,</span>
                      <span>Adobe Photoshop,</span>
                      <span>Adobe Illustrator,</span>
                      <span>Ms. Office</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <div className='skill-chart' data-aos='fade-up' data-aos-delay='100'>
              <ul className='list-none'>
                <li>
                  <div className='flex justify-between'>
                    <span>Mobile Developer</span>
                    <span>80%</span>
                  </div>
                  <div className="chart-border">
                    <div className='chart-percentage eighty-percent'></div>
                  </div>
                </li>
                <li>
                  <div className='flex justify-between'>
                    <span>Backend Developer</span>
                    <span>85%</span>
                  </div>
                  <div className="chart-border">
                    <div className='chart-percentage eighty-percent'></div>
                  </div>
                </li>
                <li>
                  <div className='flex justify-between'>
                    <span>Web Developer</span>
                    <span>70%</span>
                  </div>
                  <div className="chart-border">
                    <div className='chart-percentage seventy-percent'></div>
                  </div>
                </li>
                <li>
                  <div className='flex justify-between'>
                    <span>Design</span>
                    <span>65%</span>
                  </div>
                  <div className="chart-border">
                    <div className='chart-percentage sixtyfive-percent'></div>
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