// Code generated by wunderctl. DO NOT EDIT.

import { JSONSchema7 } from "json-schema";

interface Schema {
	createUser: {
		input: JSONSchema7;
		response: JSONSchema7;
	};
	deleteMultiUser: {
		input: JSONSchema7;
		response: JSONSchema7;
	};
	deleteUser: {
		input: JSONSchema7;
		response: JSONSchema7;
	};
	getUser: {
		input: JSONSchema7;
		response: JSONSchema7;
	};
	getUserByEmail: {
		input: JSONSchema7;
		response: JSONSchema7;
	};
	listUser: {
		input: JSONSchema7;
		response: JSONSchema7;
	};
	updateUser: {
		input: JSONSchema7;
		response: JSONSchema7;
	};
	checkUser: {
		input: JSONSchema7;
		response: JSONSchema7;
	};
	getShopUser: {
		input: JSONSchema7;
		response: JSONSchema7;
	};
	registerUser: {
		input: JSONSchema7;
		response: JSONSchema7;
	};
	createShop: {
		input: JSONSchema7;
		response: JSONSchema7;
	};
	deleteShop: {
		input: JSONSchema7;
		response: JSONSchema7;
	};
	getShop: {
		input: JSONSchema7;
		response: JSONSchema7;
	};
	listShop: {
		input: JSONSchema7;
		response: JSONSchema7;
	};
	updateShop: {
		input: JSONSchema7;
		response: JSONSchema7;
	};
	me: {
		input: JSONSchema7;
		response: JSONSchema7;
	};
	updateProfile: {
		input: JSONSchema7;
		response: JSONSchema7;
	};
}

const jsonSchema: Schema = {
	createUser: {
		input: {
			type: "object",
			properties: {
				email: {
					type: "string",
					title: "Email",
					pattern:
						"(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\u0001-\b\u000b\f\u000e-\u001f!#-[]-]|\\\\[\u0001-\t\u000b\f\u000e-])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\u0001-\b\u000b\f\u000e-\u001f!-ZS-]|\\\\[\u0001-\t\u000b\f\u000e-])+)\\])",
				},
				firstName: { type: ["string", "null"], title: "First Name" },
				lastName: { type: ["string", "null"], title: "Last Name" },
			},
			additionalProperties: false,
			definitions: {},
			required: ["email"],
		},
		response: {
			type: "object",
			properties: {
				data: {
					type: "object",
					properties: {
						user: {
							type: "object",
							properties: { id: { type: "integer" } },
							additionalProperties: false,
							required: ["id"],
						},
					},
					additionalProperties: false,
				},
			},
			additionalProperties: false,
		},
	},
	deleteMultiUser: {
		input: {
			type: "object",
			properties: { ids: { type: "array", items: { type: ["integer", "null"] } } },
			additionalProperties: false,
			definitions: {},
			required: ["ids"],
		},
		response: {
			type: "object",
			properties: {
				data: {
					type: "object",
					properties: {
						users: {
							type: "object",
							properties: { count: { type: "integer" } },
							additionalProperties: false,
							required: ["count"],
						},
					},
					additionalProperties: false,
				},
			},
			additionalProperties: false,
		},
	},
	deleteUser: {
		input: {
			type: "object",
			properties: { id: { type: "integer" } },
			additionalProperties: false,
			definitions: {},
			required: ["id"],
		},
		response: {
			type: "object",
			properties: {
				data: {
					type: "object",
					properties: {
						user: {
							type: "object",
							properties: { id: { type: "integer" } },
							additionalProperties: false,
							required: ["id"],
						},
					},
					additionalProperties: false,
				},
			},
			additionalProperties: false,
		},
	},
	getUser: {
		input: {
			type: "object",
			properties: { id: { type: "integer" } },
			additionalProperties: false,
			definitions: {},
			required: ["id"],
		},
		response: {
			type: "object",
			properties: {
				data: {
					type: "object",
					properties: {
						user: {
							type: "object",
							properties: {
								id: { type: "integer" },
								email: { type: "string" },
								phoneNumber: { type: "string" },
								firstName: { type: "string" },
								lastName: { type: "string" },
								shops: {
									type: "array",
									items: {
										type: "object",
										properties: {
											shop: {
												type: "object",
												properties: { name: { type: "string" } },
												additionalProperties: false,
												required: ["name"],
											},
										},
										additionalProperties: false,
										required: ["shop"],
									},
								},
							},
							additionalProperties: false,
							required: ["id", "email", "phoneNumber", "firstName", "lastName"],
						},
					},
					additionalProperties: false,
				},
			},
			additionalProperties: false,
		},
	},
	getUserByEmail: {
		input: {
			type: "object",
			properties: { email: { type: "string" } },
			additionalProperties: false,
			definitions: {},
			required: ["email"],
		},
		response: {
			type: "object",
			properties: {
				data: {
					type: "object",
					properties: {
						user: {
							type: "object",
							properties: {
								id: { type: "integer" },
								email: { type: "string" },
								phoneNumber: { type: "string" },
								firstName: { type: "string" },
								lastName: { type: "string" },
								shops: {
									type: "array",
									items: {
										type: "object",
										properties: {
											shop: {
												type: "object",
												properties: { name: { type: "string" } },
												additionalProperties: false,
												required: ["name"],
											},
										},
										additionalProperties: false,
										required: ["shop"],
									},
								},
							},
							additionalProperties: false,
							required: ["id", "email", "phoneNumber", "firstName", "lastName"],
						},
					},
					additionalProperties: false,
				},
			},
			additionalProperties: false,
		},
	},
	listUser: {
		input: {
			type: "object",
			properties: { skip: { type: "integer" }, limit: { type: "integer" } },
			additionalProperties: false,
			definitions: {},
			required: ["skip", "limit"],
		},
		response: {
			type: "object",
			properties: {
				data: {
					type: "object",
					properties: {
						users: {
							type: "array",
							items: {
								type: "object",
								properties: {
									id: { type: "integer" },
									email: { type: "string" },
									phoneNumber: { type: "string" },
									firstName: { type: "string" },
									lastName: { type: "string" },
								},
								additionalProperties: false,
								required: ["id", "email", "phoneNumber", "firstName", "lastName"],
							},
						},
						user_aggregate: {
							type: "object",
							properties: {
								total: {
									type: "object",
									properties: { _all: { type: "integer" } },
									additionalProperties: false,
									required: ["_all"],
								},
							},
							additionalProperties: false,
						},
					},
					additionalProperties: false,
					required: ["users", "user_aggregate"],
				},
			},
			additionalProperties: false,
		},
	},
	updateUser: {
		input: {
			type: "object",
			properties: { id: { type: "integer" }, data: { $ref: "#/definitions/db_userUpdateInput" } },
			additionalProperties: false,
			definitions: {
				db_userUpdateInput: {
					additionalProperties: false,
					type: "object",
					properties: {
						email: { $ref: "#/definitions/db_StringFieldUpdateOperationsInput" },
						phoneNumber: { $ref: "#/definitions/db_StringFieldUpdateOperationsInput" },
						firstName: { $ref: "#/definitions/db_StringFieldUpdateOperationsInput" },
						lastName: { $ref: "#/definitions/db_StringFieldUpdateOperationsInput" },
						avatar: { $ref: "#/definitions/db_StringFieldUpdateOperationsInput" },
						shop_user: { $ref: "#/definitions/db_shop_userUpdateManyWithoutUserInput" },
					},
				},
				db_StringFieldUpdateOperationsInput: {
					additionalProperties: false,
					type: ["object", "null"],
					properties: { set: { type: ["string", "null"] } },
				},
				db_shop_userUpdateManyWithoutUserInput: {
					additionalProperties: false,
					type: ["object", "null"],
					properties: {
						create: { $ref: "#/definitions/db_shop_userCreateWithoutUserInput" },
						connectOrCreate: { $ref: "#/definitions/db_shop_userCreateOrConnectWithoutUserInput" },
						upsert: { $ref: "#/definitions/db_shop_userUpsertWithWhereUniqueWithoutUserInput" },
						createMany: { $ref: "#/definitions/db_shop_userCreateManyUserInputEnvelope" },
						set: { $ref: "#/definitions/db_shop_userWhereUniqueInput" },
						disconnect: { $ref: "#/definitions/db_shop_userWhereUniqueInput" },
						delete: { $ref: "#/definitions/db_shop_userWhereUniqueInput" },
						connect: { $ref: "#/definitions/db_shop_userWhereUniqueInput" },
						update: { $ref: "#/definitions/db_shop_userUpdateWithWhereUniqueWithoutUserInput" },
						updateMany: { $ref: "#/definitions/db_shop_userUpdateManyWithWhereWithoutUserInput" },
						deleteMany: { $ref: "#/definitions/db_shop_userScalarWhereInput" },
					},
				},
				db_shop_userCreateWithoutUserInput: {
					additionalProperties: false,
					type: ["object", "null"],
					properties: {
						assigned_at: { type: ["string", "null"] },
						assigned_by: { type: "string" },
						shop_role: { type: ["string", "null"] },
						shop: { $ref: "#/definitions/db_shopCreateNestedOneWithoutShop_userInput" },
					},
				},
				db_shopCreateNestedOneWithoutShop_userInput: {
					additionalProperties: false,
					type: "object",
					properties: {
						create: { $ref: "#/definitions/db_shopCreateWithoutShop_userInput" },
						connectOrCreate: { $ref: "#/definitions/db_shopCreateOrConnectWithoutShop_userInput" },
						connect: { $ref: "#/definitions/db_shopWhereUniqueInput" },
					},
				},
				db_shopCreateWithoutShop_userInput: {
					additionalProperties: false,
					type: ["object", "null"],
					properties: {
						name: { type: "string" },
						description: { type: ["string", "null"] },
						deleted: { type: ["boolean", "null"] },
						created_at: { type: ["string", "null"] },
						updated_at: { type: ["string", "null"] },
						created_by: { type: "string" },
						updated_by: { type: "string" },
					},
				},
				db_shopCreateOrConnectWithoutShop_userInput: {
					additionalProperties: false,
					type: ["object", "null"],
					properties: {
						where: { $ref: "#/definitions/db_shopWhereUniqueInput" },
						create: { $ref: "#/definitions/db_shopCreateWithoutShop_userInput" },
					},
				},
				db_shopWhereUniqueInput: {
					additionalProperties: false,
					type: "object",
					properties: { id: { type: ["integer", "null"] } },
				},
				db_shop_userCreateOrConnectWithoutUserInput: {
					additionalProperties: false,
					type: ["object", "null"],
					properties: {
						where: { $ref: "#/definitions/db_shop_userWhereUniqueInput" },
						create: { $ref: "#/definitions/db_shop_userCreateWithoutUserInput" },
					},
				},
				db_shop_userWhereUniqueInput: {
					additionalProperties: false,
					type: "object",
					properties: { user_id_shop_id: { $ref: "#/definitions/db_shop_userUser_idShop_idCompoundUniqueInput" } },
				},
				db_shop_userUser_idShop_idCompoundUniqueInput: {
					additionalProperties: false,
					type: ["object", "null"],
					properties: { user_id: { type: "integer" }, shop_id: { type: "integer" } },
				},
				db_shop_userUpsertWithWhereUniqueWithoutUserInput: {
					additionalProperties: false,
					type: ["object", "null"],
					properties: {
						where: { $ref: "#/definitions/db_shop_userWhereUniqueInput" },
						update: { $ref: "#/definitions/db_shop_userUpdateWithoutUserInput" },
						create: { $ref: "#/definitions/db_shop_userCreateWithoutUserInput" },
					},
				},
				db_shop_userUpdateWithoutUserInput: {
					additionalProperties: false,
					type: "object",
					properties: {
						assigned_at: { $ref: "#/definitions/db_DateTimeFieldUpdateOperationsInput" },
						assigned_by: { $ref: "#/definitions/db_StringFieldUpdateOperationsInput" },
						shop_role: { $ref: "#/definitions/db_StringFieldUpdateOperationsInput" },
						shop: { $ref: "#/definitions/db_shopUpdateOneRequiredWithoutShop_userInput" },
					},
				},
				db_DateTimeFieldUpdateOperationsInput: {
					additionalProperties: false,
					type: ["object", "null"],
					properties: { set: { type: ["string", "null"] } },
				},
				db_shopUpdateOneRequiredWithoutShop_userInput: {
					additionalProperties: false,
					type: ["object", "null"],
					properties: {
						create: { $ref: "#/definitions/db_shopCreateWithoutShop_userInput" },
						connectOrCreate: { $ref: "#/definitions/db_shopCreateOrConnectWithoutShop_userInput" },
						upsert: { $ref: "#/definitions/db_shopUpsertWithoutShop_userInput" },
						connect: { $ref: "#/definitions/db_shopWhereUniqueInput" },
						update: { $ref: "#/definitions/db_shopUpdateWithoutShop_userInput" },
					},
				},
				db_shopUpsertWithoutShop_userInput: {
					additionalProperties: false,
					type: ["object", "null"],
					properties: {
						update: { $ref: "#/definitions/db_shopUpdateWithoutShop_userInput" },
						create: { $ref: "#/definitions/db_shopCreateWithoutShop_userInput" },
					},
				},
				db_shopUpdateWithoutShop_userInput: {
					additionalProperties: false,
					type: "object",
					properties: {
						name: { $ref: "#/definitions/db_StringFieldUpdateOperationsInput" },
						description: { $ref: "#/definitions/db_StringFieldUpdateOperationsInput" },
						deleted: { $ref: "#/definitions/db_BoolFieldUpdateOperationsInput" },
						created_at: { $ref: "#/definitions/db_DateTimeFieldUpdateOperationsInput" },
						updated_at: { $ref: "#/definitions/db_DateTimeFieldUpdateOperationsInput" },
						created_by: { $ref: "#/definitions/db_StringFieldUpdateOperationsInput" },
						updated_by: { $ref: "#/definitions/db_StringFieldUpdateOperationsInput" },
					},
				},
				db_BoolFieldUpdateOperationsInput: {
					additionalProperties: false,
					type: ["object", "null"],
					properties: { set: { type: ["boolean", "null"] } },
				},
				db_shop_userCreateManyUserInputEnvelope: {
					additionalProperties: false,
					type: ["object", "null"],
					properties: {
						data: { type: "array", items: { $ref: "#/definitions/db_shop_userCreateManyUserInput" } },
						skipDuplicates: { type: ["boolean", "null"] },
					},
				},
				db_shop_userCreateManyUserInput: {
					additionalProperties: false,
					type: ["object", "null"],
					properties: {
						shop_id: { type: "integer" },
						assigned_at: { type: ["string", "null"] },
						assigned_by: { type: "string" },
						shop_role: { type: ["string", "null"] },
					},
				},
				db_shop_userUpdateWithWhereUniqueWithoutUserInput: {
					additionalProperties: false,
					type: ["object", "null"],
					properties: {
						where: { $ref: "#/definitions/db_shop_userWhereUniqueInput" },
						data: { $ref: "#/definitions/db_shop_userUpdateWithoutUserInput" },
					},
				},
				db_shop_userUpdateManyWithWhereWithoutUserInput: {
					additionalProperties: false,
					type: ["object", "null"],
					properties: {
						where: { $ref: "#/definitions/db_shop_userScalarWhereInput" },
						data: { $ref: "#/definitions/db_shop_userUpdateManyMutationInput" },
					},
				},
				db_shop_userScalarWhereInput: {
					additionalProperties: false,
					type: "object",
					properties: {
						AND: { $ref: "#/definitions/db_shop_userScalarWhereInput" },
						OR: { type: ["array", "null"], items: { $ref: "#/definitions/db_shop_userScalarWhereInput" } },
						NOT: { $ref: "#/definitions/db_shop_userScalarWhereInput" },
						user_id: { $ref: "#/definitions/db_IntFilter" },
						shop_id: { $ref: "#/definitions/db_IntFilter" },
						assigned_at: { $ref: "#/definitions/db_DateTimeFilter" },
						assigned_by: { $ref: "#/definitions/db_StringFilter" },
						shop_role: { $ref: "#/definitions/db_StringFilter" },
					},
				},
				db_IntFilter: {
					additionalProperties: false,
					type: ["object", "null"],
					properties: {
						equals: { type: ["integer", "null"] },
						in: { type: ["array", "null"], items: { type: ["integer", "null"] } },
						notIn: { type: ["array", "null"], items: { type: ["integer", "null"] } },
						lt: { type: ["integer", "null"] },
						lte: { type: ["integer", "null"] },
						gt: { type: ["integer", "null"] },
						gte: { type: ["integer", "null"] },
						not: { $ref: "#/definitions/db_NestedIntFilter" },
					},
				},
				db_NestedIntFilter: {
					additionalProperties: false,
					type: ["object", "null"],
					properties: {
						equals: { type: ["integer", "null"] },
						in: { type: ["array", "null"], items: { type: ["integer", "null"] } },
						notIn: { type: ["array", "null"], items: { type: ["integer", "null"] } },
						lt: { type: ["integer", "null"] },
						lte: { type: ["integer", "null"] },
						gt: { type: ["integer", "null"] },
						gte: { type: ["integer", "null"] },
						not: { $ref: "#/definitions/db_NestedIntFilter" },
					},
				},
				db_DateTimeFilter: {
					additionalProperties: false,
					type: ["object", "null"],
					properties: {
						equals: { type: ["string", "null"] },
						in: { type: ["array", "null"], items: { type: ["string", "null"] } },
						notIn: { type: ["array", "null"], items: { type: ["string", "null"] } },
						lt: { type: ["string", "null"] },
						lte: { type: ["string", "null"] },
						gt: { type: ["string", "null"] },
						gte: { type: ["string", "null"] },
						not: { $ref: "#/definitions/db_NestedDateTimeFilter" },
					},
				},
				db_NestedDateTimeFilter: {
					additionalProperties: false,
					type: ["object", "null"],
					properties: {
						equals: { type: ["string", "null"] },
						in: { type: ["array", "null"], items: { type: ["string", "null"] } },
						notIn: { type: ["array", "null"], items: { type: ["string", "null"] } },
						lt: { type: ["string", "null"] },
						lte: { type: ["string", "null"] },
						gt: { type: ["string", "null"] },
						gte: { type: ["string", "null"] },
						not: { $ref: "#/definitions/db_NestedDateTimeFilter" },
					},
				},
				db_StringFilter: {
					additionalProperties: false,
					type: ["object", "null"],
					properties: {
						equals: { type: ["string", "null"] },
						in: { type: ["array", "null"], items: { type: ["string", "null"] } },
						notIn: { type: ["array", "null"], items: { type: ["string", "null"] } },
						lt: { type: ["string", "null"] },
						lte: { type: ["string", "null"] },
						gt: { type: ["string", "null"] },
						gte: { type: ["string", "null"] },
						contains: { type: ["string", "null"] },
						startsWith: { type: ["string", "null"] },
						endsWith: { type: ["string", "null"] },
						mode: { type: ["string", "null"], enum: ["default", "insensitive"] },
						not: { $ref: "#/definitions/db_NestedStringFilter" },
					},
				},
				db_NestedStringFilter: {
					additionalProperties: false,
					type: ["object", "null"],
					properties: {
						equals: { type: ["string", "null"] },
						in: { type: ["array", "null"], items: { type: ["string", "null"] } },
						notIn: { type: ["array", "null"], items: { type: ["string", "null"] } },
						lt: { type: ["string", "null"] },
						lte: { type: ["string", "null"] },
						gt: { type: ["string", "null"] },
						gte: { type: ["string", "null"] },
						contains: { type: ["string", "null"] },
						startsWith: { type: ["string", "null"] },
						endsWith: { type: ["string", "null"] },
						not: { $ref: "#/definitions/db_NestedStringFilter" },
					},
				},
				db_shop_userUpdateManyMutationInput: {
					additionalProperties: false,
					type: "object",
					properties: {
						assigned_at: { $ref: "#/definitions/db_DateTimeFieldUpdateOperationsInput" },
						assigned_by: { $ref: "#/definitions/db_StringFieldUpdateOperationsInput" },
						shop_role: { $ref: "#/definitions/db_StringFieldUpdateOperationsInput" },
					},
				},
			},
			required: ["id", "data"],
		},
		response: {
			type: "object",
			properties: {
				data: {
					type: "object",
					properties: {
						user: {
							type: "object",
							properties: { id: { type: "integer" } },
							additionalProperties: false,
							required: ["id"],
						},
					},
					additionalProperties: false,
				},
			},
			additionalProperties: false,
		},
	},
	checkUser: {
		input: {
			type: "object",
			properties: { email: { type: "string" } },
			additionalProperties: false,
			definitions: {},
			required: ["email"],
		},
		response: {
			type: "object",
			properties: {
				data: {
					type: "object",
					properties: {
						user: {
							type: "object",
							properties: { id: { type: "integer" } },
							additionalProperties: false,
							required: ["id"],
						},
					},
					additionalProperties: false,
				},
			},
			additionalProperties: false,
		},
	},
	getShopUser: {
		input: {
			type: "object",
			properties: { shopId: { type: "integer" }, userId: { type: "integer" }, role: { type: ["string", "null"] } },
			additionalProperties: false,
			definitions: {},
			required: ["shopId", "userId"],
		},
		response: {
			type: "object",
			properties: {
				data: {
					type: "object",
					properties: {
						value: {
							type: "object",
							properties: {
								shop: {
									type: "object",
									properties: { id: { type: "integer" } },
									additionalProperties: false,
									required: ["id"],
								},
							},
							additionalProperties: false,
							required: ["shop"],
						},
					},
					additionalProperties: false,
				},
			},
			additionalProperties: false,
		},
	},
	registerUser: {
		input: {
			type: "object",
			properties: { email: { type: "string" }, firstName: { type: "string" }, lastName: { type: "string" } },
			additionalProperties: false,
			definitions: {},
			required: ["email", "firstName", "lastName"],
		},
		response: {
			type: "object",
			properties: {
				data: {
					type: "object",
					properties: {
						user: {
							type: "object",
							properties: { id: { type: "integer" } },
							additionalProperties: false,
							required: ["id"],
						},
					},
					additionalProperties: false,
				},
			},
			additionalProperties: false,
		},
	},
	createShop: {
		input: {
			type: "object",
			properties: { name: { type: "string" }, description: { type: "string" } },
			additionalProperties: false,
			definitions: {},
			required: ["name", "description"],
		},
		response: {
			type: "object",
			properties: {
				data: {
					type: "object",
					properties: {
						shop: {
							type: "object",
							properties: { id: { type: "integer" }, name: { type: "string" }, description: { type: "string" } },
							additionalProperties: false,
							required: ["id", "name", "description"],
						},
					},
					additionalProperties: false,
				},
			},
			additionalProperties: false,
		},
	},
	deleteShop: {
		input: {
			type: "object",
			properties: { id: { type: "integer" } },
			additionalProperties: false,
			definitions: {},
			required: ["id"],
		},
		response: {
			type: "object",
			properties: {
				data: {
					type: "object",
					properties: {
						shop: {
							type: "object",
							properties: { id: { type: "integer" } },
							additionalProperties: false,
							required: ["id"],
						},
					},
					additionalProperties: false,
				},
			},
			additionalProperties: false,
		},
	},
	getShop: {
		input: {
			type: "object",
			properties: { id: { type: "integer" } },
			additionalProperties: false,
			definitions: {},
			required: ["id"],
		},
		response: {
			type: "object",
			properties: {
				data: {
					type: "object",
					properties: {
						shop: {
							type: "object",
							properties: {
								id: { type: "integer" },
								name: { type: "string" },
								description: { type: "string" },
								createdBy: { type: "string" },
								createdAt: { type: "string" },
								updatedBy: { type: "string" },
								updatedAt: { type: "string" },
							},
							additionalProperties: false,
							required: ["id", "name", "description", "createdBy", "createdAt", "updatedBy", "updatedAt"],
						},
					},
					additionalProperties: false,
				},
			},
			additionalProperties: false,
		},
	},
	listShop: {
		input: {
			type: "object",
			properties: { page: { type: "integer" }, size: { type: "integer" } },
			additionalProperties: false,
			definitions: {},
			required: ["page", "size"],
		},
		response: {
			type: "object",
			properties: {
				data: {
					type: "object",
					properties: {
						items: {
							type: "array",
							items: {
								type: "object",
								properties: { id: { type: "integer" }, name: { type: "string" }, description: { type: "string" } },
								additionalProperties: false,
								required: ["id", "name", "description"],
							},
						},
					},
					additionalProperties: false,
					required: ["items"],
				},
			},
			additionalProperties: false,
		},
	},
	updateShop: {
		input: {
			type: "object",
			properties: { id: { type: "integer" }, name: { type: "string" }, description: { type: "string" } },
			additionalProperties: false,
			definitions: {},
			required: ["id", "name", "description"],
		},
		response: {
			type: "object",
			properties: {
				data: {
					type: "object",
					properties: {
						shop: {
							type: "object",
							properties: { id: { type: "integer" } },
							additionalProperties: false,
							required: ["id"],
						},
					},
					additionalProperties: false,
				},
			},
			additionalProperties: false,
		},
	},
	me: {
		input: { type: "object", properties: {}, additionalProperties: false, definitions: {} },
		response: {
			type: "object",
			properties: {
				data: {
					type: "object",
					properties: {
						user: {
							type: "object",
							properties: {
								id: { type: "integer" },
								email: { type: "string" },
								phoneNumber: { type: "string" },
								firstName: { type: "string" },
								lastName: { type: "string" },
								avatar: { type: "string" },
							},
							additionalProperties: false,
							required: ["id", "email", "phoneNumber", "firstName", "lastName", "avatar"],
						},
					},
					additionalProperties: false,
				},
			},
			additionalProperties: false,
		},
	},
	updateProfile: {
		input: {
			type: "object",
			properties: {
				firstName: { type: ["string", "null"] },
				lastName: { type: ["string", "null"] },
				phoneNumber: { type: ["string", "null"] },
				avatar: { type: ["string", "null"] },
			},
			additionalProperties: false,
			definitions: {},
		},
		response: {
			type: "object",
			properties: {
				data: {
					type: "object",
					properties: {
						user: {
							type: "object",
							properties: {
								id: { type: "integer" },
								firstName: { type: "string" },
								lastName: { type: "string" },
								phoneNumber: { type: "string" },
								avatar: { type: "string" },
							},
							additionalProperties: false,
							required: ["id", "firstName", "lastName", "phoneNumber", "avatar"],
						},
					},
					additionalProperties: false,
				},
			},
			additionalProperties: false,
		},
	},
};
export default jsonSchema;