import request from "./request";

export function getAllFood() {
  return request({
    url: "/foodservice/food/list",
    method: "get",
  });
}


// 分页带条件查询
export function getFoodPageCondition( foodQuery){
  return request({
    url: `/foodservice/food/pageFoodCondition`,
    method: "post",
    data: foodQuery
  });
}


// 根据菜品id查询菜品的基本信息
export function getFoodById(id) {
  return request({
    url: `/foodservice/food/getFoodInfo/${id}`,
    method: "get",
  });
}

// 获得菜品分类
export function getAllType() {
  return request({
    url: `/foodservice/type/getAllType`,
    method: "get"
  });
}

// 根据菜品分类查询菜品
export function getFoodByType(typeId) {
  return request({
    url: `/foodservice/foodfront/foodCondition/${typeId}`,
    method: "get"
  });
}

