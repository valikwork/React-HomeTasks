import React, { useEffect } from 'react'
import { Container } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchSelectedGist } from '../redux/actions';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function GistInfo() {
    const selectedGist = useSelector(state => state.selectedGist);
    const selectedGistContent = useSelector(state => state.selectedGistContent);
    const { isLoading, gist } = selectedGistContent;
    const dispatch = useDispatch();

    const store = useSelector(state => state)

    useEffect(() => {
        if(Object.keys(selectedGist).length > 0){
            dispatch(fetchSelectedGist(selectedGist.gistUrl))
        }
    }, [selectedGist])

    const syntaxHighlighterWrapper = (content) => {
        return (
            <SyntaxHighlighter style={docco}>
                {content}
            </SyntaxHighlighter>
        )
    }
    //console.log(store);
    return (
        <Container>
                {isLoading ? 
                <h1>Loading...</h1> : 
                gist === '' ? 'Choose a Gist' : typeof gist === 'string' ? syntaxHighlighterWrapper(gist) : syntaxHighlighterWrapper(JSON.stringify(gist, null, 4))
                }
        </Container>
    )
}
