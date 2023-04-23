import React, { useState } from "react";
import GeneralInfo from './components/generalInfo.js'
import Education from './components/education.js'
import Work from './components/work.js'

function App() {
    const [generalInfo, setGeneralInfo] = useState({
        name: '',
        email: '',
        phoneNumber: '',
    });

    const [education, setEducation] = useState({
        schoolName: '',
        titleOfStudy: '',
        dateOfStudy: '',
    });

    const [work, setWork] = useState({
        companyName: '',
        jobTitle: '',
        jobDuration: '',
    });

    const [generalInfoEditing, setGeneralInfoEditing] = useState(false);
    const [educationEditing, setEducationEditing] = useState(false);
    const [workEditing, setWorkEditing] = useState(false);

    const handleEducationSubmit = education => {
        setEducation(education);
        setEducationEditing(false);
    };

    const handleEducationEdit = () => {
        setEducationEditing(true);
    }

    const handleGeneralInfoSubmit = generalInfo => {
        setGeneralInfo(generalInfo);
        setGeneralInfoEditing(false);
    }

    const handleGeneralInfoEdit = () => {
        setGeneralInfoEditing(true);
    }

    const handleWorkSubmit = work => {
        setWork(work);
        setWorkEditing(false);
    };

    const handleWorkEdit = () => {
        setWorkEditing(true);
    }

    return ( 
        <div>
        <
        GeneralInfo generalInfo = { generalInfo }
        generalInfoEditing = { generalInfoEditing }
        onSubmit = { handleGeneralInfoSubmit }
        onEdit = { handleGeneralInfoEdit }
        />  
        <
        Education education = { education }
        educationEditing = { educationEditing }
        onSubmit = { handleEducationSubmit }
        onEdit = { handleEducationEdit }
        /> 
        <
        Work work = { work }
        workEditing = { workEditing }
        onSubmit = { handleWorkSubmit }
        onEdit = { handleWorkEdit }
        /> 
        </div>    
    );
}

export default App;