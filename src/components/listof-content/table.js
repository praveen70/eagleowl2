import React from "react";
import { Table } from "antd";
import "./table.css";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "id",
  },
  {
    title: "LAST UPDATE ",
    dataIndex: "recommended_price",
    key: "id",
  },
  {
    title: "COGS ",
    dataIndex: "cogs",
    key: "id",
  },
  {
    title: "COST PRICE ",
    dataIndex: "cost_price",
    key: "id",
  },
  {
    title: "SALE PRICE ",
    dataIndex: "sale_price",
    key: "id",
  },
  {
    title: "GROSS MARGIN ",
    dataIndex: "desired_margin",
    key: "id",
  },
  {
    title: "TAGS / ACTION ",
    dataIndex: "manufacturing_outlet",
    key: "id",
  },
];

// rowSelection object indicates the need for row selection
class Rendertable extends React.Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
    checked: false,
  };

  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  };

  onSelectChange = (selectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };

    return (
      <div className="table">
        <Table
          rowKey={(data) => data.id}
          checked={true}
          rowSelection={rowSelection}
          columns={columns}
          dataSource={this.props && this.props.data}
        />
      </div>
    );
  }
}

export default Rendertable;
