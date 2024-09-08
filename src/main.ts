import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./app/app.module";

(async () => {
  const moduleRef = await platformBrowserDynamic().bootstrapModule(AppModule);
})()
