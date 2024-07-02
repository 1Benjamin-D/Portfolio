"use client";

import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";

interface FormErrors {
    user_name?: string;
    user_email?: string;
    message?: string;
}

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [errors, setErrors] = useState<FormErrors>({});
    const [messageSent, setMessageSent] = useState(false);

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const user_name = form.user_name.value.trim();
        const user_email = form.user_email.value.trim();
        const message = form.message.value.trim();
        let formErrors: FormErrors = {};

        if (!user_name) {
            formErrors.user_name = "Le nom est requis.";
        }

        if (!user_email) {
            formErrors.user_email = "L'email est requis.";
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(user_email)) {
                formErrors.user_email = "L'adresse e-mail n'est pas valide.";
            }
        }

        if (!message) {
            formErrors.message = "Le message est requis.";
        }

        setErrors(formErrors);

        if (Object.keys(formErrors).length === 0) {
            setIsSubmitting(true);
            emailjs
                .sendForm(
                    process.env.NEXT_PUBLIC_SERVICE_ID!,
                    process.env.NEXT_PUBLIC_TEMPLATE_ID!,
                    e.currentTarget,
                    process.env.NEXT_PUBLIC_KEY!
                )
                .then(() => {
                    setIsSubmitting(false);
                    form.reset();
                    setErrors({});
                    setMessageSent(true);
                })
                .catch(() => {
                    alert("Une erreur s'est produite. Veuillez réessayer.");
                    setIsSubmitting(false);
                });
        }
    };
    return (
        <div className=" p-4" id="contact">
            <div className="title">
                <h2 className=" font-DeadSpaceTitle text-4xl">C o n t a c t</h2>
            </div>
            <form
                onSubmit={sendEmail}
                className="flex flex-col gap-4 items-center mt-5 text-black"
            >
                <div className="flex flex-col">
                    <span className="title2">
                        <label htmlFor="user_name" className=" text-[#EFEFEF] font-DeadSpaceTitle text-xl">N a m e</label>
                    </span>
                    <input
                        type="text"
                        name="user_name"
                        className="border border-gray-500 md:w-[250px] px-4 py-2 rounded-md"
                        placeholder="Name"
                    />
                    {errors.user_name && <p style={{ color: "red" }}>{errors.user_name}</p>}
                </div>
                <div className="flex flex-col">
                    <span className="title2">
                        <label htmlFor="user_email" className=" text-[#EFEFEF] font-DeadSpaceTitle text-xl">E m a i l</label>
                    </span>
                    <input
                        type="email"
                        name="user_email"
                        className="border border-gray-500 md:w-[250px] px-4 py-2 rounded-md"
                        placeholder="Email"
                    />
                    {errors.user_email && (
                        <p style={{ color: "red" }}>{errors.user_email}</p>
                    )}
                </div>

                <div className="flex flex-col">
                    <span className="title2">
                        <label htmlFor="message" className=" text-[#EFEFEF] font-DeadSpaceTitle text-xl">M e s s a g e</label>
                    </span>
                    <textarea
                        placeholder="Message"
                        name="message"
                        className="border border-gray-500 md:w-[400px] px-4 py-2 rounded-md resize-none"
                    ></textarea>
                    {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
                </div>
                {messageSent && (
                    <p className=" text-green-600">Votre message a été envoyé avec succès!</p>
                )}
                <span className="">
                    <input
                        type="submit"
                        value="S e n d"
                        disabled={isSubmitting}
                        className="border border-gray-500 cursor-pointer px-4 py-2 rounded-md bg-[#F57E00] text-[#000000] font-Luciole text-xl"
                    />
                </span>
            </form>
        </div>
    );
};

export default Contact;
