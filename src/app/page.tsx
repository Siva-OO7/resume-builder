/** @format */

import { ITemplate } from "@/interface";
import { getAllTemplates } from "@/server-actions/templates";
import Link from "next/link";

export default async function Home() {
  const response = await getAllTemplates();

  if (!response.success) {
    return <div>{response.message}</div>;
  }

  const data = response.data;
  return (
    <div className="flex flex-col gap-5 items-start">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-[#2c1d74]">Templates</h1>
        <span className="text-gray-500 text-sm">
          Browse through our collection of templates
        </span>
      </div>

      <div className="mt-5 grid grid-cols-5 gap-10">
        {data.map((template: ITemplate) => (
          <Link
            key={template._id}
            href={`/template/${template._id}`}
            className="flex flex-col gap-5"
          >
            <div className="border border-gray-200 border-solid hover:border-gray-400">
              <img src={template.thumbnail} className="w-full h-96" />
            </div>
            <p className="text-center text-sm">{template.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
