import { useStyles } from './styles'
import Drawer from '@material-ui/core/Drawer'
import CssBaseline from '@material-ui/core/CssBaseline'
import Link from 'next/link'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'

export default function DrawerLeft() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />

        <List>
          <Link href="/">
            <ListItem button>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>
        </List>

        <List>
          <Link href="/warehouse">
            <ListItem button>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Almoxarifado" />
            </ListItem>
          </Link>
        </List>

        <Divider />
      </Drawer>
    </div>
  )
}
