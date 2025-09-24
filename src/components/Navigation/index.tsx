'use client';

import { TabItem, Tabs } from '@worldcoin/mini-apps-ui-kit-react';
import { Donate , Peerlist, Group } from 'iconoir-react';
import { useState } from 'react';

export const Navigation = () => {
  const [value, setValue] = useState('home');

  return (
    <Tabs value={value} onValueChange={setValue}>
      <TabItem value="donations" icon={<Donate />} label="Donations" />
      <TabItem value="philanthropy" icon={<Peerlist />} label="Philanthropy" />
      <TabItem value="campaigns" icon={<Group />} label="Campaigns" />
    </Tabs>
  );
};
