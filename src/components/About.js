import React from "react";
import "./Styles/about.css"
import { MDBRow, MDBCol, MDBContainer } from "mdb-react-ui-kit";


export default function About() {
  return (
    <MDBContainer className="position-absolute top-50 start-50 translate-middle">
      <MDBRow id="img" lg="12" md="12" className="mb-1">
        <MDBCol lg="3" md="12" className="mb-4">
          <img  src= {require('./assets/image.gif')} alt= "Profileimg" className="img-fluid hover-shadow rounded-5" />
        </MDBCol>
      </MDBRow>
      Full Stack Web Developer leveraging background in administrative support and high-level customer service support to patients, families, internal team members, and providers. Earned a certificate in Full-Stack Web Development from the University Coding Boot Camp W/Strengths in leadership, and creative problem solving skills.

      Having already previous experience in a health care setting with Children's Hospital combined with training and experience has provided me with a great foundation of knowledge and skills. I learn new processes quickly and I'm good at implementing instructions, and have a strong work ethic in leadership with my team. I have been told by other previous coworkers that I am a resourceful approach to problem-solving, tackling challenges head-on and I consider obstacles as learning experiences. I'm a people person with high energy and a lot of ambition to succeed.
    </MDBContainer>
  );
}