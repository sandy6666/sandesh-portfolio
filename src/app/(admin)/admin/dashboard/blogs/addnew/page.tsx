"use client";

import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Toast from "@/components/generic/Toast";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save } from "lucide-react";
import { useState, useEffect } from "react";
import { setCookie } from "cookies-next";
import toast from "react-hot-toast";

const formSchema = z.object({
    title: z.string().min(1, {
        message: "Title is required",
    }),
    url_key: z.string().min(1, {
        message: "Url Key is required",
    }),
    blog_id: z.string(),
});

const CMSAddNew = () => {
    const [cmsContent, setCmsContent] = useState("");
    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            url_key: "",
            blog_id: "",
        },
    });

    const renderBackForm = () => {
        router.back();
    };

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values);
        const response = await fetch('/api/admin/blogs/save', {
            method: "POST",
            body: JSON.stringify(values),
        });
        const responseData = await response.json();
        if(response.ok) {
            toast.success(responseData.message);
            router.push('/admin/dashboard/blogs');
        }
    };

    return (
        <section className={"mt-4 w-full flex flex-col gap-4"}>
            <div>
                <h2 className={"text-2xl font-bold"}>Add New</h2>
            </div>
            <div className={"w-full flex justify-end px-6 gap-2"}>
                <Button
                    type="button"
                    className={"text-white flex justify-end"}
                    onClick={renderBackForm}
                >
                    <ArrowLeft /> Back
                </Button>
            </div>
            <div className={"w-full px-6"}>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-[300px]">
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Title</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Title" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="url_key"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Url Key</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Url Key" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="blog_id"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Dev.to Blog ID</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Blog ID" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" className={"text-white"}>
                            Submit
                        </Button>
                    </form>
                </Form>
                <Toast />
            </div>
        </section>
    );
};

export default CMSAddNew;
