import { Typography } from "@mui/material";

const Title = ({ title, fontSize }) => {
    return (
        <Typography variant="h5" sx={{
            textTransform: "uppercase",
            color: "white",
            fontSize: { fontSize }
        }}>
            {title}
        </Typography>
    );
}

export default Title;
