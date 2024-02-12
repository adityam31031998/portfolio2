import React from "react";
import "./Resume.css";
import "./line.css";
import Content from "./Content";
const Resume = () => {
  return (
    <div className="resumeBody">
      <center>
        <div className="col-2 fontColor"><h1>Resume</h1></div>
      </center>
      <div className="col-12">
        <div className="col-6 ">
          <center>
            <h1>Experences</h1>
          </center>
          <br />
          <div className="col-8">
            <Content
              heading={"Clari5 Customerxps"}
              startYear={"2021"}
              endYear={"2024"}
              topic={"(DevOps)"}
              para={
                <>
                  DevOps
                  <br />
                  Tools: Jenkins, Docker, Ansible
                  <br />
                  {"\u2022"} Cloud Platforms: AWS
                  <br />
                  {"\u2022"} Version Control: GitLab
                  <br />
                  {"\u2022"} Scripting: Shell, Python
                  <br />Frontend Technologies:
                  <br />
                  {"\u2022"} React, HTML, CSS, JavaScript
                  <br />
                </>
              }
            />

            <Content
              heading={"Talenzo Media Tech Pvt"}
              startYear={"2020"}
              endYear={"2020"}
              topic={"(Video Editing)"}
              para={
                <>
                  {"\u2022"} Capture studio-quality photographs and video.
                  <br />
                  {"\u2022"} Manage and oversee all technical aspects of video
                  recording and editing.
                  <br />
                  {"\u2022"} Work with our creative teammates.
                  <br />
                  {"\u2022"} Regularly collaborate with the marketing team.
                </>
              }
            />
          </div>
        </div>
        <div className="col-6">
          <div className="col-4"></div>
          <h1>Education</h1>
          <br />
          <div className="col-8">
            <Content
              heading={"Jain Demeed College"}
              startYear={"2023"}
              endYear={"2024"}
              para={"Spelization:Full Stack"}
              topic={"(MCA-Mastres)"}
            />
            <Content
              heading={"Cavalier Animation Media College"}
              startYear={"2017"}
              endYear={"2019"}
              topic={"(BCA-Web Science)"}
              para={"Spelization : Compute Science"}
            />
            <Content
              heading={"Cauvery Pu College"}
              startYear={"2014"}
              endYear={"2016"}
              topic={"(PUC State Board)"}
              para={"Spelization : Compute Science(PCMC)"}
            />
            <Content
              heading={"Arubindo School"}
              startYear={"2004"}
              endYear={"2014"}
              topic={"(10th State Board)"}
              para={"Spelization : All"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
