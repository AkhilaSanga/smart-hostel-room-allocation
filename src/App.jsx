import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [roomNumber, setRoomNumber] = useState("");
  const [capacity, setCapacity] = useState("");
  const [rooms, setRooms] = useState(() => {
  const savedRooms = localStorage.getItem("rooms");
  return savedRooms ? JSON.parse(savedRooms) : [];
});

useEffect(() => {
  localStorage.setItem("rooms", JSON.stringify(rooms));
}, [rooms]);
  const [message, setMessage] = useState("");

  const handleAddRoom = (e) => {
    e.preventDefault();

    if (!roomNumber || !capacity) {
      setMessage("Please fill all fields");
      return;
    }

    const newRoom = {
      id: Date.now(),
      roomNumber,
      capacity,
    };

    setRooms([...rooms, newRoom]);
    setRoomNumber("");
    setCapacity("");
    setMessage("Room added successfully");
  };

  const handleDeleteRoom = (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this room?"
  );

  if (!confirmDelete) return;

  const updatedRooms = rooms.filter((room) => room.id !== id);
  setRooms(updatedRooms);
  setMessage("Room deleted successfully");
};

  return (
    <div className="container">
      <h2>Smart Hostel Room Allocation</h2>

      <form onSubmit={handleAddRoom}>
        <input
          type="text"
          placeholder="Room Number"
          value={roomNumber}
          onChange={(e) => setRoomNumber(e.target.value)}
        />

        <input
          type="number"
          placeholder="Capacity"
          value={capacity}
          onChange={(e) => setCapacity(e.target.value)}
        />

        <button type="submit">Add Room</button>
      </form>

      {message && <p className="message">{message}</p>}

      <h3>Room List</h3>

      {rooms.length === 0 ? (
        <p>No rooms added yet.</p>
      ) : (
        <ul className="room-list">
          {rooms.map((room) => (
            <li key={room.id} className="room-item">
              <span>
                Room {room.roomNumber} — Capacity: {room.capacity}
              </span>
              <button
                className="delete-btn"
                onClick={() => handleDeleteRoom(room.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
