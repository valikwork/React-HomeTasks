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
    const dispatch = useDispatch()

    useEffect(() => {
        if(selectedGist){
            dispatch(fetchSelectedGist(selectedGist))
        }
    }, [selectedGist])

    const syntaxHighlighterWrapper = (content) => {
        return (
            <SyntaxHighlighter>
                {content}
            </SyntaxHighlighter>
        )
    }
    
    return (
        <Container>
            
                {isLoading ? 
                <h1>Loading...</h1> : 
                typeof gist === 'string' ? syntaxHighlighterWrapper(gist) : 'Gist is an object'
                }
        </Container>
    )
}
