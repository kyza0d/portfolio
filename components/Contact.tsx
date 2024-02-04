"use client"

import React, { useState } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { Small } from '@/layout/Typeography';

import { Button } from "@/components/ui/button";

type EmailData = { from: string; subject: string; text: string; };

const useSendEmail = (setEmailStatus: (status: string) => void, setLoading: (loading: boolean) => void) => {
  return async (emailData: EmailData) => {
    setLoading(true);
    setEmailStatus('');
    try {
      const response = await axios.post('/api/send-mail', emailData);
      if (response.status === 200) { setEmailStatus('Email sent successfully') }
      else { setEmailStatus('Failed to send email'); }
    } catch (error) {
      setEmailStatus('Error sending email');
    } finally {
      setLoading(false);
    }
  };
};

type FormValues = { email: string; subject: string; message: string; };

const ContactForm = () => {
  const [isLoading, setLoading] = useState(false);
  const [emailStatus, setEmailStatus] = useState('');
  const sendEmail = useSendEmail(setEmailStatus, setLoading);

  const formik = useFormik<FormValues>({
    initialValues: { email: '', subject: '', message: '', },

    onSubmit: async (values: FormValues) => {
      await sendEmail({
        from: values.email,
        subject: values.subject,
        text: values.message,
      });
    },
  });

  const inputClass = (fieldName: keyof FormValues) => {
    const fieldTouched = formik.touched[fieldName];
    const fieldValue = formik.values[fieldName];
    return `border-b bg-transparent p-4 text-sm placeholder-shaded ${!fieldValue && fieldTouched ? 'outline outline-1 -outline-offset-1 outline-red-600' : ''
      }`;
  };

  return (
    <form onSubmit={formik.handleSubmit} className="text-gray grid grid-cols-2 gap-6 gap-y-[4em]">

      {/* Email Input */}
      <input
        type="email"
        id="email"
        name="email"
        className={inputClass('email')}
        onChange={formik.handleChange}
        value={formik.values.email}
        required
        placeholder="example@email.com"
      />

      {/* Subject Input */}
      <input
        type="text"
        id="subject"
        name="subject"
        className={inputClass('subject')}
        onChange={formik.handleChange}
        value={formik.values.subject}
        required
        placeholder="Your Subject"
      />

      {/* Message Textarea */}
      <textarea
        id="message"
        name="message"
        className={`${inputClass('message')} col-span-2 resize-none`}
        onChange={formik.handleChange}
        value={formik.values.message}
        required
        rows={5}
        placeholder="Enter your message here"
      />

      <div className='flex items-center'>
        {/* Submit Button */}
        <Button
          type="submit"
          variant='outline'
          size='lg'
          className={`border-2 border-lightgray ${isLoading ? 'cursor-wait' : ''}`}
        >
          Send
        </Button>

        {/* Feedback Message */}
        {emailStatus && (
          <Small className={`ml-4 ${emailStatus === 'Email sent successfully' ? 'text-green-600' : 'text-red-600'}`}>
            {emailStatus}
          </Small>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
