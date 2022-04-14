import React, { memo, useEffect, useCallback, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  Table,
  Form,
  Button,
  Input,
  Pagination,
  Divider,
  message,
  Select,
  Space,
  Modal,
} from "antd";
import { SearchOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import {
  getFoodListAction,
  getTypeListAction,
  removeFoodAction,
} from "../store/actionCreators";
import { useNavigate } from "react-router-dom";

function confirm() {
  Modal.confirm({
    title: "Confirm",
    icon: <ExclamationCircleOutlined />,
    content: "确认删除？",
    okText: "确认",
    cancelText: "取消",
  });
}

const FDFoodList = memo(() => {
  const { Column, ColumnGroup } = Table;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate  = useNavigate()
  // redux hooks
  // 组件额redux关联：获取数据(useSelector)和进行操作
  const { foodList, typeList } = useSelector(
    (state) => ({
      foodList: state.getIn(["food", "foodList"]),
      typeList: state.getIn(["food", "typeList"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  // other hooks
  // 发送网络请求
  useEffect(() => {
    dispatch(getFoodListAction());
    dispatch(getTypeListAction());
  }, [dispatch]);

  // 处理事件
  const handleEdit = useCallback(
    (record) => {
      const id = record.id;
      // 路由跳转
      navigate(`/foodservice/food/${id}`)
    },
    [foodList]
  );

  // const handleRemove = useCallback((record) => {
  //   console.log(record.id)
  // }, [foodList]);

  const handleRemove = (record) => {
    Modal.confirm({
      title: "您正在执行删除操作",
      icon: <ExclamationCircleOutlined />,
      content: "您确定要删除该菜品么？",
      okText: "确认",
      cancelText: "取消",
      onOk: () => {
        dispatch(removeFoodAction(record.id));
        dispatch(getFoodListAction());
      },
    });
  };

  return (
    <div>
      <Form layout="inline">
        <Form.Item label="标题:">
          <Input />
        </Form.Item>
        <Form.Item label="类型:">
          <Select style={{ width: 120 }}>
            {typeList.map((type, index) => (
              <Select.Option key={index} value={type.title}>
                {type.title}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" icon={<SearchOutlined />}>
            搜索
          </Button>
        </Form.Item>
      </Form>
      <br />
      <Table
        bordered
        dataSource={foodList}
        rowKey={(record) => record.id}
        pagination={false}
      >
        <Column title="菜品名称" dataIndex="title" key="title" />
        <Column title="菜品分类" dataIndex="type" key="type" />
        <Column title="菜品价格" dataIndex="price" key="price" />
        <Column
          title="菜品图片"
          dataIndex="cover"
          key="cover"
          render={(record) => <img src={record} width="100px" />}
        />
        <Column
          title="是否外带"
          dataIndex="isOut"
          render={(text, record) => (text == 1 ? "是" : "否")}
        />
        <Column
          title="菜品状态"
          dataIndex="status"
          key="status"
          render={(text, record) => (text == "Draft" ? "未发布" : "已发布")}
        />
        <Column
          title="操作"
          key="action"
          render={(record) => (
            <Space size="middle">
              <Button type="primary" onClick={handleEdit.bind(null, record)}>
                编辑
              </Button>
              <Button type="danger" onClick={handleRemove.bind(null, record)}>
                删除
              </Button>
            </Space>
          )}
        />
      </Table>
    </div>
  );
});

export default FDFoodList;
