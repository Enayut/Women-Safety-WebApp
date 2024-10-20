import React, { useState } from 'react';

const LegalAssistance = () => {
    const [situation, setSituation] = useState('');
    const [response, setResponse] = useState('');

    // Handler for situation change
    const handleSituationChange = (event) => {
        setSituation(event.target.value);
    };

    // Handler for form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        switch (situation) {
            case 'harassment':
                setResponse('If you are experiencing harassment, please contact the National Helpline for Women at 181 or reach out to your local police station by calling 100.');
                break;
            case 'legalAdvice':
                setResponse('For legal advice, consider contacting a local legal aid service at NALSA Helpline: 15100.');
                break;
            case 'support':
                setResponse('For emotional support, you can reach out to the Vandrevala Foundation Helpline at 1860 266 2345.');
                break;
            default:
                setResponse('Please choose an option to get specific assistance.');
                break;
        }
    };

    return (
        <div className="legal-assistance-section p-6">
            <h1 className="text-3xl font-bold mb-4">Legal Assistance and Resources for Women in India</h1>
            <p className="mb-4">
                We are here to help! Please let us know your current situation by selecting one of the options below:
            </p>

            {/* Situation Selection Form */}
            <form onSubmit={handleSubmit} className="mb-6">
                <select
                    value={situation}
                    onChange={handleSituationChange}
                    className="p-2 border border-gray-400 rounded w-full mb-4"
                >
                    <option value="">Select your situation</option>
                    <option value="harassment">I am experiencing harassment</option>
                    <option value="legalAdvice">I need legal advice</option>
                    <option value="support">I need emotional support</option>
                </select>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Get Assistance
                </button>
            </form>

            {/* Response Section */}
            {response && (
                <div className="response-section p-4 border border-gray-300 rounded mt-4">
                    <h2 className="text-xl font-semibold">Assistance Response:</h2>
                    <p>{response}</p>
                </div>
            )}

            <h2 className="text-2xl font-bold mt-6">Important Contacts</h2>
            <ul className="list-disc ml-6 mb-4">
                <li><strong>National Helpline for Women:</strong> 181</li>
                <li><strong>NALSA Helpline:</strong> 15100</li>
                <li><strong>Police Emergency Number:</strong> 100</li>
                <li><strong>Vandrevala Foundation Helpline:</strong> 1860 266 2345</li>
            </ul>

            <h2 className="text-2xl font-bold mt-6">Guidelines for Seeking Help</h2>
            <ul className="list-disc ml-6 mb-4">
                <li>Stay Calm: Try to remain calm and think clearly.</li>
                <li>Document Everything: Keep a record of any incidents, including dates, times, and descriptions.</li>
                <li>Seek Immediate Help: Don’t hesitate to contact the police or a helpline if you feel threatened.</li>
                <li>Know Your Rights: Familiarize yourself with your legal rights and the protections available to you.</li>
                <li>Reach Out: Don't hesitate to talk to friends, family, or a counselor about your situation.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-6">Additional Resources</h2>
            <ul className="list-disc ml-6 mb-4">
                <li><a href="https://www.nalsa.gov.in/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">National Legal Services Authority (NALSA)</a></li>
                <li><a href="https://wcd.nic.in/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Ministry of Women and Child Development</a></li>
                <li><a href="https://www.helpline.gov.in/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Central Government Helpline</a></li>
                <li><a href="https://www.vandrevalafoundation.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Vandrevala Foundation Helpline</a></li>
            </ul>

            <p className="mt-4 font-semibold">
                Remember, you are not alone, and there are resources available to help you.
            </p>
        </div>
    );
};

export default LegalAssistance;