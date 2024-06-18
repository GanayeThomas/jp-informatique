"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "@/components/Navbar";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [selectedOption, setSelectedOption] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    const { user_name, user_email, message, dropdown_menu } = e.target.elements;
    let formErrors = {};

    if (!user_name.value.trim()) {
      formErrors.user_name = "Le nom est requis.";
    }

    if (!user_email.value.trim()) {
      formErrors.user_email = "L'email est requis.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(user_email.value)) {
        formErrors.user_email = "L'adresse e-mail n'est pas valide.";
      }
    }

    if (!message.value.trim()) {
      formErrors.message = "Le message est requis.";
    }

    if (!dropdown_menu.value.trim()) {
      formErrors.dropdown_menu = "Une option doit être sélectionnée.";
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      setIsSubmitting(true);
      emailjs
        .sendForm("", "", e.target, "")
        .then(() => {
          setIsSubmitting(false);
          e.target.reset();
          setErrors({}); // Réinitialiser les erreurs
          setSelectedOption(""); // Réinitialiser le menu déroulant
          alert("Votre message a été envoyé avec succès!");
        })
        .catch(() => {
          alert("Une erreur s'est produite. Veuillez réessayer.");
          setIsSubmitting(false);
        });
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen">
        <form
          onSubmit={sendEmail}
          className="flex flex-col gap-4 items-center mt-5"
        >
          <div>
            <input
              type="text"
              name="user_name"
              className="border border-gray-500 w-[250px] px-4 py-2 rounded-md"
              placeholder="Nom"
            />
            {errors.user_name && (
              <p style={{ color: "red" }}>{errors.user_name}</p>
            )}
          </div>
          <div>
            <input
              type="email"
              name="user_email"
              className="border border-gray-500 w-[250px] px-4 py-2 rounded-md"
              placeholder="Email"
            />
            {errors.user_email && (
              <p style={{ color: "red" }}>{errors.user_email}</p>
            )}
          </div>
          <div>
            <select
              name="dropdown_menu"
              className="border border-gray-500 w-[250px] px-4 py-2 rounded-md"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <option value="">Sélectionnez une option</option>
              <option value="option1">Réparation</option>
              <option value="option2">Installation</option>
            </select>
            {errors.dropdown_menu && (
              <p style={{ color: "red" }}>{errors.dropdown_menu}</p>
            )}
          </div>
          <div>
            <textarea
              placeholder="Message"
              name="message"
              className="border border-gray-500 w-[400px] px-4 py-2 rounded-md"
            ></textarea>
            {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
          </div>
          <input
            type="submit"
            value="Envoyer"
            disabled={isSubmitting}
            className="border border-gray-500 cursor-pointer px-4 py-2 rounded-md"
          />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
