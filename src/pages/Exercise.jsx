import React, { useState } from 'react';

// Sample exercises data with repetitions
const exercisesData = [
    { id: 1, name: 'Push-Ups', description: 'Great for building upper body strength.', repetitions: 10 },
    { id: 2, name: 'Squats', description: 'Effective for leg and glute strength.', repetitions: 15 },
    { id: 3, name: 'Plank', description: 'Strengthens the core and improves stability.', repetitions: '30 seconds' },
    { id: 4, name: 'Lunges', description: 'Targets legs and glutes, enhancing balance.', repetitions: 12 },
    { id: 5, name: 'Jumping Jacks', description: 'A full-body workout that increases heart rate.', repetitions: 20 },
];

export default function Exercise() {
    const [completedExercises, setCompletedExercises] = useState([]);
    const [progress, setProgress] = useState(0);

    const handleCompleteExercise = (exercise) => {
        if (!completedExercises.includes(exercise.id)) {
            setCompletedExercises((prev) => [...prev, exercise.id]);
            setProgress(((completedExercises.length + 1) / exercisesData.length) * 100);
        }
    };

    // Calculate total exercises
    const totalExercises = exercisesData.length;

    return (
        <div className="exercise-section p-6 bg-gray-50 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold underline mb-4 text-center">Personalized Exercise Planner</h1>
           
            {/* Summary Section */}
            <div className="summary mb-4 p-4 border border-gray-300 rounded bg-white shadow-sm">
                <h2 className="text-xl font-semibold">Today's Exercise Summary</h2>
                <p className="text-gray-700">{`Total Exercises: ${totalExercises}`}</p>
                <ul className="mt-2 list-disc list-inside">
                    {exercisesData.map(exercise => (
                        <li key={exercise.id} className="text-gray-800">
                            {`${exercise.repetitions} ${exercise.name}`}
                        </li>
                    ))}
                </ul>
            </div>

            <p className="mb-4 text-center text-lg text-gray-700">Here are your recommended exercises for today:</p>
            <ul className="exercise-list mb-4">
                {exercisesData.map(exercise => (
                    <li key={exercise.id} className="mb-2 flex justify-between items-center p-4 border border-gray-300 rounded bg-white shadow-sm">
                        <div className="cursor-pointer">
                            <h2 className="text-xl font-semibold">{exercise.name}</h2>
                            <p className="text-gray-600">{exercise.description}</p>
                            <p className="text-gray-500">{`Repetitions: ${exercise.repetitions}`}</p>
                        </div>
                        <button
                            className={`bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 ${
                                completedExercises.includes(exercise.id) ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                            onClick={() => handleCompleteExercise(exercise)}
                            disabled={completedExercises.includes(exercise.id)}
                        >
                            {completedExercises.includes(exercise.id) ? 'Completed' : 'Complete'}
                        </button>
                    </li>
                ))}
            </ul>

            {/* Progress Tracker */}
            <div className="progress-tracker mt-6">
                <h2 className="text-xl font-semibold">Progress Tracker</h2>
                <div className="bg-gray-200 rounded-full h-4 mb-2">
                    <div
                        className="bg-green-500 h-4 rounded-full"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
                <p className="mt-1 text-gray-700">{`Progress: ${progress.toFixed(0)}%`}</p>
            </div>

            {/* Completed Exercises Section */}
            <h2 className="text-xl font-semibold mt-6">Completed Exercises</h2>
            <ul className="completed-exercises-list">
                {completedExercises.length === 0 ? (
                    <p className="text-gray-700">No exercises completed yet.</p>
                ) : (
                    completedExercises.map((exerciseId, index) => {
                        const exercise = exercisesData.find((ex) => ex.id === exerciseId);
                        return (
                            <li key={index} className="text-green-700">{exercise.name}</li>
                        );
                    })
                )}
            </ul>
        </div>
    );
}