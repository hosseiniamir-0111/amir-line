import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";

// ← اینجا URL و کلید anon خودتون رو جایگزین کنید
const supabaseUrl = "https://engzmpevxrihutenblxb.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVuZ3ptcGV2eHJpaHV0ZW5ibHhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc4NjU3OTEsImV4cCI6MjA3MzQ0MTc5MX0.c-NpqRXOMPWYax-EYvOU28qW8UbcIPlHg33UW0AT3As";
const supabase = createClient(supabaseUrl, supabaseKey);

function App() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    if (!message) {
      alert("لطفاً یک متن وارد کنید!");
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("messages") // ← نام جدول خودتون
        .insert([{ text: message }]);

      if (error) {
        console.error("Error inserting data:", error);
        alert("خطا در ثبت پیام!");
      } else {
        console.log("Data inserted:", data);
        alert("پیام با موفقیت ثبت شد!");
        setMessage(""); // پاک کردن input بعد از ثبت
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      alert("خطای غیرمنتظره!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>تست ثبت پیام در Supabase</h1>
      <input
        type="text"
        placeholder="پیام خود را وارد کنید"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ padding: "10px", width: "300px", marginRight: "10px" }}
      />
      <button onClick={handleClick} disabled={loading} style={{ padding: "10px" }}>
        {loading ? "در حال ثبت..." : "ثبت پیام"}
      </button>
    </div>
  );
}

export default App;