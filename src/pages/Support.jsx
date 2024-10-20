import React, { useState } from 'react';

// Sample job data with required skills
const jobData = [
    { id: 1, title: 'Fashion Designer', company: 'Style Inc.', location: 'Mumbai', skills: ['Fashion Design', 'Sketching', 'Textiles'] },
    { id: 2, title: 'Fashion Illustrator', company: 'Fashion Arts', location: 'New Delhi', skills: ['Illustration', 'Creativity', 'Fashion Trends'] },
    { id: 3, title: 'Fashion Merchandiser', company: 'Trendy Outfitters', location: 'Bangalore', skills: ['Merchandising', 'Market Research', 'Sales'] },
    { id: 4, title: 'Costume Designer', company: 'Cinematic Creations', location: 'Mumbai', skills: ['Costume Design', 'Fabric Knowledge', 'Creativity'] },
    { id: 5, title: 'Fashion Marketing Specialist', company: 'Chic Promotions', location: 'Kolkata', skills: ['Marketing', 'Branding', 'Social Media'] },
];

const skillToJobMapping = {
    'fashion designing': [1, 2, 3], // Fashion Designer, Fashion Illustrator, Fashion Merchandiser
};

export default function Support() {
    const [userSkills, setUserSkills] = useState('');
    const [recommendedJobs, setRecommendedJobs] = useState([]);

    // Handle change in skills input
    const handleSkillsChange = (event) => {
        setUserSkills(event.target.value);
    };

    // Handle job recommendation based on skills
    const recommendJobs = () => {
        const skillsArray = userSkills.split(',').map(skill => skill.trim().toLowerCase());
        const matchedJobs = [];

        // Check for each skill and fetch corresponding job roles
        skillsArray.forEach(skill => {
            if (skillToJobMapping[skill]) {
                skillToJobMapping[skill].forEach(jobId => {
                    const job = jobData.find(job => job.id === jobId);
                    if (job && !matchedJobs.includes(job)) {
                        matchedJobs.push(job);
                    }
                });
            }
        });

        setRecommendedJobs(matchedJobs);
    };

    // Handle application for the job
    const applyForJob = (jobTitle) => {
        console.log(`Applying for: ${jobTitle}`);
        alert(`You have applied for: ${jobTitle}`);
    };

    return (
        <div className="h-screen w-full bg-background">
            <div className="container mx-auto p-6">
                <div className="max-w-4xl mx-auto w-3/4"> {/* Center and set width */}
                    <h1 className="text-3xl font-bold mb-4">Job Support for Women</h1>
                    {/* Skills Input Section */}
                    <div className="skills-input mb-4 p-4 border border-gray-300 rounded">
                        <h2 className="text-xl font-semibold">Enter Your Skills</h2>
                        <p>Provide your skills to get personalized job recommendations.</p>
                        <input
                            type="text"
                            placeholder="e.g. Fashion Designing, JavaScript, Management"
                            value={userSkills}
                            onChange={handleSkillsChange}
                            className="mt-2 p-2 border border-gray-400 rounded w-full"
                        />
                        <button
                            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                            onClick={recommendJobs}
                        >
                            Get Job Recommendations
                        </button>
                    </div>
                    {/* Job Recommendations Section */}
                    {recommendedJobs.length > 0 && (
                        <div className="job-recommendations mb-4 p-4 border border-gray-300 rounded">
                            <h2 className="text-xl font-semibold">Recommended Job Roles Based on Your Skills</h2>
                            <ul className="mt-2">
                                {recommendedJobs.map(job => (
                                    <li key={job.id} className="mb-2">
                                        <h3 className="text-lg font-semibold">{job.title} at {job.company}</h3>
                                        <p>Location: {job.location}</p>
                                        <p>Required Skills: {job.skills.join(', ')}</p>
                                        <button
                                            className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                                            onClick={() => applyForJob(job.title)}
                                        >
                                            Apply
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {recommendedJobs.length === 0 && userSkills && (
                        <p className="text-red-500 mt-4">No jobs match the skills you've entered. Try adjusting your skills list.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
