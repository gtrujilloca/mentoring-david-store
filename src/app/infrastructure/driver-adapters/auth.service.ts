import users from "@/core/data/users.json";
import { UserAPI } from "@/core/interfaces/user.interface";
import { AuthGateway } from "@/domain/gateways/auth-gateway";
import { Injectable } from "@angular/core";
import { writeFile } from "fs";

@Injectable()

export class AuthService extends AuthGateway {
	signIn(email: string, password: string): Promise<void> {
		const user = users.users.find((user: UserAPI) => {
			if (user.email === email && user.password === password) {
				return user;
			}
			return null;
		})
		return user ? Promise.resolve() : Promise.reject();
	}

	signUp(email: string, password: string, nickname: string): Promise<void> {
		const user = users.users.find((user: UserAPI) => {
			if (user.email === email) {
				return user;
			}
			return null;
		})
		if (user) {
			return Promise.reject();
		}
		const newUser = {
			id: crypto.randomUUID(),
			email,
			password,
			nickname,
		}
		users.users.push(newUser);

		return Promise.resolve(
			writeFile("./src/app/core/data/users.json", JSON.stringify(users), (err) => {
				if (err) {
					Promise.reject();
				}
			})
		);
	}
}