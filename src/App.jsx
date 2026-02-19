import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [roomNumber, setRoomNumber] = useState("");
  const [capacity, setCapacity] = useState("");
  const [hasAC, setHasAC] = useState(false);
  const [hasAttachedWashroom, setHasAttachedWashroom] = useState(false);
  const [allocationResult, setAllocationResult] = useState(null);
  const [students, setStudents] = useState("");
  const [needsAC, setNeedsAC] = useState(false);
  const [needsWashroom, setNeedsWashroom] = useState(false);
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
      capacity: Number(capacity),
      hasAC,
      hasAttachedWashroom,
    };

    setRooms([...rooms, newRoom]);
    setRoomNumber("");
    setCapacity("");
    setHasAC(false);
    setHasAttachedWashroom(false);
    setMessage("Room added successfully");
  };

  const allocateRoom = (students, needsAC, needsWashroom) => {
  const suitableRooms = rooms
    .filter((room) => {
      if (room.capacity < students) return false;
      if (needsAC && !room.hasAC) return false;
      if (needsWashroom && !room.hasAttachedWashroom) return false;
      return true;
    })
    .sort((a, b) => a.capacity - b.capacity);

  if (suitableRooms.length === 0) {
    setAllocationResult({
      success: false,
      message: "No room available",
    });
    return;
  }

  setAllocationResult({
    success: true,
    room: suitableRooms[0],
  });
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

      <label>
        <input
          type="checkbox"
          checked={hasAC}
          onChange={(e) => setHasAC(e.target.checked)}
        />
        AC Available
      </label>

      <label>
        <input
          type="checkbox"
          checked={hasAttachedWashroom}
          onChange={(e) => setHasAttachedWashroom(e.target.checked)}
        />
        Attached Washroom
      </label>


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

      <h3>Allocate Room</h3>
      <input
        type="number"
        placeholder="Number of Students"
        value={students}
        onChange={(e) => setStudents(e.target.value)}
      />

      <label>
        <input
          type="checkbox"
          checked={needsAC}
          onChange={(e) => setNeedsAC(e.target.checked)}
        />
        AC Required
      </label>

      <label>
        <input
          type="checkbox"
          checked={needsWashroom}
          onChange={(e) => setNeedsWashroom(e.target.checked)}
        />
        Attached Washroom Required
      </label>

      <button
        onClick={() =>
          allocateRoom(Number(students), needsAC, needsWashroom)
        }
      >
        Allocate
      </button>
      {allocationResult && (
        <div className="allocation-result">
          {allocationResult.success ? (
            <p>
              Room Allocated: Room {allocationResult.room.roomNumber} (Capacity:{" "}
              {allocationResult.room.capacity})
            </p>
          ) : (
            <p>{allocationResult.message}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
