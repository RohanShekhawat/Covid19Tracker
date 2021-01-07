import React from 'react';
import styles from './Cards.module.css';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
    console.log(confirmed);
    if(!confirmed){
        return 'Loading...'; 
    }
    return (
        <div className={styles.container}>
            <Grid container spacing = {3} justify = "center"> 
                <Grid item component = {Card} xs={12} md ={3} className = {cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom>Active</Typography>
                        <Typography variant = 'h5'>
                            <CountUp start={0} end = {confirmed.value} duration={1} seperator="," />
                        </Typography>
                        <Typography color = "textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography color = "textSecondary">{new Date(lastUpdate).toLocaleTimeString()}</Typography>
                        <Typography variant = 'body2'>Number of Active Cases</Typography>
                    </CardContent>
                </Grid>
                <Grid item component = {Card} xs={12} md ={3} className = {cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant = 'h5'>
                        <CountUp start={0} end = {recovered.value} duration={1} seperator="," />
                        </Typography>
                        <Typography color = "textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography color = "textSecondary">{new Date(lastUpdate).toLocaleTimeString()}</Typography>
                        <Typography variant = 'body2'>Number of Recoveries</Typography>
                    </CardContent>
                </Grid>
                <Grid item component = {Card} xs={12} md ={3} className = {cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant = 'h5'>
                        <CountUp start={0} end = {deaths.value} duration={1} seperator="," />
                        </Typography>
                        <Typography color = "textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography color = "textSecondary">{new Date(lastUpdate).toLocaleTimeString()}</Typography>
                        <Typography variant = 'body2'>No. of Deaths</Typography>
                    </CardContent>
                </Grid>                
            </Grid>
        </div>
    )
    
}

export default Cards