"use client";

import React, { useState } from "react";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function postForm(body: object) {
  const response = await fetch("/api/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Failed to submit.");
  }

  return result;
}

/* =======================================================
   Nexus Fellowship Form
======================================================= */

export function NexusFellowshipForm({ onSuccess }: { onSuccess?: () => void }) {
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    fullname: "",
    email: "",
    phone: "",
  });

  const handleChange = (field: string, value: string) => {
    setData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const resetForm = () => {
    setData({
      fullname: "",
      email: "",
      phone: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!EMAIL_REGEX.test(data.email)) {
      toast.error("Please enter a valid email.");
      return;
    }

    setLoading(true);

    try {
      await postForm({
        ...data,
        role: "community-member",
      });

      toast.success("Welcome to the community!");
      resetForm();
      onSuccess?.();
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Something went wrong.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">
          Join the Nexus Fellowship Community
        </h2>
        <p className="text-muted-foreground mt-1">
          Join the community for updates, opportunities, and collaborations.
        </p>
      </div>

      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="fullname">Full Name</FieldLabel>
          <Input
            id="fullname"
            value={data.fullname}
            onChange={(e) => handleChange("fullname", e.target.value)}
            placeholder="Enter your full name"
            required
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
          <Input
            id="phone"
            value={data.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            placeholder="Enter your phone number"
            required
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="email">Email Address</FieldLabel>
          <Input
            id="email"
            type="email"
            value={data.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="Enter your email address"
            required
          />
        </Field>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 mt-3 rounded-lg bg-[#6A5ACD] text-white hover:bg-[#5a4abd] transition disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Join Our Community"}
        </button>
      </FieldGroup>
    </form>
  );
}

/* =======================================================
   BuildLabs Form
======================================================= */

export function BuildLabsForm({ onSuccess }: { onSuccess?: () => void }) {
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    fullname: "",
    email: "",
    phone: "",
    role: "",
  });

  const handleChange = (field: string, value: string) => {
    setData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const resetForm = () => {
    setData({
      fullname: "",
      email: "",
      phone: "",
      role: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!EMAIL_REGEX.test(data.email)) {
      toast.error("Please enter a valid email.");
      return;
    }

    if (!data.role) {
      toast.error("Please select a preferred role.");
      return;
    }

    setLoading(true);

    try {
      await postForm(data);

      toast.success("You're on the waitlist!");
      resetForm();
      onSuccess?.();
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Something went wrong.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">
          Join the BuildLabs Internship Waitlist
        </h2>
        <p className="text-muted-foreground mt-1">
          Be among the first to get access when applications open for the next
          cohort of the BuildLabs Internship.
        </p>
      </div>

      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="fullname">Full Name</FieldLabel>
          <Input
            id="fullname"
            value={data.fullname}
            onChange={(e) => handleChange("fullname", e.target.value)}
            placeholder="Enter your full name"
            required
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
          <Input
            id="phone"
            value={data.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            placeholder="Enter your phone number"
            required
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="email">Email Address</FieldLabel>
          <Input
            id="email"
            type="email"
            value={data.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="Enter your email address"
            required
          />
        </Field>

        <Field>
          <FieldLabel>Preferred Role</FieldLabel>

          <Select
            value={data.role}
            onValueChange={(value) => handleChange("role", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a role" />
            </SelectTrigger>

            <SelectContent className="bg-white">
              <SelectItem value="frontend-developer">
                Frontend Developer
              </SelectItem>
              <SelectItem value="backend-developer">
                Backend Developer
              </SelectItem>
              <SelectItem value="product-designer">UI/UX Designer </SelectItem>
              <SelectItem value="project-manager">Project Manager</SelectItem>
              <SelectItem value="data-analyst">Data Analyst</SelectItem>
              {/* <SelectItem value="content-creator">
                Content Creator / Copywriter
              </SelectItem> */}
              <SelectItem value="social-media-manager">
                Social Media Manager
              </SelectItem>
              <SelectItem value="virtual-assistant">
                Virtual Assistant
              </SelectItem>
            </SelectContent>
          </Select>
        </Field>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 mt-3 rounded-lg bg-teal-700 text-white hover:bg-teal-800 transition disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Join Waitlist"}
        </button>
      </FieldGroup>
    </form>
  );
}
