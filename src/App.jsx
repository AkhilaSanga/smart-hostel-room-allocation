import { useState } from "react";
import "./App.css";

function App() {
  const [roomNumber, setRoomNumber] = useState("");
  const [capacity, setCapacity] = useState("");
  const [rooms, setRooms] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!roomNumber || !capacity) return;

    const newRoom = {
      id: Date.now(),
      roomNumber,
      capacity,
    };

    setRooms([...rooms, newRoom]);

    // Reset form
    setRoomNumber("");
    setCapacity("");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      {/* Page Title */}
      <h1>Room Management System</h1>

      {/* Section 1: Add Room Form */}
      <section style={{ marginBottom: "30px" }}>
        <h2>Add New Room</h2>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "10px" }}>
            <label>Room Number:</label>
            <br />
            <input
              type="text"
              value={roomNumber}
              onChange={(e) => setRoomNumber(e.target.value)}
              placeholder="Enter room number"
            />
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label>Capacity:</label>
            <br />
            <input
              type="number"
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
              placeholder="Enter capacity"
            />
          </div>

          <button type="submit">Add Room</button>
        </form>
      </section>

      {/* Section 2: Room List */}
      <section>
        <h2>Available Rooms</h2>

        {rooms.length === 0 ? (
          <p>No rooms added yet.</p>
        ) : (
          <ul>
            {rooms.map((room) => (
              <li key={room.id}>
                Room {room.roomNumber} — Capacity: {room.capacity}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

export default App;
