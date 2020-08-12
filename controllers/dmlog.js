const dmlogSchema = require("../models/dmlogSchema");

exports.getDmlogs = async (req, res, next) => {
  try {
    const displayAll = await dmlogSchema.find();
    if (!displayAll)
      return res.status(404).json({ success: false, message: "Nothing" });
    res.status(200).json({ success: true, data: displayAll });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

exports.getDmlog = async (req, res, next) => {
  try {
    const dmlog = await dmlogSchema.findById(req.params.id);
    if (!dmlog) return res.status(404).json({ success: false });
    res.status(200).json({ success: true, data: dmlog });
  } catch (error) {
    res.status(400).json({ success: false, data: error.message });
  }
};

exports.createDmlog = async (req, res, next) => {
  try {
    const newDmlog = await dmlogSchema.create(req.body);
    if (!newDmlog) return res.status(400).json({ success: false });
    res.status(201).json({ success: true, data: newDmlog });
  } catch (error) {
    res.status(400).json({ success: false, data: error.message });
  }
};

exports.updateDmlog = async (req, res, next) => {
  try {
    const updateDmlog = await dmlogSchema.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    console.log(req.params.id, req.body);
    res.status(200).json({ success: true, data: updateDmlog });
  } catch (error) {
    res.status(400).json({ success: false, data: error.message });
  }
};

exports.deleteDmlog = async (req, res, next) => {
  try {
    const deletedmlog = await dmlogSchema.findByIdAndRemove(req.params.id);
    //   if (!deletedmlog) return res.status(400).json({ success: false });
    res.status(200).json({ success: true, data: deletedmlog });
  } catch (error) {
    res.status(400).json({ success: false, data: error });
  }
};
