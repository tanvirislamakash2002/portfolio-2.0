'use client';

import { useForm } from '@tanstack/react-form';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { JSX } from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
}

interface ContactItem {
  icon: JSX.Element;
  title: string;
  value: string;
  link?: string;
}

const ContactMe = () => {
  const form = useForm<ContactFormData>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    },
    onSubmit: async ({ value }) => {
      console.log('Form data:', value);
      toast.success('Message sent successfully!');
      form.reset();
    },
  });

  const contactItems: ContactItem[] = [
    {
      icon: <Phone className="text-primary" size={20} />,
      title: "Phone",
      value: "+880 132 830 2600",
      link: "tel:+8801328302600"
    },
    {
      icon: <Mail className="text-primary" size={20} />,
      title: "Email",
      value: "tanvirislamakash2002@gmail.com",
      link: "mailto:tanvirislamakash2002@gmail.com"
    },
    {
      icon: <MapPin className="text-primary" size={20} />,
      title: "Location",
      value: "Sagarpara, Rajshahi, Bangladesh"
    }
  ];

  return (
    <section id='contact' className="py-20 bg-background px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
          >
            Get In Touch
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full mb-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Have a project in mind or want to discuss opportunities? Let's connect.
          </motion.p>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-card rounded-xl shadow-xl overflow-hidden border"
          >
            <div className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Send Me a Message
              </h3>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  form.handleSubmit();
                }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <form.Field
                      name="firstName"
                      validators={{
                        onChange: ({ value }) => {
                          if (!value) return 'First name is required';
                          return undefined;
                        },
                      }}
                    >
                      {(field) => (
                        <>
                          <Label htmlFor={field.name}>
                            First Name <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id={field.name}
                            name={field.name}
                            type="text"
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(e) => field.handleChange(e.target.value)}
                            className={field.state.meta.errors.length ? "border-destructive" : ""}
                          />
                          {field.state.meta.errors.map((error) => (
                            <p key={error} className="mt-1 text-sm text-destructive">
                              {error}
                            </p>
                          ))}
                        </>
                      )}
                    </form.Field>
                  </div>

                  <div>
                    <form.Field
                      name="lastName"
                      validators={{
                        onChange: ({ value }) => {
                          if (!value) return 'Last name is required';
                          return undefined;
                        },
                      }}
                    >
                      {(field) => (
                        <>
                          <Label htmlFor={field.name}>
                            Last Name <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id={field.name}
                            name={field.name}
                            type="text"
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(e) => field.handleChange(e.target.value)}
                            className={field.state.meta.errors.length ? "border-destructive" : ""}
                          />
                          {field.state.meta.errors.map((error) => (
                            <p key={error} className="mt-1 text-sm text-destructive">
                              {error}
                            </p>
                          ))}
                        </>
                      )}
                    </form.Field>
                  </div>
                </div>

                <div>
                  <form.Field
                    name="email"
                    validators={{
                      onChange: ({ value }) => {
                        if (!value) return 'Email is required';
                        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
                        if (!emailRegex.test(value)) return 'Please enter a valid email address';
                        return undefined;
                      },
                    }}
                  >
                    {(field) => (
                      <>
                        <Label htmlFor={field.name}>
                          Email <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id={field.name}
                          name={field.name}
                          type="email"
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          className={field.state.meta.errors.length ? "border-destructive" : ""}
                        />
                        {field.state.meta.errors.map((error) => (
                          <p key={error} className="mt-1 text-sm text-destructive">
                            {error}
                          </p>
                        ))}
                      </>
                    )}
                  </form.Field>
                </div>

                <div>
                  <form.Field name="phone">
                    {(field) => (
                      <>
                        <Label htmlFor={field.name}>Phone Number</Label>
                        <Input
                          id={field.name}
                          name={field.name}
                          type="tel"
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                        />
                      </>
                    )}
                  </form.Field>
                </div>

                <div>
                  <form.Field
                    name="message"
                    validators={{
                      onChange: ({ value }) => {
                        if (!value) return 'Message is required';
                        return undefined;
                      },
                    }}
                  >
                    {(field) => (
                      <>
                        <Label htmlFor={field.name}>
                          Your Message <span className="text-destructive">*</span>
                        </Label>
                        <Textarea
                          id={field.name}
                          name={field.name}
                          rows={4}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          className={field.state.meta.errors.length ? "border-destructive" : ""}
                        />
                        {field.state.meta.errors.map((error) => (
                          <p key={error} className="mt-1 text-sm text-destructive">
                            {error}
                          </p>
                        ))}
                      </>
                    )}
                  </form.Field>
                </div>

                <form.Subscribe
                  selector={(state) => [state.canSubmit, state.isSubmitting]}
                >
                  {([canSubmit, isSubmitting]) => (
                    <Button type="submit" className="w-full" disabled={!canSubmit}>
                      <Send className="mr-2 h-4 w-4" />
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  )}
                </form.Subscribe>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-card rounded-xl shadow-xl overflow-hidden border h-full"
          >
            <div className="p-8 h-full flex flex-col">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h3>

              <div className="flex-1">
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I'm always excited to connect with like-minded individuals, discuss new opportunities, or collaborate on innovative projects. Whether you have a question, a proposal, or just want to say hello—feel free to reach out!
                  <br /><br />
                  Drop me a message, and I'll get back to you as soon as possible. Let's turn ideas into reality!
                </p>

                <div className="space-y-6">
                  {contactItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted transition-colors duration-200"
                    >
                      <div className="p-3 bg-primary/10 rounded-full">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{item.title}</h4>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="text-muted-foreground hover:text-primary transition-colors duration-200"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{item.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t">
                <h4 className="text-lg font-medium text-foreground mb-4">
                  Follow Me
                </h4>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href="https://www.linkedin.com/in/tanvir-islam-akash2002"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin className="h-5 w-5" />
                    </a>
                  </Button>

                  <Button variant="outline" size="icon" asChild>
                    <a
                      href="https://github.com/tanvirislamakash2002"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <FaGithub className="h-5 w-5" />
                    </a>
                  </Button>

                  <Button variant="outline" size="icon" asChild>
                    <a
                      href="https://www.facebook.com/tanvirislamakash2002/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                    >
                      <FaFacebook className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;