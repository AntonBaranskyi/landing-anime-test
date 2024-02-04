import styles from './BreadCrumbs.module.scss';

export const BreadCrumbs = () => {
  return (
    <p className={styles.breadCrumb}>
      Home &gt; Lorem Ipsum is &gt; <span>Lorem Ipsum is simply dummy</span>
    </p>
  );
};
