import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import ApplicationForm from "./ApplicationForm";
import ApplicationSuccess from "./ApplicationSuccess";
import Footer from "./Footer";
import ImageSection from "./ImageSection";


const styles = theme => ({
  root: {
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "space-between"
    }
  },
  flexContainer: {
    background: '#eff0f2',
    margin: "0 auto 0 auto"
  },
  flexSection: {
    padding: "20px",
    boxSizing: "border-box",
    flexBasis: "50%",
    marginBottom: "20px"
  },
  mainText: {
    fontFamily: "Times New Roman, Times, serif",
    fontSize: "18px",
    lineHeight: "1.6"
  }
});

class HomePage extends Component {

  render() {
    const { classes, applicationSuccess } = this.props;

    // console.log('home page ', this.props)
    return (
      <div>
        <div className={classNames(classes.root, classes.flexContainer)}>
          <div className={classes.flexSection}>
            <h2 className="py-16">ABOUT OUR COMPANY</h2><br/>
              <p className={classes.mainText}>
                Transmax is a commerical truck fleet operation company based in Cincinnati Ohio.
                We provide dependable transportation services that help our customers deliver their cargo safely and on time every day.
                Our team of drivers and support staff work hard to make sure the company is ready to provide round-the-clock service.
                The company goal is to provide continuous transportation solutions to wide range of customers. We are looking to add new trucks to our fleet and hire more safe and reliable drivers.
              </p>
            <br/><br/>
            <h2 className="py-16">$0.60 CENTS PER MILE</h2><br/>
              <h3>What you can expect:</h3>&nbsp;
                <ul style={{ marginLeft: '25px' }} className={classes.mainText}>
                  <li>Flexible home time - choose to be at home for the weekends or to stay on the road</li>
                  <li>Drivers who have proven to be safe and dependable will qualify for $0.60 cpm</li>
                  <li>Get paid every week - flexible pay methods</li>
                  <li>Paid insurance</li>
                  <li>Drive on paper log or ELD</li>
                  <li>Paid vacation</li>
                  <li>Detention paid $20 per hour</li>
                  <li>Extra stop paid at $25 for each additional stop</li>
                </ul>&nbsp;&nbsp;

              <h3>To qualifiy you must meet the following:</h3>&nbsp;
                <ul style={{ marginLeft: '25px' }} className={classes.mainText}>
                  <li>Class A CDL</li>
                  <li>Minimum 2 year experience</li>
                  <li>No DUI within 10 years</li>
                  <li>No more than 2 moving violations in the past 3 years.</li>
                  <li>No more than 1 preventable accident in the past 2 years, no major accident within 5 years.</li>
                </ul><br/>
                <p style={{ fontWeight:'700', fontSize:'16px' }}> To apply - call us at 513-680-5334 or fill in the application form.</p>
          </div>

          <div className={classes.flexSection}>
            <h2 className="py-16">DRIVER'S APPLICATION</h2><br/>
            <br />
            {applicationSuccess ? (
              <ApplicationSuccess />
            ) : (
              <ApplicationForm onCreate={this.props.onCreate} />
            )}
          </div>
        </div>
        <ImageSection />
        <Footer />
      </div>
    );
  }
}

function mapStateToProps({ application }) {
  return {
    applicationSuccess: application.candidate.applicationSuccess
  }
}

export default withStyles(styles, {withTheme: true})(withRouter(connect(mapStateToProps, null)(HomePage)));
