'use client';
import Table from "@/components/generic/Table";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type BlogItem = {
    title: string;
    url_key: string;
    blog_id: string;
}

const CMSBlogs = () => {
    const router = useRouter();
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData(10, 0);
    }, []);

    const fetchData = async (pageSize: number, curPage: number) => {
        const response = await fetch('/api/admin/blogs', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ pageSize, curPage }),
        });
        const result = await response.json();
        setData(JSON.parse(result.blogs));
    };

    const handleEdit = (item: BlogItem) => {
        router.push(`/admin/dashboard/blogs/${item.url_key}`);
    }

    const handleDelete = async (item: BlogItem) => {
        const response = await fetch(`/api/admin/blogs/delete`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url_key: item.url_key }),
        });

        if (response.ok) {
            // Re-fetch data to update the table after deletion
            await fetchData(10, 0);
        } else {
            console.error("Failed to delete blog");
        }
    }

    const renderAddNewForm = () => {
        router.push("/admin/dashboard/blogs/addnew");
    }

    return (
        <section className="mt-4 w-full flex flex-col gap-4">
            <div>
                <h2 className="text-2xl font-bold">CMS Blogs</h2>
            </div>
            <div className="w-full flex justify-end px-6">
                <Button type="button" className="text-white flex justify-end" onClick={renderAddNewForm}>Add New</Button>
            </div>
            <div className="w-full px-6">
                {data.length > 0 && <Table data={data} handleEdit={handleEdit} handleDelete={handleDelete} />}
            </div>
        </section>
    );
};

export default CMSBlogs;
