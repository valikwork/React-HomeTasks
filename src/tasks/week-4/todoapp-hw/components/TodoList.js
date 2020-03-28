import React, { useState, useContext } from 'react'
import InfiniteScroll from 'react-infinite-scroller';
import { Grid, Icon, List, Container, Dimmer, Loader } from 'semantic-ui-react';
import classNames from 'classnames';
import { useTodosCrud } from '../hooks';
import ThemeContext from '../contexts/ThemeContext';
import TodoItem from './TodoItem';
import TheamedButton from './TheamedButton'
import AddTaskModal from './AddTaskModal';

const TODOS_COUNT_PER_PAGE = 20;

export default function TodoList() {

    const {
        todos,
        isFetching,
        handleRemoveTodo,
        handleToggleComplition,
        handleAddTodo
     } = useTodosCrud();
    const [ displayedTodosCount, setDisplayedTodosCount ] = useState(TODOS_COUNT_PER_PAGE);
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <Grid className={classNames('todo-list', theme)}>
            <Grid.Row columns={2}>
                <Grid.Column>
                    <Container>
                        <AddTaskModal onAddTodo={handleAddTodo} />
                    </Container>
                </Grid.Column> 
                <Grid.Column floated='right'>
                    <Container textAlign='right'>
                        <TheamedButton basic icon onClick={toggleTheme}>
                            <Icon name={theme === 'light' ? 'moon' : 'sun'} />
                        </TheamedButton>
                    </Container>
                </Grid.Column>          
            </Grid.Row>
            {isFetching &&
            <Grid.Row>
                <Grid.Column>
                    <Dimmer active inverted>
                        <Loader inverted>Loading</Loader>
                    </Dimmer>
                </Grid.Column>
            </Grid.Row>}
            <Grid.Row columns={1}>
                <Grid.Column>
                        <InfiniteScroll
                            initialLoad={false}
                            pageStart={1}
                            loadMore={page => setDisplayedTodosCount(page * TODOS_COUNT_PER_PAGE)}
                            hasMore={todos.length > displayedTodosCount}
                            loader={<div key={0}>Loading ...</div>}
                        >
                            <List divided verticalAlign='middle' inverted={theme === 'dark'}>
                                {todos.slice(0, displayedTodosCount).map(todo => 
                                <TodoItem
                                    key={todo.id}
                                    todo={todo}
                                    onRemoveTodo={handleRemoveTodo}
                                    onToggleCompletion={handleToggleComplition}
                                />)}
                            </List>
                        </InfiniteScroll>
                </Grid.Column>
            </Grid.Row>
            
        </Grid>
    )
}
