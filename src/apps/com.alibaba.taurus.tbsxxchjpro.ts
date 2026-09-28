import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.alibaba.taurus.tbsxxchjpro',
  name: '太好钉+',
  groups: [
    {
      key: 9,
      name: 'PC登录确认',
      rules: {
        matches: 'Button[text="登录"][clickable=true]',
      },
    },
  ],
});
