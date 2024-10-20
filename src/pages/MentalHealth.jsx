import React, { useState } from 'react';


const MentalHealth = () => {
    const [mood, setMood] = useState('');
    const [feelings, setFeelings] = useState('');
    const [notes, setNotes] = useState('');
    const [entries, setEntries] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newEntry = { mood, feelings, notes, date: new Date().toLocaleString() };
        setEntries([...entries, newEntry]);
        setMood('');
        setFeelings('');
        setNotes('');
    };

    return (
        <div className="w-full h-screen bg-secondary flex items-center">
            <div className="container mx-auto w-1/2 p-6 bg-background rounded shadow-lg"> {/* Center and set width */}
                <h2 className="text-2xl font-bold mb-4">Mental Health Tracker</h2>
                <form onSubmit={handleSubmit} className="mb-4">
                    <div className="mb-4">
                        <label className="block font-semibold">Mood:</label>
                        <input 
                            type="text" 
                            value={mood} 
                            onChange={(e) => setMood(e.target.value)} 
                            required 
                            className="p-2 border border-gray-400 rounded w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-semibold">Feelings:</label>
                        <textarea 
                            value={feelings} 
                            onChange={(e) => setFeelings(e.target.value)} 
                            required 
                            className="p-2 border border-gray-400 rounded w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-semibold">Notes:</label>
                        <textarea 
                            value={notes} 
                            onChange={(e) => setNotes(e.target.value)} 
                            className="p-2 border border-gray-400 rounded w-full"
                        />
                    </div>
                    <button type="submit" className="bg-secondary text-white px-4 py-2 rounded hover:bg-blue-600">
                        Add Entry
                    </button>
                </form>

                <h3 className="text-xl font-semibold mb-2">Entries:</h3>
                <ul>
                    {entries.map((entry, index) => (
                        <li key={index} className="mb-4 p-4 border border-gray-200 rounded">
                            <strong>{entry.date}</strong> - Mood: {entry.mood}
                            <p className="mt-2"><strong>Feelings:</strong> {entry.feelings}</p>
                            <p><strong>Notes:</strong> {entry.notes}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MentalHealth;
