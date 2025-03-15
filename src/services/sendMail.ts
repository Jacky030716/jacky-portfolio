import axios from "axios";
import { toast } from "sonner";
import { ContactFormData } from "@/modules/components/ContactForm";

export const sendMail = async (formData: ContactFormData) => {
  try {
    const response = await axios.post("/api/contact", formData);

    if (response.status === 200) {
      toast.success("Thank you for your message! I'll get back to you soon.");
    } else {
      toast.error("Something went wrong. Please try again later.");
    }
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};
