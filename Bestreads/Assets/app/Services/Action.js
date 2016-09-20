"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Action = (function () {
    function Action() {
    }
    return Action;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Action;
var AddAction = (function (_super) {
    __extends(AddAction, _super);
    function AddAction(Title, Author, ImgScr, Description, Rating) {
        _super.call(this);
        this.title = Title;
        this.description = Description;
        this.author = Author;
        this.imgSrc = ImgScr;
        this.rating = Rating;
    }
    return AddAction;
}(Action));
exports.AddAction = AddAction;
var BookItemAction = (function (_super) {
    __extends(BookItemAction, _super);
    function BookItemAction(bookItem) {
        _super.call(this);
        this.bookItem = bookItem;
    }
    return BookItemAction;
}(Action));
exports.BookItemAction = BookItemAction;
var RemoveAction = (function (_super) {
    __extends(RemoveAction, _super);
    function RemoveAction(bookItem) {
        _super.call(this, bookItem);
    }
    return RemoveAction;
}(BookItemAction));
exports.RemoveAction = RemoveAction;
var ChangeValueAction = (function (_super) {
    __extends(ChangeValueAction, _super);
    function ChangeValueAction(bookItem, newValue, changed) {
        _super.call(this, bookItem);
        this.newValue = newValue;
        this.changed = changed;
    }
    return ChangeValueAction;
}(BookItemAction));
exports.ChangeValueAction = ChangeValueAction;
//# sourceMappingURL=Action.js.map