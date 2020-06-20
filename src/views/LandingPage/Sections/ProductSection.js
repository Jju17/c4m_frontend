import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import CategoryIcon from "@material-ui/icons/Category";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import FastForwardIcon from "@material-ui/icons/FastForward";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
	const classes = useStyles();
	return (
		<div className={classes.section}>
			<GridContainer justify="center">
				<GridItem xs={12} sm={12} md={8}>
					<h2 className={classes.title}>Parlons de Cook4Me</h2>
					<h5 className={classes.description}>
						Cook4Me est une plate-forme collaborative ayant pour mission la
						vente de plats entre particuliers créée en novembre 2019. Cook4Me
						propose donc aux passionnés de cuisine de mettre en vente leurs
						créations à un public de proximité.
					</h5>
				</GridItem>
			</GridContainer>
			<div>
				<GridContainer>
					<GridItem xs={12} sm={12} md={4}>
						<InfoArea
							title="Rapide"
							description="Etudiant ou pas, nous prenons plus le temps de manger correctement. Nous sommes tellement occupé dans notre journée que nous ne pensons plus a aller faire des courses, préparer le repas, imaginer des recettes..."
							icon={FastForwardIcon}
							iconColor="info"
							vertical
						/>
					</GridItem>
					<GridItem xs={12} sm={12} md={4}>
						<InfoArea
							title="Rencontre"
							description="A coup sûr, tu trouveras un de nos chefs dans ton quartier! Peut-être le début d'une belle rencontre!"
							icon={QuestionAnswerIcon}
							iconColor="success"
							vertical
						/>
					</GridItem>
					<GridItem xs={12} sm={12} md={4}>
						<InfoArea
							title="Choix"
							description="Toujours très classique les restos en ce moment sur deliveroo tu trouves pas..? Ouais ça serait quand même sympa de trouver des trucs moins cher, mais plus dépaysant, ou, au contraire! Un plat de grand-mère."
							icon={CategoryIcon}
							iconColor="danger"
							vertical
						/>
					</GridItem>
				</GridContainer>
			</div>
		</div>
	);
}
