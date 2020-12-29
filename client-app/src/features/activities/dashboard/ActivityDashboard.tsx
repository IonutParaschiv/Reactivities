import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useRef } from "react";
import { Grid } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import ActivityStore from "../../../app/stores/ActivityStore";
import ActivityList from "./ActivityList";

const ActivityDashboard: React.FC = () => {
  const activityStore = useContext(ActivityStore);
  const isMounted = useRef(true);
  useEffect(() => {
    if (isMounted) activityStore.loadActivities();
    return () => {
      isMounted.current = false;
    };
  }, [activityStore]);

  if (activityStore.loadingInitial)
    return <LoadingComponent content="Fetching your activities..." />;
  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityList/>
      </Grid.Column>
      <h2>Activity Filters</h2>
    </Grid>
  );
};

export default observer(ActivityDashboard);
