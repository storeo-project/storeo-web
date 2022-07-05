// Code generated by wunderctl. DO NOT EDIT.

import type { HooksConfig } from "./wundergraph.hooks";
import type { InternalClient } from "./wundergraph.internal.client";
import type { GraphQLServerConfig, BaseContext, WunderGraphUser } from "@wundergraph/sdk";

export type Role = "admin" | "user";

export interface User extends WunderGraphUser<Role> {}

export interface Config {
	hooks: HooksConfig;
	graphqlServers?: Omit<GraphQLServerConfig, "routeUrl">[];
}

export interface OutputConfig {
	hooks: HooksConfig;
	graphqlServers?: (GraphQLServerConfig & { url: string })[];
}

export interface GraphQLExecutionContext {
	wundergraph: BaseContext<User, InternalClient>;
}