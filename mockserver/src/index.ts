import { HttpServerType } from './typings';

import { ExpressApp } from './app/app';

const app = new ExpressApp();
const http: HttpServerType = {
    URL: 'http://localhost',
    PORT: 5000
};
const {httpServer} = app.createServer();

httpServer.listen(http.PORT, () => {
  return console.log(`Server is listening at ${http.URL}:${http.PORT}`);
});