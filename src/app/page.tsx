import InvoiceDataTable from "@/components/InvoiceDataTable";
import PageHeading from "@/components/PageHeading";
import { Breadcrumbs } from "@/interface/Breadcrumb";
import { AiOutlinePlusCircle } from "react-icons/ai";

type Props = {};

export default function page({}: Props) {
  let data: Breadcrumbs[] = [
    { name: "invoice", href: "/invoice", active: false },
    // { name: "new invoice", href: "/add", active: true },
  ];
  return (
    <div>
      <PageHeading items={data}>
        <button className="ml-auto text-white bg-primary  hover:bg-primary/40 transition-all delay-200 px-4 py-4  md:px-[50px] rounded-[34.667px] inline-flex justify-center items-center gap-x-[10px]">
          <AiOutlinePlusCircle className="w-8 h-8 hidden md:inline-block" />
          <span className=" text-[18px] font-semibold ">Add Invoice</span>
        </button>
      </PageHeading>
      <InvoiceDataTable />
    </div>
  );
}
