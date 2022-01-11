import { FormEvent } from 'react';
import emailjs from '@emailjs/browser';

export const sendEmail = async (
  _: FormEvent<HTMLFormElement>,
  form: HTMLFormElement
) => {
  const result = await emailjs.sendForm(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
    form,
    process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
  );

  return result;
};
