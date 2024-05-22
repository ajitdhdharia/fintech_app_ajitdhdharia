import { Router } from "express";
import {
  createTransaction,
  deleteTransaction,
  getTransaction,
  getAllTransaction,
  updateTransactions,
} from "../controllers/transaction.controller.js";
import verifyJWT from "../middlewares/auth.middleware.js";

const router = Router();
router.use(verifyJWT); // Apply verifyJWT middleware to all routes in this file

router.route("/").post(createTransaction);
router.route("/").get(getAllTransaction);
router
  .route("/:transactionId")
  .get(getTransaction)
  .patch(updateTransactions)
  .delete(deleteTransaction);

export default router;
