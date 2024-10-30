"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { BriefcaseBusiness, Mail } from "lucide-react";
import { useState } from "react";

const schema = z.object({
  email: z.string().email("Invalid email address"),
});

type FormData = z.infer<typeof schema>;

export default function SubscribeForm() {
  const [message, setMessage] = useState<{ type: string; text: string } | null>(
    null
  );
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const response = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      setMessage({
        type: "error",
        text: "Subscription failed. Please try again.",
      });
      console.error("Subscription failed");
    } else {
      setMessage({ type: "success", text: "Thank you for subscribing!" });
      console.log("Subscription successful");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="flex flex-col space-x-4 xl:flex-row">
        <div className="flex flex-col sm:flex-row items-center space-x-4 sm:mb-4">
          <label
            htmlFor="email"
            className="text-gray-300 mb-2 sm:mb-0 transition-all duration-300 hover:text-blue-500 hover:scale-105 hover:font-bold"
          >
            Subscribe me
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            placeholder="Enter your email"
            className="input flex-1 w-full lg:w-96 p-2 border rounded mb-2 sm:mb-0"
          />
          {errors.email && (
            <span className="text-red-500">
              {errors.email.message as React.ReactNode}
            </span>
          )}
        </div>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-outline btn-primary rounded-full transition-all duration-300 flex items-center justify-center text-center"
          >
            <Mail /> Subscribe
          </button>
          <a
            href="/"
            className="btn btn-outline btn-primary rounded-full transition-all duration-300 flex items-center justify-center"
          >
            <BriefcaseBusiness /> Portfolio
          </a>
        </div>
      </div>
      {message && (
        <div
          className={`mt-4 text-lg ${message.type === "success" ? "alert alert-success" : "alert alert-error"}`}
        >
          {message.text}
        </div>
      )}
    </form>
  );
}
