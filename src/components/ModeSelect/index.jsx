import { useColorScheme } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import LightModeIcon from "@mui/icons-material/LightMode.js";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined.js";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness.js";
export default function ModelSelect() {
    const {mode, setMode} = useColorScheme()
    const handleChange = (event) => {
        setMode(event.target.value)
    }
    return (
        <FormControl sx={{m: 1, minWidth: 120}} size="small">
            <InputLabel id="label-select-dark-light-mode">Model</InputLabel>
            <Select
                labelId="label-select-dark-light-mode"
                id="select-dark-light-mode"
                value={mode}
                label="Model"
                onChange={handleChange}
            >
                <MenuItem value="light">
                    <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                        <LightModeIcon fontSize="small"/>Light
                    </Box>
                </MenuItem>
                <MenuItem value="dark">
                    <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                        <DarkModeOutlinedIcon fontSize="small"/> Dark
                    </Box>
                </MenuItem>
                <MenuItem value="system">
                    <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                        <SettingsBrightnessIcon fontSize="small"/> System
                    </Box>
                </MenuItem>
            </Select>
        </FormControl>
    )
}