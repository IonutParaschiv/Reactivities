import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Button, Container, Menu } from "semantic-ui-react";
import ActivityStore from "../../app/stores/ActivityStore";

const NavBar:React.FC = () => {
  const activityStore = useContext(ActivityStore);
  const { openCreateForm } = activityStore;
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item header>
          <img src="/assets/logo.png" alt="logo" style={{marginRight: 10}}/>
          Reactivities
        </Menu.Item>
        <Menu.Item name="Activities" />
        <Menu.Item>
          <Button onClick={openCreateForm} positive content="Create activity"/>
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default observer( NavBar);
