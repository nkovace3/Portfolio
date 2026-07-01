import React, { useRef } from 'react';
import Table from 'react-bootstrap/Table';
import '../App.css';
import CombinedInsurance from '../images/CombinedInsurance.png';
import RBC from '../images/RBC.png';
import Bell from '../images/Bell.png';

function Resume() {
  const resumeRef = useRef(null);

  return (
    <div className='resume section' id='resume' ref={resumeRef} style={{ maxWidth: '100%' }}>
      <h1 style={{ marginLeft: '7.5vw', marginBottom: '3vh', fontSize: '4vh' }}>Past Performance</h1>
      <div style = {{display: 'flex', justifyContent: 'center'}}>
      <Table hover className="text-nowrap" style={{ tableLayout: 'auto', width: '80%', marginBottom: '100vh' }}>
        <thead style={{ borderBottom: 'none' }}>
          <tr>
            <th style={{ width: 'auto' }}>Company Name</th>
            <th style={{ width: 'auto', textAlign: 'center', borderTop: 'none' }}>Role</th>
            <th style={{ width: 'auto', textAlign: 'center', borderTop: 'none' }}>Dates</th>
            <th style={{ width: 'auto', textAlign: 'center', borderTop: 'none' }}>Experience</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ width: 'auto' }}>
              Bell Canada
              <img src={Bell} alt="Algo Logo" style={{ width: '2vh', marginLeft: '2vh' }} />
            </td>
            <td style={{ width: 'auto', textAlign: 'left' }}>AI Technical PM Intern</td>
            <td style={{ width: 'auto', textAlign: 'left' }}>May 2024 - Aug. 2024</td>
            <td style={{ width: 'auto', whiteSpace: 'normal' }}>
              <ul>
                <li>
                  Led development of AI product that provided call centre agents with feedback and reward system while speaking to 
                  customers in real-time; successful requirements, roadmap, and delegation led to launch for 5000+ agents nationwide.
                </li>
                <li>
                  Created and managed roadmap to deploy automated reporting tool on usage of Bell’s generative AI chatbot by leading 
                  team of data scientists and engineers, causing a 50% increase in adoption rate after delivering insights to senior leaders.
                </li>
                <li>
                  Engineered automation tool to create weekly product updates using Python by extracting product progress information with 
                  Jira API and uploading formatted documents to cloud, saving product managers average of four hours per week.
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td style={{ width: 'auto' }}>
              Combined Insurance
              <img src={CombinedInsurance} alt="Combined Insurance Logo" style={{ width: '4vh', marginLeft: '1vh' }} />
            </td>
            <td style={{ width: 'auto', textAlign: 'left' }}>Finance/QA Intern</td>
            <td style={{ width: 'auto', textAlign: 'left' }}>May 2023 - Aug. 2023</td>
            <td style={{ width: 'auto', whiteSpace: 'normal' }}>
              <ul>
                <li>
                  Tested insurance agent commission-tracking system by engineering validation models for its outputs with Excel and
                  VBA, leading to deployment of application used by over 1,000 agents nationwide. 
                </li>
                <li>
                  Calculated commission to be paid out to sales agents across Canada through consolidation of account statements,
                  accurately distributing over $10,000 per month with 10% fewer agents resigning per month.
                </li>
                <li>
                  Automated manual data entry process for external vendor voucher statements by parsing and filling data with VBA,
                  developing process removing 100% of human error and requiring 75% less time. 
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td style={{ width: 'auto',borderBottom: 'none' }}>
              RBC
              <img src={RBC} alt="RBC Logo" style={{ width: '4vh', marginLeft: '1vh', borderBottom: 'none' }} />
            </td>
            <td style={{ width: 'auto', textAlign: 'left', borderBottom: 'none' }}>Design Thinking Intern</td>
            <td style={{ width: 'auto', textAlign: 'left', borderBottom: 'none' }}>Jan. 2022 - Apr. 2022</td>
            <td style={{ width: 'auto', whiteSpace: 'normal', borderBottom: 'none' }}>
              <ul>
                <li>
                  Designed solution to promote sustainability among students using Figma; resulted in mobile application concept that
                  cuts user food waste by 50% per month and calculates positive environmental impact created. 
                </li>
                <li>
                  Presented concept by pitching to RBC executives and Western deans, earning $3,500 stipend for successful execution.
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </Table>
      </div>
    </div>
  );
}

export default Resume;