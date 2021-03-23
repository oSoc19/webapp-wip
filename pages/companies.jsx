import { useContext } from 'react';
import Head from 'next/head';
import useSWR from 'swr';
import MetaContext from '../context/meta';
import fetch from '../util/fetch';
import Header from '../components/Companies/Header';
import Info from '../components/Companies/Info';
import FeaturedProjects from '../components/Projects/FeaturedProjects';
import Partners from '../components/Companies/Partners';

const Companies = () => {
  const { previousEdition, showPreviousPartners } = useContext(MetaContext);

  const partners = showPreviousPartners
    ? useSWR(() => `/editions/${previousEdition.year}/partners.json`, fetch).data
    : null;
  return (
    <>
      <Head>
        <title>Companies | Open Summer of Code</title>
      </Head>
      <Header />
      <Info />
      <FeaturedProjects divider="border-top-light-gray" />
      <Partners partners={partners} />
    </>
  );
};

export default Companies;
