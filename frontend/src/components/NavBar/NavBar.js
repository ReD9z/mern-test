import React, {Fragment} from 'react';
import { AppBar, Toolbar, Typography, IconButton} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ExitToApp,  Dashboard} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    title: {
      flexGrow: 1,
    },
    icon: {
        marginRight: theme.spacing(2),
    },
}));

const NavBar = () =>  {
    const classes = useStyles();
    return (
        <Fragment>
            <AppBar position="static">
                <Toolbar>
                    <Dashboard className={classes.icon} />
                    <Typography variant="h6" className={classes.title}>
                        Задачи
                    </Typography>
                    <IconButton color="inherit">
                        <ExitToApp />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Fragment>
    )
}

export default NavBar;
