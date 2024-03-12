module.exports = class infoController {
  static getContactsPage = (req, res, next) => {
    try {
      res.render('contacts', { title: 'Контакты' })
    } catch (error) {
      console.log(error);
    }
  }

}