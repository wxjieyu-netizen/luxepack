"use client";

import { useState, FormEvent } from "react";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  projectDetails: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  company?: string;
  projectDetails?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    projectDetails: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
    }

    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = "Please tell us about your project";
    } else if (formData.projectDetails.trim().length < 20) {
      newErrors.projectDetails = "Please provide more details (at least 20 characters)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus("loading");

    try {
      // Replace with your actual Formspree endpoint
      const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          company: formData.company,
          project_details: formData.projectDetails,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          projectDetails: "",
        });
      } else {
        setStatus("error");
        setErrorMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white p-12 shadow-2xl text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
        <h3 className="text-3xl font-playfair mb-4">Thank You!</h3>
        <p className="text-gray-600 text-lg mb-6">
          We've received your enquiry and will get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-brand-gold hover:text-brand-black transition-colors uppercase tracking-widest text-sm font-medium"
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-12 shadow-2xl">
      <h3 className="text-2xl font-playfair mb-10">Send an Enquiry</h3>

      {status === "error" && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-red-800 font-medium">Submission Error</p>
            <p className="text-red-600 text-sm">{errorMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-[10px] uppercase tracking-widest text-gray-500 mb-2 block font-bold">
              First Name *
            </label>
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              className={`w-full border-b py-3 focus:outline-none transition-colors font-light ${
                errors.firstName
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-200 focus:border-brand-gold"
              }`}
              placeholder="John"
              disabled={status === "loading"}
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
            )}
          </div>
          <div>
            <label className="text-[10px] uppercase tracking-widest text-gray-500 mb-2 block font-bold">
              Last Name *
            </label>
            <input
              type="text"
              value={formData.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
              className={`w-full border-b py-3 focus:outline-none transition-colors font-light ${
                errors.lastName
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-200 focus:border-brand-gold"
              }`}
              placeholder="Doe"
              disabled={status === "loading"}
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
            )}
          </div>
        </div>

        <div>
          <label className="text-[10px] uppercase tracking-widest text-gray-500 mb-2 block font-bold">
            Email Address *
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className={`w-full border-b py-3 focus:outline-none transition-colors font-light ${
              errors.email
                ? "border-red-500 focus:border-red-500"
                : "border-gray-200 focus:border-brand-gold"
            }`}
            placeholder="john@brand.com"
            disabled={status === "loading"}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="text-[10px] uppercase tracking-widest text-gray-500 mb-2 block font-bold">
            Brand Name *
          </label>
          <input
            type="text"
            value={formData.company}
            onChange={(e) => handleChange("company", e.target.value)}
            className={`w-full border-b py-3 focus:outline-none transition-colors font-light ${
              errors.company
                ? "border-red-500 focus:border-red-500"
                : "border-gray-200 focus:border-brand-gold"
            }`}
            placeholder="Luxury Co."
            disabled={status === "loading"}
          />
          {errors.company && (
            <p className="text-red-500 text-xs mt-1">{errors.company}</p>
          )}
        </div>

        <div>
          <label className="text-[10px] uppercase tracking-widest text-gray-500 mb-2 block font-bold">
            Project Details *
          </label>
          <textarea
            rows={4}
            value={formData.projectDetails}
            onChange={(e) => handleChange("projectDetails", e.target.value)}
            className={`w-full border-b py-3 focus:outline-none transition-colors font-light resize-none ${
              errors.projectDetails
                ? "border-red-500 focus:border-red-500"
                : "border-gray-200 focus:border-brand-gold"
            }`}
            placeholder="Tell us about your packaging needs, quantities, timeline, and any specific requirements..."
            disabled={status === "loading"}
          />
          {errors.projectDetails && (
            <p className="text-red-500 text-xs mt-1">{errors.projectDetails}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full btn-luxury mt-8 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Submitting...
            </>
          ) : (
            "Submit Enquiry"
          )}
        </button>
      </form>
    </div>
  );
}
