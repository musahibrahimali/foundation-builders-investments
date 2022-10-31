import React from 'react';
import PropTypes from 'prop-types';
import { SeoHead } from '../components/common/Head';
import { Provider } from 'react-redux';
import { store } from "../lib/provider";
import '../styles/globals.css';
import 'tailwindcss/tailwind.css';

const Noop = ({ children }) => (<React.Fragment>{children}</React.Fragment>)

const MyApp = (props) => {
  const {
    Component,
    pageProps: { session, ...pageProps },
  } = props;

  const Layout = (Component).Layout || Noop;

  // use effect to remove the loading class from the body
  React.useEffect(() => {
    document.body.classList?.remove('loading');
  });

  return (
    <React.Fragment>
      <SeoHead />
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </React.Fragment>
  );
}

// main prop types of most pages
MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
