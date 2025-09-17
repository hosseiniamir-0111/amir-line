import { useState } from "react";
import { supabase } from "./supabaseClient";

function App() {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (!value) {
      setMessage("⚠️ لطفا مقداری وارد کنید");
      return;
    }

    const { data, error } = await supabase
      .from("messages") // اسم جدولت داخل supabase
      .insert([{ text: value }]);

    if (error) {
      console.error(error);
      setMessage("❌ خطا در ثبت");
    } else {
      setMessage("✅ با موفقیت ثبت شد");
      setValue("");
    }
  };

  return (
    <div className="p-6 flex flex-col gap-4">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border p-2 rounded"
        placeholder="چیزی بنویس..."
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white p-2 rounded"
      >
        ارسال
      </button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;