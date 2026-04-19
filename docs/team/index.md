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

const mods = [
  {
    avatar: '/team/Moonerino.png',
    name: 'Moonerino',
    title: 'Moderator',
    links: []
  },
  {
    avatar: '/team/GH5T.png',
    name: 'GH5T',
    title: 'Moderator',
    links: []
  },
  {
    avatar: '/team/Crowblers.png',
    name: 'Crowblers',
    title: 'Moderator, Builder',
    links: []
  },
  {
    avatar: '/team/xBumbleBee.png',
    name: 'xBumbleBee',
    title: 'Moderator, Builder, Designer',
    links: []
  }
];

const helpers = [
  {
    avatar: '/team/MarshTheFish.png',
    name: 'MarshTheFish',
    title: 'Helper',
    links: []
  },
  {
    avatar: '/team/_boat_man.png',
    name: '_boat_man',
    title: 'Helper',
    links: []
  },
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
    avatar: '/team/Scorch5000.png',
    name: 'Scorch5000',
    title: 'Developer',
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