import register from 'navi-scripts/register';
import { createBrowserNavigation } from 'navi';
import HelmetProvider from 'react-navi-helmet';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import { Router } from 'react-navi';
import './index.module.css';
import routes from './routes';

// `register()` is responsible for exporting your app's pages and App
// component to the static renderer, and for starting the app with the
// `main()` function when running within a browser.
register({
  // Specify the pages that navi-app should statically build, by passing in a
  // Switch object.
  routes,

  // This will only be called when loading your app in the browser. It won't
  // be called when performing static generation.
  async main() {
    const navigation = createBrowserNavigation({ routes });

    // Wait until the navigation has loaded the page's content, or failed to do
    // so. If you want to load other data in parallel while the initial page is
    // loading, make sure to start loading before this line.
    await navigation.getRoute();

    if (process.env.NODE_ENV === 'production') {
      ReactGA.initialize('UA-43755905-3');
      ReactGA.pageview(window.location.pathname + window.location.search);
      navigation._history.listen(location => {
        ReactGA.pageview(location.pathname + location.search);
      });
    }

    // React requires that you call `ReactDOM.hydrate` if there is statically
    // rendered content in the root element, but prefers us to call
    // `ReactDOM.render` when it is empty.
    const hasStaticContent = process.env.NODE_ENV === 'production';
    const renderer = hasStaticContent ? ReactDOM.hydrate : ReactDOM.render;

    // Start react, passing in the current navigation state and
    // rendering the top-level view.
    renderer(
      <HelmetProvider>
        <Router navigation={navigation} />
      </HelmetProvider>,
      document.getElementById('root')
    );
  },
});
