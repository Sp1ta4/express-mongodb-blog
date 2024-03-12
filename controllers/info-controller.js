module.exports = class infoController {
  static getInfoPage = (req, res, next) => {
    try {
      res.render('info', { title: 'О нас' })
    } catch (error) {
      console.log(error);
    }
  }

}