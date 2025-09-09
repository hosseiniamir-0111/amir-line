import React from "react";
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

function App() {
  const addProduct = async () => {
    console.log("✅ دکمه کلیک شد، وارد addProduct شدیم");
    try {
      const docRef = await addDoc(collection(db, "products"), {
        name: "کتونی آدیداس",
        price: 500,
        stock: 15,
      });
      console.log("محصول ذخیره شد با id:", docRef.id);
      alert("محصول ذخیره شد ✅");
    } catch (e) {
      console.error("❌ خطا در ذخیره:", e);
      alert("خطا: " + e.message);
    }
  };

  return (
    <div>
      <h1>فروشگاه امیر</h1>
      <button onClick={addProduct}>اضافه کردن محصول</button>
    </div>
  );
}

export default App;
