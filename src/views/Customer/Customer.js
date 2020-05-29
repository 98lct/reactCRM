import React, { Component } from 'react';
import DataGridView from './DataGridView';

class Customer extends Component {
  constructor(props) {
    super(props)
    this.state = {
        customer: [
            { id: '1', name: 'Tran 1',type:'2',status:'2' },
            { id: '2', name: 'Le 2',type:'3',status:'2' },
        ],
        id: '', name: '',
        //flag show/hide add Customer box
        flagAddBox: false,
        customerGroupSelected:1,
        customerType:[
            {value:'1',label:'Bình Thường'},
            {value:'2',label:'Tìm Năng'},
            {value:'3',label:'Kém Tìm Năng'},
        ],
        customerStatus:[
          {value:'1',label:'Đang Hoạt Động'},
          {value:'2',label:'Bảo Trì'},
          {value:'3',label:'Đóng'},
      ]
    };
}
  render() {
    return (
      <div className="animated fadeIn">
        <DataGridView Cdata={this.state.customer} cType={this.state.customerType} cStatus={this.state.customerStatus}/>
      </div>
    )
  }
}

export default Customer;
