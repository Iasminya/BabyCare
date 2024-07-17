import React, { useState } from 'react'

const Calendar = ({ history }) => {
    // State to hold events
    const [events, setEvents] = useState([
        { day: 15, event: 'Nascimento!' },
        { day: 15, event: 'Vacina BCG' },
        { day: 25, event: 'Vacina Hepatite B' },
    ])

    // State to manage popup visibility and content
    const [selectedDay, setSelectedDay] = useState(null)

    const addEvent = (day) => {
        const event = prompt(`Enter event for ${day}:`)
        if (event) {
            const newEvent = {
                day: day,
                event: event,
            }
            setEvents([...events, newEvent])
        }
    }

    const openPopup = (day) => {
        setSelectedDay(day)
    }

    const closePopup = () => {
        setSelectedDay(null)
    }

    // Generate days for July 2024 (assuming a 31-day month)
    const days = Array.from({ length: 31 }, (_, index) => index + 1)

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-3xl font-bold mb-4">July 2024</h1>
            <div className="max-w-screen-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="grid grid-cols-7  border-0">
                    {/* Weekday headers */}
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(
                        (day, index) => (
                            <div
                                key={index}
                                className=" border-b border-l text-sm font-medium text-center"
                            >
                                {day}
                            </div>
                        )
                    )}
                    {/* Days grid */}
                    {days.map((day) => (
                        <div
                            key={day}
                            className="border-b border-l text-sm text-center cursor-pointer h-[90px] w-[55px]"
                            onClick={() => openPopup(day)}
                        >
                            <div className="font-semibold mb-1">{day}</div>
                            {/* Display events for the selected day */}
                            <div className="text-xs overflow-hidden overflow-ellipsis whitespace-nowrap">
                                {events
                                    .filter((event) => event.day === day)
                                    .map((event, index) => (
                                        <div key={index} className="mt-1">
                                            {event.event}
                                        </div>
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button className="mt-4 bg-blue-200 hover:bg-blue-300 text-gray-800 py-2 px-4 rounded-md">
                Adicionar evento
            </button>
            <button
                onClick={() => history.push('/')}
                className="mt-4 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-md"
            >
                Home
            </button>

            {/* Popup for selected day events */}
            {selectedDay !== null && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded-lg shadow-lg max-w-sm w-full">
                        <h2 className="text-lg font-bold mb-2">
                            Eventos do dia {selectedDay}
                        </h2>
                        <div className="text-sm">
                            {events
                                .filter((event) => event.day === selectedDay)
                                .map((event, index) => (
                                    <div key={index} className="mb-1">
                                        {event.event}
                                    </div>
                                ))}
                        </div>
                        <button
                            onClick={closePopup}
                            className="mt-4 bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded-sm text-xs"
                        >
                            Fechar
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Calendar
