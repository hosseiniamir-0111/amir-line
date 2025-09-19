import React, { useState } from "react";
import { supabase } from "./supabaseClient";

function App() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase
      .from("messages")
      .insert([{ text: message }]);

    if (error) {
      console.error(error);
      setStatus("❌ خطا در ثبت پیام");
    } else {
      setStatus("✅ پیام با موفقیت ثبت شد!");
      setMessage(""); // بعد از ارسال خالی بشه
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
        <button
          type="submit"
          style={{ padding: "10px 20px", cursor: "pointer" }}
        >
          ارسال
        </button>
      </form>
      {status && <p style={{ marginTop: "20px" }}>{status}</p>}
    </div>
  );
}

export default App;