import React from "react";
import { MDBBtn , MDBRipple} from "mdb-react-ui-kit";
import './Styles/projects.css'
export default function Projects() {
  return (
    <>
      <MDBRipple id="padding" rippleTag='div' className='sm-image hover-overlay hover-zoom hover-shadow'>
      <img src={require('./assets/hi-blog-im-dad.png')} className='w-100' />
      <a href='https://hi-blog-im-dad.herokuapp.com/login'>
        <div className='mask' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }}></div>
      </a>
    </MDBRipple>
    <MDBRipple id="padding" rippleTag='div' className='sm-image hover-overlay hover-zoom hover-shadow'>
      <img src={require('./assets/tarotkeeper.png')} className='w-100' />
      <a href='https://my-tarot-keeper.herokuapp.com/'>
        <div className='mask' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }}></div>
      </a>
    </MDBRipple>
    <MDBRipple id="padding" rippleTag='div' className='sm-image hover-overlay hover-zoom hover-shadow'>
      <img src={require('./assets/deptFunctions.gif')} className='w-100' />
      <a href='https://github.com/Lorena-RM/my-Employee-Tracker'>
        <div className='mask' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }}></div>
      </a>
    </MDBRipple>
    <MDBRipple id="padding" rippleTag='div' className='sm-image hover-overlay hover-zoom hover-shadow'>
      <img src={require('./assets/project1.png')} className='w-100' />
      <a href='https://alecschro13.github.io/Venue-Search-Project1/'>
        <div className='mask' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }}></div>
      </a>
    </MDBRipple>
    <MDBRipple id="padding" rippleTag='div' className='sm-image hover-overlay hover-zoom hover-shadow'>
      <img src={require('./assets/workdaySched.png')} className='w-100' />
      <a href='https://lorena-rm.github.io/work-day-scheduler-jquery-lm/'>
        <div className='mask' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }}></div>
      </a>
    </MDBRipple>
    <MDBRipple id="padding" rippleTag='div' className='sm-image hover-overlay hover-zoom hover-shadow'>
      <img src={require('./assets/Screen-Recording.gif')} className='w-100' />
      <a href='https://lorena-rm.github.io/Weather-Dashboard-Morales/'>
        <div className='mask' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }}></div>
      </a>
    </MDBRipple>
    </>
  );
}