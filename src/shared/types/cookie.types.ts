import { COOKIE_KEYS } from "@shared/constants/cookieKeys.constants";

import { ValueOf } from "./valueOf.types";

export type CookieKey = ValueOf<typeof COOKIE_KEYS>;
