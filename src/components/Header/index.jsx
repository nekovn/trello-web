import ModelSelect from '../ModeSelect/index.jsx'
import Box from '@mui/material/Box'

export default function Header() {
    return (
        <Box sx={{
            backgroundColor: 'primary.light',
            width: '100%',
            height: (theme) => theme.trello.headerHeight,
            display: 'flex',
            alignItems: 'center'
        }}>
            <ModelSelect/>
        </Box>
    )
}