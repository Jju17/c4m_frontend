import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import team1 from "assets/img/faces/maxime.jpg";
import team2 from "assets/img/faces/pierre.jpg";
import team3 from "assets/img/faces/julien.jpg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
	const classes = useStyles();
	const imageClasses = classNames(
		classes.imgRaised,
		classes.imgRoundedCircle,
		classes.imgFluid
	);
	return (
		<div className={classes.section}>
			<h2 className={classes.title}>Et voici la team</h2>
			<div>
				<GridContainer>
					<GridItem xs={12} sm={12} md={4}>
						<Card plain>
							<GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
								<img src={team1} alt="..." className={imageClasses} />
							</GridItem>
							<h4 className={classes.cardTitle}>
								Maxime Lemaire
								<br />
								<small className={classes.smallTitle}>Co-Fondateur</small>
							</h4>
							<CardBody>
								<p className={classes.description}>
									Curabitur a lacinia massa. Quisque a felis sed nisl consequat
									cursus. Aliquam erat volutpat. Curabitur turpis dui, dapibus
									et sem non, pretium euismod eros. Pellentesque elementum
									lectus id sem vehicula mollis.
								</p>
							</CardBody>
							<CardFooter className={classes.justifyCenter}>
								<Button
									justIcon
									color="transparent"
									className={classes.margin5}
									target="_blank"
									href="https://www.linkedin.com/in/maxime-lemaire-ustart/"
								>
									<i className={classes.socials + " fab fa-linkedin"} />
								</Button>
								<Button
									justIcon
									color="transparent"
									className={classes.margin5}
									target="_blank"
									href="https://www.facebook.com/audeamusnunc"
								>
									<i className={classes.socials + " fab fa-facebook"} />
								</Button>
							</CardFooter>
						</Card>
					</GridItem>
					<GridItem xs={12} sm={12} md={4}>
						<Card plain>
							<GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
								<img src={team2} alt="..." className={imageClasses} />
							</GridItem>
							<h4 className={classes.cardTitle}>
								Pierre Parent
								<br />
								<small className={classes.smallTitle}>Co-Fondateur</small>
							</h4>
							<CardBody>
								<p className={classes.description}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Curabitur a lacinia massa. Quisque a felis sed nisl consequat
									cursus. Curabitur turpis dui, dapibus et sem non, pretium
									euismod eros. Pellentesque elementum lectus id sem vehicula
									mollis.
								</p>
							</CardBody>
							<CardFooter className={classes.justifyCenter}>
								<Button
									justIcon
									color="transparent"
									className={classes.margin5}
									target="_blank"
									href="https://www.facebook.com/pierre.parent.90"
								>
									<i className={classes.socials + " fab fa-facebook"} />
								</Button>
								<Button
									justIcon
									color="transparent"
									className={classes.margin5}
									target="_blank"
									href="https://www.linkedin.com/in/pierre-parent-c4m/"
								>
									<i className={classes.socials + " fab fa-linkedin"} />
								</Button>
							</CardFooter>
						</Card>
					</GridItem>
					<GridItem xs={12} sm={12} md={4}>
						<Card plain>
							<GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
								<img src={team3} alt="..." className={imageClasses} />
							</GridItem>
							<h4 className={classes.cardTitle}>
								Julien Rahier
								<br />
								<small className={classes.smallTitle}>Co-Fondateur</small>
							</h4>
							<CardBody>
								<p className={classes.description}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Curabitur a lacinia massa. Quisque a felis sed nisl consequat
									cursus. Aliquam erat volutpat. Curabitur turpis dui, dapibus
									et sem non, pretium euismod eros.
								</p>
							</CardBody>
							<CardFooter className={classes.justifyCenter}>
								<Button
									justIcon
									color="transparent"
									className={classes.margin5}
									target="_blank"
									href="https://www.linkedin.com/in/julien-rahier/"
								>
									<i className={classes.socials + " fab fa-linkedin"} />
								</Button>
								<Button
									justIcon
									color="transparent"
									className={classes.margin5}
									target="_blank"
									href="https://www.instagram.com/ju_rahier/"
								>
									<i className={classes.socials + " fab fa-instagram"} />
								</Button>
								<Button
									justIcon
									color="transparent"
									className={classes.margin5}
									target="_blank"
									href="https://www.facebook.com/julien.rahier"
								>
									<i className={classes.socials + " fab fa-facebook"} />
								</Button>
							</CardFooter>
						</Card>
					</GridItem>
				</GridContainer>
			</div>
		</div>
	);
}
