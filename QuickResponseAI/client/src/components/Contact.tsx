import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  company: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      await apiRequest("POST", "/api/contact", data);
      
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
        duration: 5000,
      });
      
      reset();
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-extrabold text-gray-900 dark:text-white">
              Get in Touch
            </h2>
            <p className="mt-4 text-xl text-gray-500 dark:text-gray-400 text-balance leading-relaxed max-w-2xl mx-auto">
              Ready to elevate your brand with high-quality CGI? Our team of experts is ready to bring your vision to life.
            </p>
          </div>

          <div className="overflow-hidden rounded-lg shadow-md">
            <div className="md:grid md:grid-cols-2">
              <div className="p-8 bg-primary text-white dark:bg-accent bg-gradient-to-br from-primary to-primary/90 dark:from-accent dark:to-accent/90">
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                    <p className="mb-8">Fill out the form and our team will get back to you within 24 hours.</p>
                    
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <MapPinIcon className="h-5 w-5 mt-1 mr-4" />
                        <p>123 Creative Avenue, Design District, NY 10001</p>
                      </div>
                      <div className="flex items-start">
                        <PhoneIcon className="h-5 w-5 mt-1 mr-4" />
                        <p>+1 (555) 123-4567</p>
                      </div>
                      <div className="flex items-start">
                        <MailIcon className="h-5 w-5 mt-1 mr-4" />
                        <p>contact@cgiadsstudio.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8 bg-background">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name" 
                      {...register("name")} 
                      aria-invalid={errors.name ? "true" : "false"}
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      {...register("email")} 
                      aria-invalid={errors.email ? "true" : "false"}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email.message}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" {...register("company")} />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      rows={4} 
                      {...register("message")} 
                      aria-invalid={errors.message ? "true" : "false"}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive">{errors.message.message}</p>
                    )}
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full font-medium shadow-sm" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
