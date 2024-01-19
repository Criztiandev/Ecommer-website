import express from "express";

import controller from "./customer.controller.ts"; // change this
import validationMiddlware from "../../../middleware/validation.middlware.ts";
import schema from "../../../validation/category.validation.ts";
const router = express.Router();

const { validateBody } = validationMiddlware;

const {
  create,
  updateById,
  deleteBatch,
  deleteById,
  getAll,
  getAllByFilter,
  getById,
} = controller;

router.post("/create", create);
router.post("/delete/batch", deleteBatch);
router.put("/:id", updateById);
router.delete("/:id", deleteById);

router.get("/", getAll);
router.get("/:id", getById);
router.get("/:filter", getAllByFilter);

export default router;
