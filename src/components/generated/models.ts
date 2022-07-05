// Code generated by wunderctl. DO NOT EDIT.

export interface createUserInput {
	email: string;
	firstName?: string;
	lastName?: string;
}

export interface deleteMultiUserInput {
	ids: number[];
}

export interface deleteUserInput {
	id: number;
}

export interface getUserInput {
	id: number;
}

export interface getUserByEmailInput {
	email: string;
}

export interface listUserInput {
	skip: number;
	limit: number;
}

export interface updateUserInput {
	id: number;
	data: db_userUpdateInput;
}

export interface checkUserInput {
	email: string;
}

export interface getShopUserInput {
	shopId: number;
	userId: number;
	role?: string;
}

export interface registerUserInput {
	email: string;
	firstName: string;
	lastName: string;
}

export interface createShopInput {
	name: string;
	description: string;
}

export interface deleteShopInput {
	id: number;
}

export interface getShopInput {
	id: number;
}

export interface listShopInput {
	page: number;
	size: number;
}

export interface updateShopInput {
	id: number;
	name: string;
	description: string;
}

export interface updateProfileInput {
	firstName?: string;
	lastName?: string;
	phoneNumber?: string;
	avatar?: string;
}

export interface InternalcreateUserInput {
	email: string;
	firstName?: string;
	lastName?: string;
}

export interface InternaldeleteMultiUserInput {
	ids: number[];
}

export interface InternaldeleteUserInput {
	id: number;
}

export interface InternalgetUserInput {
	id: number;
}

export interface InternalgetUserByEmailInput {
	email: string;
}

export interface InternallistUserInput {
	skip: number;
	limit: number;
}

export interface InternalupdateUserInput {
	id: number;
	data: db_userUpdateInput;
}

export interface InternalcheckUserInput {
	email: string;
}

export interface InternalgetShopUserInput {
	shopId: number;
	userId: number;
	role?: string;
}

export interface InternalregisterUserInput {
	email: string;
	firstName: string;
	lastName: string;
}

export interface InternalcreateShopInput {
	name: string;
	description: string;
	createdBy: string;
}

export interface InternaldeleteShopInput {
	id: number;
	updatedBy: string;
}

export interface InternalgetShopInput {
	id: number;
}

export interface InternallistShopInput {
	page: number;
	size: number;
	email: string;
}

export interface InternalupdateShopInput {
	id: number;
	name: string;
	description: string;
	updatedBy: string;
}

export interface InternalmeInput {
	email: string;
}

export interface InternalupdateProfileInput {
	email: string;
	firstName?: string;
	lastName?: string;
	phoneNumber?: string;
	avatar?: string;
}

export interface InjectedcreateUserInput {
	email: string;
	firstName?: string;
	lastName?: string;
}

export interface InjecteddeleteMultiUserInput {
	ids: number[];
}

export interface InjecteddeleteUserInput {
	id: number;
}

export interface InjectedgetUserInput {
	id: number;
}

export interface InjectedgetUserByEmailInput {
	email: string;
}

export interface InjectedlistUserInput {
	skip: number;
	limit: number;
}

export interface InjectedupdateUserInput {
	id: number;
	data: db_userUpdateInput;
}

export interface InjectedcheckUserInput {
	email: string;
}

export interface InjectedgetShopUserInput {
	shopId: number;
	userId: number;
	role?: string;
}

export interface InjectedregisterUserInput {
	email: string;
	firstName: string;
	lastName: string;
}

export interface InjectedcreateShopInput {
	name: string;
	description: string;
	createdBy: string;
	createdAt: string;
}

export interface InjecteddeleteShopInput {
	id: number;
	updatedBy: string;
	updatedAt: string;
}

export interface InjectedgetShopInput {
	id: number;
}

export interface InjectedlistShopInput {
	page: number;
	size: number;
	email: string;
}

export interface InjectedupdateShopInput {
	id: number;
	name: string;
	description: string;
	updatedBy: string;
	updatedAt: string;
}

export interface InjectedmeInput {
	email: string;
}

export interface InjectedupdateProfileInput {
	email: string;
	firstName?: string;
	lastName?: string;
	phoneNumber?: string;
	avatar?: string;
}

export interface createUserResponse {
	data?: createUserResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface deleteMultiUserResponse {
	data?: deleteMultiUserResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface deleteUserResponse {
	data?: deleteUserResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface getUserResponse {
	data?: getUserResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface getUserByEmailResponse {
	data?: getUserByEmailResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface listUserResponse {
	data?: listUserResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface updateUserResponse {
	data?: updateUserResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface checkUserResponse {
	data?: checkUserResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface getShopUserResponse {
	data?: getShopUserResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface registerUserResponse {
	data?: registerUserResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface createShopResponse {
	data?: createShopResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface deleteShopResponse {
	data?: deleteShopResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface getShopResponse {
	data?: getShopResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface listShopResponse {
	data?: listShopResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface updateShopResponse {
	data?: updateShopResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface meResponse {
	data?: meResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface updateProfileResponse {
	data?: updateProfileResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface createUserResponseData {
	user?: {
		id: number;
	};
}

export interface deleteMultiUserResponseData {
	users?: {
		count: number;
	};
}

export interface deleteUserResponseData {
	user?: {
		id: number;
	};
}

export interface getUserResponseData {
	user?: {
		id: number;
		email: string;
		phoneNumber: string;
		firstName: string;
		lastName: string;
		shops?: {
			shop: {
				name: string;
			};
		}[];
	};
}

export interface getUserByEmailResponseData {
	user?: {
		id: number;
		email: string;
		phoneNumber: string;
		firstName: string;
		lastName: string;
		shops?: {
			shop: {
				name: string;
			};
		}[];
	};
}

export interface listUserResponseData {
	users: {
		id: number;
		email: string;
		phoneNumber: string;
		firstName: string;
		lastName: string;
	}[];
	user_aggregate: {
		total?: {
			_all: number;
		};
	};
}

export interface updateUserResponseData {
	user?: {
		id: number;
	};
}

export interface checkUserResponseData {
	user?: {
		id: number;
	};
}

export interface getShopUserResponseData {
	value?: {
		shop: {
			id: number;
		};
	};
}

export interface registerUserResponseData {
	user?: {
		id: number;
	};
}

export interface createShopResponseData {
	shop?: {
		id: number;
		name: string;
		description: string;
	};
}

export interface deleteShopResponseData {
	shop?: {
		id: number;
	};
}

export interface getShopResponseData {
	shop?: {
		id: number;
		name: string;
		description: string;
		createdBy: string;
		createdAt: string;
		updatedBy: string;
		updatedAt: string;
	};
}

export interface listShopResponseData {
	items: {
		id: number;
		name: string;
		description: string;
	}[];
}

export interface updateShopResponseData {
	shop?: {
		id: number;
	};
}

export interface meResponseData {
	user?: {
		id: number;
		email: string;
		phoneNumber: string;
		firstName: string;
		lastName: string;
		avatar: string;
	};
}

export interface updateProfileResponseData {
	user?: {
		id: number;
		firstName: string;
		lastName: string;
		phoneNumber: string;
		avatar: string;
	};
}

export interface db_userUpdateInput {
	email?: db_StringFieldUpdateOperationsInput;
	phoneNumber?: db_StringFieldUpdateOperationsInput;
	firstName?: db_StringFieldUpdateOperationsInput;
	lastName?: db_StringFieldUpdateOperationsInput;
	avatar?: db_StringFieldUpdateOperationsInput;
	shop_user?: db_shop_userUpdateManyWithoutUserInput;
}

export interface db_StringFieldUpdateOperationsInput {
	set?: string;
}

export interface db_shop_userUpdateManyWithoutUserInput {
	create?: db_shop_userCreateWithoutUserInput;
	connectOrCreate?: db_shop_userCreateOrConnectWithoutUserInput;
	upsert?: db_shop_userUpsertWithWhereUniqueWithoutUserInput;
	createMany?: db_shop_userCreateManyUserInputEnvelope;
	set?: db_shop_userWhereUniqueInput;
	disconnect?: db_shop_userWhereUniqueInput;
	delete?: db_shop_userWhereUniqueInput;
	connect?: db_shop_userWhereUniqueInput;
	update?: db_shop_userUpdateWithWhereUniqueWithoutUserInput;
	updateMany?: db_shop_userUpdateManyWithWhereWithoutUserInput;
	deleteMany?: db_shop_userScalarWhereInput;
}

export interface db_shop_userCreateWithoutUserInput {
	assigned_at?: string;
	assigned_by?: string;
	shop_role?: string;
	shop?: db_shopCreateNestedOneWithoutShop_userInput;
}

export interface db_shopCreateNestedOneWithoutShop_userInput {
	create?: db_shopCreateWithoutShop_userInput;
	connectOrCreate?: db_shopCreateOrConnectWithoutShop_userInput;
	connect?: db_shopWhereUniqueInput;
}

export interface db_shopCreateWithoutShop_userInput {
	name?: string;
	description?: string;
	deleted?: boolean;
	created_at?: string;
	updated_at?: string;
	created_by?: string;
	updated_by?: string;
}

export interface db_shopCreateOrConnectWithoutShop_userInput {
	where?: db_shopWhereUniqueInput;
	create?: db_shopCreateWithoutShop_userInput;
}

export interface db_shopWhereUniqueInput {
	id?: number;
}

export interface db_shop_userCreateOrConnectWithoutUserInput {
	where?: db_shop_userWhereUniqueInput;
	create?: db_shop_userCreateWithoutUserInput;
}

export interface db_shop_userWhereUniqueInput {
	user_id_shop_id?: db_shop_userUser_idShop_idCompoundUniqueInput;
}

export interface db_shop_userUser_idShop_idCompoundUniqueInput {
	user_id?: number;
	shop_id?: number;
}

export interface db_shop_userUpsertWithWhereUniqueWithoutUserInput {
	where?: db_shop_userWhereUniqueInput;
	update?: db_shop_userUpdateWithoutUserInput;
	create?: db_shop_userCreateWithoutUserInput;
}

export interface db_shop_userUpdateWithoutUserInput {
	assigned_at?: db_DateTimeFieldUpdateOperationsInput;
	assigned_by?: db_StringFieldUpdateOperationsInput;
	shop_role?: db_StringFieldUpdateOperationsInput;
	shop?: db_shopUpdateOneRequiredWithoutShop_userInput;
}

export interface db_DateTimeFieldUpdateOperationsInput {
	set?: string;
}

export interface db_shopUpdateOneRequiredWithoutShop_userInput {
	create?: db_shopCreateWithoutShop_userInput;
	connectOrCreate?: db_shopCreateOrConnectWithoutShop_userInput;
	upsert?: db_shopUpsertWithoutShop_userInput;
	connect?: db_shopWhereUniqueInput;
	update?: db_shopUpdateWithoutShop_userInput;
}

export interface db_shopUpsertWithoutShop_userInput {
	update?: db_shopUpdateWithoutShop_userInput;
	create?: db_shopCreateWithoutShop_userInput;
}

export interface db_shopUpdateWithoutShop_userInput {
	name?: db_StringFieldUpdateOperationsInput;
	description?: db_StringFieldUpdateOperationsInput;
	deleted?: db_BoolFieldUpdateOperationsInput;
	created_at?: db_DateTimeFieldUpdateOperationsInput;
	updated_at?: db_DateTimeFieldUpdateOperationsInput;
	created_by?: db_StringFieldUpdateOperationsInput;
	updated_by?: db_StringFieldUpdateOperationsInput;
}

export interface db_BoolFieldUpdateOperationsInput {
	set?: boolean;
}

export interface db_shop_userCreateManyUserInputEnvelope {
	data?: db_shop_userCreateManyUserInput[];
	skipDuplicates?: boolean;
}

export interface db_shop_userCreateManyUserInput {
	shop_id?: number;
	assigned_at?: string;
	assigned_by?: string;
	shop_role?: string;
}

export interface db_shop_userUpdateWithWhereUniqueWithoutUserInput {
	where?: db_shop_userWhereUniqueInput;
	data?: db_shop_userUpdateWithoutUserInput;
}

export interface db_shop_userUpdateManyWithWhereWithoutUserInput {
	where?: db_shop_userScalarWhereInput;
	data?: db_shop_userUpdateManyMutationInput;
}

export interface db_shop_userScalarWhereInput {
	AND?: db_shop_userScalarWhereInput;
	OR?: db_shop_userScalarWhereInput[];
	NOT?: db_shop_userScalarWhereInput;
	user_id?: db_IntFilter;
	shop_id?: db_IntFilter;
	assigned_at?: db_DateTimeFilter;
	assigned_by?: db_StringFilter;
	shop_role?: db_StringFilter;
}

export interface db_IntFilter {
	equals?: number;
	in?: number[];
	notIn?: number[];
	lt?: number;
	lte?: number;
	gt?: number;
	gte?: number;
	not?: db_NestedIntFilter;
}

export interface db_NestedIntFilter {
	equals?: number;
	in?: number[];
	notIn?: number[];
	lt?: number;
	lte?: number;
	gt?: number;
	gte?: number;
	not?: db_NestedIntFilter;
}

export interface db_DateTimeFilter {
	equals?: string;
	in?: string[];
	notIn?: string[];
	lt?: string;
	lte?: string;
	gt?: string;
	gte?: string;
	not?: db_NestedDateTimeFilter;
}

export interface db_NestedDateTimeFilter {
	equals?: string;
	in?: string[];
	notIn?: string[];
	lt?: string;
	lte?: string;
	gt?: string;
	gte?: string;
	not?: db_NestedDateTimeFilter;
}

export interface db_StringFilter {
	equals?: string;
	in?: string[];
	notIn?: string[];
	lt?: string;
	lte?: string;
	gt?: string;
	gte?: string;
	contains?: string;
	startsWith?: string;
	endsWith?: string;
	mode?: "default" | "insensitive";
	not?: db_NestedStringFilter;
}

export interface db_NestedStringFilter {
	equals?: string;
	in?: string[];
	notIn?: string[];
	lt?: string;
	lte?: string;
	gt?: string;
	gte?: string;
	contains?: string;
	startsWith?: string;
	endsWith?: string;
	not?: db_NestedStringFilter;
}

export interface db_shop_userUpdateManyMutationInput {
	assigned_at?: db_DateTimeFieldUpdateOperationsInput;
	assigned_by?: db_StringFieldUpdateOperationsInput;
	shop_role?: db_StringFieldUpdateOperationsInput;
}

export type JSONValue = string | number | boolean | JSONObject | Array<JSONValue>;

export type JSONObject = { [key: string]: JSONValue };

export interface GraphQLError {
	message: string;
	path?: ReadonlyArray<string | number>;
}
