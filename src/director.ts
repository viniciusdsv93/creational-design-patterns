import IHttpBuilder from "./builder";

export default class Director {
	static buildGetHttp(builder: IHttpBuilder): void {
		builder.setUrl("https://www.example.com");
		builder.setBody({});
		builder.setHeader({ Authorization: "Bearer token" });
		builder.setMethod("GET");
	}
	static buildPostHttp(builder: IHttpBuilder): void {
		builder.setUrl("https://www.another-example.com");
		builder.setBody({ id: "10", name: "John" });
		builder.setHeader({ Authorization: "Bearer token" });
		builder.setHeader({ "Content-Type": "application/json" });
		builder.setMethod("POST");
	}
}
