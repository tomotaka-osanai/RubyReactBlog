import { ErrorPage } from "../pages/error/internal-error-page";
import { Component, ReactNode } from "react";

/**
 * エラー境界コンポーネント
 * @param children - ラップする要素
 */
export class ErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) return <ErrorPage />;
    return this.props.children;
  }
}
