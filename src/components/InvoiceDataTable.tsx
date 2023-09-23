"use client";
import { InvoiceDataType } from "@/interface/InvoiceDataType";
import { Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
const data: InvoiceDataType[] = [
  {
    key: "1",
    invoiceNumber: "1909112",
    trip: "T909112",
    invoiceDate: "23/08/2022",
    invoiceAmount: "13.500.000",
    balanceDue: "4.500.000",
    paymentMethod: "ACH",
    dueDate: "01/31/2023",
    status: "Unpaid",
  },
  {
    key: "2",
    invoiceNumber: "1909113",
    trip: "T909113",
    invoiceDate: "24/08/2022",
    invoiceAmount: "14.500.000",
    balanceDue: "5.500.000",
    paymentMethod: "Credit Card",
    dueDate: "02/28/2023",
    status: "Paid",
  },
  {
    key: "3",
    invoiceNumber: "1909114",
    trip: "T909114",
    invoiceDate: "25/08/2022",
    invoiceAmount: "12.000.000",
    balanceDue: "3.000.000",
    paymentMethod: "Bank Transfer",
    dueDate: "03/31/2023",
    status: "Unpaid",
  },
  {
    key: "4",
    invoiceNumber: "1909115",
    trip: "T909115",
    invoiceDate: "26/08/2022",
    invoiceAmount: "15.000.000",
    balanceDue: "5.000.000",
    paymentMethod: "PayPal",
    dueDate: "04/30/2023",
    status: "Paid",
  },
  {
    key: "5",
    invoiceNumber: "1909116",
    trip: "T909116",
    invoiceDate: "27/08/2022",
    invoiceAmount: "11.000.000",
    balanceDue: "2.000.000",
    paymentMethod: "ACH",
    dueDate: "05/31/2023",
    status: "Unpaid",
  },
  {
    key: "6",
    invoiceNumber: "1909117",
    trip: "T909117",
    invoiceDate: "28/08/2022",
    invoiceAmount: "16.000.000",
    balanceDue: "6.000.000",
    paymentMethod: "Credit Card",
    dueDate: "06/30/2023",
    status: "Paid",
  },
];
export default function InvoiceDataTable() {
  const columns: ColumnsType<InvoiceDataType> = [
    {
      title: "Invoice No.",
      dataIndex: "invoiceNumber", // Replace with your actual data key
      key: "invoiceNumber",
      align: "center",
      sorter: true,
    },
    {
      title: "Trip",
      dataIndex: "trip", // Replace with your actual data key
      key: "trip",
      align: "center",
      sorter: true,
    },
    {
      title: "Inv. Date",
      dataIndex: "invoiceDate", // Replace with your actual data key
      key: "invoiceDate",
      align: "center",
    },
    {
      title: "Inv. Amount",
      dataIndex: "invoiceAmount", // Replace with your actual data key
      key: "invoiceAmount",
      align: "center",
    },
    {
      title: "Bal. Due",
      dataIndex: "balanceDue", // Replace with your actual data key
      key: "balanceDue",
    },
    {
      title: "Payment Method",
      dataIndex: "paymentMethod", // Replace with your actual data key
      key: "paymentMethod",
      align: "center",
    },
    {
      title: "Due Date",
      dataIndex: "dueDate", // Replace with your actual data key
      key: "dueDate",
      align: "center",
    },
    {
      title: "Status",
      dataIndex: "status", // Replace with your actual data key
      key: "status",
      align: "center",
      width: 115,
      render: (text) => (
        <Tag
          className="px-8 py-2 rounded-[20px] border-0 w-full text-center"
          color={text === "Paid" ? "green" : "volcano"}
        >
          {text}
        </Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      sorter: true,

      render: (_, record) => (
        <div className="space-x-2 flex  items-center justify-center">
          <button className="bg-primary/20 hover:bg-primary  text-primary hover:text-white p-2 rounded-lg ">
            <AiFillEdit className="w-6 h-6" />
          </button>
          <button className="bg-error/20 hover:bg-error text-error hover:text-white p-2 rounded-lg">
            <AiFillDelete className="w-6 h-6" />
          </button>
        </div>
      ),
    },
  ];
  return (
    <div className="mt-16 bg-white rounded-[10px] pt-10 ">
      <Table
        className="data-table"
        columns={columns}
        dataSource={data}
        scroll={{ x: 600 }}
        pagination={false}
      />
    </div>
  );
}
