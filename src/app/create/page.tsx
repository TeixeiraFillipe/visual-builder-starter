"use client";
import { updateContent } from "@/components/contentType";
import React, { useState } from "react";

export default function Create() {
  const [componentId, setComponentId] = useState('');
  const [componentName, setComponentName] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/createComponent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ componentId, componentName }),
      });

      const result = await response.json();

      if (response.ok) {
        console.log('Command executed successfully');
        updateContent(componentName);
      } else {
        console.log(`Error: ${result.error}`);
      }
    } catch (error) {
      console.error('Something went wrong');
    }
  }

  return (
    <div className="flex flex-col items-center justify-center p-[120px] bg-background">
      <div className="max-w-lg w-full space-y-6 p-6 rounded-lg shadow-lg bg-card bg-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Create a Component</h1>
          <p>Enter the details below to create a new component.</p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid gap-1.5">
            <label className="font-bold" htmlFor="component-id">Component ID</label>
            <input
              id="component-id"
              type="text"
              placeholder="Enter the v0 ID"
              className="w-full bg-[#f2f2f2] border-[#000] border-[1px] p-2 rounded-[5px]"
              onChange={(e) => setComponentId(e.target.value)}
            />
          </div>
          <div className="grid gap-1.5">
            <label className="font-bold" htmlFor="component-name">Component Name</label>
            <input
              id="component-name"
              type="text"
              placeholder="Enter a name"
              className="w-full bg-[#f2f2f2] border-[#000] border-[1px] p-2 rounded-[5px]"
              onChange={(e) => setComponentName(e.target.value)}
            />
          </div>
          <button type="submit" className="w-full bg-[#000] text-[#fff] rounded-[5px] p-2">
            Create Component
          </button>
        </form>
      </div>
    </div>
  );
}
