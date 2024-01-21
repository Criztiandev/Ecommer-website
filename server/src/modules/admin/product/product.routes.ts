import express from "express";

import controller from "./product.controller.ts"; // change this
import validationMiddlware from "../../../middleware/validation.middlware.ts";
import productValidationSchema from "../../../validation/product.validation.ts";
import fileUtils from "../../../utils/file.utils.ts";
import filesMiddleware from "../../../middleware/files.middleware.ts";
const router = express.Router();

const { validateBody } = validationMiddlware;

const {
  create,
  updateById,
  deleteBatch,
  deleteById,
  getAll,
  getById,
  getByFilter,
} = controller;

router.post(
  "/upload/:name",
  [filesMiddleware.createDirectories, filesMiddleware.uploadImages],
  create
);
router.post("/delete/batch", deleteBatch);
router.put("/:id", updateById);
router.delete("/:id", deleteById);

router.get("/", getAll);
router.get("/:id", getById);
router.get("/:filter", getByFilter);

export default router;
