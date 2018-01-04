/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { Link, browserHistory } from 'react-router';
import ReactGA from 'react-ga';

import { isIOS } from 'react-device-detect';

import Flexbox from 'flexbox-react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Header from 'components/Header';
import Footer from 'components/Footer';
import withProgressBar from 'components/ProgressBar';
import Img from 'containers/App/Img';
import Banner from 'components/Header/banner.png';

import { MdArrowBack } from 'react-icons/lib/md';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Button from 'material-ui/Button';
import Hidden from 'material-ui/Hidden';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import { withStyles } from 'material-ui/styles';
import List, { ListItem } from 'material-ui/List';
import ListSubheader from 'material-ui/List/ListSubheader';

import { suBranding, appBar, version, whiteLabel } from 'utils/constants';
import { theme } from 'utils/theme';

import messages from 'components/Header/messages';

const MenuLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  height: .30em;
`;

const AppWrapper = styled.div`
  max-width: calc(1200px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 0px;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
`;

const boldFooterWeight = 500;
const lightFooterWeight = 200;
const drawerWidth = 240;

const styles = (xtheme) => ({
  root: {
    width: '100%',
    marginTop: xtheme.spacing.unit * 3,
    zIndex: 1,
  },
  footer: {
    [xtheme.breakpoints.down('lg')]: {
      visibility: 'hidden',
    },
  },
  helmet: {
    [xtheme.breakpoints.down('sm')]: {
      marginBottom: '-20px',
    },
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  drawerHeader: xtheme.mixins.toolbar,
  navIconHide: {
    [xtheme.breakpoints.up('xl')]: {
      display: 'none',
    },
  },
  drawerPaper: {
    width: drawerWidth,
    [xtheme.breakpoints.up('xl')]: {
      width: drawerWidth,
      position: 'relative',
      height: '100%',
    },
  },
  appBar: {
    position: 'absolute',
    [xtheme.breakpoints.up('xl')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  mainPaper: {
    margin: 0,
    marginTop: (appBar ? '20px' : '20px'),
    padding: '40px',
    [xtheme.breakpoints.down('sm')]: {
      padding: '5px',
      paddingBottom: '40px',
    },
  },
  content: {
    backgroundColor: xtheme.palette.background.default,
    width: '100%',
    padding: xtheme.spacing.unit * 0,
    paddingTop: xtheme.spacing.unit * 1,
    height: 'calc(100% - 56px)',
    marginTop: (appBar ? 36 : 0),
    [xtheme.breakpoints.up('lg')]: {
      height: 'calc(100% - 64px)',
      marginTop: 80,
    },
  },
});


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false,
    };
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
  }
  handleDrawerToggle() {
    this.setState({
      drawerOpen: !this.state.drawerOpen,
    });
  }

  render() {
    const drawer = (
      <div>
        <div className={this.props.classes.drawerHeader}>
          <Button dense color="primary" onClick={this.handleDrawerToggle}>
            <MenuLink to="/">
              {whiteLabel ? null :
              <Img width="200px" src={Banner} alt="SUNCAT - Logo" />
              }
              {whiteLabel ?
                <div style={{ color: 'primary', textDecoration: 'none' }}>Catalysis Browser beta v{version}</div>
                :
                <div style={{ color: 'primary', textDecoration: 'none' }}>SUNCAT Browser beta v{version}</div>
              }
            </MenuLink>
          </Button>
        </div>
        <Divider />
        <div className={this.props.classes.drawerPaper}>
          <List>
            <List subheader={<ListSubheader>SEARCH</ListSubheader>}>
              <ListItem>
                <MenuLink to="/energies" onClick={this.handleDrawerToggle}>
                  <Button dense color="primary" >
                    <FormattedMessage {...messages.energies} />
                  </Button>
                </MenuLink>
              </ListItem>


              <ListItem>
                <MenuLink to="/publications" onClick={this.handleDrawerToggle}>
                  <Button dense color="primary" >
                    <FormattedMessage {...messages.publications} />
                  </Button>
                </MenuLink>
              </ListItem>


              {/*
              <ListItem>
                <MenuLink to="/generalSearch" onClick={this.handleDrawerToggle}>
                  <Button dense color="primary">
                    <FormattedMessage {...messages.generalSearch} />
                  </Button>
                </MenuLink>
              </ListItem>
            */}
            </List>


            {/*
            <List subheader={<ListSubheader>GROUPS</ListSubheader>}>
              <ListItem>
                <Button disabled dense color="primary" >
                  ...
                </Button>
              </ListItem>
            </List>
            */}

            <List subheader={<ListSubheader>APPS</ListSubheader>}>

              <ListItem>
                <MenuLink to="/yourNextApp" onClick={this.handleDrawerToggle}>
                  <Button dense color="primary" >
                    <FormattedMessage {...messages.yourNextApp} />
                  </Button>
                </MenuLink>
              </ListItem>

              <ListItem>
                <MenuLink to="/activityMaps" onClick={this.handleDrawerToggle}>
                  <Button dense color="primary" >
                    <FormattedMessage {...messages.activityMaps} />
                  </Button>
                </MenuLink>
              </ListItem>

              <ListItem>
                <MenuLink>
                  <Button disabled dense color="primary" >
                    AtoML
                  </Button>
                </MenuLink>
              </ListItem>

              <ListItem>
                <MenuLink>
                  <Button disabled dense color="primary" >
                    CatMAP
                  </Button>
                </MenuLink>
              </ListItem>

              <ListItem>
                <MenuLink to="/pourbaixDiagrams" onClick={this.handleDrawerToggle}>
                  <Button disabled dense color="primary" >
                    <FormattedMessage {...messages.pourbaixDiagrams} />
                  </Button>
                </MenuLink>
              </ListItem>

              <ListItem>
                <MenuLink to="/scalingRelations" onClick={this.handleDrawerToggle}>
                  <Button disabled dense color="primary" >
                    <FormattedMessage {...messages.scalingRelations} />
                  </Button>
                </MenuLink>
              </ListItem>


            </List>

            <List subheader={<ListSubheader>API</ListSubheader>}>

              <ListItem>
                <MenuLink to="/graphQLConsole" onClick={this.handleDrawerToggle}>
                  <Button dense color="primary" >
                    <FormattedMessage {...messages.graphqlconsole} />
                  </Button>
                </MenuLink>
              </ListItem>
            </List>
          </List>
        </div>
      </div>
    );

    return (
      <div>
        {suBranding === false || appBar === true ? null :
        <div id="brandbar">
          <div className="container">
            <ReactGA.OutboundLink
              to="http://www.stanford.edu"
              eventLabel="http://www.stanford.edu"
              style={{ margin: 10 }}
              target="_blank"
            >
              <img src="https://www.stanford.edu/su-identity/images/brandbar-stanford-logo@2x.png" alt="Stanford University" width="152" height="23" />
            </ReactGA.OutboundLink>
          </div>
        </div>
        }
        {appBar === false ? null :
        <div>
          <AppBar position="fixed" className={this.props.classes.appBar}>
            <Toolbar>
              { (!isIOS || this.props.history === null) ? null :
              <IconButton onClick={browserHistory.goBack} color="contrast" aria-label="Back">
                <MdArrowBack />
              </IconButton>

              }
              <IconButton onClick={this.handleDrawerToggle} color="contrast" aria-label="Menu" className={this.props.classes.navIconHide}>
                {/* onClick event has to be on IconButton to work w/ Firefox. */}
                <MenuIcon />
              </IconButton>
              { suBranding === false ? null :
              <ReactGA.OutboundLink
                to="http://www.stanford.edu"
                eventLabel="http://www.stanford.edu"
                style={{ margin: 0, marginLeft: 10 }}
                target="_blank"
              >
                <img src="https://www.stanford.edu/su-identity/images/brandbar-stanford-logo@2x.png" alt="Stanford University" width="152" height="23" />
              </ReactGA.OutboundLink>
              }
              <Typography type="body1" color="inherit" style={{ marginLeft: 10 }}>
                {whiteLabel ?
                  `${this.props.location.pathname}` :
                  `CatApp${this.props.location.pathname}`}
              </Typography>
            </Toolbar>
          </AppBar>
          <Hidden xlUp>
            <Drawer
              type="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.drawerOpen}
              onRequestClose={this.handleDrawerToggle}
              className={this.props.classes.drawerPaper}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              { drawer }
            </Drawer>
          </Hidden>
          <Hidden xlDown implementation="css">
            <Drawer
              type="permanent"
              open
              className={this.props.classes.drawerPaper}
            >
              { drawer }
            </Drawer>
          </Hidden>
        </div>
        }
        <main className={this.props.classes.content}>
          <AppWrapper>
            <Paper
              className={this.props.classes.mainPaper}
              elevation={18}
            >
              <Helmet
                className={this.props.classes.helmet}
                titleTemplate="%s - CatApp Browser"
                defaultTitle="CatApp Browser"
                meta={[
                  { name: 'description', content: `CatApp Browser is a frontend for browsing the SUNCAT CatApp database containing thousands of first-principles calculations related to heterogeneous catalysis reactions on surface systems. Its goal is to allow comprehensive and user-friendly access to raw quantum chemical simulations guided by heterogeneous catalysis concepts and commonly used graphical representations such as scaling relations and activity maps. All reaction energies are derived from periodic plane-wave density functional theory calculations. An increasing number of calculations contain the corresponding optimized geometry as well as further calculational details such as exchange-correlation (XC) functional, basis set quality, and k-point sampling. Ultimately, the goal is to provide fully self-contained data for predicting experimental observations from electronic structure calculations and using software packages such as Quantum Espresso, GPAW, VASP, and FHI-aims. Input and output with other codes is supported through the Atomic Simulation Environment (ASE). It may also serve as a natural starting point for training and developing machine-learning based approaches accelerating quantum chemical simulations.
      Features include search for specific reaction energies, transition states, structures, exploration of scaling relations, activity maps, Pourbaix diagrams and machine learning models, as well as generation of novel bulk and surface structures. Calculations are linked to peer-review publications where available. The database can be queried via a GraphQL API that can also be accessed directly.
      All code pertaining to this project is hosted as open-source under a liberal MIT license on github to encourage derived work and collaboration. The frontend is developed using the React Javascript framework based on react boilerplate. New components (apps) can be quickly spun-off and added to the project. The backend is developed using the Flask Python framework providing the GraphQL API as well as further APIs for specific apps.
      As such CatApp Browser aims to serve as a starting point for trend studies and atomic based heterogeneous catalysis explorations.` },
            { name: 'robots', content: 'index,follow' },
            { name: 'keywords', content: 'heterogeneous catalysis,metals,density functional theory,scaling relations, activity maps,pourbaix diagrams,machine learning,quantum espresso,vasp,gpaw' },
            { name: 'DC.title', content: 'CatApp Browser' },
                ]}
                link={suBranding === false && appBar === false ? [] : [
                  { rel: 'stylesheet', href: 'https://www.stanford.edu/su-identity/css/su-identity.css' },
                  { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,200' },
                ]}
              />
              <Header />
              {React.Children.toArray(this.props.children)}
            </Paper>
            <Footer />
          </AppWrapper>
        </main>
        {suBranding === false ? null :
        <div className={this.props.classes.footer}>
          <Flexbox id="global-footer" flexDirection="column" justifyContent="space-around" style={{ marginTop: '0px' }}>
            <Flexbox flexDirection="row" justifyContent="space-around">
              <Flexbox flexDirection="column" justifyContent="space-around">
                <Flexbox flexDirection="row" justifyContent="space-around">
                  <Flexbox width="25vh" />
                  <Flexbox flexDirection="column" justifyContent="center">
                    <Flexbox>
                      <ReactGA.OutboundLink
                        to="http://www.stanford.edu"
                        eventLabel="http://www.stanford.edu"
                        target="_blank"
                      >
                        <img src="https://www.stanford.edu/su-identity/images/footer-stanford-logo@2x.png" alt="Stanford University" width="105" height="49" />
                      </ReactGA.OutboundLink>
                    </Flexbox>
                  </Flexbox>
                  <Flexbox width="10vh" />

                  <Flexbox flexDirection="column" justifyContent="space-around" className={this.props.classes.footer}>
                    <Flexbox height="10vh" />
                    <Flexbox
                      id="bottom-text"
                      className="span10"
                      height="5vh"
                      style={{
                        fontFamily: ['Source Sans Pro', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
                      }}
                    >
                      <ul >
                        <li className="home"><ReactGA.OutboundLink style={{ fontWeight: boldFooterWeight }} to="http://www.stanford.edu" eventLabel="http://www.stanford.edu" target="_blank">Stanford Home</ReactGA.OutboundLink></li>
                        <li className="maps alt"><ReactGA.OutboundLink style={{ fontWeight: boldFooterWeight }} to="http://visit.stanford.edu/plan/maps.html" eventLabel="http://visit.stanford.edu/plan/maps.html">Maps &amp; Directions</ReactGA.OutboundLink></li>
                        <li className="search-stanford"><ReactGA.OutboundLink style={{ fontWeight: boldFooterWeight }} to="http://www.stanford.edu/search/" eventLabel="http://www.stanford.edu/search/">Search Stanford</ReactGA.OutboundLink></li>
                        <li className="terms alt"><ReactGA.OutboundLink style={{ fontWeight: boldFooterWeight }} to="http://www.stanford.edu/site/terms.html" eventLabel="http://www.stanford.edu/site/terms.html">Terms of Use</ReactGA.OutboundLink></li>
                        <li className="emergency-info"><ReactGA.OutboundLink style={{ fontWeight: boldFooterWeight }} to="http://emergency.stanford.edu" eventLabel="http://emergency.stanford.edu">Emergency Info</ReactGA.OutboundLink></li>
                      </ul>
                    </Flexbox>
                    <Flexbox height="1vh" />
                    <Flexbox className="clear">
                      <p
                        className="copyright vcard"
                        style={{
                          margin: 0,
                          fontFamily: ['Source Sans Pro', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
                          fontWeight: lightFooterWeight,
                        }}
                      >&copy; <span className="fn org">Stanford University</span>.&nbsp;&nbsp;<span className="adr"> <span className="locality">Stanford</span>, <span className="region">California</span> <span className="postal-code">94305</span></span>.&nbsp;&nbsp;
                        <span id="copyright-complaint"></span>
                      </p>
                    </Flexbox>
                    <Flexbox height="20vh" />
                  </Flexbox>
                </Flexbox>
              </Flexbox>
              <Flexbox width="10vh" />
            </Flexbox>
          </Flexbox>
        </div>
        }
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  children: React.PropTypes.node,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  history: state.get('route').get('locationBeforeTransitions'),
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(withProgressBar(withStyles(styles, { withTheme: true })(App)));
