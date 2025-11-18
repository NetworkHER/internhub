import React from "react";
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

export default function Form() {
  return (
    <div>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="checkout-7j9-card-name-43j">Fullname</FieldLabel>
          <Input
            id="checkout-7j9-card-name-43j"
            placeholder="Enter your full name "
            required
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
            Email Address
          </FieldLabel>
          <Input
            id="checkout-7j9-card-number-uw1"
            placeholder="Enter your email"
            required
          />
        </Field>
        <Field>
          <FieldLabel id="checkout-7j9-card-name-43j">Phone Number</FieldLabel>
          <Input
            id="checkout-7j9-card-number-uw1"
            placeholder="Enter your phone number"
            required
          />
        </Field>
        <Field>
          <FieldLabel id="checkout-7j9-card-name-43j">
            Preferred Role
          </FieldLabel>
          <Input
            id="checkout-7j9-card-number-uw1"
            placeholder="Enter your phone number"
            required
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="checkout-7j9-card-name-43j">Select role</FieldLabel>
           <Select defaultValue="">
          <SelectTrigger id="checkout-exp-month-ts6">
            <SelectValue placeholder="Select a role" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem value="frontend-developer">
              Frontend Developer
            </SelectItem>
            <SelectItem value="data-analyst">Data Analyst</SelectItem>
            <SelectItem value="product-designer">Product Designer</SelectItem>
            <SelectItem value="project-manager">Project Manager</SelectItem>
            <SelectItem value="content-creator">
              Content Creator / Copywriter
            </SelectItem>
            <SelectItem value="backend-developer">Backend Developer</SelectItem>
            <SelectItem value="Social Media Manager">
              Social Media Manager
            </SelectItem>
            <SelectItem value="virtual-assistant">Virtual Assistant</SelectItem>
          </SelectContent>
        </Select>
        </Field>
       
         <button className="block w-full bg-[#6A5ACD] text-white px-6 py-2 rounded-lg hover:bg-[#5a4abd] transition-colors">
              Register
            </button>
      </FieldGroup>
    </div>
  );
}
