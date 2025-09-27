import { useAuth0 } from "@auth0/auth0-react";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  if (!isLoading && !isAuthenticated) {
    loginWithRedirect();
    return null;
  }

  return <>{children}</>;
}
