import React,{ useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Card, Icon, Image } from 'semantic-ui-react';
import { fetchGistOwner } from '../redux/actions';

export default function GistOwnerInfo() {
    const selectedGist = useSelector(state => state.selectedGist);
    const gistOwner = useSelector(state => state.gistOwner);
    const { isLoading, info } = gistOwner;
    const dispatch = useDispatch();

    useEffect(() => {
        if(Object.keys(selectedGist).length > 0){
            dispatch(fetchGistOwner(selectedGist.ownerLogin))
        }
    }, [selectedGist])
    console.log(gistOwner);
    return (
        <Container>
            {Object.keys(selectedGist).length === 0 ?
            'Choose a Gist' :
            isLoading ? <h1>Loading...</h1> :
            <Card>
                <Image src={info.avatar_url} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{info.login}</Card.Header>
                    <Card.Meta>
                        <span className='date'>Created at {info.created_at}</span>
                    </Card.Meta>
                    <Card.Description>
                        {info.bio}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <a>
                    <Icon name='user' />
                    {info.public_repos} Public Repos
                </a>
                </Card.Content>
                <Card.Content extra>
                <a href={info.html_url}>
                    <Icon name='github' />
                    Visit Owners GitHub 
                </a>
                </Card.Content>
            </Card>
            }
            
            
        </Container>
    )
}
