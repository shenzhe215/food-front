import React, { memo, useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  InputNumber,
  Upload,
  message,
} from "antd";
import { SearchOutlined, PlusOutlined } from "@ant-design/icons";
import {
  getTypeListAction,
  changeFoodInfoAction,
  getFoodInfoByIdAction,
} from "../store/actionCreators";
import { addFoodInfo, updateFoodInfo } from "@/service/food";
import { useNavigate, useParams } from "react-router-dom";

// 上传之前调用的方法
function beforeAvatarUpload(file) {
  const isJPG = file.type === "image/jpeg";

  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isJPG) {
    this.$message.error("上传头像图片只能是 JPG 格式!");
  }
  if (!isLt2M) {
    this.$message.error("上传头像图片大小不能超过 2MB!");
  }
  return isJPG && isLt2M;
}

const FDFood = memo(() => {
  // redux hooks
  // 组件与redux关联：获取数据(useSelector)和进行操作
  const { foodInfo, typeList } = useSelector(
    (state) => ({
      typeList: state.getIn(["food", "typeList"]),
      foodInfo: state.getIn(["food", "foodInfo"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const [foodInfoVo, setFoodInfoVo] = useState(foodInfo);
  const [fileList, setFileList] = useState([{}]);
  const [foodId, setFoodId] = useState(null);

  // 表单验证
  const validateMessages = {
    required: "'${name}' 是必选字段",
    // ...
  };
  // other hooks
  // 发送网络请求
  useEffect(() => {
    console.log("执行了初始化01");
    const {id} = params;
    if (typeof(id) == "undefined") {
      console.log("不存在id，置为空");
      setFoodInfoVo({});
    } else {
      setFoodId(id)
      console.log("存在id，执行逻辑，打印id");
      dispatch(getFoodInfoByIdAction(id));
      console.log(foodInfo);
      setFoodInfoVo(foodInfo);
    }
  }, [""]);

  useEffect(() => {
    console.log("getTypeListAction");
    dispatch(getTypeListAction());
  }, [dispatch]);

  const handleSubmit = useCallback(() => {
    addFoodInfo(foodInfoVo).then((response) => {
      // 提示信息
      message.success({
        content: `添加菜品信息成功`,
      });
      // 路由跳转
      navigate(`/foodservice/list`);
    });
  }, [foodInfoVo]);

  // 上传封面
  const handleAvatarSuccess = useCallback(
    (info) => {
      const { file, fileList } = info;
      const status = file.status;
      setFileList(fileList.slice());
      if (status !== "uploading") {
        // console.log(info.file, info.fileList);
      }
      if (status === "done") {
        setFoodInfoVo({
          ...foodInfoVo,
          cover: file.response.data.url,
        });
        message.success({
          content: `${info.file.name} 图片上传成功`,
        });
      } else if (status === "error") {
        message.error({
          content: `${info.file.name} 图片上传失败`,
        });
      }
      setFileList(fileList);
    },
    [fileList]
  );

  const handleCoverRemove = useCallback((file) => {
    setFileList({});
  });

  return (
    <div>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
      >
        <Form.Item label="名称">
          <Input
            value={foodInfoVo.title}
            onChange={(e) => {
              setFoodInfoVo({
                ...foodInfoVo,
                title: e.target.value,
              });
            }}
            width="200px"
          />
        </Form.Item>
        <Form.Item label="分类">
          <Select
            style={{ width: 120 }}
            value={foodInfoVo.typeId}
            onChange={(value) => {
              setFoodInfoVo({
                ...foodInfoVo,
                typeId: value,
              });
            }}
          >
            {typeList.map((type, index) => (
              <Select.Option key={index} value={type.id}>
                {type.title}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="价格">
          <InputNumber
            min="0"
            max="9999"
            step="1"
            value={foodInfoVo.price}
            onChange={(value) => {
              setFoodInfoVo({
                ...foodInfoVo,
                price: value,
              });
            }}
          />
        </Form.Item>
        <Form.Item label="上传图片">
          <Upload
            maxCount="1"
            beforeUpload={beforeAvatarUpload}
            onChange={handleAvatarSuccess}
            action="http://127.0.0.1:9001/foodoss/fileoss"
            // action={BASE_URL + "/foodoss/fileoss"}
            listType="picture-card"
          >
            {fileList.length < 5 && "+ Upload"}
          </Upload>
        </Form.Item>
        <Form.Item label="是否为特色">
          <Radio.Group
            value={foodInfoVo.isChara}
            onChange={(e) => {
              setFoodInfoVo({
                ...foodInfoVo,
                isChara: e.target.value,
              });
            }}
          >
            <Radio value={1}>是</Radio>
            <Radio value={0}>否</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="描述">
          <Input.TextArea
            value={foodInfoVo.description}
            onChange={(e) => {
              setFoodInfoVo({
                ...foodInfoVo,
                description: e.target.value,
              });
            }}
          />
        </Form.Item>

        <Form.Item label="提交">
          <Button type="primary" onClick={handleSubmit}>
            确认提交
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
});

export default FDFood;
