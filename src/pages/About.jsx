import React, { useState } from 'react';

const About = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');

    // Handlers for input changes
    const handleNameChange = (event) => setName(event.target.value);
    const handleEmailChange = (event) => setEmail(event.target.value);
    const handleMessageChange = (event) => setMessage(event.target.value);

    // Handler for form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        if (name && email && message) {
            setResponse('Thank you for your message! We will get back to you soon.');
            setName('');
            setEmail('');
            setMessage('');
        } else {
            setResponse('Please fill in all fields before submitting.');
        }
    };

    return (
        <div className="container mx-auto p-6">
            {/* About Us Section */}
            <section className="about-us mb-12 bg-gray-100 p-6 rounded-lg shadow-md">
                <h1 className="text-4xl font-bold mb-4">About Us</h1>
                <p className="mb-4">
                    Empowering Women Through Comprehensive Security and Wellness Solutions. Our platform
                    ensures the safety and well-being of women by combining features such as real-time
                    location tracking, emergency alerts, and personalized wellness tracking for menstrual
                    cycles, mental health, and fitness.
                </p>
                <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
                <p className="mb-4">
                    To provide a safe and supportive environment where women can thrive, access essential
                    resources, and connect with peers. We are committed to empowering women through technology
                    and community support.
                </p>
                <h2 className="text-2xl font-semibold mb-2">Our Features</h2>
                <ul className="list-disc list-inside mb-4">
                    <li>Real-Time Tracking and Safe Routes</li>
                    <li>Health and Mental Wellness Tracking</li>
                    <li>Personalized Fitness and Nutrition Plans</li>
                    <li>Community Support and Safe Spaces</li>
                    <li>Legal Assistance and Resources</li>
                    <li>Job and Career Support</li>
                </ul>
                <h2 className="text-2xl font-semibold mb-2">Meet Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="team-member bg-white p-4 rounded-lg shadow">
                        <h3 className="font-bold">Vishwesh Nair</h3>
                        <p>Passionate about women's rights and empowerment.</p>
                    </div>
                    <div className="team-member bg-white p-4 rounded-lg shadow">
                        <h3 className="font-bold">Vir Bhalani</h3>

                        <p>Technology enthusiast with a focus on safety solutions.</p>
                    </div>
                    <div className="team-member bg-white p-4 rounded-lg shadow">
                        <h3 className="font-bold">Aanish Bangre</h3>
                        <p>Dedicated to building supportive communities for women.</p>
                    </div>
                    <div className="team-member bg-white p-4 rounded-lg shadow">
                        <h3 className="font-bold">Daksh Jain</h3>
                        <p>Curious about tech innovation, driving forward safe and impactful solutions.</p>
                    </div>
                </div>
            </section>

            {/* Contact Us Section */}
            <section className="contact-us mb-12 bg-gray-100 p-6 rounded-lg shadow-md">
                <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                <p className="mb-4">
                    We’d love to hear from you! Please fill out the form below or reach out through the contact information provided.
                </p>

                {/* Contact Information */}
                <div className="contact-info mb-6">
                    <h2 className="text-xl font-semibold">Get in Touch</h2>
                    <p><strong>Email:</strong> support@example.com</p>
                    <p><strong>Phone:</strong> +91 123 456 7890</p>
                    <p><strong>Address:</strong>Sardar Patel Institute of Technology Bhavan’s Campus, Munshi Nagar, Andheri (West)</p>
                </div>

                {/* Social Media Links */}
                <div className="social-media mb-6">
                    <h2 className="text-xl font-semibold">Follow Us</h2>
                    <div className="flex space-x-4">
                        <a href="#" className="text-primary">Facebook</a>
                        <a href="#" className="text-primary">Twitter</a>
                        <a href="#" className="text-primary">Instagram</a>
                    </div>
                </div>

                {/* FAQs Section */}
                <div className="faqs mb-6">
                    <h2 className="text-xl font-semibold">Frequently Asked Questions</h2>
                    <ul className="list-disc list-inside">
                        <li><strong>How can I report an issue?</strong> You can contact us via email or through our platform.</li>
                        <li><strong>What services do you offer?</strong> We provide safety tracking, wellness support, and community resources.</li>
                        <li><strong>How do I become a member?</strong> Sign up on our website to join our community.</li>
                    </ul>
                </div>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="mb-4">
                    <div className="mb-4">
                        <label className="block font-semibold" htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={handleNameChange}
                            className="p-2 border border-gray-400 rounded w-full"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-semibold" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                            className="p-2 border border-gray-400 rounded w-full"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-semibold" htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={handleMessageChange}
                            className="p-2 border border-gray-400 rounded w-full h-24"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Send Message
                    </button>
                </form>

                {/* Response Section */}
                {response && (
                    <div className="response-message mt-4">
                        <p className="text-green-500">{response}</p>
                    </div>
                )}
            </section>
        </div>
    );
};

export default About;