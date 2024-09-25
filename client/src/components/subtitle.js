import { Typography } from "@mui/material"
const Subtitle = ({ subtitle, fontSize }) => {
    return (
        <Typography sx={{
            fontWeight: 400,
            fontStyle: "normal",
            color: 'white',
            fontSize: `${fontSize}`,
            mb: "1.5rem"
        }}
        >
            {subtitle}
        </Typography>
    )
}
export default Subtitle