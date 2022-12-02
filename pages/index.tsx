import Head from 'next/head';
import { FormattedDate, IntlProvider } from 'react-intl';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <IntlProvider locale="de">
      <p>
        <FormattedDate
          value="2022-12-24"
          weekday="short"
          day="numeric"
          month="long"
          year="numeric"
        />
      </p>
      <p>Expected: Sa., 24. Dezember 2022</p>
    </IntlProvider>
  );
}
