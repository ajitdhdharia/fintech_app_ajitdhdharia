import mongoose, { isValidObjectId } from "mongoose";
import { Transaction } from "../models/transaction.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

//  TODO - Separate validation file for dates
const validateDate = (date) => {
  const regex = /^\d{4}\/(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])$/;
  if (!regex.test(date)) {
    return false;
  }
  const [year, month, day] = date.split("/").map(Number);
  const parsedDate = new Date(year, month - 1, day);
  return (
    parsedDate.getFullYear() === year &&
    parsedDate.getMonth() + 1 === month &&
    parsedDate.getDate() === day
  );
};

const createTransaction = asyncHandler(async (req, res, next) => {
  // get transaction input
  const { amount, date, category, status, type } = req.body;
  const userId = req.user._id;

  // validate the request data
  if (typeof amount !== "number") {
    throw new ApiError(400, "Invalid amount");
  }

  if (!validateDate(date)) {
    throw new ApiError(400, "Invalid date");
  }

  if ([category, status, type].some((field) => field?.trim() === "")) {
    throw new ApiError(400, "All fields in transaction are required");
  }

  // create transaction object in the database
  const transaction = await Transaction.create({
    amount,
    date,
    category,
    status,
    type,
    userId,
  });

  const createdTransaction = await Transaction.findById(transaction._id);

  if (!createdTransaction) {
    throw new ApiError(
      500,
      "Something went wrong while creating the transaction"
    );
  }

  // send response
  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        createdTransaction,
        "transaction created successfully"
      )
    );
});

const getTransaction = asyncHandler(async (req, res, next) => {
  // get transaction ID from request params
  const transactionId = req.params.transactionId;
  const userId = req.user._id;

  // validate the transaction ID
  if (!transactionId || !mongoose.Types.ObjectId.isValid(transactionId)) {
    throw new ApiError(400, "Invalid transaction ID");
  }

  // find the transaction in the database
  const transaction = await Transaction.findOne({ _id: transactionId, userId });

  // check if transaction exists
  if (!transaction) {
    throw new ApiError(404, "Transaction not found");
  }

  // send response
  return res
    .status(200)
    .json(
      new ApiResponse(200, transaction, "Transaction fetched successfully")
    );
});

const getAllTransaction = asyncHandler(async (req, res, next) => {
  // get transaction ID from request params
  const userId = req.user._id;

  // find all the transactions in the database
  const transactions = await Transaction.find({ userId });

  // check if transaction exists
  if (!transactions.length) {
    throw new ApiError(404, "No transactions found");
  }

  // send response
  return res
    .status(200)
    .json(
      new ApiResponse(200, transactions, "Transaction fetched successfully")
    );
});

const updateTransactions = asyncHandler(async (req, res, next) => {
  //TODO: update transactions
});

const deleteTransaction = asyncHandler(async (req, res, next) => {
  //TODO: delete transactions
});

export {
  createTransaction,
  deleteTransaction,
  getTransaction,
  updateTransactions,
  getAllTransaction,
};
