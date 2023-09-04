import {perimeterx, PerimeterXConfigurations} from "perimeterx-nextjs";

const pxConfig: PerimeterXConfigurations = {
    "px_app_id": process.env.PX_APP_ID,
    "px_cookie_secret": process.env.PX_COOKIE_SECRET,
    "px_auth_token": process.env.PX_AUTH_TOKEN,
    "px_module_mode": "active_blocking"
}

// noinspection JSUnusedGlobalSymbols
export default perimeterx(pxConfig)