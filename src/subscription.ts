import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 3434349527,
  name: 'Subscription',
  version: 0,
  author: 'xrj4j',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/Tiane-ira/gkd-rules',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
