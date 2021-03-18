import logger from "./logger";
import feathersClient from "./feathersClient";

const authProvider = {
  login: async (auth) => {
    const { profileObj, accessToken } = auth;

    logger.log("START LOGIN", auth);
    localStorage.setItem("profile", JSON.stringify(profileObj));

    // More info here: https://docs.feathersjs.com/api/authentication/client.html#configuration
    await feathersClient.authenticate({
      strategy: "google",
      access_token: accessToken,
    });

    logger.log("AUTH SUCCEEDED");
  },
  checkError: (error) => {
    logger.log("CHECKERROR", { error });
    // TODO
    Promise.resolve();
  },
  checkAuth: async () => {
    logger.log("CHECKAUTH");
    await feathersClient.reAuthenticate();

    const auth = await feathersClient.get("authentication");

    if (!auth) {
      return Promise.reject();
    }
  },
  logout: () => {
    logger.log("LOGOUT");

    localStorage.removeItem("profile");
    console.log({ logout: feathersClient.logout() });

    return Promise.resolve();
  },
  getIdentity: async () => {
    try {
      // TODO - use this once the API is ready to return it
      // const { user } = await feathersClient.get("authentication");
      const user = JSON.parse(localStorage.getItem("profile"));

      const { email, name, imageUrl } = user || {};

      return { id: email, fullName: name, avatar: imageUrl };
    } catch (error) {
      console.log("ERROR WHEN GETTING IDENTITY", error);
      throw error;
    }
  },

  // TODO: authorization
  getPermissions: (params) => {
    logger.log("GETPERMISSIONS");
    return Promise.resolve();
  },
};

export default authProvider;
