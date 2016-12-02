import React, { Component } from 'react';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Card from 'grommet/components/Card';
import Footer from 'grommet/components/Footer';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Hero from 'grommet/components/Hero';
import Menu from 'grommet/components/Menu';
import Paragraph from 'grommet/components/Paragraph';
import GrommetIcon from 'grommet/components/icons/base/BrandGrommetOutline';
import SearchIcon from 'grommet/components/icons/base/Search';
import NewsFeed from './NewsFeed';

export default class PrimaryPage extends Component {
  render() {
    return (
      <Box colorIndex="light-1">
        <Header justify="center" colorIndex="neutral-4">
          <Box size={{width: {max: 'xxlarge'}}} direction="row"
            responsive={false} justify="start" align="center" 
            pad={{horizontal: 'medium'}}>
            <GrommetIcon colorIndex="brand" />
            <Box pad="small" />
            <Menu label="Label" inline={true} direction="row">
              <Anchor href="#">Solutions</Anchor>
              <Anchor href="#">Services</Anchor>
              <Anchor href="#">Products</Anchor>
              <Anchor href="#">About Us</Anchor>
              <Anchor href="#">Support</Anchor>
            </Menu>
            <Box flex="grow" align="end">
              <SearchIcon />
            </Box>
          </Box>
        </Header>
        <Box>
          <Hero size="large" backgroundImage="/img/marquee.jpg" colorIndex="light-1">
            <Card
              heading={
                <Heading strong={true}>
                  Accelerate your transformation with the cloud
                </Heading>
              }
              description="HPE can help you benefit now from your right mix of cloud" 
              label="label" 
              size="large"
              link={
                <Anchor href="#" primary={true} label="Learn More" />
              } />
          </Hero>
        </Box>

        <Box align="center">
          <Box pad="large" align="center" textAlign="center"
            size={{"width": {"max": "xxlarge"}}}>
            <Heading tag="h1" strong={true} margin="none">
              Sumo accumsan mel ignota hendrerit.
            </Heading>
            <Paragraph size="xlarge" width="large">
              Lorem ipsum dolor sit amet, dicat sonet congue ei mei, est summo 
              copiosae facilisi an. Sumo accumsan mel ea, eu ignota hendrerit 
              consequuntur me.
            </Paragraph>
          </Box>
        </Box>

        <Box colorIndex="light-2" pad={{vertical: "large"}} align="center">
          <Box align="center"
            size={{"width": "xxlarge"}} pad={{horizontal: "large"}}>
            <Heading tag="h2" strong={true}>
              Recent News
            </Heading>
          </Box>
          <NewsFeed />
        </Box>
        <Footer full="horizontal">
          <Box colorIndex="neutral-1" pad="large" align="center" full="horizontal">
            <Box className="footer-cards-container" pad={{vertical: "medium"}}
              size={{width: "xxlarge"}} direction="row">
              <Card
                pad={{horizontal: "large"}}
                contentPad="medium"
                basis="1/2"
                direction="row"
                heading="Lorem ipsum dolor sit amet"
                label="Label"
                link={
                  <Anchor href="http://www.grommet.io/docs/" primary={true}>
                    Learn More
                  </Anchor>
                }
                separator="right" />
              <Card
                pad={{horizontal: "large"}}
                contentPad="medium"
                basis="1/2"
                direction="row"
                heading="Lorem ipsum dolor sit amet"
                label="Label"
                link={
                  <Anchor href="http://www.grommet.io/docs/" primary={true}>
                    Learn More
                  </Anchor>
                } />
            </Box>
          </Box>
        </Footer>
      </Box>
    );
  }
};
