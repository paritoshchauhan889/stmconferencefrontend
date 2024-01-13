// import { getEvents } from '../../api/Api'
// import { useEffect, useState } from 'react';
// import './Event.css';
// import { Link } from 'react-router-dom';
// const Events = () => {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     getAllEvents();
//   }, []);

//   const getAllEvents = async () => {
//     let response = await getEvents();
//     setEvents(response.data);
//   }

//   return (
//     <>
//       <div className="event-schedule-area-two bg-color pad100">
//         <div className="m-5">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="section-title text-center">
//                 <div className="title-text">
//                   <h2>Event Schedule</h2>
//                 </div>
//                 <p className='text-center'>
//                 STM Conferences isn't just about traditional gatherings – it's about creating immersive experiences. Our events encompass a wide spectrum of formats, including workshops, panel discussions, keynote addresses, and networking sessions. These events provide attendees with diverse opportunities to engage, learn, and forge connections that extend beyond the confines of the conference itself.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-lg-12">
//               <ul className="nav custom-tab" id="myTab" role="tablist">
                
               
//               </ul>
            
//                   <div className="tab-content" id="myTabContent">
//                 <div className="tab-pane fade active show" id="home" role="tabpanel">
//                   <div className="table-responsive">
//                     <table className="table">
//                       <thead>
//                         <tr>
//                           <th className="text-center" scope="col">Date</th>
//                           <th scope="col">Speakers</th>
//                           <th scope="col" className='text-center'>Session</th>
//                           <th scope="col">Venue</th>
//                           <th className="text-center" scope="col">Venue</th>
//                         </tr>
//                       </thead>
//                       {
//                 events.map(event=>(
//                       <tbody>
//                         <tr className="inner-box">
//                           <th scope="row">
//                             <div className="event-date ">
//                               <span className='fs-6'>{event.eventdate}</span>
//                               {/* <p>Novembar</p> */}
//                             </div>
//                           </th>
//                           <td>
//                             <div className="event-img">
//                               <img src={event.speakerimage} alt="Event" />
//                             </div>
//                           </td>
//                           <td>
//                             <div className="event-wrap">
//                               <h3><Link to="#">{event.nameofspeaker}</Link></h3>
//                               <span>{event.speakeremail}</span>
//                               <div className="meta">
//                                 <div className="organizers w-90">
                              
//                                   <p>{event.about}</p>
//                                 </div>
                               
//                                 <div className="time">Time
//                                   <span> starting {event.eventstarttime} -Ending {event.eventendtime}</span>
//                                 </div>
//                               </div>
//                             </div>
//                           </td>
//                           <td>
//                             <div className="r-no">
//                               <span>{event.addressline}</span>
//                             </div>
//                           </td>
//                           <td>
//                             <div className="primary-btn">
//                               <Link className="btn btn-primary" to="#">Read More</Link>
//                             </div>
//                           </td>
//                         </tr>


//                       </tbody>
//                       ))
//               }
//                     </table>
//                   </div>
//                 </div>
//                 <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
//                   <div className="table-responsive">
//                     <table className="table">
//                       <thead>
//                         <tr>
//                           <th scope="col">Date</th>
//                           <th scope="col">Speakers</th>
//                           <th scope="col">Session</th>
//                           <th scope="col">Venue</th>
//                           <th scope="col">Venue</th>
//                         </tr>
//                       </thead>

//                     </table>
//                   </div>
//                 </div>

//               </div>
           
             
//               {/* <div className="primary-btn text-center">
//                 <Link to="#" className="btn btn-primary">Download Schedule</Link>
//               </div> */}
//             </div>
//           </div>
//         </div>
//       </div>





//     </>
//   )
// }

// export default Events