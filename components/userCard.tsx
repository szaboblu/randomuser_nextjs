import { Card, Box, CardMedia, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import styles from "../styles/UserCard.module.css";
import { IUser } from "../ts";

import { COLORS } from "../constants/colors";

export function UserCard({ user }: { user: IUser }) {
  const color = user.gender === "male" ? COLORS.blue : COLORS.pink;
  return (
    <Card className={styles.card}>
      <Box className={styles.cardContent}>
        <CardMedia
          className={styles.imageContainer}
          style={{
            border: `2px solid ${color}`,
            boxShadow: `0 0 12px 3px ${color}`,
          }}
        >
          <Image
            src={user.picture}
            alt={user.name}
            className={styles.image}
            fill
          />
        </CardMedia>
        <CardContent className={styles.text}>
          <Typography
            sx={{ fontSize: "large", textAlign: "center" }}
            color="text.primary"
          >
            {user.name} {user.surname}
          </Typography>
          <Typography sx={{ textAlign: "center" }} color="text.secondary">
            {user.age}
          </Typography>
          <Typography sx={{ textAlign: "center" }} color="text.secondary">
            {user.city}
          </Typography>
        </CardContent>
        <CardContent className={styles.text}>
          <Typography sx={{ fontSize: "0.8rem" }} color="text.secondary">
            {user.email}
          </Typography>
          <Typography sx={{ fontSize: "0.8rem" }} color="text.secondary">
            phone: {user.phone}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
