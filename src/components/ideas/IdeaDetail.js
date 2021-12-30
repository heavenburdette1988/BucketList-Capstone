
// import React, { useContext, useEffect, useState } from "react"

// import { useParams, useNavigate } from "react-router-dom"
// import { IdeaContext } from "./IdeaProvider"
// import { Button, Modal } from "react-bootstrap"


// export const IdeaDetail = () => {
//   const { getIdeaById } = useContext(IdeaContext)

// 	const [idea, setIdea] = useState({})

// 	const {ideaId} = useParams();
// 	const navigate = useNavigate();

// //   const handleRelease = () => {
// //     releaseLocation(location.id)
// //       .then(() => {
// //         navigate("/locations")
// //       })
// //   }

//   useEffect(() => {
//     console.log("useEffect", ideaId)
//     getIdeaById(ideaId)
//     .then((response) => {
//       setIdea(response)
//     })
//     }, [])

    

//     const [show, setShow] = useState(false);
  
//     const handleClose = () => setShow(false);
//     // const handleShow = () => setShow(true);

//   return (

//     <>
//              <Button variant="primary" onClick={handleShow}>
//                Launch demo modal
//              </Button>
      
//              <Modal show={show} onHide={handleClose}>
//                <Modal.Header closeButton>
//                  <Modal.Title>{idea.title}</Modal.Title>
//                </Modal.Header>
//          {/* <Modal.Text>{idea.userIdeas[0].completionDate}</Modal.Text>
//     <Modal.Text>Notes: {idea.userIdeas[0].notes}</Modal.Text> */}
//     {/* <Modal.Text>Notes:  {idea.details}</Modal.Text> */}

//                <Modal.Footer>
//     <Button className="url" variant="primary" href={idea.url}>Let's Go Explore </Button>
  
//                  <Button variant="secondary" onClick={handleClose}>
//                    Close
//                 </Button>
//                 <Button variant="primary" onClick={handleClose}>
//                   Save Changes
//                 </Button>
//               </Modal.Footer>

//              </Modal>
//          </>
//         );
//       }
     
  
      
 

