import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactsSection = () => {
  const { toast } = useToast();
  const formRef = useRef(null);

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormStatus({
      submitting: true,
      success: false,
      error: false,
      message: "",
    });

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setFormStatus({
        submitting: false,
        success: true,
        error: false,
        message: "Message sent successfully",
      });

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      formRef.current.reset(); // Clear the form

    } catch (error) {
      console.error("EmailJS error:", error);

      setFormStatus({
        submitting: false,
        success: false,
        error: true,
        message: "Failed to send message. Please try again.",
      });

      toast({
        title: "Failed to send",
        description: error?.text || "Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-20 md:py-24 relative bg-secondary/40">
      <div className="container max-w-5xl">
        <h2 className="section-title">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="section-subtitle mb-10 md:mb-14">
          I'm always happy to connect! Whether it's for a potential project,
          feedback, or a quick chat, just drop a message.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 text-left">
          {/* LEFT SIDE - CONTACT INFO */}
          <div className="space-y-8">
            <h3 className="text-xl md:text-2xl font-semibold">Contact Information</h3>

            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                  <Mail className="h-5 w-5 md:h-6 md:w-6 text-primary" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:aubreylnastor@gmail.com"
                    className="inline-block py-1 text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    aubreylnastor@gmail.com
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                  <MapPin className="h-5 w-5 md:h-6 md:w-6 text-primary" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-medium">Location</h4>
                  <p className="py-1 text-muted-foreground">Dasmarinas City, Cavite</p>
                </div>
              </li>
            </ul>

            <div>
              <h4 className="font-medium mb-3">Connect With Me</h4>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/aubrey-nastor-05208324b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn (opens in a new tab)"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                >
                  <Linkedin size={20} aria-hidden="true" />
                </a>
                <a
                  href="https://www.instagram.com/itsobrii/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram (opens in a new tab)"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                >
                  <Instagram size={20} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - CONTACT FORM */}
          <div className="bg-card p-5 sm:p-8 rounded-xl border border-border shadow-xs">
            <h3 className="text-xl md:text-2xl font-semibold mb-6">Send a Message</h3>

            <form ref={formRef} className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-base focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="John Batumbakal..."
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  autoComplete="email"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-base focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="john@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-base focus:outline-none focus:ring-2 focus:ring-primary resize-y"
                  placeholder="Hello Aubrey, I would like to discuss..."
                />
              </div>

              <button
                type="submit"
                disabled={formStatus.submitting}
                className={cn("cosmic-button w-full")}
              >
                {formStatus.submitting ? "Sending..." : "Send Message"}
                <Send size={16} aria-hidden="true" />
              </button>

              <p className="sr-only" role="status" aria-live="polite">
                {formStatus.message}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
