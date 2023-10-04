// MyForm.js

import { useState } from 'react';
import { useRouter } from 'next/router';

const successPageURL = "/success";

function MyForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    color: '',
    size: '',
    quantity: 0,
    phone: '',
    address: '',
    additionalInfo: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendFormData = async () => {
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyAheoJ1RhnSD8N0t5jTx6uU3dRpMFPKxqY9XJWFZADtUhRpwo5WtPlMtqjv1rBeIYmRQ/exec",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("حدث خطأ أثناء إرسال البيانات");
      }

      return response.json();
    } catch (error) {
      throw error;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await sendFormData(); // إرسال البيانات إلى الرابط المستهدف
      router.push(successPageURL);
    } catch (error) {
      console.error("حدث خطأ أثناء إرسال البيانات:", error);
      // يمكنك إضافة إجراءات إضافية هنا إذا حدث خطأ أثناء الإرسال
    }
  };

  return (
    <form method="POST" id="form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="color">Renk:</label>
        <select
          id="color"
          name="color"
          value={formData.color}
          onChange={handleChange}
        >
          <option value="black" style={{ backgroundColor: 'black' }}>
            Siyah
          </option>
          <option value="gray" style={{ backgroundColor: 'gray' }}>
            Gri
          </option>
        </select>
      </div>
      <div>
        <label htmlFor="size">Beden:</label>
        <select
          id="size"
          name="size"
          value={formData.size}
          onChange={handleChange}
        >
          {/* إضافة خيارات الحجم هنا */}
        </select>
      </div>
      <div>
        <input
          type="number"
          id="quantity"
          name="quantity"
          min="1"
          placeholder="Miktar"
          value={formData.quantity}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Telefon Numarası"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="text"
          id="address"
          name="address"
          placeholder="Adres"
          value={formData.address}
          onChange={handleChange}
        />
      </div>
      <div>
        <textarea
          id="additionalInfo"
          name="additionalInfo"
          placeholder="Ek Bilgi"
          value={formData.additionalInfo}
          onChange={handleChange}
        ></textarea>
      </div>
      <div>
        <button type="submit" id="submit">
          Sepete Ekle
        </button>
      </div>
    </form>
  );
}

export default MyForm;
