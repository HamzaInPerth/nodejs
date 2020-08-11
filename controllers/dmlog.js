exports.getDmlogs = (req, res, next) => {
  res.status(200).json({ success: true, data: "display all dmlogs" });
};

exports.getDmlog = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, data: `Display by id number ${req.params.id}` });
};

exports.createDmlog = (req, res, next) => {
  res.status(200).json({ success: true, data: "Post new fileds" });
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
