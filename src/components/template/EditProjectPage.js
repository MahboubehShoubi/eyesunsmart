"use client";

import { useRouter } from "next/navigation";
import CardProject from "@/module/CardProject";

function EditProjectPage({ projectsData }) {

  const router = useRouter();
  

  const editHandler = (id) => {
    router.push(`/admin/projects/edit/${id}`)
  };
  const deleteHandler = () => {};

  return (
    <div className="w-full flex flex-col gap-y-10">
      {projectsData.map((i) => (
        <div key={i.id} className="w-full border-b-4">
          <div className="w-full h-fit">
            <CardProject data={i} />
          </div>

          <div className="w-full flex justify-around my-5">
            <button
              className="w-2/5 p-2 rounded-lg bg-green text-textWhite"
              onClick={() => editHandler(i.id)}
            >
              ویرایش پروژه
            </button>
            <button
              className="w-2/5 p-2 rounded-lg bg-bgRed text-textWhite "
              onClick={deleteHandler}
            >
              حذف پروژه
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EditProjectPage;
