import Container from '@mui/material/Container'
import Header from '../../components/Header/index.jsx'
import BoardBar from './BoardBar/index.jsx'
import BoardContent from './BoardContent/index.jsx'

export default function Board() {
    return (<>
        <Container disableGutters maxWidth={false} sx={{height: (theme) => theme.trello.appHeight}}>
            <Header/>
            <BoardBar/>
            <BoardContent/>
        </Container>
    </>)
}