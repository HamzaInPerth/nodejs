const dmlogSchema = require("../models/dmlogSchema");

exports.getDmlogs = (req, res, next) => {
  res.status(200).json({ success: true, data: "display all dmlogs" });
};

exports.getDmlog = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, data: `Display by id number ${req.params.id}` });
};

exports.createDmlog = async (req, res, next) => {
  try {
    const newDmlog = await dmlogSchema.create(req.body);
    res.status(201).json({ success: true, data: newDmlog });
  } catch (error) {
    res.status(400).json({ success: false, data: error.message });
  }
};

exports.updateDmlog = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, data: `Update by id number ${req.params.id}` });
};

exports.deleteDmlog = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, data: `delete by id number ${req.params.id}` });
};
