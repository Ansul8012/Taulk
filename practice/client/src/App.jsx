import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { Container, TextField, Button, Typography, Box } from "@mui/material";

// socket connection
const socket = io("http://localhost:3000");

function App() {
  const [myId, setMyId] = useState("");
  const [targetId, setTargetId] = useState("");
  const [input, setInput] = useState("");
  const [msg, setMessage] = useState("");

  const handleSubmit = () => {
    if (!input || !targetId) return;

    socket.emit("privateMessage", {
      toSocketId: targetId,
      message: input,
    });

    setInput("");
  };

  useEffect(() => {
    socket.on("connect", () => {
      setMyId(socket.id);
      console.log("Connected:", socket.id);
    });

    socket.on("receiveMessage", (data) => {
      setMessage(`From ${data.from}: ${data.message}`);
    });

    return () => {
      socket.off("connect");
      socket.off("receiveMessage");
    };
  }, []);

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h5" gutterBottom>
        Private Socket.io Chat
      </Typography>

      <Typography variant="body2" sx={{ mb: 2 }}>
        <strong>Your Socket ID:</strong> {myId}
      </Typography>

      <Box
        sx={{
          border: "1px solid #ccc",
          padding: 2,
          borderRadius: 2,
          mb: 2,
        }}
      >
        <Typography>{msg || "No message yet"}</Typography>
      </Box>

      <TextField
        fullWidth
        label="Receiver Socket ID"
        value={targetId}
        onChange={(e) => setTargetId(e.target.value)}
        sx={{ mb: 1 }}
      />

      <TextField
        fullWidth
        label="Message"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        sx={{ mb: 1 }}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
      />

      <Button variant="contained" fullWidth onClick={handleSubmit}>
        Send Private Message
      </Button>
    </Container>
  );
}

export default App;
