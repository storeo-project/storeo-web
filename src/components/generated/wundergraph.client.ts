// Code generated by wunderctl. DO NOT EDIT.

import type {
	createUserResponse,
	createUserInput,
	deleteMultiUserResponse,
	deleteMultiUserInput,
	deleteUserResponse,
	deleteUserInput,
	getUserResponse,
	getUserInput,
	getUserByEmailResponse,
	getUserByEmailInput,
	listUserResponse,
	listUserInput,
	updateUserResponse,
	updateUserInput,
	createShopResponse,
	createShopInput,
	deleteShopResponse,
	deleteShopInput,
	getShopResponse,
	getShopInput,
	listShopResponse,
	listShopInput,
	updateShopResponse,
	updateShopInput,
	meResponse,
	updateProfileResponse,
	updateProfileInput,
} from "./models";
import type { RequestOptions, ClientConfig, UserListener, Response, FetchConfig, Headers } from "@wundergraph/sdk";
import type { User } from "./wundergraph.server";

export const WUNDERGRAPH_S3_ENABLED = false;
export const WUNDERGRAPH_AUTH_ENABLED = true;

export enum AuthProviderId {
	"storeo" = "storeo",
}

export interface AuthProvider {
	id: AuthProviderId;
	login: (redirectURI?: string) => void;
}

export interface LogoutOptions {
	logout_openid_connect_provider?: boolean;
}

export class Client {
	constructor(config?: ClientConfig) {
		this.baseURL = config?.baseURL || this.baseURL;
		this.extraHeaders = config?.extraHeaders;
		this.user = null;
		this.customFetch = config?.customFetch;
	}
	private logoutCallback: undefined | (() => void);
	public setLogoutCallback(cb: () => void) {
		this.logoutCallback = cb;
	}
	public setExtraHeaders = (headers: Headers) => {
		this.extraHeaders = headers;
	};
	private customFetch?: (input: RequestInfo, init?: RequestInit) => Promise<globalThis.Response>;
	private extraHeaders?: Headers;
	private readonly baseURL: string = "http://localhost:9991";
	private readonly applicationHash: string = "cb37d6e5";
	private readonly applicationPath: string = "app/main";
	private readonly sdkVersion: string = "0.93.0";
	private csrfToken: string | undefined;
	private user: User | null;
	private userListener: UserListener<User> | undefined;
	public setUserListener = (listener: UserListener<User>) => {
		this.userListener = listener;
	};
	private setUser = (user: User | null) => {
		if (
			(user === null && this.user !== null) ||
			(user !== null && this.user === null) ||
			JSON.stringify(user) !== JSON.stringify(this.user)
		) {
			this.user = user;
			if (this.userListener !== undefined) {
				this.userListener(this.user);
			}
		}
	};
	public query = {
		getUser: async (options: RequestOptions<getUserInput, getUserResponse>) => {
			return await this.doFetch<getUserResponse>({
				method: "GET",
				path: "getUser",
				input: options.input,
				abortSignal: options.abortSignal,
			});
		},
		getUserByEmail: async (options: RequestOptions<getUserByEmailInput, getUserByEmailResponse>) => {
			return await this.doFetch<getUserByEmailResponse>({
				method: "GET",
				path: "getUserByEmail",
				input: options.input,
				abortSignal: options.abortSignal,
			});
		},
		listUser: async (options: RequestOptions<listUserInput, listUserResponse>) => {
			return await this.doFetch<listUserResponse>({
				method: "GET",
				path: "listUser",
				input: options.input,
				abortSignal: options.abortSignal,
			});
		},
		getShop: async (options: RequestOptions<getShopInput, getShopResponse>) => {
			return await this.doFetch<getShopResponse>({
				method: "GET",
				path: "getShop",
				input: options.input,
				abortSignal: options.abortSignal,
			});
		},
		listShop: async (options: RequestOptions<listShopInput, listShopResponse>) => {
			return await this.doFetch<listShopResponse>({
				method: "GET",
				path: "listShop",
				input: options.input,
				abortSignal: options.abortSignal,
			});
		},
		me: async (options: RequestOptions<never, meResponse>) => {
			return await this.doFetch<meResponse>({
				method: "GET",
				path: "me",
				input: options.input,
				abortSignal: options.abortSignal,
			});
		},
	};
	public mutation = {
		createUser: async (options: RequestOptions<createUserInput, createUserResponse>) => {
			return await this.doFetch<createUserResponse>({
				method: "POST",
				path: "createUser",
				input: options.input,
				abortSignal: options.abortSignal,
			});
		},
		deleteMultiUser: async (options: RequestOptions<deleteMultiUserInput, deleteMultiUserResponse>) => {
			return await this.doFetch<deleteMultiUserResponse>({
				method: "POST",
				path: "deleteMultiUser",
				input: options.input,
				abortSignal: options.abortSignal,
			});
		},
		deleteUser: async (options: RequestOptions<deleteUserInput, deleteUserResponse>) => {
			return await this.doFetch<deleteUserResponse>({
				method: "POST",
				path: "deleteUser",
				input: options.input,
				abortSignal: options.abortSignal,
			});
		},
		updateUser: async (options: RequestOptions<updateUserInput, updateUserResponse>) => {
			return await this.doFetch<updateUserResponse>({
				method: "POST",
				path: "updateUser",
				input: options.input,
				abortSignal: options.abortSignal,
			});
		},
		createShop: async (options: RequestOptions<createShopInput, createShopResponse>) => {
			return await this.doFetch<createShopResponse>({
				method: "POST",
				path: "createShop",
				input: options.input,
				abortSignal: options.abortSignal,
			});
		},
		deleteShop: async (options: RequestOptions<deleteShopInput, deleteShopResponse>) => {
			return await this.doFetch<deleteShopResponse>({
				method: "POST",
				path: "deleteShop",
				input: options.input,
				abortSignal: options.abortSignal,
			});
		},
		updateShop: async (options: RequestOptions<updateShopInput, updateShopResponse>) => {
			return await this.doFetch<updateShopResponse>({
				method: "POST",
				path: "updateShop",
				input: options.input,
				abortSignal: options.abortSignal,
			});
		},
		updateProfile: async (options: RequestOptions<updateProfileInput, updateProfileResponse>) => {
			return await this.doFetch<updateProfileResponse>({
				method: "POST",
				path: "updateProfile",
				input: options.input,
				abortSignal: options.abortSignal,
			});
		},
	};

	public liveQuery = {
		getUser: (
			options: RequestOptions<getUserInput, getUserResponse>,
			cb: (response: Response<getUserResponse>) => void
		) => {
			return this.startSubscription<getUserResponse>(
				{
					method: "GET",
					path: "getUser",
					input: options.input,
					abortSignal: options.abortSignal,
					liveQuery: true,
				},
				cb
			);
		},
		getUserByEmail: (
			options: RequestOptions<getUserByEmailInput, getUserByEmailResponse>,
			cb: (response: Response<getUserByEmailResponse>) => void
		) => {
			return this.startSubscription<getUserByEmailResponse>(
				{
					method: "GET",
					path: "getUserByEmail",
					input: options.input,
					abortSignal: options.abortSignal,
					liveQuery: true,
				},
				cb
			);
		},
		listUser: (
			options: RequestOptions<listUserInput, listUserResponse>,
			cb: (response: Response<listUserResponse>) => void
		) => {
			return this.startSubscription<listUserResponse>(
				{
					method: "GET",
					path: "listUser",
					input: options.input,
					abortSignal: options.abortSignal,
					liveQuery: true,
				},
				cb
			);
		},
		getShop: (
			options: RequestOptions<getShopInput, getShopResponse>,
			cb: (response: Response<getShopResponse>) => void
		) => {
			return this.startSubscription<getShopResponse>(
				{
					method: "GET",
					path: "getShop",
					input: options.input,
					abortSignal: options.abortSignal,
					liveQuery: true,
				},
				cb
			);
		},
		listShop: (
			options: RequestOptions<listShopInput, listShopResponse>,
			cb: (response: Response<listShopResponse>) => void
		) => {
			return this.startSubscription<listShopResponse>(
				{
					method: "GET",
					path: "listShop",
					input: options.input,
					abortSignal: options.abortSignal,
					liveQuery: true,
				},
				cb
			);
		},
		me: (options: RequestOptions<never, meResponse>, cb: (response: Response<meResponse>) => void) => {
			return this.startSubscription<meResponse>(
				{
					method: "GET",
					path: "me",
					input: options.input,
					abortSignal: options.abortSignal,
					liveQuery: true,
				},
				cb
			);
		},
	};

	private doFetch = async <T>(fetchConfig: FetchConfig): Promise<Response<T>> => {
		try {
			const params =
				fetchConfig.method !== "POST"
					? this.queryString({
							wg_variables: fetchConfig.input,
							wg_api_hash: this.applicationHash,
					  })
					: "";
			if (fetchConfig.method === "POST" && this.csrfToken === undefined) {
				const f = this.customFetch || fetch;
				const res = await f(this.baseURL + "/" + this.applicationPath + "/auth/cookie/csrf", {
					credentials: "include",
					mode: "cors",
				});
				this.csrfToken = await res.text();
			}
			const headers: Headers = {
				...this.extraHeaders,
				Accept: "application/json",
				"WG-SDK-Version": this.sdkVersion,
			};
			if (fetchConfig.method === "POST") {
				if (this.csrfToken) {
					headers["X-CSRF-Token"] = this.csrfToken;
				}
			}
			const body = fetchConfig.method === "POST" ? JSON.stringify(fetchConfig.input) : undefined;
			const data = await this.fetch(
				this.baseURL + "/" + this.applicationPath + "/operations/" + fetchConfig.path + params,
				{
					headers,
					body,
					method: fetchConfig.method,
					signal: fetchConfig.abortSignal,
					credentials: "include",
					mode: "cors",
				}
			);
			return {
				status: "ok",
				body: data,
			};
		} catch (e: any) {
			return {
				status: "error",
				message: e,
			};
		}
	};
	private inflight: {
		[key: string]: {
			reject: (reason?: any) => void;
			resolve: (value: globalThis.Response | PromiseLike<globalThis.Response>) => void;
		}[];
	} = {};
	private fetch = (input: globalThis.RequestInfo, init?: RequestInit): Promise<any> => {
		const key = JSON.stringify({ input, init });
		return new Promise<any>(async (resolve, reject) => {
			if (this.inflight[key]) {
				this.inflight[key].push({ resolve, reject });
				return;
			}
			if (init?.method === "GET") {
				this.inflight[key] = [{ resolve, reject }];
			}
			try {
				const f = this.customFetch || fetch;
				const res = await f(input, init);
				const inflight = this.inflight[key] || [{ resolve, reject }];
				delete this.inflight[key];
				if (res.status === 200) {
					const json = await res.json();
					inflight.forEach((cb) => cb.resolve(json));
					return;
				}
				if (res.status === 400) {
					inflight.forEach((cb) => cb.reject("bad request"));
					return;
				}
				if (res.status >= 401 && res.status <= 499) {
					this.csrfToken = undefined;
					inflight.forEach((cb) => cb.reject("unauthorized"));
					this.fetchUser();
					return;
				}
				if (res.status >= 500 && res.status <= 599) {
					inflight.forEach((cb) => cb.reject("server error"));
					return;
				}
				inflight.forEach((cb) => cb.reject("unknown error"));
			} catch (e: any) {
				const inflight = this.inflight[key];
				delete this.inflight[key];
				inflight.forEach((cb) => cb.reject(e));
			}
		});
	};

	private startSubscription = <T>(fetchConfig: FetchConfig, cb: (response: Response<T>) => void) => {
		(async () => {
			try {
				const params = this.queryString({
					wg_variables: fetchConfig.input,
					wg_live: fetchConfig.liveQuery === true ? true : undefined,
				});
				const f = this.customFetch || fetch;
				const response = await f(
					this.baseURL + "/" + this.applicationPath + "/operations/" + fetchConfig.path + params,
					{
						headers: {
							...this.extraHeaders,
							"Content-Type": "application/json",
							"WG-SDK-Version": this.sdkVersion,
						},
						method: fetchConfig.method,
						signal: fetchConfig.abortSignal,
						credentials: "include",
						mode: "cors",
					}
				);
				if (response.status === 401) {
					this.csrfToken = undefined;
					return;
				}
				if (response.status !== 200 || response.body == null) {
					return;
				}
				const reader = response.body.getReader();
				const decoder = new TextDecoder();
				let message: string = "";
				while (true) {
					const { value, done } = await reader.read();
					if (done) break;
					if (!value) continue;
					message += decoder.decode(value);
					if (message.endsWith("\n\n")) {
						cb({
							status: "ok",
							body: JSON.parse(message.substring(0, message.length - 2)),
						});
						message = "";
					}
				}
			} catch (e: any) {
				cb({
					status: "error",
					message: e,
				});
			}
		})();
	};

	private queryString = (input?: Object): string => {
		if (!input) {
			return "";
		}
		const query = (Object.keys(input) as Array<keyof typeof input>)
			// @ts-ignore
			.filter((key) => input[key] !== undefined && input[key] !== "")
			.map((key) => {
				const value = typeof input[key] === "object" ? JSON.stringify(input[key]) : input[key];
				const encodedKey = encodeURIComponent(key);
				// @ts-ignore
				const encodedValue = encodeURIComponent(value);
				return `${encodedKey}=${encodedValue}`;
			})
			.join("&");
		return query === "" ? query : "?" + query;
	};
	public fetchUser = async (revalidate?: boolean): Promise<User | null> => {
		try {
			const revalidateTrailer = revalidate === undefined ? "" : "?revalidate=true";
			const f = this.customFetch || fetch;
			const response = await f(this.baseURL + "/" + this.applicationPath + "/auth/cookie/user" + revalidateTrailer, {
				headers: {
					...this.extraHeaders,
					"Content-Type": "application/json",
					"WG-SDK-Version": this.sdkVersion,
				},
				method: "GET",
				credentials: "include",
				mode: "cors",
			});
			if (response.status === 200) {
				const user = await response.json();
				this.setUser(user);
				return this.user;
			}
		} catch {}
		this.setUser(null);
		return null;
	};
	public login: Record<AuthProviderId, AuthProvider["login"]> = {
		storeo: (redirectURI?: string): void => {
			this.startLogin(AuthProviderId.storeo, redirectURI);
		},
	};
	public authProviders: Array<AuthProvider> = [
		{
			id: AuthProviderId.storeo,
			login: this.login[AuthProviderId.storeo],
		},
	];
	public logout = async (options?: LogoutOptions): Promise<boolean> => {
		const f = this.customFetch || fetch;
		const response = await f(
			this.baseURL + "/" + this.applicationPath + "/auth/cookie/user/logout" + this.queryString(options),
			{
				headers: {
					...this.extraHeaders,
					"Content-Type": "application/json",
					"WG-SDK-Version": this.sdkVersion,
				},
				method: "GET",
				credentials: "include",
				mode: "cors",
			}
		);
		this.setUser(null);
		if (this.logoutCallback) {
			this.logoutCallback();
		}
		return response.status === 200;
	};
	private startLogin = (providerID: AuthProviderId, redirectURI?: string) => {
		const query = this.queryString({
			redirect_uri: redirectURI || window.location.toString(),
		});
		window.location.replace(`${this.baseURL}/${this.applicationPath}/auth/cookie/authorize/${providerID}${query}`);
	};
}
