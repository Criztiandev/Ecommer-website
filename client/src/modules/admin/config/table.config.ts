import { TableStructProps } from "@/interface/component";
import {
  CategoryModel,
  ConvoModel,
  OrderPayload,
  ProductModel,
  RecentModel,
  ServiceModel,
  UserModel,
} from "@/interface/model";
import tableUtils from "@/utils/table.utils";
import productApi from "../api/product.api";
import categoriesApi from "../api/categories.api";
import customerApi from "../api/customer.api";
import orderApi from "../api/order.api";
import userApi from "../api/user.api";
import serviceApi from "../api/service.api";

const productTable: TableStructProps<ProductModel> = {
  base: "products",
  name: "products-table",
  columns: tableUtils.columnGenerator<ProductModel>({
    updateFn: productApi.updateById,
    deleteFn: productApi.deleteById,
    invalidateKey: ["products"],
    options: [
      { name: "name", header: "Name", isFirst: true },
      { name: "category", header: "Category" },
      { name: "price", header: "Price" },
      {
        name: "stock",
        header: "Stocks",
        content: "in Stocks",
        isBadge: true,
      },
      { name: "status", header: "Status" },
      { name: "isPublished", header: "Published", isToggle: true },
      { name: "_id", header: "Action", isLast: true },
    ],
  }),
};

const categoryTable: TableStructProps<CategoryModel> = {
  base: "category",
  name: "category-table",
  columns: tableUtils.columnGenerator<CategoryModel>({
    deleteFn: categoriesApi.deleteById,
    invalidateKey: ["category"],
    options: [
      { name: "name", header: "Name", isFirst: true },
      { name: "count", header: "Count", isBadge: true },
      {
        name: "_id",
        header: "Action",
        isLast: true,
        isView: false,
        isEdit: false,
      },
    ],
  }),
};

const customerTable: TableStructProps<UserModel> = {
  base: "customer",
  name: "customer-table",
  columns: tableUtils.columnGenerator<UserModel>({
    deleteFn: customerApi.deleteById,
    invalidateKey: ["customer"],
    options: [
      { name: "firstName", header: "Name", isFirst: true },
      { name: "email", header: "Emai" },
      { name: "contact", header: "contact" },
      { name: "address", header: "Address" },
      { name: "gender", header: "Gender" },

      { name: "_id", header: "Action", isLast: true },
    ],
  }),
};

const orderTable: TableStructProps<OrderPayload> = {
  base: "order",
  name: "order-table",
  columns: tableUtils.columnGenerator<OrderPayload>({
    deleteFn: orderApi.deleteById,
    invalidateKey: ["order"],
    options: [
      { name: "refID", header: "Reference ID", isFirst: true },
      { name: "quantity", header: "Quantity" },
      { name: "price", header: "Price" },
      { name: "purchasedDate", header: "Purchased Date" },
      { name: "total", header: "Ammount" },
      { name: "status", header: "Status" },
      { name: "fullName", header: "Customer" },
      { name: "_id", header: "Action", isLast: true },
    ],
  }),
};

const recentTable: TableStructProps<RecentModel> = {
  base: "recent",
  name: "rencet-table",
  columns: tableUtils.columnGenerator<RecentModel>({
    deleteFn: () => {},
    invalidateKey: ["recent"],
    options: [
      { name: "no", header: "No#", isFirst: true },
      { name: "customer", header: "Customer" },
      { name: "product", header: "Product" },
      { name: "status", header: "Status", isBadge: true },
      { name: "deliverAt", header: "Deliver At" },
      { name: "total", header: "Total" },
    ],
  }),
};

const messageTable: TableStructProps<ConvoModel> = {
  base: "message",
  name: "message-table",
  columns: tableUtils.columnGenerator<ConvoModel>({
    deleteFn: () => {},
    invalidateKey: ["message"],
    options: [{ name: "participants", header: "Participants" }],
  }),
};

const userTable: TableStructProps<UserModel> = {
  base: "user",
  name: "user-table",
  columns: tableUtils.columnGenerator<UserModel>({
    deleteFn: userApi.deleteById,
    invalidateKey: ["user"],
    options: [
      { name: "firstName", header: "Name", isFirst: true },
      { name: "email", header: "Emai" },
      { name: "contact", header: "contact" },
      { name: "role", header: "Role", isBadge: true },
      { name: "gender", header: "Gender" },
      { name: "_id", header: "Action", isLast: true },
    ],
  }),
};

const serviceTable: TableStructProps<ServiceModel> = {
  base: "service",
  name: "service-table",
  columns: tableUtils.columnGenerator<ServiceModel>({
    updateFn: serviceApi.updateById,
    deleteFn: serviceApi.deleteById,
    invalidateKey: ["service"],
    options: [
      { name: "name", header: "Name", isFirst: true },
      { name: "category", header: "Category" },
      { name: "status", header: "Status" },
      { name: "isPublished", header: "Published", isToggle: true },
      { name: "_id", header: "Action", isLast: true },
    ],
  }),
};

export default {
  productTable,
  categoryTable,
  customerTable,
  orderTable,
  recentTable,
  messageTable,
  userTable,
  serviceTable,
};
