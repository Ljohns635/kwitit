import axios from "axios";

class API {
  axiosInstance = null;

  constructor() {
    /* 
      🚨1 point EXTRA CREDIT 🚨 👉🏿 get the baseURL from the environment
      https://create-react-app.dev/docs/adding-custom-environment-variables/
    */
    const axiosInstance = axios.create({
      baseURL: "https://kwitter-api.herokuapp.com/",
      timeout: 30000,
      headers: { Authorization: `Bearer ${getToken()}` },
    });

    // Add a request interceptor to attach a
    axiosInstance.interceptors.request.use(
      (config) => ({
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${getToken()}`,
        },
      }),
      (error) => Promise.reject(error)
    );

    // Add a response interceptor
    axiosInstance.interceptors.response.use(
      ({ data }) => data,
      (error) => Promise.reject(error)
    );

    this.axiosInstance = axiosInstance;
  }

  async login({ username, password }) {
    try {
      const result = await this.axiosInstance.post("/auth/login", {
        username,
        password,
      });
      return result;
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }

  async logout() {
    try {
      await this.axiosInstance.get("/auth/logout");
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }

  async googlelogin() {
    try {
      const result = await this.axiosInstance.get("/auth/google/login");
      console.log("request works");
      return result;
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }

  async getMessageList() {
    try {
      const result = await this.axiosInstance.get("/messages");

      return result;
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }
  async getUser(username) {
    try {
      // console.log("insideapicall");
      const result = await this.axiosInstance.get(`/users/${username}`);

      return result;
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }

  async register({ username, displayName, password }) {
    try {
      const result = await this.axiosInstance.post("/users", {
        username,
        displayName,
        password,
      });
      return result;
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }

  async getMessages(messageId) {
    // console.log(messageId);
    try {
      const result = await this.axiosInstance.get(`/messages/${messageId}`);
      return result;
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }

  async createMessages({ text }) {
    console.log(text);
    try {
      const result = await this.axiosInstance.post("/messages", {
        text,
      });
      return result;
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }

  async deleteUser(username) {
    try {
      const result = await this.axiosInstance.delete(`/users/${username}`, {});
      return result;
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }
  async deleteMessages(messageId) {
    console.log(messageId);
    try {
      const result = await this.axiosInstance.delete(`/messages/${messageId}`);
      return result;
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }

  //Akil recieved help from Marcell
  async likes(messageId) {
    console.log("likes");
    try {
      const result = await this.axiosInstance.post("/likes", {
        messageId,
      });
      console.log(result);
      return result;
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }

  async unLikes(likeId) {
    try {
      const result = await this.axiosInstance.delete(`/likes/${likeId}`);
      console.log(result);

      return result;
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }

  async userList() {
    console.log("api works");
    try {
      const result = await this.axiosInstance.get("/users");

      return result;
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }
}

// WARNING.. do not touch below this line if you want to have a good day =]

function helpMeInstructor(err) {
  console.info(
    `
    Did you hit CORRECT the endpoint?
    Did you send the CORRECT data?
    Did you make the CORRECT kind of request [GET/POST/PATCH/DELETE]?
    Check the Kwitter docs 👉🏿 https://kwitter-api.herokuapp.com/docs/#/
    Check the Axios docs 👉🏿 https://github.com/axios/axios
    TODO: troll students
  `,
    err
  );
}

function getToken() {
  try {
    const storedState = JSON.parse(localStorage.getItem("persist:root"));
    return JSON.parse(storedState.auth).isAuthenticated;
  } catch {
    return "";
  }
}

export default new API();
