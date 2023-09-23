import InvoiceDataTable from "@/components/InvoiceDataTable";
import PageHeading from "@/components/PageHeading";
import { Breadcrumbs } from "@/interface/Breadcrumb";
import { AiOutlinePlusCircle } from "react-icons/ai";

type Props = {};

export default function page({}: Props) {
  let data: Breadcrumbs[] = [
    { name: "dahsboard", href: "/dashboard", active: false },
    // { name: "new invoice", href: "/add", active: true },
  ];
  return (
    <div>
      <PageHeading title={"dashboard"} items={data}></PageHeading>
    </div>
  );
}
