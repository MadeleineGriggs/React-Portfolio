import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Projects.</h1>
          <div id="portfolio-wrapper" className="bgrid-halves">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <div>
                    <div className="item-wrap">
                        <img src={`${item.imgurl}`} className="item-img" alt="a website screenshot"/>
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>{item.name}</h5>
                            <p>{item.description}</p>
                            <td onClick={()=> window.open(item.gitLink, "_blank")} className="portfolio-git-info">Github Repository</td>
                            <td onClick={()=> window.open(item.appLink, "_blank")} className="portfolio-live-link">Live Link</td>
                          </div>

                        </div>
                        
                    </div>



                  </div>
 
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}