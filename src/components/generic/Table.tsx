'use client';

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


const Table = ({ data, handleEdit, handleDelete}: { data: any, handleEdit: (item: any) => void, handleDelete: (item: any) => void }) => {
    const headers = Object.keys(data[0]);

    return (
        <div className="flex w-full flex-col border border-gray-300 rounded-lg overflow-hidden">
            <div className="flex bg-gray-200 font-semibold text-gray-700">
                {/* Render headers and additional columns for Edit and Delete */}
                {headers.map((header, key) => (
                    <div key={key} className="p-3 flex-1 text-center border-r last:border-r-0 font-bold border-gray-300">
                        {header
                            .replace(/_/g, ' ')
                            .replace(/\b\w/g, (char) => char.toUpperCase())}
                    </div>
                ))}
                <div className="p-3 flex-1 text-center font-bold border-r border-gray-300">Edit</div>
                <div className="p-3 flex-1 text-center font-bold border-gray-300">Delete</div>
            </div>
            <div className="divide-y divide-gray-300">
                {data.map((item: any, index: any) => (
                    <div className="flex hover:bg-gray-100" key={index}>
                        {Object.entries(item).map(([key, value], id) => (
                            <div key={id} className="p-3 flex-1 text-center border-r last:border-r-0 border-gray-300">
                                {id === 0 ? index + 1 : value}
                            </div>
                        ))}
                        {/* Edit button */}
                        <div className="p-3 flex-1 text-center border-r last:border-r-0 border-gray-300">
                            <button className="text-blue-500 hover:underline" onClick={() => handleEdit(item)}>
                                Edit
                            </button>
                        </div>
                        {/* Delete button */}
                        <div className="p-3 flex-1 text-center border-gray-300">
                            <AlertDialog>
                                <AlertDialogTrigger className={'flex gap-2'}>
                                    <button className="text-red-500 hover:underline">
                                        Delete
                                    </button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                                        <AlertDialogAction className={'bg-red-600 text-white'} onClick={() => handleDelete(item)}>Delete</AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Table;
