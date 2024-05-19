"use client"

import axios from 'axios';

import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form, FormControl, FormDescription, FormField,
  FormItem, FormLabel, FormMessage,
} from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

type EmailData = { from: string; subject: string; text: string; };

const useSendEmail = (setEmailStatus, setLoading) => async emailData => {
  setLoading(true);
  setEmailStatus('');
  try {
    const response = await axios.post('/api/send-mail', emailData);
    setEmailStatus(response.status === 200 ? 'Email sent successfully' : 'Failed to send email');
  } catch (error) {
    setEmailStatus('Error sending email');
  } finally {
    setLoading(false);
  }
};

type FormValues = { email: string; subject: string; message: string; };

const ContactForm = () => {
  const [emailStatus, setEmailStatus] = useState('');
  const [loading, setLoading] = useState(false);

  // Define a schema for email data
  const formSchema = z.object({
    email: z.string().email(),
    subject: z.string(),
    message: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      subject: "",
      message: "",
    },
  });

  const sendEmail = useSendEmail(setEmailStatus, setLoading);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const emailData: EmailData = {
      from: values.email,
      subject: values.subject,
      text: values.message,
    };
    await sendEmail(emailData);
  }

  const renderAlert = () => {
    if (emailStatus === 'Email sent successfully') {
      return (
        <Alert variant="success">
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>{emailStatus}</AlertDescription>
        </Alert>
      );
    } else if (emailStatus) {
      return (
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{emailStatus}</AlertDescription>
        </Alert>
      );
    }
    return null;
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className='flex space-x-8 md:space-x-0 md:space-y-8 md:flex-col'>
          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel><Text size='sm'>Email</Text></FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Subject */}
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel><Text size='sm'>Subject</Text></FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Message */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel><Text size='sm'>Message</Text></FormLabel>
              <FormControl>
                <Textarea
                  className="resize-none"
                  {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button variant="outline" type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Submit'}
        </Button>
        {renderAlert()}
      </form>
    </Form>
  );
}

export default ContactForm;
