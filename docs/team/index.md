---
layout: page
title: Team
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme';

const owners = [
  {
    avatar: '/team/ZavidLife.png',
    name: 'ZavidLife',
    title: 'Owner',
    links: [
      { icon: 'github', link: 'https://github.com/zavidlife' },
      { icon: 'x', link: 'https://x.com/zilevola' }
    ]
  },
  {
    avatar: '/team/SpektrSoyuz.png',
    name: 'SpektrSoyuz',
    title: 'Owner, Lead Developer',
    links: [
      { icon: 'github', link: 'https://github.com/spektrsoyuz' },
      { icon: 'x', link: 'https://x.com/spektrsoyuz' }
    ]
  }
];

const admins = [
  {
    avatar: '/team/GH5T.png',
    name: 'GH5T',
    title: 'Admin',
    links: []
  }
];

const mods = [
  {
    avatar: '/team/xBumbleBee.png',
    name: 'xBumbleBee',
    title: 'Moderator, Builder, Designer',
    links: []
  }
];

const helpers = [
  {
    avatar: '/team/Lil2Nun.png',
    name: 'Lil2Nun',
    title: 'Helper',
    links: []
  },
  {
    avatar: '/team/Jeffster1235.png',
    name: 'Jeffster1235',
    title: 'Helper',
    links: []
  },
  {
    avatar: '/team/Moonerino.png',
    name: 'Moonerino',
    title: 'Helper',
    links: []
  }
];

const content_team = [
  {
    avatar: '/team/Treasure_Man.png',
    name: 'Treasure_Man',
    title: 'Builder',
    links: []
  },
  {
    avatar: '/team/MssrM00ny.png',
    name: 'MssrM00ny',
    title: 'Advertiser',
    links: []
  },
  {
    avatar: '/team/nanashakusama_.png',
    name: 'nanashakusama_',
    title: 'Advertiser',
    links: []
  },
  {
    avatar: '/team/elaine0204.png',
    name: 'elaine0204',
    title: 'Advertiser',
    links: []
  },
  {
    avatar: '/team/cationic.png',
    name: 'cationic',
    title: 'Advertiser',
    links: []
  },
  {
    avatar: '/team/aPandaOnceSaid.png',
    name: 'aPandaOnceSaid',
    title: 'Builder, Developer',
    links: []
  }
];
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>Owners</template>
    <template #lead>...</template>
  </VPTeamPageTitle>
  <VPTeamMembers :members="owners"></VPTeamMembers>
  <VPTeamPageSection>
    <template #title>Admins</template>
    <template #lead>...</template>
    <template #members>
      <VPTeamMembers size="small" :members="admins"></VPTeamMembers>
    </template>
  </VPTeamPageSection>
  <VPTeamPageSection>
    <template #title>Mods</template>
    <template #lead>...</template>
    <template #members>
      <VPTeamMembers size="small" :members="mods"></VPTeamMembers>
    </template>
  </VPTeamPageSection>
  <VPTeamPageSection>
    <template #title>Helpers</template>
    <template #lead>...</template>
    <template #members>
      <VPTeamMembers size="small" :members="helpers"></VPTeamMembers>
    </template>
  </VPTeamPageSection>
  <VPTeamPageSection>
    <template #title>Content Team</template>
    <template #lead>...</template>
    <template #members>
      <VPTeamMembers size="small" :members="content_team"></VPTeamMembers>
    </template>
  </VPTeamPageSection>
</VPTeamPage>