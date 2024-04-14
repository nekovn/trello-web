import Box from '@mui/material/Box'

export default function BoardContent() {
    return (
        <Box sx={{
            backgroundColor: 'primary.main',
            width: '100%',
            height: (theme) => `calc(${theme.trello.appHeight} - ${theme.trello.headerHeight} - ${theme.trello.boardHeight})`,
            display: 'flex',
            alignItems: 'center'
        }}>
            Board Content
        </Box>
    )
}