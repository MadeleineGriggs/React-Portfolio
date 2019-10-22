import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        <h1 style={{textAlign:'center', color:'#95A3A3', paddingBottom:'33px'}}>Resume</h1>
         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Work</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date"> {item.YearOfLeaving}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>


         <div className="row skill">

            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>

            <div className="nine columns main-col">



   				{/* <div className="bars"> */}

   				   <ul className="skills" style={{float:'left'}}>
              <p style={{color:"#4c5157", fontSize:"18px"}}>
               {resumeData.scriptsDescription}
               </p>
                {
                  resumeData.scripts && resumeData.scripts.map((item) => {
                    return(
                      <li>
                      {/* <span className={`bar-expand ${item.skillname.toLowerCase()}`}> */}
                      {/* </span> */}
                      <em>{item.skillname}</em>
                      </li>
                    )
                  })
                }

                <p style={{color:"#4c5157", fontSize:"18px"}}>
               {resumeData.debugDescription}
               </p>
                {
                  resumeData.debugs && resumeData.debugs.map((item) => {
                    return(
                      <li>
                      {/* <span className={`bar-expand ${item.skillname.toLowerCase()}`}> */}
                      {/* </span> */}
                      <em>{item.skillname}</em>
                      </li>
                    )
                  })
                }

   					</ul>

             


             <ul className="skills"  style={{float:'right'}}>
              <p style={{color:"#4c5157", fontSize:"18px"}}>
               {resumeData.databaseDescription}
              </p>
                {
                  resumeData.databases && resumeData.databases.map((item) => {
                    return(
                      <li>
                      {/* <span className={`bar-expand ${item.skillname.toLowerCase()}`}> */}
                      {/* </span> */}
                      <em>{item.skillname}</em>
                      </li>
                    )
                  })
                }


                <p style={{color:"#4c5157", fontSize:"18px"}}>
               {resumeData.frameworksDescription}
               </p>
                {
                  resumeData.frameworks && resumeData.frameworks.map((item) => {
                    return(
                      <li>
                      {/* <span className={`bar-expand ${item.skillname.toLowerCase()}`}> */}
                      {/* </span> */}
                      <em>{item.skillname}</em>
                      </li>
                    )
                  })
                }

   					</ul>

   				{/* </div> */}

   			</div>

         </div>

      </section>
    );
  }
}