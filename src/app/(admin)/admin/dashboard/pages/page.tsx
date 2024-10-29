'use client';
import Table from "@/components/generic/Table";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";

const CMSPages = () => {
  const router = useRouter();

  const data = [
    {
      'id' : 1,
      'name' : "Test",
      'url_key': "#"
    },
    {
      'id' : 2,
      'name' : "Test 2",
      'url_key': "#"
    }
  ];

  const renderAddNewForm = () => {
    router.push("pages/addnew");
  }

  return <section className={'mt-4 w-full flex flex-col gap-4'}>
    <div>
      <h2 className={'text-2xl font-bold'}>CMS Pages</h2>
    </div>
    <div className={'w-full flex justify-end px-6'}>
      <Button type="button" className={'text-white flex justify-end'} onClick={renderAddNewForm}>Add New</Button>
    </div>
    <div className={'w-full px-6'}>
      <Table data={data} />
    </div>
  </section>;
};

export default CMSPages;
