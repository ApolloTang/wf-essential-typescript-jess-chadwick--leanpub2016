"use strict";

let Model;

(function (_Model) {
  let TodoState;

  (function (TodoState) {
    TodoState[TodoState["New"] = 1] = "New";
    TodoState[TodoState["Active"] = 2] = "Active";
    TodoState[TodoState["Complete"] = 3] = "Complete";
    TodoState[TodoState["Deleted"] = 4] = "Deleted";
  })(TodoState || (TodoState = {}));

  _Model.TodoState = TodoState;
})(Model || (Model = {}));

(function (_Model2) {})(Model || (Model = {}));

let DataAccess;

(function (_DataAccess) {})(DataAccess || (DataAccess = {}));
