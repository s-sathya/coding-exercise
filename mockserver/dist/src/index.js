"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app/app");
const app = new app_1.ExpressApp();
const http = {
    URL: 'http://localhost',
    PORT: 5000
};
const { httpServer } = app.createServer();
httpServer.listen(http.PORT, () => {
    return console.log(`Server is listening at ${http.URL}:${http.PORT}`);
});
//# sourceMappingURL=index.js.map