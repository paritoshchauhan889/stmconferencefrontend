import axios from "axios";


//   export const URL = 'https://stmconferencesapi.onrender.com';
export const URL = 'http://localhost:8000/api/v1';
// sponser section
export const addSponser = async (data) => {

    try {
        return await axios.post(`${URL}/sponser/add-sponser`, data)
    } catch (error) {
        console.log('Error while adding sponser Api ', error);    
    }
}                                                                                                                                   


export const getSponsers = async () => {
    try {
        return await axios.get(`${URL}/sponser/all-sponsers`);

    } catch (error) {
        console.log('Error while getting sponsser api', error);
    }
}

export const getSponser = async (id) => {
    try {
        return await axios.get(`${URL}/sponser/sponser${id}`);
    } catch (error) {
        console.log('Error while getting sponser api', error);
    }
}

export const editSponser = async (sponser, id) => {
    try {
        return await axios.put(`${URL}/sponser/sponser${id}`, sponser);
    } catch (error) {
        console.log('Error while getting speaker api', error);
    }
}


export const deleteSponser = async (id) => {

    try {
        return await axios.delete(`${URL}/sponser/sponser${id}`);
    } catch (error) {
        console.log('Error while deleting sponser api', error);

    }
}


// speaker section

export const addSpeaker = async (data) => {

    try {
        return await axios.post(`${URL}/speaker/add-speaker`, data)
    } catch (error) {
        console.log('Error while adding speaker Api ', error);    
    }
}

export const getSpeakers = async () => {
    try {
        return await axios.get(`${URL}/speaker/all-speakers`);

    } catch (error) {
        console.log('Error while getting speaker api', error);
    }
}

export const getSpeaker = async (id) => {
    try {
        return await axios.get(`${URL}/speaker/speaker${id}`);
    } catch (error) {
        console.log('Error while getting speaker api', error);
    }
}

export const editSpeaker = async (speaker, id) => {
    try {
        return await axios.put(`${URL}/speaker/speaker${id}`, speaker);
    } catch (error) {
        console.log('Error while getting  speaker api', error);
    }
}

export const deleteSpeaker = async (id) => {

    try {
        return await axios.delete(`${URL}/speaker/speaker${id}`);
    } catch (error) {
        console.log('Error while deleting speaker api', error);

    }
}


// organizer section
export const addOrganizer = async (data) => {

    try {
        return await axios.post(`${URL}/organizer/add-organizer`, data)
    } catch (error) {
        console.log('Error while adding organizer Api ', error);    
    }
}


export const getOrganizers = async () => {
    try {
        return await axios.get(`${URL}/organizer/all-organizers`);

    } catch (error) {
        console.log('Error while getting organizers api', error);
    }
}

export const getOrganizer = async (id) => {
    try {
        return await axios.get(`${URL}/organizer/organizer${id}`);
    } catch (error) {
        console.log('Error while getting organizer api', error);
    }
}

export const editOrganizer = async (organizer, id) => {
    try {
        return await axios.put(`${URL}/organizer/organizer${id}`, organizer);
    } catch (error) {
        console.log('Error while getting organizer api', error);
    }
}


export const deleteOrganizer = async (id) => {

    try {
        return await axios.delete(`${URL}/organizer/organizer/organizer${id}`);
    } catch (error) {
        console.log('Error while deleting organizer api', error);

    }
}



// Testnomial section
export const addTestnomial = async (data) => {

    try {
        return await axios.post(`${URL}/testmonial/feedback`, data)
    } catch (error) {
        console.log('Error while adding sponser Api ', error);    
    }
}

export const getTestnomials = async () => {
    try {
        return await axios.get(`${URL}/testmonial/all-testnomials`);

    } catch (error) {
        console.log('Error while getting testnomials api', error);
    }
}


export const editTestnomialPermission = async (testnomial, id) => {
    try {
        return await axios.put(`${URL}/testmonial/testnomial${id}`, testnomial);
    } catch (error) {
        console.log('Error while getting testnomial api', error);
    }
}
export const deleteTestnomial = async (id) => {

    try {
        return await axios.delete(`${URL}/testmonial/testnomial${id}`);
    } catch (error) {
        console.log('Error while deleting testnomial api', error);

    }
}






// News section

export const addNews = async (data) => {

    try {
        return await axios.post(`${URL}/news/add-news`, data)
    } catch (error) {
        console.log('Error while adding news Api ', error);    
    }
}
export const getNewss = async () => {
    try {
        return await axios.get(`${URL}/news/all-news`);

    } catch (error) {
        console.log('Error while getting slider api', error);
    }
}

export const getNews = async (id) => {
    try {
        return await axios.get(`${URL}/news/news${id}`);
    } catch (error) {
        console.log('Error while getting news api', error);
    }
}

export const editNews = async (news, id) => {
    try {
        return await axios.put(`${URL}/news/news${id}`, news);
    } catch (error) {
        console.log('Error while getting news api', error);
    }
}


export const deleteNews = async (id) => {

    try {
        return await axios.delete(`${URL}/news/news${id}`);
    } catch (error) {
        console.log('Error while deleting news api', error);

    }
}





// gallery section



export const addGallery = async (data) => {

    try {
        return await axios.post(`${URL}/gallery/add-gallery`, data)
    } catch (error) {
        console.log('Error while adding gallery Api ', error);    
    }
}


export const getGallerys = async () => {
    try {
        return await axios.get(`${URL}/gallery/all-gallerys`);

    } catch (error) {
        console.log('Error while getting gallery api', error);
    }
}

export const getGallery = async (id) => {
    try {
        return await axios.get(`${URL}/gallery/gallery${id}`);
    } catch (error) {
        console.log('Error while getting gallery api', error);
    }
}

export const editGallery = async (gallery, id) => {
    try {
        return await axios.put(`${URL}/gallery/gallery${id}`, gallery);
    } catch (error) {
        console.log('Error while getting gallery api', error);
    }
}


export const deleteGallery = async (id) => {

    try {
        return await axios.delete(`${URL}/gallery/gallery${id}`);
    } catch (error) {
        console.log('Error while deleting gallery api', error);

    }
}




// faq section


export const addFaq = async (data) => {

    try {
        return await axios.post(`${URL}/faq/add-faq`, data)
    } catch (error) {
        console.log('Error while adding faq Api ', error);    
    }
}


export const getFaqs = async () => {
    try {
        return await axios.get(`${URL}/faq/all-faqs`);

    } catch (error) {
        console.log('Error while getting faq api', error);
    }
}

export const getFaq = async (id) => {
    try {
        return await axios.get(`${URL}/faq/faq${id}`);
    } catch (error) {
        console.log('Error while getting faq api', error);
    }
}

export const editFaq = async (sponser, id) => {
    try {
        return await axios.put(`${URL}/faq/faq${id}`, sponser);
    } catch (error) {
        console.log('Error while getting speaker api', error);
    }
}


export const deleteFaq = async (id) => {

    try {
        return await axios.delete(`${URL}/faq/faq${id}`);
    } catch (error) {
        console.log('Error while deleting faq api', error);

    }
}


// contact section


export const addContact = async (data) => {

    try {
        return await axios.post(`${URL}/contact/contact`, data)
    } catch (error) {
        console.log('Error while adding contact Api ', error);    
    }
}


export const getContacts = async () => {
    try {
        return await axios.get(`${URL}/contact/all-contacts`);

    } catch (error) {
        console.log('Error while getting contact api', error);
    }
}



export const deleteContact = async (id) => {

    try {
        return await axios.delete(`${URL}/contact/contact${id}`);
    } catch (error) {
        console.log('Error while deleting contact api', error);

    }
}



// subscribe section 



export const addSubscriber = async (data) => {

    try {
        return await axios.post(`${URL}/`, data)
    } catch (error) {
        console.log('Error while adding subscribe Api ', error);    
    }
}

export const getSubscribers = async () => {
    try {
        return await axios.get(`${URL}/all-subscribers`);

    } catch (error) {
        console.log('Error while getting subscribes api', error);
    }
}


// venue section
export const addVenue = async (data) => {

    try {
        return await axios.post(`${URL}/venue/add-venue`, data)
    } catch (error) {
        console.log('Error while adding venue Api ', error);    
    }
}


export const getVenues = async () => {
    try {
        return await axios.get(`${URL}/venue/all-venues`);

    } catch (error) {
        console.log('Error while getting venue api', error);
    }
}

export const getVenue = async (id) => {
    try {
        return await axios.get(`${URL}/venue/venue${id}`);
    } catch (error) {
        console.log('Error while getting venue api', error);
    }
}

export const editVenue = async (venue, id) => {
    try {
        return await axios.put(`${URL}/venue/venue${id}`, venue);
    } catch (error) {
        console.log('Error while getting venue api', error);
    }
}


export const deleteVenue = async (id) => {

    try {
        return await axios.delete(`${URL}/venue/venue${id}`);
    } catch (error) {
        console.log('Error while deleting venue api', error);

    }
}

// enroll section

export const addEnroll = async (data) => {

    try {
        return await axios.post(`${URL}/enrollment/conference-enrollment`, data)
    } catch (error) {
        console.log('Error while adding Enrollment Api ', error);    
    }
}



export const getEnrolls = async () => {
    try {
        return await axios.get(`${URL}/enrollment/all-enrollments`);

    } catch (error) {
        console.log('Error while getting enrollments api', error);
    }
}


export const getEnroll = async (id) => {
    try {
        return await axios.get(`${URL}/enrollment/enroll${id}`);
    } catch (error) {
        console.log('Error while getting enroll api', error);
    }
}

export const deleteEnrolls = async (id) => {

    try {
        return await axios.delete(`${URL}/enrollment/enroll${id}`);
    } catch (error) {
        console.log('Error while deleting enroll api', error);

    }
}



// conference section
export const addConference = async (data) => {

    try {
        return await axios.post(`${URL}/conference/add-conference`, data)
    } catch (error) {
        console.log('Error while adding conference Api ', error);    
    }
}



export const getConferences = async () => {
    try {
        return await axios.get(`${URL}/conference/all-conferences`);

    } catch (error) {
        console.log('Error while getting conference api', error);
    }
}

export const getConference = async (id) => {
    try {
        return await axios.get(`${URL}/conference/conference${id}`);
    } catch (error) {
        console.log('Error while getting conference api', error);
    }
}

export const editConference = async (conference, id) => {
    try {
        return await axios.put(`${URL}/conference/conference${id}`, conference);
    } catch (error) {
        console.log('Error while getting conference api', error);
    }
}


export const deleteConference = async (id) => {

    try {
        return await axios.delete(`${URL}/conference/conference${id}`);
    } catch (error) {
        console.log('Error while deleting conference api', error);

    }
}



