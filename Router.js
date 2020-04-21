import { registerMicroApps, start } from 'qiankun';

registerMicroApps(
  [
    {
      name: 'AppApple', // app name registered
      entry: "//localhost:8881/",
      container: '#apps-container',
      activeRule: '/app1',
    },
    {
      name: 'AppPear',
      entry: '//localhost:8882/',
      container: '#apps-container',
      activeRule: '/app2',
    }
  ],
  {
    beforeLoad: [
      app => {
        console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
      },
    ],
    beforeMount: [
      app => {
        console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
      },
    ],
    afterUnmount: [
      app => {
        console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
      },
    ],
  }
);
  
start();