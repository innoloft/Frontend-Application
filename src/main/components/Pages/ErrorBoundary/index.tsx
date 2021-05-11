import * as React from "react";
import { NotFoundPage } from "../NotFoundPage";
import "./index.css";

interface ComponentState {
    hasError: boolean;
}

export class ErrorBoundary extends React.Component<{}, ComponentState> {
    constructor(props: { children: JSX.Element }) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error: Error, info: React.ErrorInfo) {
        this.setState({ hasError: true });
    }

    render() {
        const {
            state: { hasError },
            props: { children },
        } = this;

        if (hasError) {
            return <NotFoundPage />;
        }

        return children;
    }
}

export default ErrorBoundary;
