import React from 'react'
import {  Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import './App.css';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import Faq from './Pages/Faq/Faq';
import Singleblog from './Pages/Blog/SingleBlog/Singleblog';
import BlogList from './Pages/Blog/BlogList/BlogList';
import Speakers from './Pages/Speakers/Speakers'
import SpeakerDetaiil from './Pages/Speakers/Speakerdetail/SpeakerDetaiil';
import Venue from './Pages/Venue/Venue';
import Terms from './Pages/Terms/Terms';
import PublicManagement from './Pages/Terms/Publlication/PublicManagement';
import Organizerdetail from './Pages/Organizers/Organizerdetail/Organizerdetail';
import Organizers from './Pages/Organizers/Organizers';
import Error from './Pages/Error/Error';
import ScrollToTop from "./Components/ScrollToTop";
import Login from './Components/Account/Login';
import Sponsers from './Pages/Sponsers/Sponsers';
import Register from './Components/Account/Register';
import SponserForm from './Pages/Forms/Sponser/AddSponser';
import AddConference from './Pages/Forms/Conference/AddConference';
import EditSponser from './Pages/Forms/Sponser/EditSponser';
import SpeakerForm from './Pages/Forms/Speaker/AddSpeaker';
import EditSpeaker from './Pages/Forms/Speaker/EditSpeaker';
import AddOrganizer from './Pages/Forms/Oraganizer/AddOrganizer';
import EditOrganizer from './Pages/Forms/Oraganizer/EditOrganizer';
import Feedback from './Pages/Testnomialfeedback/Feedback';
import ViewTestnomial from './Pages/Testnomialfeedback/ViewFeedback';
import AddNews from './Pages/Forms/News/AddNews';
import EditNews from './Pages/Forms/News/EditNews';
import SponserDetaiil from './Pages/Sponsers/Sponserdetail/SponserDetaiil';
import AddVenue from './Pages/Forms/venue/AddVenue';
import AddGallery from './Pages/Forms/Gallery/AddGallery';
import EditGallery from './Pages/Forms/Gallery/EditGallery';
import AddFaq from './Pages/Forms/Faq/AddFaq';
import EditFaq from './Pages/Forms/Faq/EditFaq';
import ViewContact from './Pages/Forms/contact/ViewContact';
import ViewSubscribe from './Pages/Forms/Subscribe/ViewSubscribe';
import ViewUsers from './Pages/Forms/All user/ViewUsers';
import AddMedia from './Pages/Forms/Media/AddMedia';
import EditVenue from './Pages/Forms/venue/EditVenue';
import Enroll from './Pages/Enrollment/Enroll';
import ViewEnroll from './Pages/Forms/Enrollment/ViewEnroll';
import EditConference from './Pages/Forms/Conference/EditConference';
import ConferenceTable from './Pages/Conferences/ConferenceTable';
import DetailConferences from './Pages/Conferences/DetailConferences';
import SponserCondition from './Pages/Terms/Static/SponserCondition';
import AuthorServices from './Pages/Services/services-detail/AuthorServices';
import PaymentDetails from './Pages/Terms/Payment/PaymentDetails';
import Registration from './Pages/Registration/Registration';
import Facilitation from './Pages/Services/services-detail/Facilitation';
import Privacy from './Pages/Terms/Privacy/Privacy-Policy';
import ConferencePuclication from './Pages/Terms/ConferencePublciation/ConferencePuclication';
import Exhibit from './Pages/Exhibit/Exhibit';
import Reviewers from './Pages/Reviewers/Reviewers';
import ChangePassword from './Pages/Settings/ChangePassword';
import EditUser from './Pages/Forms/All user/EditUser';
import Dashboard from './Pages/Private/DashBoard';
import AdminRoute from './Components/Routes/AdminRoute';
import PrivateRoute from './Components/Routes/Private';
import ManagerRoute from './Components/Routes/ManagerRoute';
import ManagerDashboard from './Pages/Manager/ManagerDashBoard';
import AdminDashboard from './Pages/Admin/AdminDashboard';
import ForgotPasssword from './Components/Account/ForgotPassword';
import Role from './Pages/Forms/Role/Role';






const App = () => {


  return (

    <>
<ScrollToTop>
<Routes>
  {/* Normal Pages and Everyone Show Pages */}
<Route exact path='/' element={<Home />} />
<Route path='/about' element={<About />} />
<Route path='/*' element={<Error />} />
<Route path='/all-sponsers' element={<Sponsers />} />
<Route path='/faq' element={<Faq />} />
<Route path='/blogs' element={<BlogList />} />
<Route path='/registration' element={<Registration/>} />
<Route path='/conference-facilitation-services' element={<Facilitation/>} />
<Route path='/services' element={<Services />} />
<Route path='/all-speakers' element={<Speakers />} />
<Route path='/all-organizers' element={<Organizers />} />
<Route path='/all-conferences' element={<ConferenceTable />} />
<Route path='/detail-conference/:id' element={<DetailConferences />} />
<Route path='/Venue' element={<Venue />} />
<Route path='/terms-and-conditions' element={<Terms/>} />
<Route path='/publication-management' element={<PublicManagement />} />
<Route path='/sponser-detail' element={<SponserDetaiil />} />
<Route path='/contact' element={<Contact />} />
<Route path='/author-services' element={<AuthorServices/>} />
<Route path='/detail-sponser/:id' element={<SponserDetaiil />} />
<Route path='/speaker-detail/:id' element={<SpeakerDetaiil />} />
<Route path='/organizer-detail/:id' element={<Organizerdetail />} />
<Route path='/feedback' element={<Feedback />} />
<Route path='/detail-news/:id' element={<Singleblog />} />
<Route path='/conference-enrollment' element={<Enroll />} />
<Route path='/sponsership' element={<SponserCondition/>} />
<Route path='/payment-details' element={<PaymentDetails/>} />
<Route path='/privacy-policy' element={<Privacy/>} />
<Route path='/conference-publication-service' element={<ConferencePuclication/>} />
<Route path='/exhibit' element={<Exhibit/>} />
<Route path='/our-reviewers' element={<Reviewers/>} />
<Route path='/register' element={<Register />} />
<Route path='/login' element={<Login/>} />
<Route path='/reset-password' element={<ForgotPasssword/>} />


{/* Here User Private pages */}
<Route path='/dashboard' element={<PrivateRoute/>}>
      <Route path="user" element={<Dashboard/>}/>
      </Route>

{/* Manager Pages  */}
<Route path='/dashboard' element={<ManagerRoute/>}>
      <Route path="manager" element={<ManagerDashboard/>}/>
<Route path='manager/add-sponser' element={<SponserForm />} />
<Route path='manager/add-speaker' element={<SpeakerForm />} />
{/* <Route path='manager/edit-speaker/:id' element={<EditSpeaker />} /> */}
<Route path='manager/add-organizer' element={<AddOrganizer />} />
{/* <Route path='manager/edit-organizer/:id' element={<EditOrganizer />} /> */}
<Route path='manager/view-testnomial' element={<ViewTestnomial />} />
<Route path='manager/add-news' element={<AddNews />} />
{/* <Route path='manager/edit-news/:id' element={<EditNews />} /> */}
<Route path='manager/add-conference' element={<AddConference />} />
{/* <Route path='manager/edit-conference/:id' element={<EditConference />} /> */}
<Route path='manager/all-users' element={<ViewUsers />} />
<Route path='manager/all-enrollments' element={<ViewEnroll />} />
<Route path='manager/add-gallery' element={<AddGallery />} />
{/* <Route path='manager/edit-gallery/:id' element={<EditGallery />} /> */}
<Route path='manager/add-faq' element={<AddFaq />} />
{/* <Route path='manager/edit-faq/:id' element={<EditFaq />} /> */}
<Route path='manager/all-contacts' element={<ViewContact />} />
<Route path='manager/upload' element={<AddMedia />} />
<Route path='manager/all-subscribers' element={<ViewSubscribe />} />
<Route path='manager/add-venue' element={<AddVenue />} />
{/* <Route path='manager/edit-venue/:id' element={<EditVenue />} /> */}
      </Route>




      {/*  */}
<Route path='dashboard/edit-speaker/:id' element={<EditSpeaker/>} />
<Route path='dashboard/edit-sponser/:id' element={<EditSponser />} />
<Route path='dashboard/edit-organizer/:id' element={<EditOrganizer />} />
<Route path='dashboard/edit-news/:id' element={<EditNews />} />
<Route path='dashboard/edit-conference/:id' element={<EditConference />} />
<Route path='dashboard/edit-gallery/:id' element={<EditGallery />} />
<Route path='dashboard/edit-faq/:id' element={<EditFaq />} />
<Route path='dashboard/edit-venue/:id' element={<EditVenue />} />


{/* Here Admin Pages Defined Inside The Dashboard */}

<Route path='/dashboard' element={<AdminRoute/>}>
<Route path="admin" element={<AdminDashboard/>}/>
<Route path='admin/add-sponser' element={<SponserForm />} />
{/* <Route path='admin/edit-sponser/:id' element={<EditSponser />} /> */}
<Route path='admin/add-speaker' element={<SpeakerForm />} />
<Route path='admin/add-organizer' element={<AddOrganizer />} />
{/* <Route path='admin/edit-organizer/:id' element={<EditOrganizer />} /> */}
<Route path='admin/view-testnomial' element={<ViewTestnomial />} />
<Route path='admin/add-news' element={<AddNews />} />
{/* <Route path='admin/edit-news/:id' element={<EditNews />} /> */}
<Route path='admin/add-conference' element={<AddConference />} />
{/* <Route path='admin/edit-conference/:id' element={<EditConference />} /> */}
<Route path='admin/all-users' element={<ViewUsers />} />
<Route path='admin/all-enrollments' element={<ViewEnroll />} />
<Route path='admin/add-gallery' element={<AddGallery />} />
{/* <Route path='admin/edit-gallery/:id' element={<EditGallery />} /> */}
<Route path='admin/add-faq' element={<AddFaq />} />
{/* <Route path='admin/edit-faq/:id' element={<EditFaq />} /> */}
<Route path='admin/all-contacts' element={<ViewContact />} />
<Route path='admin/upload' element={<AddMedia />} />
<Route path='admin/all-subscribers' element={<ViewSubscribe />} />
<Route path='admin/add-venue' element={<AddVenue />} />
{/* <Route path='admin/edit-venue/:id' element={<EditVenue />} /> */}
<Route path='admin/edit-password/:id' element={<ChangePassword/>} />
<Route path='admin/edit-user/:id' element={<EditUser/>} />
<Route path='admin/role' element={<Role/>} />

</Route>
</Routes>
</ScrollToTop>
    </>
  )
}

export default App