// "use client";

// import { ITemplate } from "@/interface";
// import React, { useRef } from "react";
// import Mustache from "mustache";
// import usersGlobalStore, { IUsersStore } from "@/store/users-store";
// import { Button } from "antd";
// import { useRouter } from "next/navigation";
// import {useReactToPrint} from 'react-to-print';

// function Resume({ template }: { template: ITemplate }) {
//   const router = useRouter();
//   const { currentUserData }: IUsersStore = usersGlobalStore();

//   const contentRef = useRef(null);
// const handlePrint = useReactToPrint({
//   content: () => contentRef.current,
// });



//   if (!currentUserData?.profileDataForResume) {
//     return <div>Profile data not found</div>;
//   }
//   const html = Mustache.render(
//     template.html,
//     currentUserData?.profileDataForResume
//   );



//   return (
//     <div className="flex flex-col gap-8">
//       <div className="flex justify-end gap-5">
//         <Button onClick={() => router.push("/")} type="default">
//           Back To Templates
//         </Button>
//           <Button type="primary" onClick={handlePrint}>
//             Print Or Save PDF
//           </Button>
//       </div>

//       <div className="border border-gray-300 border-solid rounded-sm">
//         <div dangerouslySetInnerHTML={{ __html: html }} ref={contentRef}/>
//       </div>
//     </div>
//   );
// }

// export default Resume;


"use client";

import { ITemplate } from "@/interface";
import React, { useRef } from "react";
import Mustache from "mustache";
import usersGlobalStore, { IUsersStore } from "@/store/users-store";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import { useReactToPrint } from "react-to-print";

function Resume({ template }: { template: ITemplate }) {
  const router = useRouter();
  const { currentUserData }: IUsersStore = usersGlobalStore();

  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

  if (!currentUserData?.profileDataForResume) {
    return <div>Profile data not found</div>;
  }

  const html = Mustache.render(
    template.html,
    currentUserData?.profileDataForResume
  );

  let showSaveBtn = false;

  if(!template.isOnlyForSubscribers || currentUserData?.currentSubscription){
    showSaveBtn = true;
  }


  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-end gap-5">
        <Button onClick={() => router.push("/")} type="default">
          Back To Templates
        </Button>
        {
          showSaveBtn && <Button type="primary" onClick={ () => reactToPrintFn() }>
          Print Or Save PDF
        </Button>
        }
      </div>

      {
        !showSaveBtn && (
          <div className="bg-red-500 bg-opacity-20 p-3 border-red-500 border text-sm">
              This template is only available for subscribers. Please subscribe to save or print this resume
          </div>
        )
      }

      {/* Ensure the ref is applied to the correct div */}
      <div className="border border-gray-300 border-solid">
        <div dangerouslySetInnerHTML={{ __html: html }} ref={contentRef}/>
      </div>
    </div>
  );
}

export default Resume;
