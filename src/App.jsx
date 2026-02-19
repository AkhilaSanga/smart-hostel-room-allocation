import { useState } from "react";
import AddRoom from "./components/AddRoom";
import RoomList from "./components/RoomList";
import SearchAllocate from "./components/SearchAllocate";
import "./styles/main.css";

function App() {
  const [rooms, setRooms] = useState([]);

  return (
    <div className="container">
      <h1>Smart Hostel Room Allocation System</h1>

      <AddRoom rooms={rooms} setRooms={setRooms} />
      <RoomList rooms={rooms} />
      <SearchAllocate rooms={rooms} />
    </div>
  );
}

export default App;
