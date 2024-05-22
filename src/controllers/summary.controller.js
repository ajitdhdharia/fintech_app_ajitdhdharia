import { Transaction } from "../models/transaction.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import mongoose from "mongoose";

// Get total income and expenses
const getTotalIncomeExpenses = asyncHandler(async (req, res) => {
  const userId = new mongoose.Types.ObjectId(req.user.id);
  const totalIncome = await Transaction.aggregate([
    { $match: { userId, type: "income" } },
    { $group: { _id: null, total: { $sum: "$amount" } } },
  ]);

  if (!totalIncome) {
    throw new ApiError(400, "invalid total income");
  }

  const totalExpenses = await Transaction.aggregate([
    { $match: { userId, type: "expense" } },
    { $group: { _id: null, total: { $sum: "$amount" } } },
  ]);

  if (!totalIncome) {
    throw new ApiError(400, "invalid total expenses");
  }

  const summaryData = {
    totalIncome: totalIncome[0] ? totalIncome[0].total : 0,
    totalExpenses: totalExpenses[0] ? totalExpenses[0].total : 0,
  };

  return res
    .status(200)
    .json(new ApiResponse(200, summaryData, "Summary generated"));
});

// Get category-wise spending
const getCategorySpending = asyncHandler(async (req, res) => {
  const userId = new mongoose.Types.ObjectId(req.user.id);
  const categorySummary = await Transaction.aggregate([
    { $match: { userId, type: "expense" } },
    { $group: { _id: "$category", total: { $sum: "$amount" } } },
    { $sort: { total: -1 } },
  ]);

  if (!categorySummary) {
    throw new ApiError(
      500,
      "Something went wrong while getting a category summary"
    );
  }
  return res
    .status(200)
    .json(new ApiResponse(200, categorySummary, "Category summary generated"));
});

export { getTotalIncomeExpenses, getCategorySpending };
