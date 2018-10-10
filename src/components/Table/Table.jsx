import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import Button from './Button';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import './table.scss';

export default class Table extends React.PureComponent {
  constructor(props) {
    super(props);

    this.columns = [
      {
        dataField: 'id',
        text: 'Product ID',
      },
      {
        dataField: 'name',
        text: 'Product Name'
      },
      {
        dataField: 'price',
        text: 'Product Price'
      },
      {
        dataField: 'button',
        text: 'Button',
        formatter: Button,
        formatExtraData: {
          onClick: props.togglePanel
        }
      }
    ];

    this.products = [
      {
        id: 0,
        name: 'Product 0',
        price: 1500
      },
      {
        id: 1,
        name: 'Product 1',
        price: 2000
      },
      {
        id: 2,
        name: 'Product 2',
        price: 2500
      },
      {
        id: 3,
        name: 'Product 3',
        price: 2500
      },
      {
        id: 4,
        name: 'Product 4',
        price: 1082
      },
      {
        id: 5,
        name: 'Product 5',
        price: 5354
      },
      {
        id: 6,
        name: 'Product 6',
        price: 3500
      },
      {
        id: 6,
        name: 'Product 6',
        price: 1200
      }
    ]
  }

  render() {
    return (
      <BootstrapTable
        keyField="id"
        data={this.products}
        columns={this.columns}
        striped
        hover
        condensed
      />
    )
  }
}