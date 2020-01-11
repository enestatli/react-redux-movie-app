import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { Container, Image, Menu, Visibility } from "semantic-ui-react";

import { menuStyle, fixedMenuStyle } from "../helpers/styleHelper";

export default class Header extends Component {
  state = {
    menuFixed: false,
    overlayFixed: false
  };

  stickTopMenu = () => this.setState({ menuFixed: true });

  unStickTopMenu = () => this.setState({ menuFixed: false });

  render() {
    const { menuFixed } = this.state;
    return (
      <div>
        <Visibility
          onBottomPassed={this.stickTopMenu}
          onBottomVisible={this.unStickTopMenu}
          once={false}
        >
          <Menu
            borderless
            fixed={menuFixed ? "top" : undefined}
            style={menuFixed ? fixedMenuStyle : menuStyle}
          >
            <Container text>
              <Menu.Item as={Link} to="/" exact="true">
                <Image
                  size="mini"
                  src="https://react.semantic-ui.com/logo.png"
                />
                <Menu.Item header>Movie App</Menu.Item>
              </Menu.Item>

              <Menu.Item as={NavLink} to="/movies" exact={true}>
                Movies
              </Menu.Item>
              <Menu.Item as={NavLink} to="/movies/new" exact={true}>
                Add New
              </Menu.Item>
            </Container>
          </Menu>
        </Visibility>
      </div>
    );
  }
}
