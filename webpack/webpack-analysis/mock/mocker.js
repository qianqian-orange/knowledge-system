module.exports = {
  'GET /user': (req, res) => {
    res.json({
      name: 'zhangsan',
      age: 10
    });
  }
}