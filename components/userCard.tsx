import { Card, Box, CardMedia, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import { IUser } from "../ts";

export function UserCard({ user }: { user: IUser }) {
  return (
    <Card
      sx={{
        minWidth: "12rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <Box
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardMedia
          style={{
            position: "relative",
            width: "8rem",
            height: "8rem",
            backgroundColor: "black",
            borderRadius: "100%",
            overflow: "hidden",
            margin: "auto",
            border: `2px solid ${
              user.gender === "male" ? "lightblue" : "pink"
            }`,
            justifyContent: "center",
            alignItems: "center",
            boxShadow: `0 0 12px 3px ${
              user.gender === "male" ? "lightblue" : "pink"
            }`,
          }}
        >
          <Image
            src={user.picture}
            alt={user.name}
            style={{
              width: "100%",
              objectFit: "cover",
              margin: "auto",
              boxShadow: "0 0 12px 10px rgba(0, 0, 0, 0.08)",
            }}
            sizes="100%"
            fill
          />
        </CardMedia>
        <CardContent>
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
        <CardContent>
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
