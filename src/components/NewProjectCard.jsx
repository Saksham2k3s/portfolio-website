import React from 'react'
import '../style/Projects.css'
import { Link } from 'react-router-dom'
function NewProjectCard(props) {
    const { image, project_name, Duration, Description, technologies, demo, source } = props
  return (
    <>
    <div className='project-card-container' >
      <div className="row">
        <div className="col-md-5 project-img text-center py-3 ">
          <img src={image} alt="" className='image-fluid' />
        </div>
        <div className="col-md-7 px-3">
          <div className='heading2 h3 text-start mt-3' >{project_name}</div>
          <p className='card-para' >{Description}</p>
          <p className='card-para' >{Duration}</p>
          <div className='technologies-container' >
            {
              technologies.map((imageURL, index) => {
              return  <img key={index} src={imageURL} alt={`Technology ${index}`} className='img-fluid' />
              })
            }
          </div>
          <div className='button-container' >
            <Link to={source}  ><button className='btn1 btn mx-1 my-3'>Source</button></Link>
            <Link to={demo} ><button className='btn2 btn mx-1 my-3'>Demo</button></Link>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default NewProjectCard