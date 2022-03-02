import Keycloak from "keycloak-js";
const keycloakConfig = {
  url: "https://sso.bcperak.net/auth",
  realm: "Demo-Realm",
  clientId: "react-web-app",
};
const keycloak = new Keycloak(keycloakConfig);
export default keycloak;
