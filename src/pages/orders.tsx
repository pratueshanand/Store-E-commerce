import React, { ReactElement, useState } from 'react'
import TableHOC from '../components/admin/TableHOC';
import { Column } from 'react-table';
import { Link } from 'react-router-dom';

type dataType = {
  _id: string;
  amount: number;
  quantity: number;
  discount: number;
  status: ReactElement;
  action: ReactElement;
};

const column: Column<dataType>[] = [
  {
    Header: "ID",
    accessor: "_id"
  },
  {
    Header: "Amount",
    accessor: "amount"
  },
  {
    Header: "Quantity",
    accessor: "quantity"
  },
  {
    Header: "Discount",
    accessor: "discount"
  },
  {
    Header: "Status",
    accessor: "status"
  },
  {
    Header: "Action",
    accessor: "action"
  }
]

const Orders = () => {

  const [rows, setRows] = useState<dataType[]> ([
    {
      _id: "nsdjnsd",
      amount: 322,
      quantity: 34,
      discount: 23,
      status: <span className='red'>Processing</span>,
      action: <Link to={'/order/nsdjnsd'}>View</Link>,
    }
  ])

  const Table = TableHOC<dataType>(column, rows, "dashboard-product-box", "Orders", rows.length>6)();
  return (
    <div className="container">
      <h1>MY ORDERS</h1>
      {Table}
    </div>
  )
}

export default Orders