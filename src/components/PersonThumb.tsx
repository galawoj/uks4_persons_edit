import { useAppContext } from "../store/AppContext";

import { Card, CardMedia, CardActionArea } from "@mui/material";

const PersonThumb: React.FC = () => {
  const { personArray, thumbHandler } = useAppContext();

  return (
    <>
      {personArray.map((e) => (
        <Card
          key={e.id}
          sx={{ maxWidth: 345, margin: 1 }}
          onClick={() => thumbHandler(e.id)}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={require(`../assets/${e.photo}`)}
              alt=""
            />
          </CardActionArea>
        </Card>
      ))}
    </>
  );
};

export default PersonThumb;
