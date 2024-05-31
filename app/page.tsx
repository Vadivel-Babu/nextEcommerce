"use client";
import Productlist from "@/components/Productlist";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <main className="py-3 px-4">
      <ToastContainer />
      <Productlist />
    </main>
  );
}
