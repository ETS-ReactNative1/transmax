import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import {tileData} from './tileData';

const styles = theme => ({
  root: {
    // display: "flex",
    // flexWrap: "wrap",
    background: '#eff0f2',
    padding: '10px 0 0 10px',
    // justifyContent: "space-around",
    overflow: "hidden",
    // backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 1600,
    height: 1000,
    flex: '1 1 auto',
    overflow: "hidden",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    // transform: "translateZ(0)"
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  },
  icon: {
    color: "white"
  },
  [theme.breakpoints.up("md")]: {
    root: {
      display: "flex",
      flexWrap: "wrap",
      background: '#eff0f2',
      padding: '10px 0 0 10px',
      justifyContent: "space-around",
      overflow: "hidden",
      // backgroundColor: theme.palette.background.paper
    },
  }

});


function AdvancedGridList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList  cellHeight={450} spacing={2} className={classes.gridList}>
        {tileData.map(tile => (
          <GridListTile
            key={tile.img}
            cols={tile.featured ? 2 : 1}
            rows={tile.featured ? 2 : 1}
          >
            <img src={tile.img} srcSet={tile.srcset} sizes={tile.sizes} alt={tile.title} />

            <GridListTileBar
              title={tile.title}
              titlePosition="top"
              actionIcon={
                <IconButton className={classes.icon}>
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
              className={classes.titleBar}
            />

          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

AdvancedGridList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AdvancedGridList);
