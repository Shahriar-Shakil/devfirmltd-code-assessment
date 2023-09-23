import CreateInvoice from "@/components/CreateInvoice";
import PageHeading from "@/components/PageHeading";
import { Breadcrumbs } from "@/interface/Breadcrumb";

type Props = {};

export default function page({}: Props) {
  let data: Breadcrumbs[] = [
    { name: "invoice", href: "/invoices", active: false },
    { name: "new invoice", href: "/invoices/add", active: true },
  ];
  return (
    <div>
      <PageHeading title="invoice" items={data}></PageHeading>
      <CreateInvoice />
    </div>
  );
}
