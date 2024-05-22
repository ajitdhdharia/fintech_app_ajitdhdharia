import { Router } from "express";
import {
  getTotalIncomeExpenses,
  getCategorySpending,
} from "../controllers/summary.controller.js";
import verifyJWT from "../middlewares/auth.middleware.js";

const router = Router();
router.use(verifyJWT);

router.route("/total").get(getTotalIncomeExpenses);
router.route("/category").get(getCategorySpending);

export default router;
