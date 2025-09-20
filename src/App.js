import React, { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [status, setStatus] = useState("");

  // بار اول پیام‌ها رو بگیر
  useEffect(() => {
    const fetchMessages = async () => {
      let { data } = await supabase
        .from("messages")
        .select("*")
        .order("created_at", { ascending: true });
      setMessages(data);
    };
    fetchMessages();

    // Realtime subscription
    const subscription = supabase
      .from("messages")
      .on("INSERT", (payload) => {
        setMessages((prev) => [...prev, payload.new]);
      })
      .subscribe();

    return () => {
      supabase.removeSubscription(subscription);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase
      .from("messages")
      .insert([{ text: message }]);

    if (error) {
      setStatus("❌ خطا در ثبت پیام");
    } else {
      setStatus("✅ پیام با موفقیت ثبت شد!");
      setMessage("");
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>ارسال پیام به Supabase</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="پیام خود را وارد کنید"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{ padding: "10px", width: "250px", marginRight: "10px" }}
        />
        <button type="submit" style={{ padding: "10px 20px" }}>
          ارسال
        </button>
      </form>
      {status && <p style={{ marginTop: "20px" }}>{status}</p>}

      <h2>پیام‌ها:</h2>
      <ul>
        {messages.map((m) => (
          <li key={m.id}>{m.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;