# NgCliPubPriv

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

This very simple demo just shows how ng build / ng serve fails to highlight that a private field is being referenced in the html file.

As per https://github.com/angular/angular-cli/issues/7696#event-1261457817 this is currently by design, or at least isn't considered a bug: you need to add --aot to get this feedback, however I believe with angular 5 aot (Ahead Of Time compilation, as opposed to JIT - Just In Time) will be the default.

Let's hope so.