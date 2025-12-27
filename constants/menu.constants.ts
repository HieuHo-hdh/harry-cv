export type MenuItem = {
  key: string,
  title: string,
  path: string
}

export const menuItems: MenuItem[] = [
  {
    key: 'home',
    title: 'Home',
    path: '/#home',
  },
  {
    key: 'skills',
    title: 'Skills',
    path: '/#skills',
  },
  {
    key: 'experience',
    title: 'Experience',
    path: '/#experience',
  },
  // {
  //   key: 'projects',
  //   title: 'Projects',
  //   path: '/#projects',
  // },
  {
    key: 'education',
    title: 'Education',
    path: '/#education',
  }
]