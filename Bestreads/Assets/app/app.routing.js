"use strict";
var router_1 = require('@angular/router');
var book_component_1 = require('./Components/book.component');
var books_component_1 = require('./Components/books.component');
var app_component_1 = require('./app.component');
var new_component_1 = require('./Components/new.component');
var appRoutes = [
    { path: 'Detail/:id', component: book_component_1.BookDetails },
    { path: 'New', component: new_component_1.NewComponent },
    { path: '', component: books_component_1.BookList },
    { path: '**', component: app_component_1.AppComponent },
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map