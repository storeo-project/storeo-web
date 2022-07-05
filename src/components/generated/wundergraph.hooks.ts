// Code generated by wunderctl. DO NOT EDIT.

import {
	createUserResponse,
	createUserInput,
	InternalcreateUserInput,
	InjectedcreateUserInput,
	deleteMultiUserResponse,
	deleteMultiUserInput,
	InternaldeleteMultiUserInput,
	InjecteddeleteMultiUserInput,
	deleteUserResponse,
	deleteUserInput,
	InternaldeleteUserInput,
	InjecteddeleteUserInput,
	getUserResponse,
	getUserInput,
	InternalgetUserInput,
	InjectedgetUserInput,
	getUserByEmailResponse,
	getUserByEmailInput,
	InternalgetUserByEmailInput,
	InjectedgetUserByEmailInput,
	listUserResponse,
	listUserInput,
	InternallistUserInput,
	InjectedlistUserInput,
	updateUserResponse,
	updateUserInput,
	InternalupdateUserInput,
	InjectedupdateUserInput,
	checkUserResponse,
	checkUserInput,
	InternalcheckUserInput,
	InjectedcheckUserInput,
	getShopUserResponse,
	getShopUserInput,
	InternalgetShopUserInput,
	InjectedgetShopUserInput,
	registerUserResponse,
	registerUserInput,
	InternalregisterUserInput,
	InjectedregisterUserInput,
	createShopResponse,
	createShopInput,
	InternalcreateShopInput,
	InjectedcreateShopInput,
	deleteShopResponse,
	deleteShopInput,
	InternaldeleteShopInput,
	InjecteddeleteShopInput,
	getShopResponse,
	getShopInput,
	InternalgetShopInput,
	InjectedgetShopInput,
	listShopResponse,
	listShopInput,
	InternallistShopInput,
	InjectedlistShopInput,
	updateShopResponse,
	updateShopInput,
	InternalupdateShopInput,
	InjectedupdateShopInput,
	meResponse,
	InternalmeInput,
	InjectedmeInput,
	updateProfileResponse,
	updateProfileInput,
	InternalupdateProfileInput,
	InjectedupdateProfileInput,
} from "./models";
import type { BaseContext, WunderGraphRequest, WunderGraphResponse } from "@wundergraph/sdk";
import type { InternalClient } from "./wundergraph.internal.client";
import type { User } from "./wundergraph.server";

export interface AuthenticationHookRequest extends BaseContext<User, InternalClient> {}

export type AuthenticationResponse = AuthenticationOK | AuthenticationDeny;

export interface AuthenticationOK {
	status: "ok";
	user: User;
}

export interface AuthenticationDeny {
	status: "deny";
	message: string;
}

// use SKIP to skip the hook and continue the request / response chain without modifying the request / response
export type SKIP = "skip";

// use CANCEL to skip the hook and cancel the request / response chain
// this is semantically equal to throwing an error (500)
export type CANCEL = "cancel";

export type WUNDERGRAPH_OPERATION =
	| "createUser"
	| "deleteMultiUser"
	| "deleteUser"
	| "getUser"
	| "getUserByEmail"
	| "listUser"
	| "updateUser"
	| "checkUser"
	| "getShopUser"
	| "registerUser"
	| "createShop"
	| "deleteShop"
	| "getShop"
	| "listShop"
	| "updateShop"
	| "me"
	| "updateProfile";

export interface HttpTransportHookRequest extends BaseContext<User, InternalClient> {
	request: WunderGraphRequest;
	operation: {
		name: WUNDERGRAPH_OPERATION;
		type: "mutation" | "query" | "subscription";
	};
}
export interface HttpTransportHookRequestWithResponse extends BaseContext<User, InternalClient> {
	response: WunderGraphResponse;
	operation: {
		name: string;
		type: string;
	};
}
export interface GlobalHooksConfig {
	httpTransport?: {
		// onRequest is called right before the request is sent to the origin
		// it can be used to modify the request
		// you can return SKIP to skip the hook and continue the request chain without modifying the request
		// you can return CANCEL to cancel the request chain and return a 500 error
		// not returning anything or undefined has the same effect as returning SKIP
		onOriginRequest?: {
			hook: (hook: HttpTransportHookRequest) => Promise<WunderGraphRequest | SKIP | CANCEL | void>;
			// calling the httpTransport hooks has a case, because the custom httpTransport hooks have to be called for each request
			// for this reason, you have to explicitly enable the hook for each Operation
			enableForOperations?: WUNDERGRAPH_OPERATION[];
			// enableForAllOperations will disregard the enableForOperations property and enable the hook for all operations
			enableForAllOperations?: boolean;
		};
		// onResponse is called right after the response is received from the origin
		// it can be used to modify the response
		// you can return SKIP to skip the hook and continue the response chain without modifying the response
		// you can return CANCEL to cancel the response chain and return a 500 error
		// not returning anything or undefined has the same effect as returning SKIP
		onOriginResponse?: {
			hook: (hook: HttpTransportHookRequestWithResponse) => Promise<WunderGraphResponse | SKIP | CANCEL | void>;
			// calling the httpTransport hooks has a case, because the custom httpTransport hooks have to be called for each request
			// for this reason, you have to explicitly enable the hook for each Operation
			enableForOperations?: WUNDERGRAPH_OPERATION[];
			// enableForAllOperations will disregard the enableForOperations property and enable the hook for all operations
			enableForAllOperations?: boolean;
		};
	};
}

export type JSONValue = string | number | boolean | JSONObject | Array<JSONValue>;

export type JSONObject = { [key: string]: JSONValue };

export interface HookRequest extends BaseContext<User, InternalClient> {}

export interface HookRequestWithResponse<Response> extends HookRequest {
	response: Response;
}

export interface HookRequestWithInput<Input> extends HookRequest {
	input: Input;
}

export interface HooksConfig {
	global?: GlobalHooksConfig;
	authentication?: {
		postAuthentication?: (hook: AuthenticationHookRequest) => Promise<void>;
		mutatingPostAuthentication?: (hook: AuthenticationHookRequest) => Promise<AuthenticationResponse>;
		revalidate?: (hook: AuthenticationHookRequest) => Promise<AuthenticationResponse>;
	};
	queries?: {
		getUser?: {
			mockResolve?: (hook: HookRequestWithInput<InjectedgetUserInput>) => Promise<getUserResponse>;
			preResolve?: (hook: HookRequestWithInput<InjectedgetUserInput>) => Promise<void>;
			mutatingPreResolve?: (hook: HookRequestWithInput<InjectedgetUserInput>) => Promise<InjectedgetUserInput>;
			postResolve?: (
				hook: HookRequestWithInput<InjectedgetUserInput> & HookRequestWithResponse<getUserResponse>
			) => Promise<void>;
			customResolve?: (hook: HookRequestWithInput<InjectedgetUserInput>) => Promise<void | getUserResponse>;
			mutatingPostResolve?: (
				hook: HookRequestWithInput<InjectedgetUserInput> & HookRequestWithResponse<getUserResponse>
			) => Promise<getUserResponse>;
		};
		getUserByEmail?: {
			mockResolve?: (hook: HookRequestWithInput<InjectedgetUserByEmailInput>) => Promise<getUserByEmailResponse>;
			preResolve?: (hook: HookRequestWithInput<InjectedgetUserByEmailInput>) => Promise<void>;
			mutatingPreResolve?: (
				hook: HookRequestWithInput<InjectedgetUserByEmailInput>
			) => Promise<InjectedgetUserByEmailInput>;
			postResolve?: (
				hook: HookRequestWithInput<InjectedgetUserByEmailInput> & HookRequestWithResponse<getUserByEmailResponse>
			) => Promise<void>;
			customResolve?: (
				hook: HookRequestWithInput<InjectedgetUserByEmailInput>
			) => Promise<void | getUserByEmailResponse>;
			mutatingPostResolve?: (
				hook: HookRequestWithInput<InjectedgetUserByEmailInput> & HookRequestWithResponse<getUserByEmailResponse>
			) => Promise<getUserByEmailResponse>;
		};
		listUser?: {
			mockResolve?: (hook: HookRequestWithInput<InjectedlistUserInput>) => Promise<listUserResponse>;
			preResolve?: (hook: HookRequestWithInput<InjectedlistUserInput>) => Promise<void>;
			mutatingPreResolve?: (hook: HookRequestWithInput<InjectedlistUserInput>) => Promise<InjectedlistUserInput>;
			postResolve?: (
				hook: HookRequestWithInput<InjectedlistUserInput> & HookRequestWithResponse<listUserResponse>
			) => Promise<void>;
			customResolve?: (hook: HookRequestWithInput<InjectedlistUserInput>) => Promise<void | listUserResponse>;
			mutatingPostResolve?: (
				hook: HookRequestWithInput<InjectedlistUserInput> & HookRequestWithResponse<listUserResponse>
			) => Promise<listUserResponse>;
		};
		getShop?: {
			mockResolve?: (hook: HookRequestWithInput<InjectedgetShopInput>) => Promise<getShopResponse>;
			preResolve?: (hook: HookRequestWithInput<InjectedgetShopInput>) => Promise<void>;
			mutatingPreResolve?: (hook: HookRequestWithInput<InjectedgetShopInput>) => Promise<InjectedgetShopInput>;
			postResolve?: (
				hook: HookRequestWithInput<InjectedgetShopInput> & HookRequestWithResponse<getShopResponse>
			) => Promise<void>;
			customResolve?: (hook: HookRequestWithInput<InjectedgetShopInput>) => Promise<void | getShopResponse>;
			mutatingPostResolve?: (
				hook: HookRequestWithInput<InjectedgetShopInput> & HookRequestWithResponse<getShopResponse>
			) => Promise<getShopResponse>;
		};
		listShop?: {
			mockResolve?: (hook: HookRequestWithInput<InjectedlistShopInput>) => Promise<listShopResponse>;
			preResolve?: (hook: HookRequestWithInput<InjectedlistShopInput>) => Promise<void>;
			mutatingPreResolve?: (hook: HookRequestWithInput<InjectedlistShopInput>) => Promise<InjectedlistShopInput>;
			postResolve?: (
				hook: HookRequestWithInput<InjectedlistShopInput> & HookRequestWithResponse<listShopResponse>
			) => Promise<void>;
			customResolve?: (hook: HookRequestWithInput<InjectedlistShopInput>) => Promise<void | listShopResponse>;
			mutatingPostResolve?: (
				hook: HookRequestWithInput<InjectedlistShopInput> & HookRequestWithResponse<listShopResponse>
			) => Promise<listShopResponse>;
		};
		me?: {
			mockResolve?: (hook: HookRequestWithInput<InjectedmeInput>) => Promise<meResponse>;
			preResolve?: (hook: HookRequestWithInput<InjectedmeInput>) => Promise<void>;
			mutatingPreResolve?: (hook: HookRequestWithInput<InjectedmeInput>) => Promise<InjectedmeInput>;
			postResolve?: (
				hook: HookRequestWithInput<InjectedmeInput> & HookRequestWithResponse<meResponse>
			) => Promise<void>;
			customResolve?: (hook: HookRequestWithInput<InjectedmeInput>) => Promise<void | meResponse>;
			mutatingPostResolve?: (
				hook: HookRequestWithInput<InjectedmeInput> & HookRequestWithResponse<meResponse>
			) => Promise<meResponse>;
		};
	};

	mutations?: {
		createUser?: {
			mockResolve?: (hook: HookRequestWithInput<InjectedcreateUserInput>) => Promise<createUserResponse>;
			preResolve?: (hook: HookRequestWithInput<InjectedcreateUserInput>) => Promise<void>;
			mutatingPreResolve?: (hook: HookRequestWithInput<InjectedcreateUserInput>) => Promise<InjectedcreateUserInput>;
			postResolve?: (
				hook: HookRequestWithInput<InjectedcreateUserInput> & HookRequestWithResponse<createUserResponse>
			) => Promise<void>;
			customResolve?: (hook: HookRequestWithInput<InjectedcreateUserInput>) => Promise<void | createUserResponse>;
			mutatingPostResolve?: (
				hook: HookRequestWithInput<InjectedcreateUserInput> & HookRequestWithResponse<createUserResponse>
			) => Promise<createUserResponse>;
		};
		deleteMultiUser?: {
			mockResolve?: (hook: HookRequestWithInput<InjecteddeleteMultiUserInput>) => Promise<deleteMultiUserResponse>;
			preResolve?: (hook: HookRequestWithInput<InjecteddeleteMultiUserInput>) => Promise<void>;
			mutatingPreResolve?: (
				hook: HookRequestWithInput<InjecteddeleteMultiUserInput>
			) => Promise<InjecteddeleteMultiUserInput>;
			postResolve?: (
				hook: HookRequestWithInput<InjecteddeleteMultiUserInput> & HookRequestWithResponse<deleteMultiUserResponse>
			) => Promise<void>;
			customResolve?: (
				hook: HookRequestWithInput<InjecteddeleteMultiUserInput>
			) => Promise<void | deleteMultiUserResponse>;
			mutatingPostResolve?: (
				hook: HookRequestWithInput<InjecteddeleteMultiUserInput> & HookRequestWithResponse<deleteMultiUserResponse>
			) => Promise<deleteMultiUserResponse>;
		};
		deleteUser?: {
			mockResolve?: (hook: HookRequestWithInput<InjecteddeleteUserInput>) => Promise<deleteUserResponse>;
			preResolve?: (hook: HookRequestWithInput<InjecteddeleteUserInput>) => Promise<void>;
			mutatingPreResolve?: (hook: HookRequestWithInput<InjecteddeleteUserInput>) => Promise<InjecteddeleteUserInput>;
			postResolve?: (
				hook: HookRequestWithInput<InjecteddeleteUserInput> & HookRequestWithResponse<deleteUserResponse>
			) => Promise<void>;
			customResolve?: (hook: HookRequestWithInput<InjecteddeleteUserInput>) => Promise<void | deleteUserResponse>;
			mutatingPostResolve?: (
				hook: HookRequestWithInput<InjecteddeleteUserInput> & HookRequestWithResponse<deleteUserResponse>
			) => Promise<deleteUserResponse>;
		};
		updateUser?: {
			mockResolve?: (hook: HookRequestWithInput<InjectedupdateUserInput>) => Promise<updateUserResponse>;
			preResolve?: (hook: HookRequestWithInput<InjectedupdateUserInput>) => Promise<void>;
			mutatingPreResolve?: (hook: HookRequestWithInput<InjectedupdateUserInput>) => Promise<InjectedupdateUserInput>;
			postResolve?: (
				hook: HookRequestWithInput<InjectedupdateUserInput> & HookRequestWithResponse<updateUserResponse>
			) => Promise<void>;
			customResolve?: (hook: HookRequestWithInput<InjectedupdateUserInput>) => Promise<void | updateUserResponse>;
			mutatingPostResolve?: (
				hook: HookRequestWithInput<InjectedupdateUserInput> & HookRequestWithResponse<updateUserResponse>
			) => Promise<updateUserResponse>;
		};
		createShop?: {
			mockResolve?: (hook: HookRequestWithInput<InjectedcreateShopInput>) => Promise<createShopResponse>;
			preResolve?: (hook: HookRequestWithInput<InjectedcreateShopInput>) => Promise<void>;
			mutatingPreResolve?: (hook: HookRequestWithInput<InjectedcreateShopInput>) => Promise<InjectedcreateShopInput>;
			postResolve?: (
				hook: HookRequestWithInput<InjectedcreateShopInput> & HookRequestWithResponse<createShopResponse>
			) => Promise<void>;
			customResolve?: (hook: HookRequestWithInput<InjectedcreateShopInput>) => Promise<void | createShopResponse>;
			mutatingPostResolve?: (
				hook: HookRequestWithInput<InjectedcreateShopInput> & HookRequestWithResponse<createShopResponse>
			) => Promise<createShopResponse>;
		};
		deleteShop?: {
			mockResolve?: (hook: HookRequestWithInput<InjecteddeleteShopInput>) => Promise<deleteShopResponse>;
			preResolve?: (hook: HookRequestWithInput<InjecteddeleteShopInput>) => Promise<void>;
			mutatingPreResolve?: (hook: HookRequestWithInput<InjecteddeleteShopInput>) => Promise<InjecteddeleteShopInput>;
			postResolve?: (
				hook: HookRequestWithInput<InjecteddeleteShopInput> & HookRequestWithResponse<deleteShopResponse>
			) => Promise<void>;
			customResolve?: (hook: HookRequestWithInput<InjecteddeleteShopInput>) => Promise<void | deleteShopResponse>;
			mutatingPostResolve?: (
				hook: HookRequestWithInput<InjecteddeleteShopInput> & HookRequestWithResponse<deleteShopResponse>
			) => Promise<deleteShopResponse>;
		};
		updateShop?: {
			mockResolve?: (hook: HookRequestWithInput<InjectedupdateShopInput>) => Promise<updateShopResponse>;
			preResolve?: (hook: HookRequestWithInput<InjectedupdateShopInput>) => Promise<void>;
			mutatingPreResolve?: (hook: HookRequestWithInput<InjectedupdateShopInput>) => Promise<InjectedupdateShopInput>;
			postResolve?: (
				hook: HookRequestWithInput<InjectedupdateShopInput> & HookRequestWithResponse<updateShopResponse>
			) => Promise<void>;
			customResolve?: (hook: HookRequestWithInput<InjectedupdateShopInput>) => Promise<void | updateShopResponse>;
			mutatingPostResolve?: (
				hook: HookRequestWithInput<InjectedupdateShopInput> & HookRequestWithResponse<updateShopResponse>
			) => Promise<updateShopResponse>;
		};
		updateProfile?: {
			mockResolve?: (hook: HookRequestWithInput<InjectedupdateProfileInput>) => Promise<updateProfileResponse>;
			preResolve?: (hook: HookRequestWithInput<InjectedupdateProfileInput>) => Promise<void>;
			mutatingPreResolve?: (
				hook: HookRequestWithInput<InjectedupdateProfileInput>
			) => Promise<InjectedupdateProfileInput>;
			postResolve?: (
				hook: HookRequestWithInput<InjectedupdateProfileInput> & HookRequestWithResponse<updateProfileResponse>
			) => Promise<void>;
			customResolve?: (hook: HookRequestWithInput<InjectedupdateProfileInput>) => Promise<void | updateProfileResponse>;
			mutatingPostResolve?: (
				hook: HookRequestWithInput<InjectedupdateProfileInput> & HookRequestWithResponse<updateProfileResponse>
			) => Promise<updateProfileResponse>;
		};
	};
}