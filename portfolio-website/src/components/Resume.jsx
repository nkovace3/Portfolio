import React, { useRef } from 'react';
import Table from 'react-bootstrap/Table';
import '../App.css';
import CombinedInsurance from '../images/CombinedInsurance.png';
import Algo from '../images/Algo.jpeg';
import RBC from '../images/RBC.png';

function Resume() {
  const resumeRef = useRef(null);

  return (
    <div className='resume section' id='resume' ref={resumeRef} style={{ maxWidth: '100%' }}>
      <h1 style={{ marginLeft: '2vh' }}>Past Performance</h1>
      <Table hover className="text-nowrap" style={{ tableLayout: 'auto', width: '100%' }}>
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
              Western Algorithmic Trading
              <img src={Algo} alt="Algo Logo" style={{ width: '2.5vh', marginLeft: '1vh' }} />
            </td>
            <td style={{ width: 'auto', textAlign: 'left' }}>Head of Quant Analysis</td>
            <td style={{ width: 'auto', textAlign: 'left' }}>Sept. 2023 - Present</td>
            <td style={{ width: 'auto', whiteSpace: 'normal' }}>
              <ul>
                <li>
                  Led team to develop closed-end fund data dashboard using MongoDB, Express JS, React JS, and Node JS,
                  overseeing calculation and presentation of analyses to inform development of closed-end fund arbitrage trading strategy. 
                </li>
                <li>
                  Ideated and back-tested novel trade strategies by pulling data with SQL and producing advanced Python financial
                  models, illustrating these findings with Tableau on research publications in form of data-driven investment tools.
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
                  cuts user food waste by 50% per month. 
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
  );
}

export default Resume;