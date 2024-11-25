'use client';
import {Phone, Mail, MapPin, Twitter, ArrowUpRight} from "lucide-react";
import Link from "next/link";
import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {Button} from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea";
import validator from "validator";
import React from "react";
import {sendMail} from "@/lib/sendEmail";
import toast from "react-hot-toast";
import Toast from "@/components/generic/Toast";

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({message: "Enter valid email id"}),
    phone: z.string().refine(validator.isMobilePhone, {message: "Phone number must be a valid number"}),
    subject: z.string().min(2, {
        message: "Subject must be at least 2 characters.",
    }),
    message: z.string().min(2, {
        message: "Message must be at least 2 characters.",
    }),
})

const Contact = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
        },
    });

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
        const mailText = `Name: ${values.name}\n  Email: ${values.email}\nPhone: ${values.phone}\nSubject: ${values.subject}\nMessage: ${values.message}`;

        const response = await sendMail({
            email: values.email,
            subject: 'New Contact Us Form',
            text: mailText,
        });
        if (response?.messageId) {
            toast.success('Application Submitted Successfully.');
        } else {
            toast.error('Failed To send application.');
        }
    }

    const contactDetails = [
        {
            icon: <Mail className="text-purple-500 w-6 h-6"/>,
            label: "Email",
            value: "reachoutsandesh@gmail.com",
            url: "mailto:reachoutsandesh@gmail.com",
        },
        {
            icon: <Twitter className="text-purple-500 w-6 h-6"/>,
            label: "Twitter",
            value: "@imsandesh18",
            url: "https://x.com/imsandesh18",
        },
        {
            icon: <MapPin className="text-purple-500 w-6 h-6"/>,
            label: "Address",
            value: "Bangalore, India",
            url: "https://maps.google.com/maps?q=bangalore",
        },
    ];
    return (
        <section className={"bg-[#121212]"}>
            <div id={'contact'}
                className={
                    "h-auto py-36 flex justify-center items-center px-4 lg:px-60"
                }
                style={{
                    backgroundImage: `url('/background1.png')`,
                }}
            >
                <div className={"w-full flex flex-col gap-6"}>
                    <h2 className={"text-6xl font-bold text-[#6E4EF2]"}>Get in touch</h2>
                    <div className={"flex justify-between text-xl text-[#bcbcbe]"}>
                        I&apos;m always excited to take on new projects and collaborate with innovative minds. If you
                        <br/>
                        have a project in mind or just want to chat about design, feel free to reach out!
                    </div>
                    <div className='gap-20 w-full flex flex-col lg:flex-row'>
                        <div className="text-white p-8 w-full lg:w-[30%] rounded-lg shadow-lg">
                            <ul className="space-y-6">
                                {contactDetails.map((detail, index) => (
                                    <li key={index}>
                                        <Link href={detail.url} className="flex items-center space-x-4"
                                              rel='noopener noreferrer' target='_blank'>
                                            <div
                                                className="bg-gray-800 p-3 w-[64px] h-[64px] flex justify-center items-center rounded-xl border-primary_color border-2">{detail.icon}</div>
                                            <div>
                                                <p className="text-lg text-gray-400">{detail.label}</p>
                                                <p className="text-lg font-bold">{detail.value}</p>
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={'w-full lg:w-[70%] lg:pr-40 flex flex-col gap-4'}>
                            <h3 className={'text-white text-3xl font-bold'}>Leave a Message</h3>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 text-white">
                                    {/* Grouped Form Fields in Two Columns */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                                        <FormField
                                            control={form.control}
                                            name="name"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>Your Name</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            className={'border-gray-600 h-[58px] bg-white text-black'}
                                                            placeholder="John Doe" {...field} />
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>Email Address</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            className={'border-gray-600 h-[58px] bg-white text-black'}
                                                            placeholder="contact.john@gmail.com"
                                                            type="email" {...field} />
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="phone"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>Your Phone</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            className={'border-gray-600 h-[58px] bg-white text-black'}
                                                            placeholder="+0123456789" {...field} />
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="subject"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>Subject</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            className={'border-gray-600 h-[58px] bg-white text-black'}
                                                            placeholder="Enter Subject..." {...field} />
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    {/* Message Field Spanning Full Width */}
                                    <FormField
                                        control={form.control}
                                        name="message"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel>Message</FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                        className={'border-gray-600 h-[204px] bg-white text-black'}
                                                        placeholder="Your Message here..." {...field} />
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                    {/* Submit Button */}
                                    <Button
                                        className={"w-[176px] h-[58px] text-sm font-bold rounded-xl text-white flex justify-center items-center gap-2 gradient-primary"}
                                        type="submit">Send Message <ArrowUpRight /></Button>
                                </form>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
            <Toast />
        </section>
    );
};

export default Contact;