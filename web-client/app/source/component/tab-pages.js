import React, {Component, Fragment} from 'react'
import {
  withStyles,
  LinearProgress,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from 'material-ui'

import ErrorBoundary from './error-boundary'


const styles = theme => ({
  container: {
    backgroundColor: theme.palette.error.main,
  },
  card: {
    minWidth: 275,
    maxWidth: 275,
    backgroundColor: 'white',
    // color: 'white'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


const PagesTab = ({classes}) =>
  <ErrorBoundary>
    <div className={classes.container}>
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          be
          nev
          lent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
</div>
  </ErrorBoundary>

export default withStyles(styles)(PagesTab)
