"use client";
import React, { useState } from "react";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FormData {
  fullname: string;
  email: string;
  phone: string;
  role: string;
}

export default function Form() {
  const [formData, setFormData] = useState<FormData>({
    fullname: '',
    email: '',
    phone: '',
    role: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value, 
    }));
  };

  
  const handleSelectChange = (value: string) => {
    setFormData(prevData => ({
      ...prevData,
      role: value,
    }));
  };

  const handleOnSubmit = async (e: React.FormEvent) => {
    console.log('Form submission initiated');
    e.preventDefault(); 



    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }
      const data = await response.json();
      console.log('Email sent successfully:', data);
      
      setFormData({
        fullname: '',
        email: '',
        phone: '',
        role: '',
      });

    } catch (error) {
      console.log('Error sending email', error);

    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center">Register or Join the waitlist</h1>
      <p className="text-center pb-8">Fill this form to register or Join waitlist</p>
      
      <form onSubmit={handleOnSubmit}> 
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="fullname">Fullname</FieldLabel>
            <Input
              id="fullname" 
              placeholder="Enter your full name"
              required
              value={formData.fullname} 
              onChange={handleInputChange} 
            />
          </Field>
          
          <Field>
            <FieldLabel htmlFor="email">Email Address</FieldLabel>
            <Input
              id="email" 
              type="email"
              placeholder="Enter your email"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
          </Field>
          
          <Field>
            <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
            <Input
              id="phone" 
              type="tel" 
              placeholder="Enter your phone number"
              required
              value={formData.phone}
              onChange={handleInputChange}
            />
          </Field>
          
        
          <Field>
            <FieldLabel htmlFor="role">Preferred Role</FieldLabel>
           
            <Select 
              value={formData.role} 
              onValueChange={handleSelectChange}
            >
              <SelectTrigger id="role"> 
                <SelectValue placeholder="Select a role" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="frontend-developer">Frontend Developer</SelectItem>
                <SelectItem value="data-analyst">Data Analyst</SelectItem>
                <SelectItem value="product-designer">Product Designer</SelectItem>
                <SelectItem value="project-manager">Project Manager</SelectItem>
                <SelectItem value="content-creator">Content Creator / Copywriter</SelectItem>
                <SelectItem value="backend-developer">Backend Developer</SelectItem>
                <SelectItem value="social-media-manager">Social Media Manager</SelectItem>
                <SelectItem value="virtual-assistant">Virtual Assistant</SelectItem>
              </SelectContent>
            </Select>
          </Field>
          
          <button 
            type="submit" 
            className="block w-full bg-[#6A5ACD] text-white px-6 py-2 rounded-lg hover:bg-[#5a4abd] transition-colors"
          >
            Register
          </button>
        </FieldGroup>
      </form>
    </div>
  );
}