exports.home = (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Salom Dunyo",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server Error",
    });
  }
};
