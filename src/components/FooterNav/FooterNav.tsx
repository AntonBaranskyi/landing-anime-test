import styles from './FooterNav.module.scss';

const navigationDataList = [
  {
    title: 'Categhory',
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
  },
  {
    title: 'Play better',
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
  },
  {
    title: 'Useful links',
    items: ['link', 'link', 'link', 'link', 'link', 'link'],
  },
];

export const FooterNav = () => {
  return (
    <div className={styles.footerNavWrapper}>
      {navigationDataList.map((list) => (
        <div key={list.title}>
          <h2 className={styles.footerNavTitle}>{list.title}</h2>
          <ul className={styles.footerList}>
            {list.items.map((item, i) => (
              <li className={styles.footerListItem} key={i}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
