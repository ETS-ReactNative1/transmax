import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from '@material-ui/icons/Info';
import StarBorderIcon from "@material-ui/icons/StarBorder";
import {tileData} from './tileData';
import {smallImages, largeImages} from './imagesData';

const styles = theme => ({
  root: {
    background: '#eff0f2',
    padding: '10px 0 0 0',
    overflow: "hidden",

    "& img": {
      width: '100%',
      // maxWidth: "50vw",
      // minHeight: "50vw",
      // maxWidth: "50vw",
      // minWidth: "50vw",
      // padding: '3px',
    }

  },
  gridList: {
    // width: 1600,
    // height: 1000,
    flex: '1 1 auto',
    padding: '20px',
    // overflow: "hidden",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    // transform: "translateZ(0)"
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
      wordWrap: 'break-word'

  },
  icon: {
    color: "white"
  },
  [theme.breakpoints.up("md")]: {
    root: {
      display: "flex",
      flexWrap: "wrap",
      background: '#eff0f2',
      padding: '10px 0 0 0',
      justifyContent: "space-around",

      "& img": {
        width: '100%',
        // maxWidth: "50vw",
        // minHeight: "50vw",
        // maxWidth: "50vw",
        // minWidth: "50vw",
        // padding: '3px',
      }

    }
  }

});


class ImageSection extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      mobileView: false
    }

  }

  componentDidMount(prevProps){
    window.addEventListener("resize", this.resize.bind(this))
    this.setState({ mobileView: window.innerWidth >= 600 })
  }

  resize(){
    this.setState({ mobileView: window.innerWidth >= 600 })
  }


  render(){
    const { classes } = this.props;
    const featuredMobile = this.state.mobileView;
    const pics = this.state.showLargerPics ? largeImages : smallImages;
    // console.log('featuredMobile: ', featuredMobile)

    return (
      <div className={classes.root}>
        <GridList  cellHeight='auto' spacing={4} className={classes.gridList}>

          {pics.map(tile => (
            <GridListTile
              key={tile.img}

              cols={featuredMobile ? 1 : 2}
              rows={featuredMobile ? 1 : 2}
            >
              <img src={tile.img} alt={tile.title} />

              <GridListTileBar
                title={tile.title}
                subtitle={tile.subtitle}
                titlePosition="bottom"
                actionIcon={
                  <InfoIcon className={classes.icon}>
                    <StarBorderIcon />
                  </InfoIcon>
                }
                actionPosition="right"
                className={classes.titleBar}
              />

            </GridListTile>
          ))}

        </GridList>
      </div>
    );
  }
}

ImageSection.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ImageSection);
