import {
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

import styles from "./style.module.scss";
import { useAppContext } from "../store/AppContext";

const PersonCard: React.FC = () => {
  const {
    clickedPerson,
    // removeHandler,
    nextPersonHandler,
    previousPersonHandler,
  } = useAppContext();

  const personObj = clickedPerson[0];

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={require(`../assets/${personObj.photo}`)}
          alt="green iguana"
        />
        <div className={styles.arrows}>
          <ArrowCircleLeftIcon
            onClick={(e) => {
              e.stopPropagation();
              previousPersonHandler(personObj.id);
            }}
          />
          <ArrowCircleRightIcon
            onClick={(e) => {
              e.stopPropagation();
              nextPersonHandler(personObj.id);
            }}
          />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {personObj.name + " " + personObj.surname}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {personObj.text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PersonCard;
