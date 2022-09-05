// Дэлгэцтэй ажиллах Controller
var uiController = (function () {})();

// Санхүүтэй ажиллах Controller
var financeController = (function () {})();

// Программ холбогч Controller
var appController = (function (uiController, fnController) {
  var ctrlAddItem = function () {
    // 1. Оруулах өгөгдлийг дэлгэцээс олж авна
    // 2. Олж авсан өгөгдлүүдээ санхүүгийн Controller - т дамжуулж тэнд хадгалнав
    // 3. Олж авсан өгөгдлүүдийг вэб дээрээ тохирох хэсэгт нь гаргана
    // 4. Төсөвийг тооцоолно
    // 5. Эцсийн үлдэгдэл, тооцоог дэлгэцэнд гаргана
  };

  document.querySelector(".add__btn").addEventListener("click", function () {
    ctrlAddItem();
  });

  document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });
})(uiController, financeController);
