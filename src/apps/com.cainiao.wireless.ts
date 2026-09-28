import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cainiao.wireless',
  name: '菜鸟',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      rules: {
        matches:
          'TextView[id="com.cainiao.wireless:id/homesplash_close_fullscreen"]',
      },
    },
  ],
});
