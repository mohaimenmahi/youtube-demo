/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './App.css'
import { makeStyles } from '@material-ui/core/styles'
import { deepPurple } from '@material-ui/core/colors'
import Youtube from './images/youtube.png'
import ArtCell from './images/artcell.jpg'
import ATM from './images/ATM.jpg'
import FormControl from '@material-ui/core/FormControl'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles({
  card: {
    display: 'flex',
    height: 120,
    marginBottom: 12
  },
  cover: {
    width: 151
  },
  purpleAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepPurple[500]
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 16
  },
  pos: {
    marginBottom: 12
  }
})

function App () {
  const classes = useStyles()
  return (
    <div>
      <header className='App-header'>
        <img style={{ width: 100 }} src={Youtube} />
        <FormControl style={{ width: 600 }} fullWidth variant='outlined'>
          <OutlinedInput
            id='outlined-adornment-amount'
            placeholder='Search'
            style={{ height: 30, marginTop: 10 }}
          />
        </FormControl>
        <Avatar className={classes.purpleAvatar}>SS</Avatar>
      </header>
      <div className='App-body'>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            paddingTop: 50,
            paddingLeft: 100,
            width: '60%'
          }}
        >
          <iframe
            width='880'
            height='475'
            style={{}}
            src='https://www.youtube.com/embed/pPkNtN8G7q8'
            frameborder='0'
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          />
          <Typography style={{ marginTop: 10 }} variant='h5' component='h2'>
            How FinTech is Shaping the Future of Banking | Henri Arslanian |
            TEDxWanChai
          </Typography>
          <Typography
            className={classes.title}
            color='textSecondary'
            gutterBottom
          >
            397,535 views • Dec 5, 2016
          </Typography>
          <div
            style={{
              height: 5,
              borderBottom: '0.5px solid #D3D3D3',
              width: 880
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Avatar className={classes.purpleAvatar}>SS</Avatar>
            <div>
              <Typography
                style={{ fontSize: 15, marginTop: 15 }}
                variant='h5'
                component='h2'
              >
                Shadhin
              </Typography>
              <Typography
                className={classes.title}
                style={{ fontSize: 13 }}
                color='textSecondary'
                gutterBottom
              >
                3975 subscribers
              </Typography>
            </div>
          </div>
          <div
            style={{
              height: 5,
              borderBottom: '0.5px solid #D3D3D3',
              width: 880
            }}
          />
          <Typography
            style={{ fontSize: 15, marginTop: 15 }}
            variant='h5'
            component='h2'
          >
            0 Comments
          </Typography>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Avatar className={classes.purpleAvatar}>SS</Avatar>
            <TextField
              style={{ width: '80%', marginTop: 15 }}
              id='input-with-icon-textfield'
              placeholder='Add a public comment'
            />
          </div>
        </div>
        <div style={{ paddingTop: 50 }}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cover}
              image={ArtCell}
              title='Live from space album cover'
            />
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography
                  style={{ fontSize: 18 }}
                  component='h5'
                  variant='h5'
                >
                  Oniket Prantor | Artcell
                </Typography>
                <Typography variant='subtitle1' color='textSecondary'>
                  Artcell Official
                </Typography>
                <Typography variant='subtitle1' color='textSecondary'>
                  3.2M views
                </Typography>
              </CardContent>
            </div>
          </Card>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cover}
              image={ATM}
              title='Live from space album cover'
            />
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography
                  style={{ fontSize: 18 }}
                  component='h5'
                  variant='h5'
                >
                  Worried about the safety of ATM?
                </Typography>
                <Typography variant='subtitle1' color='textSecondary'>
                  Instamojo
                </Typography>
                <Typography variant='subtitle1' color='textSecondary'>
                  2.1M views
                </Typography>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default App
