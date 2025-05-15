import { Component } from "react";
import { Link } from "@tanstack/react-router";

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("Error Boundary telah menangkap error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Oh no!</h2>
          <p>
            Terjadi error pada halaman ini! <Link to="/">Klik disini</Link>{" "}
            untuk kembali ke beranda.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
