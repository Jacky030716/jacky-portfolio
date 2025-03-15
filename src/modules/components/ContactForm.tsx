import { z } from "zod";
import { motion, useAnimation } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { slideIn } from "@/constants/variants";
import { RiTelegram2Line } from "react-icons/ri";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z
    .string()
    .email({ message: "Invalid email" })
    .min(1, "Email is required"),
  message: z
    .string()
    .min(1, "Please enter some message")
    .refine((value) => value.length <= 200, {
      message: "Message is too long",
    }),
});

export const ContactForm = () => {
  const controls = useAnimation();
  const [isAnimating, setIsAnimating] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
    setIsAnimating(true);

    controls
      .start({
        // X movement: start at 0, accelerate forward with easing
        x: [
          0,
          window.innerWidth * 0.2,
          window.innerWidth * 0.5,
          window.innerWidth * 0.7,
        ],
        y: [
          0,
          -window.innerHeight * 0.1,
          -window.innerHeight * 0.2,
          -window.innerHeight * 0.3,
        ],
        scale: [1, 1.3, 1, 0.5],
        rotate: [0, 10, 20, 30],
        transition: {
          duration: 1.5,
          ease: "linear",
          times: [0, 0.3, 0.7, 1],
        },
      })
      .then(() => {
        // form.reset();
        setIsAnimating(false);

        controls.start({
          x: 0,
          y: 0,
          scale: 1,
          rotate: 0,
          transition: { duration: 0, damping: 0, stiffness: 0 },
        });
      });
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={slideIn({
        direction: "left",
        type: "tween",
        delay: 0.5,
        duration: 0.8,
      })}
      className="flex-1 shadow-sm shadow-slate-700 rounded-lg p-12"
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 flex flex-col"
        >
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#aaa6c3] uppercase">Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Jacky" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#aaa6c3] uppercase">
                  Email
                </FormLabel>
                <FormControl>
                  <Input {...field} placeholder="jacky123@gmail.com" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="message"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#aaa6c3] uppercase">
                  Message
                </FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    rows={5}
                    cols={30}
                    className="resize-none h-32 placeholder:text-slate-500 placeholder:text-base"
                    placeholder="Enter your message here"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <button
            type="submit"
            disabled={isAnimating}
            className={`cursor-pointer font-medium rounded-full md:w-[300px] w-full py-2.5 px-8 mx-auto bg-tertiary border-b-4 active:border-b-2 border-[#2c2168] transition-colors duration-300 text-white text-base flex items-center justify-center gap-2 ${
              isAnimating ? "opacity-80" : ""
            }`}
          >
            <motion.div
              initial={{
                x: 0,
                y: 0,
                scale: 1,
                rotate: 0,
              }}
              animate={controls}
            >
              <RiTelegram2Line className="size-4" />
            </motion.div>
            Send
          </button>
        </form>
      </Form>
    </motion.div>
  );
};
