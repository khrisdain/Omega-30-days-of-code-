import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
    const { palette } = useTheme();
    const dark = palette.neutral.dark;
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;

    return (
        <WidgetWrapper>
          <FlexBetween>
            <Typography color={dark} variant="h5" fontWeight="500">
              Sponsored 
            </Typography>

           <Typography color={medium}> Create ad. </Typography>
          </FlexBetween>

          <img 
            widh="100%"
            height="auto"
            alt="advert"
            src="http://localhost:3001/assets/info4.jpeg"
            style={{ borderRadius: "0.75rem", margin: "0.75rem 0"}}
          />
          <FlexBetween>
            <Typography color={main}>MikaCosmetics</Typography>
            <Typography color={medium}>mikacosmetics.com</Typography>
          </FlexBetween>

          <Typography>
           Your pathway to a stunning and immaculate beauty and made sure your skin is exfoliated and shinning like light 
          </Typography>
        </WidgetWrapper>
    )

}

export default AdvertWidget;