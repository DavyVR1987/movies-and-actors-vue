import Vue from "vue";
import createAuth0Client from "@auth0/auth0-spa-js";
import { Options } from "vue-class-component";

const Default_Redirect_Callback = () =>
    window.history.replaceState({}, document.title, window.location.pathname);

let instance;

export const getInstance = () => instance;

export const useAuth0 = ({
    onredirectCallback = Default_Redirect_Callback,
    redirectUri = window.location.origin,
    ...options
}) => {
    if (instance) return instance;
}

instance = new Vue({
    data() {
        return {
            loading: true,
            isAuthenticated: false,
            user: {},
            auth0Client: null,
            error: null
        };
    },
    methods: {
        async handleRedirectCallback() {
            this.loading = true;
            try {
                await this.auth0Client.handleRedirectCallback();
                this.user = await this.auth0Client.getUser();
                this.isAuthenticated = true;
            } catch (e) {
                this.error = e;
            } finally {
                this.loading = false;
            }
        },
         loginWithRedirect(o) {
            return this.auth0Client.loginWithRedirect(o);
        },
    }
})