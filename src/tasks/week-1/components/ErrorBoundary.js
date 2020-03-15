import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    state = {
        hasError: false
    }
    static getDerivedStateFromError(error) {
        // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
        console.log(error);
        return { hasError: true };
      }
    
    componentDidCatch(error, errorInfo) {
        // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
        console.log(error);

    }
    render() {
        if (this.state.hasError) return <h1>Что-то пошло не так <button onClick={this.props.resolve}>
            click here
            </button></h1>
        return this.props.children;
    }
}
