"use client"

import {Button} from "@/components/ui/button";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import Toast from "@/components/generic/Toast";
import {useRouter} from "next/navigation";
import {ArrowLeft, Save} from "lucide-react";
import EditorJS from '@editorjs/editorjs';
import Header from "@editorjs/header";
import List from '@editorjs/list';
import RawTool from '@editorjs/raw';
import Checklist from '@editorjs/checklist';
import Embed from '@editorjs/embed';
import Quote from '@editorjs/quote';
import Link from '@editorjs/link';
import ImageTool from '@editorjs/image';
import {useState, useEffect} from "react";
import {setCookie} from "cookies-next";
import toast from "react-hot-toast";


const formSchema = z.object({
    title: z.string().min(1, {
        message: "Title is required"
    }),
    url_key: z.string().min(1, {
        message: "Url Key is required"
    }),
    content: z.string()
})

const CMSAddNew = () => {

    const [cmsContent, setCmsContent] = useState(null);

    const router = useRouter();
    const editor = new EditorJS({
        holder: 'editorjs',
        autofocus: true,
        minHeight : 0,
        tools: {
            header: Header,
            list: List,
            raw: RawTool,
            embed: Embed,
            checklist: Checklist,
            quote: Quote,
            link: Link,
            image: {
                class: ImageTool,
                config: {
                    endpoints: {
                        byFile: `/api/admin/image/upload`, // Your backend file uploader endpoint
                    }
                }
            }
        },
        // // data: DEFAULT_INITIAL_DATA,
        // onChange: async () => {
        //     let content = await editor.saver.save();
        //     // setCmsContent(content);
        // }
    });
    useEffect(() => {
        editor.isReady
            .then(() => {
                editor.save()
                    .then((outputData) => {
                        console.log('Article data: ', outputData);
                        setCmsContent(outputData); // Update state if needed
                    })
                    .catch((error) => {
                        console.log('Saving failed: ', error);
                    });
            })
            .catch((reason) => {
                console.log(`Editor.js initialization failed because of ${reason}`);
            });
    }, []);



    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            url_key: "",
            content: ""
        },
    });

    const renderBackForm = () => {
        router.back();
    }

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values)
    }

    return <section className={'mt-4 w-full flex flex-col gap-4'}>
        <div>
            <h2 className={'text-2xl font-bold'}>Add New</h2>
        </div>
        <div className={'w-full flex justify-end px-6 gap-2'}>
            <Button type="button" className={'text-white flex justify-end'} onClick={renderBackForm}><ArrowLeft /> Back</Button>
        </div>
        <div className={'w-full px-6'}>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-[300px]">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                    <Input placeholder="Title" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="url_key"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Url Key</FormLabel>
                                <FormControl>
                                    <Input type={'password'} placeholder="Url Key" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="content"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Content</FormLabel>
                                <FormControl>
                                    <div id={'editorjs'}>
                                    </div>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className={'text-white'}>Submit</Button>
                </form>
            </Form>
            <Toast/>
        </div>
    </section>
};

export default CMSAddNew;
