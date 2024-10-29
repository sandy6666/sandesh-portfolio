"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { getCookie, setCookie } from 'cookies-next'

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Dashboard from "@/app/(admin)/admin/dashboard/page";
import Toast from "@/components/generic/Toast";
import toast from "react-hot-toast";
import { useRouter } from 'next/navigation'

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters.",
    }),
})

const LoginForm = () => {
    const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
        password: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
      const response = await fetch('/api/admin/login', {
        method: "POST",
        body: JSON.stringify(values),
    });
    const responseData = await response.json();
    if(responseData?.token) {
        setCookie('auth_token', responseData?.token);
        toast.success(responseData.message);
        router.push('/admin/dashboard');
    } else {
        toast.error(responseData.message);
    }
  }

  return (
      <div className={'h-screen flex justify-center items-center'}>
          <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-[300px]">
                  <FormField
                      control={form.control}
                      name="username"
                      render={({ field }) => (
                          <FormItem>
                              <FormLabel>Username</FormLabel>
                              <FormControl>
                                  <Input placeholder="Enter your username" {...field} />
                              </FormControl>
                              <FormMessage />
                          </FormItem>
                      )}
                  />
                  <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                          <FormItem>
                              <FormLabel>Password</FormLabel>
                              <FormControl>
                                  <Input type={'password'} placeholder="Enter your password" {...field} />
                              </FormControl>
                              <FormMessage />
                          </FormItem>
                      )}
                  />
                  <Button type="submit" className={'text-white'}>Submit</Button>
              </form>
          </Form>
          <Toast />
      </div>
  )
}

export default LoginForm;
